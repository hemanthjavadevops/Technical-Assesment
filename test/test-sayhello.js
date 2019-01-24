const assert = require('assert');
const http = require('http');
const server = require('../app');

describe('server', function () {
    before(function () {
        server.listen(9009);
    });

    after(function () {
        server.close();
    });
});

describe('/sayHelloTest', function () {

    it('should show welcome message', function (done) {
        http.get('http://localhost:9009/sayHello', function (response) {
            var data = '';

            res.on('data', function (chunk) {
                data += chunk;
            });

            res.on('end', function () {
                assert.deepStrictEqual('Hello World.This is a simple Nodejs application', data);
                done();
            });
        });
    });
});