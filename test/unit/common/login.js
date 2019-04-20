const { expect } = require('chai');
const loginMW = require("../../../src/server/middlewares/common/login");

describe("login MW", function () {
  it("should call next if body.username is undefined", function (done) {
    loginMW({})({ session: {}, body: { password: "admin" } }, {}, () => done());
  });
  it("should call next if body.password is undefined", function (done) {
    loginMW({})({ session: {}, body: { username: "admin" } }, {}, () => done());
  });
  it("should set session and redirect to '/' if username and password is correct", function (done) {
    let req = { session: {}, body: { username: "admin", password: "admin" } };
    loginMW({})(req, {
      redirect: (url) => {
        expect(req.session.userId).to.not.be.undefined;
        expect(url).be.eql("/");
        done();
      }
    }, () => { });
  });
  it("should call next if username and password is incorrect", function (done) {
    loginMW({})({ body: { username: "ad", password: "min" } }, {}, () => done());
  });
});