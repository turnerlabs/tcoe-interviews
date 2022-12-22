'use strict'
exports.handler = function (event, context, callback) {
  var response = {
    statusCode: 200,
    headers: {
      'Content-Type': 'text/html; charset=utf-8',
    },
    body: '<h2>Hello world...Testing..1..2..3.. seems like everything is ok!</h2>',
  }
  callback(null, response)
}