'use strict';

const Nodal = require('nodal');

class CreateMyThings extends Nodal.Migration {

  constructor(db) {
    super(db);
    this.id = 2016091403440914;
  }

  up() {

    return [
      this.createTable("my_things", [{"name":"thing_attribute","type":"int"},{"name":"another_attribute","type":"string"}])
    ];

  }

  down() {

    return [
      this.dropTable("my_things")
    ];

  }

}

module.exports = CreateMyThings;
