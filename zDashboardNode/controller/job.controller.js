const job_service = require('../services/job.service')


module.exports.retrieveDasboardCount = async (req,res) => {
    try {
        let result = await job_service.retrieveDasboardCount()
        res.status(200).send(result)
    }
    catch(err) {
        res.status(500).send(err)
    }
}

module.exports.retrieveJobList = async (req,res) => {
    try {
        console.log(req.body)
        let result = await job_service.retrieveJobList(req.body.job_status)
        res.status(200).send(result)
    }
    catch(err) {
        res.status(500).send(err)
    }
}

module.exports.jobStatusList = async (req,res) => {
    try {
        let result = await job_service.jobStatusList()
        res.status(200).send(result)
    }
    catch(err) {
        res.status(500).send(err)
    }
}

module.exports.jobDetail = async (req,res) => {
    try {
        if(!req.body.job_id)
            res.status(500).send({
                err: true,
                msg: "job_id params not found !"
            })
        let result = await job_service.jobDetail(req.body.job_id)
        res.status(200).send(result)
    }
    catch(err) {
        res.status(500).send(err)
    }
}