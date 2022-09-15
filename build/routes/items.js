"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const items_1 = require("../controllers/items");
const router = express_1.default.Router();
/**
 * GET DATA
 * @url /api/items
 */
router.get("/", items_1.getData);
exports.default = router;
