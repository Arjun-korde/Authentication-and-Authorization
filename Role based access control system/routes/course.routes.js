const express = require('express');
const router = express.Router();
const { authenticate } = require('../middlewares/auth.middleware');
const { allowRoles } = require('../middlewares/rbac.middleware');
const { ROLES } = require('../data/users');

const {
    getCourses,
    createCourse,
    enroll
} = require('../controllers/course.controller');

router.get('/', authenticate, allowRoles(ROLES.ADMIN, ROLES.STUDENT, ROLES.TEACHER), getCourses);
router.post('/', authenticate, allowRoles(ROLES.TEACHER), createCourse);
router.post(
    '/:id/enroll',
    authenticate,
    allowRoles(ROLES.TEACHER, ROLES.STUDENT),
    enroll
);

module.exports = router;