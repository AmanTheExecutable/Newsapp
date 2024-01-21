import React from "react";
import "../App.css";
import imgNotFound from "./NA.jpg";

function Card(props) {
	let { urlToImage, title, description, url } = props;
	if (urlToImage === null) {
		urlToImage = imgNotFound;
	}

	let flag = true;
	if (url === "https://removed.com") {
		flag = false;
	}

	return (
		<div className="container">
			<img src={urlToImage} alt="image" />
			<h1>{title}</h1>
			<p>{description}</p>
			{flag && (
				<a href={url} target="_blank">
					Read more
				</a>
			)}
		</div>
	);
}

export default Card;
