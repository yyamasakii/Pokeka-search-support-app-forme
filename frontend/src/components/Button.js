import React from "react";
import "../styles/button.css";
// import _ from "lodash";
const URL =
	process.env.DATABASE_URL !== undefined
		? `https://pssa-u9wj.onrender.com/api/poke`
		: "http://localhost:8080/api/poke";

export default function Button(props) {
	const getAllPoke = async () => {
		let result = [];
		console.log("ボタン押されたよ");
		console.log("ENV : ", process.env.DATABASE_URL);
		console.log("URL : ", URL);
		const pokeArray = await fetch(URL, { method: "GET" }); //.then((e) =>
		result = await pokeArray.json();
		props.resultNumSet(result);
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
