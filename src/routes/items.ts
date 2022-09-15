import express from "express";
import { getData, getDataById } from "../controllers/items";

const router = express.Router();

/**
 * GET DATA
 * @url /api/items
 */
router.get("/", getData);
router.get("/:id", getDataById);

export default router;
