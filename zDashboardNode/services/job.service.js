const fs = require('fs')

module.exports.retrieveDasboardCount = async () => {
    try {

        let data = await readJobFile()

        let result = formatDashboardData(data)

        // console.log(err)

        return Promise.resolve({
            err: false,
            data: result
        })

    }
    catch(err) {
        console.log(err)
        return Promise.reject(err)
    }
}

function readJobFile () {
    return new Promise((resolve,reject) => {
        fs.readFile('./data.json',(err,data) => {
            if(err)
                reject(err)

            let result = JSON.parse(data)

            resolve(result['data'])
        })
    })
}

module.exports.retrieveJobList = async (job_status) => {
    try {

        // console.log(job_status)
        let job_list = await readJobFile()

        if(job_status) {
            job_list = job_list.filter((l) => {
                return l['status'] == job_status
            })
        }

        return Promise.resolve({
            err: false,
            data: job_list
        })
    }
    catch(err) {
        console.log(err)
        return Promise.reject(err)
    }
}

module.exports.jobStatusList = async () => {
    try {
        let job_list = await readJobFile()

        let status_list = []

        job_list.forEach((l) => {
            if(status_list.indexOf(l['status']) < 0)
                status_list.push(l['status'])
        })

        return Promise.resolve({
            err: false,
            data: status_list
        })
    }
    catch(err) {
        console.log(err)
    }
}

module.exports.jobDetail = async (job_id) => {
    try {
        let job_list = await readJobFile()

        let result = job_list.find((l) => {
            return l['job_id'] == job_id
        })

        return Promise.resolve({
            err: false,
            data: result
        })
    }
    catch(err) {
        console.log(err)
    }
}

 

function formatDashboardData(data) {
    let status = {}
    
    for(let item of data) {
        status[item['status']] = status[item['status']]  ?
        status[item['status']]+=1 : 1
    }
    
    return status
}