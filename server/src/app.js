const express = require('express')
const TimelineService = require('./services/timeline-service.js');
const app = express()
const port = 3000

app.get('/', (req, res) => res.send('Hello World!'))

app.get('/timeline', (req, res) => {
    TimelineService.getTimeline()
        .then(data => res.json(JSON.parse(data)))
        .catch(err => console.error(err))
})

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))