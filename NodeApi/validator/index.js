exports.createPostValidator = (req, res, next) => {
    // Title
    req.check('title', 'Write a title').notEmpty()
    req.check('title', 'Title must be between 4 to 150 characters long').isLength({
        min: 4,
        max: 150
    })
    // Body
    req.check('body', 'Write a title').notEmpty()
    req.check('body', 'Body must be between 4 to 2000 characters long').isLength({
        min: 4,
        max: 2000
    })
    // Check for errors
    const errors = req.validateErrors()
    if(errors) {
        const firstError = errors.map(error => error.msg)[0]
        return res.status(400).json({error: firstError})
    }
    next()
}