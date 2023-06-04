const inputJSON = require("../data/cardData.json");

exports.seed = function (knex, Promise) {
	return knex("pokemon")
		.del()
		.then(function () {
			return knex("pokemon").insert(inputJSON);
		});
};
