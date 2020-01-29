const Arena = require('bull-arena');
const express = require('express');

export default Arena({
    queues: [
        {
            "hostId": "calculate-ride",
            "name": "calculate-ride",
            "redis": {
                "port": 6379,
                "host": "0.0.0.0"
            }
        }
    ]
});