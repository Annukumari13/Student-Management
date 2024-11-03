// routes/eventRoutes.js
const express = require('express');
const { getEvents } = require('../controllers/eventController');
const authMiddleware = require('../middleware/authMiddleware');
const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Events
 *   description: API for managing college events
 */

/**
 * @swagger
 * /api/events:
 *   get:
 *     summary: Get list of upcoming sports events
 *     tags: [Events]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: List of upcoming events
 *       401:
 *         description: Unauthorized access
 */
router.get('/', authMiddleware, getEvents);

module.exports = router;
