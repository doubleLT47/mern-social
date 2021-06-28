const postRouter= require('./post.route')
const usersRouter = require('./users.route')
const authRouter = require('./auth.route')
const conversationRouter = require('./conversation.route')
const messageRouter = require('./message.route')

const route = (app) => {
    app.use('/api/posts', postRouter);
    app.use('/api/users', usersRouter);
    app.use('/api/auth', authRouter);
    app.use('/api/conversation', conversationRouter);
    app.use('/api/message', messageRouter);
}

module.exports = route;