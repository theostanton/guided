"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Arena = require('bull-arena');
var express = require('express');
exports.default = Arena({
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
