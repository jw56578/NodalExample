'use strict';

const Nodal = require('nodal');
const MyThing = Nodal.require('app/models/my_thing.js');

class V1MyThingsController extends Nodal.Controller {

  index() {

    MyThing.query()
      .where(this.params.query)
      .end((err, models) => {

        this.respond(err || models);

      });

  }

  show() {

    MyThing.find(this.params.route.id, (err, model) => {

      this.respond(err || model);

    });

  }

  create() {

    MyThing.create(this.params.body, (err, model) => {

      this.respond(err || model);

    });

  }

  update() {

    MyThing.update(this.params.route.id, this.params.body, (err, model) => {

      this.respond(err || model);

    });

  }

  destroy() {

    MyThing.destroy(this.params.route.id, (err, model) => {

      this.respond(err || model);

    });

  }

}

module.exports = V1MyThingsController;
