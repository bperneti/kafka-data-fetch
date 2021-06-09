var express = require("express");
var router = express.Router();


router.post("/", function(req, res) {
    var kafka = require('kafka-node'),
    Producer = kafka.Producer,
    client = new kafka.KafkaClient(),
    producer = new Producer(client),
    payloads = [
        { topic: req.body.topic, messages: req.body.message, partition: 0 }
    ];
    console.log('request body: ' + JSON.stringify(req.body));
    producer.on('ready', function () {
        console.log(payloads);
        producer.send(payloads, function (err, data) {
            console.log(data);
        });
    });
    res.send('done');
});

module.exports = router;