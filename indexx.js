import express from 'express';
import Datastore from 'nedb';
import fetch from 'node-fetch';
const app = express();
app.listen(3000, () => console.log('listening 3000'));
app.use(express.static('public'));
app.use(express.json({
    limit: '1mb'
}));

const database = new Datastore('data.db');
database.loadDatabase();

app.get('/api', function (request, response) {
    database.find({}, (err, data) => {
        if (err) {
            response.end();
            return;
        }
        response.json(data);
    });
});

app.post('/api', function (request, response) {
    console.log('i got something');
    const data = request.body;
    const timestamp = Date.now();
    data.timestamp = timestamp;
    database.insert(data);
    response.json(data);
});

app.get('/weather/:latlon', async (request, response) => {
    const latlon = request.params.latlon.split(',');
    const longitude = latlon[1];
    const latitude = latlon[0];
    const api_url = `https://api.openaq.org/v2/sources?coordinates=${longitude},${latitude}`;
    const reply = await fetch(api_url);
    const json = await reply.json();
    // console.log(json);
    response.json(json);
});
