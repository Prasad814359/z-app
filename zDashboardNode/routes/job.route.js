const express = require('express');
const router = express.Router();

const job_controller = require('../controller/job.controller')

router.get(
    '/retrieveDashboardCount',
    job_controller.retrieveDasboardCount
)

router.post(
    '/retrieveJobList',
    job_controller.retrieveJobList
)

router.get(
    '/jobStatusList',
    job_controller.jobStatusList
)

router.post(
    '/jobDetail',
    job_controller.jobDetail
)


module.exports = router