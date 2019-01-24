const express = require('express')
const application = express()
const port = 9009

application.get('/sayHello', (request, response) => response.send('Hello World.This is a simple Nodejs application'))

application.get('/appInfo', (request, response) => response.send('"Technical-Assesment": [\n' +
    '  {\n' +
    '    "version": "1.0",\n' +
    '    "description" : "Technical Assesment for pre-interview",\n' +
    '    "lastcommit": "NA"' +
    '} ]'))

application.listen(port, () => console.log(`Sample Node JS app listening on port ${port}!`))


