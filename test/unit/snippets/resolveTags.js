const { expect } = require('chai');
const resolveTagsMW = require("../../../src/server/middlewares/snippets/resolveTags");

let mockTagDb = {
  "Existing tag": { _id: { val: 0, equals: (num) => num == this.val }, name: "Existing tag" },
  "Existing tag2": { _id: { val: 1, equals: (num) => num == this.val }, name: "Existing tag2" }
}

let counter = 0;

class TagMock {
  constructor() {
    this._id = { val: counter++, equals: (num) => num == this.val };
  }

  save() {
    mockTagDb[this.name] = { _id: this._id, name: this.name };
    return Promise.resolve(this);
  }
}

describe("resolveTags MW", function () {
  it("should call next if body.tags is undefined", function (done) {
    resolveTagsMW({})({ body: {} }, {}, (err) => {
      expect(err).be.undefined;
      done()
    });
  });
  let objectRep = {
    Tag: TagMock
  }
  objectRep.Tag.findOne = (obj) => Promise.resolve(mockTagDb[obj["name"]]);

  let resMock = { locals: {} };
  it("should add existing tags to the resolvedTags and call next", function (done) {
    resolveTagsMW(objectRep)({ body: { tags: ["Existing tag", "Existing tag2"] } }, resMock, (err) => {
      expect(err).be.undefined;
      expect(resMock.locals.resolvedTags.length).be.eql(2);
      expect(resMock.locals.resolvedTags[0].val).be.eql(0);
      expect(resMock.locals.resolvedTags[1].val).be.eql(1);
      done();
    });
  });
  counter = 2;
  it("should add new tags to the resolvedTags, save them and call next", function (done) {
    resolveTagsMW(objectRep)({ body: { tags: ["Existing tag", "New tag"] } }, resMock, (err) => {
      expect(err).be.undefined;
      expect(resMock.locals.resolvedTags.length).be.eql(2);
      expect(resMock.locals.resolvedTags[0].val).be.eql(0);
      expect(resMock.locals.resolvedTags[1].val).be.eql(2);
      expect(mockTagDb["New tag"]).to.not.be.undefined;
      done();
    });
  });
});