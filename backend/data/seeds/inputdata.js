const inputJSON = require("../cardData.json");

exports.seed = async function (knex, Promise) {
	await knex("pokemon").del();
	await knex("pokemon").insert(inputJSON);
};
