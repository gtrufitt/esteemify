#! /usr/bin/env node

/*
 * esteemify
 * https://github.com/gtrufitt/esteemify
 *
 * Copyright (c) 2015 gtrufitt
 * Licensed under the MIT license.
 */

'use strict';

var colors = require('colors');
var request = require('request')
var name = process.argv.slice(2);

request('http://pleaseinsult.me/api?severity=extreme', function(err, res, body){
  console.log(colors.rainbow(name + ', ' + JSON.parse(body).insult));  
});

