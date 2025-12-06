const express = require("express");
const router = express.Router();
const { authenticate } = require("../middlewares/auth.middleware");
const { allowRoles } = require("../middlewares/rbac.middleware");
const { ROLES } = require("../data/users");
const { getDashboard } = require("../controllers/dashboard.controller");

// dashboard -> admin only
router.get("/", authenticate, allowRoles(ROLES.ADMIN), getDashboard);

module.exports = router;
