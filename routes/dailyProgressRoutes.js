// routes/dailyProgressRoutes.js
const express = require('express');
const { submitAssignment, getGrades } = require('../controllers/dailyProgressController');
const authMiddleware = require('../middleware/authMiddleware');
const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Daily Progress
 *   description: APIs for daily assignment submission and grade calculation
 */

/**
 * @swagger
 * /api/daily-progress/submit:
 *   post:
 *     summary: Submit daily assignment
 *     tags: [Daily Progress]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Assignment submitted successfully
 *       400:
 *         description: Assignment for today has already been submitted
 *       500:
 *         description: Failed to submit assignment
 */
router.post('/submit', authMiddleware, submitAssignment);

/**
 * @swagger
 * /api/daily-progress/grades:
 *   get:
 *     summary: Get grades and completion percentage
 *     tags: [Daily Progress]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Grades and percentage
 *       500:
 *         description: Failed to calculate grades
 */
router.get('/grades', authMiddleware, getGrades);

module.exports = router;
