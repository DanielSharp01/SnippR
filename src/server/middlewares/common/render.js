// Uses EJS to render and respond with an HTML

module.exports = (objectRepository, templateName) => {
    return (req, res, next) => {
        res.render(templateName, res.locals);
    }
}