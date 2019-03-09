module.exports = (objectRepository, templateName) => {
    return (req, res, next) => {
        res.render(templateName, res.locals);
    }
}