"use strict";
exports.__esModule = true;
var express_1 = require("express");
var _a = require("../middlewares/CheckMiddleware"), checkAuthorization = _a.checkAuthorization, checkPermissions = _a.checkPermissions, checkUserId = _a.checkUserId, checkBodyData = _a.checkBodyData, showMiddlewareData = _a.showMiddlewareData;
var UserPasswordCodeService_1 = require("../services/UserPasswordCodeService");
var UserPasswordCodeValidator_1 = require("../validators/UserPasswordCodeValidator");
var router = express_1["default"].Router();
router.post("/", checkAuthorization([]), checkPermissions([]), checkBodyData(UserPasswordCodeValidator_1.createUserPasswordCodeSchema), UserPasswordCodeService_1.createUserPasswordCode);
router.get("/", checkAuthorization(["CLIENT_ACCESS_TOKEN"]), checkPermissions(["FIND_ANY_USER_PASSWORD_CODE", "FIND_OWN_USER_PASSWORD_CODE"]), checkBodyData(UserPasswordCodeValidator_1.findUserPasswordCodesSchema), UserPasswordCodeService_1.findUserPasswordCodes);
router.get("/:id", checkAuthorization(["CLIENT_ACCESS_TOKEN"]), checkPermissions(["FIND_ANY_USER_PASSWORD_CODE", "FIND_OWN_USER_PASSWORD_CODE"]), checkBodyData(UserPasswordCodeValidator_1.findUserPasswordCodeSchema), UserPasswordCodeService_1.findUserPasswordCode);
router.patch("/:id", checkAuthorization(["CLIENT_ACCESS_TOKEN"]), checkPermissions(["UPDATE_ANY_USER_PASSWORD_CODE", "UPDATE_OWN_USER_PASSWORD_CODE"]), checkBodyData(UserPasswordCodeValidator_1.updateUserPasswordCodeSchema), UserPasswordCodeService_1.updateUserPasswordCode);
router["delete"]("/:id", checkAuthorization(["CLIENT_ACCESS_TOKEN"]), checkPermissions(["DELETE_ANY_USER_PASSWORD_CODE", "DELETE_OWN_USER_PASSWORD_CODE"]), checkBodyData(UserPasswordCodeValidator_1.deleteUserPasswordCodeSchema), UserPasswordCodeService_1.deleteUserPasswordCode);
module.exports = router;
