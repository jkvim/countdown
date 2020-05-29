#!/usr/bin/env node

const countdown = require("../index")

const argv = process.argv.slice(2)

countdown(argv[0])
    