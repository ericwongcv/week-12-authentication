// backend/routes/api/index.js

// import express and apply router method
const router = require('express').Router();

// import sessionRouter and usersRouter
const sessionRouter = require('./session.js');
const usersRouter = require('./users.js')

// use sessionRouter and usersRouter
router.use('/session', sessionRouter);
router.use('/users', usersRouter);

// test setup
router.post('/test', (req, res) => {
    res.json({ requestBody: req.body });
});

// // test auth middleware. Check for token cookie.
// // GET /api/set-token-cookie
// const { setTokenCookie } = require('../../utils/auth.js');
// const { User } = require('../../db/models');
// router.get('/set-token-cookie', async (_req, res) => {
//   const user = await User.findOne({
//       where: {
//         username: 'Demo-lition'
//       }
//     });
//   setTokenCookie(res, user);
//   return res.json({ user });
// });

// // test middleware to restore user
// // GET /api/restore-user
// const { restoreUser } = require('../../utils/auth.js');
// router.get(
//   '/restore-user',
//   restoreUser,
//   (req, res) => {
//     return res.json(req.user);
//   }
// );

// // check unauthorized error middleware when token cookie is removed
// // GET /api/require-auth
// const { requireAuth } = require('../../utils/auth.js');
// router.get(
//   '/require-auth',
//   requireAuth,
//   (req, res) => {
//     return res.json(req.user);
//   }
// );

module.exports = router;
