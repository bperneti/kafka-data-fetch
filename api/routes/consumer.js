var express = require("express");
var router = express.Router();

function sleep(ms) {
    return new Promise((resolve) => {
      setTimeout(resolve, ms);
    });
  }

router.get("/", async function(req, res, next) {
    var kafka = require('kafka-node'),
    Consumer = kafka.Consumer,
    client = new kafka.KafkaClient(),
    consumer = new Consumer(
        client,
        [
            { topic: 'quickstart-events', partition: 0 }, { topic: 'topic-2', partition: 0 }
        ],
        {
            autoCommit: false
        }
    );
    /*offset = new kafka.Offset(client);
    offset.fetch([
        { topic: 'quickstart-events', partition: 0, time: Date.now(), maxNum: 1 }
    ], function (err, data) {
        console.log(data);
    });*/
    var messages = [];
    consumer.on('message', function (message) {
        messages.push({
            topic: message.topic,
            value: message.value,
            partition: message.partition,
            offset: message.offset,
            highWaterOffset: message.highWaterOffset
        });
        console.log(messages);
    });
    console.log('before sleep');
    await sleep(500);
    console.log('after sleep');
    console.log('sending');
    res.send(messages);
});

module.exports = router;
