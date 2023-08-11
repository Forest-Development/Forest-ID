"use strict";
exports.__esModule = true;
var express_1 = require("express");
var _a = require("../middlewares/CheckMiddleware"), checkAuthorization = _a.checkAuthorization, checkPermissions = _a.checkPermissions, checkUserId = _a.checkUserId, checkBodyData = _a.checkBodyData, showMiddlewareData = _a.showMiddlewareData;
var ScopeService_1 = require("../services/ScopeService");
var ScopeValidator_1 = require("../validators/ScopeValidator");
var router = express_1["default"].Router();
router.post("/", checkAuthorization(["CLIENT_ACCESS_TOKEN"]), checkPermissions(["CREATE_ANY_SCOPE"]), checkBodyData(ScopeValidator_1.createScopeSchema), ScopeService_1.createScope);
router.get("/", checkAuthorization(["CLIENT_ACCESS_TOKEN"]), checkPermissions(["FIND_ANY_SCOPE"]), checkBodyData(ScopeValidator_1.findScopesSchema), ScopeService_1.findScopes);
router.get("/:id", checkAuthorization(["CLIENT_ACCESS_TOKEN"]), checkPermissions(["FIND_ANY_SCOPE"]), checkBodyData(ScopeValidator_1.findScopeSchema), ScopeService_1.findScope);
router.patch("/:id", checkAuthorization(["CLIENT_ACCESS_TOKEN"]), checkPermissions(["UPDATE_ANY_SCOPE"]), checkBodyData(ScopeValidator_1.updateScopeSchema), ScopeService_1.updateScope);
router["delete"]("/:id", checkAuthorization(["CLIENT_ACCESS_TOKEN"]), checkPermissions(["DELETE_ANY_SCOPE"]), checkBodyData(ScopeValidator_1.deleteScopeSchema), ScopeService_1.deleteScope);
module.exports = router;
