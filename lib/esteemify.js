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
var name = process.argv.slice(2);

console.log(colors.rainbow(name + ", you're a nice person."));  
