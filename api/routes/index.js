const postRouter= require('./post.route')
const usersRouter = require('./users.route')
const authRouter = require('./auth.route')

const route = (app) => {
    app.use('/', postRouter);
    app.use('/api/users', usersRouter);
    app.use('/api/auth', authRouter);
}

module.exports = route;