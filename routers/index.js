const router = require('koa-router')();
const { apiPrefix } = require('../config/index');

const blog = require('./blog');
const category = require('./category');
const login = require('./login');

router.prefix(apiPrefix);

router.use('/blogs', blog.routes(), blog.allowedMethods());
router.use('/categories', category.routes(), category.allowedMethods());
router.use('/login',login.routes(), category.allowedMethods())

module.exports = router;