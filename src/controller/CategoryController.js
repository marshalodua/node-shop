class CategoryController {

    async get(req, res, next) {
        res.json({ hello: 'ok' })
    }

}

module.exports = new CategoryController();