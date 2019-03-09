const mainRedirectMW = require("../middlewares/common/mainRedirect");
const redirectAuthedMW = require("../middlewares/common/redirectAuthed");
const loginMW = require("../middlewares/common/login");
const logoutMW = require("../middlewares/common/logout");
const renderMW = require("../middlewares/common/render");

module.exports = (app) => {
    let objectRepository = {}
    
    app.use('/login', 
        redirectAuthedMW(objectRepository),
        loginMW(objectRepository),
        renderMW(objectRepository, "login")
    );
    
    app.get('/logout', 
        logoutMW(objectRepository),
        (req, res, next) => res.redirect("/")
    );

    app.get('/', 
        mainRedirectMW(objectRepository)
    );
}