// routes/dashboardRoutes.js
const express = require('express');
const { getDashboard, getLatestUpdates, getClubs, getSportsEvents } = require('../controllers/dashboardController');
const authMiddleware = require('../middleware/authMiddleware');
const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Dashboard
 *   description: Dashboard-related APIs
 */

/**
 * @swagger
 * /api/dashboard:
 *   get:
 *     summary: Get student dashboard details
 *     tags: [Dashboard]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Dashboard details
 *       401:
 *         description: Unauthorized access
 */
router.get('/', authMiddleware, getDashboard);

/**
 * @swagger
 * /api/dashboard/latest-updates:
 *   get:
 *     summary: Get latest updates
 *     tags: [Dashboard]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: List of latest updates
 *       401:
 *         description: Unauthorized access
 */
router.get('/latest-updates', authMiddleware, getLatestUpdates);

/**
 * @swagger
 * /api/dashboard/clubs:
 *   get:
 *     summary: Get list of clubs
 *     tags: [Dashboard]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: List of clubs
 *       401:
 *         description: Unauthorized access
 */
router.get('/clubs', authMiddleware, getClubs);

/**
 * @swagger
 * /api/dashboard/sports-events:
 *   get:
 *     summary: Get list of sports events
 *     tags: [Dashboard]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: List of sports events
 *       401:
 *         description: Unauthorized access
 */
router.get('/sports-events', authMiddleware, getSportsEvents);

module.exports = router;
