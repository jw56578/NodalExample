'use strict';

const Nodal = require('nodal');

class MyThing extends Nodal.Model {}

MyThing.setDatabase(Nodal.require('db/main.js'));
MyThing.setSchema(Nodal.my.Schema.models.MyThing);

module.exports = MyThing;
