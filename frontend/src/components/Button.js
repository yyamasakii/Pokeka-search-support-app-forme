import React from "react";
import "../styles/button.css";
// import _ from "lodash";
const URL =
	process.env.NODE_ENV === "production"
		? `https://pssa-u9wj.onrender.com/api/poke`
		: "http://localhost:8080/api/poke";

export default function Button(props) {
	const getAllPoke = async () => {
		let result = [];
		console.log("ボタン押されたよ");
		const pokeArray = await fetch(URL); //.then((e) =>
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
