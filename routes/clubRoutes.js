// routes/clubRoutes.js
const express = require('express');
const { getClubs, getClubDetails } = require('../controllers/clubController');
const authMiddleware = require('../middleware/authMiddleware');
const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Clubs
 *   description: API for managing college clubs
 */

/**
 * @swagger
 * /api/clubs:
 *   get:
 *     summary: Get list of all clubs
 *     tags: [Clubs]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: List of clubs
 *       401:
 *         description: Unauthorized access
 */
router.get('/', authMiddleware, getClubs);

/**
 * @swagger
 * /api/clubs/{clubId}:
 *   get:
 *     summary: Get details of a specific club
 *     tags: [Clubs]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: clubId
 *         schema:
 *           type: string
 *         required: true
 *         description: ID of the club
 *     responses:
 *       200:
 *         description: Club details including contact information
 *       404:
 *         description: Club not found
 *       401:
 *         description: Unauthorized access
 */
router.get('/:clubId', authMiddleware, getClubDetails);

module.exports = router;
