import express from "express";
import { getData } from "../controllers/items";

const router = express.Router();

/**
 * GET DATA
 * @url /api/items
 */
router.get("/", getData);

export default router;
