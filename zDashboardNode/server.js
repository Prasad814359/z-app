const express = require('express');
const app = express();
app.use(express.urlencoded({ limit: '500mb', extended: true }));
app.use(express.json({ limit: '500mb', extended: true }));

const port = process.env.PORT || 3001


// For CORS
app.use((req, res, next) => {
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Methods', '*');
	res.header('Access-Control-Allow-Headers', '*');
	res.header('Access-Control-Allow-Credentials', 'true');
	next();
});

//routes
const job_route = require('./routes/job.route')

app.use('/api/zDashboard/',job_route)

app.listen(port, async()=> {
    console.log(`zDashboard Node is running ${port}`)
})
