import React from "react";
import "../styles/button.css";
// import _ from "lodash";
// require("dotenv").config({
// 	path: "../.env",
// });
console.log("ENV : ", process.env);
const URL =
	// process.env.NODE_ENV == "development"
	// 	?
	// 	"http://localhost:8080/api/poke"
	// 	:
	"https://pssa-api.onrender.com";
export default function Button(props) {
	const getAllPoke = async () => {
		// let result = [];
		// console.log("ボタン押されたよ");
		// // console.log("URL : ", URL);
		// const pokeArray = await fetch("/api/poke"); //.then((e) =>
		// result = await pokeArray.json();
		// props.resultNumSet(result);
		// console.log(result);
		fetch("/api")
			.then((res) => res.json())
			.then((data) => console.log(data));
	};

	return (
		<>
			<div>
				<button className="search" id="search" onClick={getAllPoke}>
					検索
				</button>
				<button className="reset" id="reset">
					リセット
				</button>
			</div>
		</>
	);
}
