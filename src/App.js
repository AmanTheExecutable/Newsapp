import React from "react";
import ReactDOM from "react-dom";
import { useEffect, useState } from "react";
import "./App.css";
import Search from "./Components/Search";
import Card from "./Components/Card";
import fetchData from "./Components/data";
import Footer from "./Components/Footer";

function App() {
	const initialQuery = "India";
	const [data, setData] = useState(null);

	const updateData = newData => {
		setData(newData);
	};

	useEffect(() => {
		const fetcher = async () => {
			const result = await fetchData(initialQuery, 1);
			console.log(result);
			setData(result);
		};

		fetcher();
	}, []);

	return (
		<>
			<Search updateData={updateData} initialQuery={initialQuery} />
			<div className="main">
				{data?.articles.map((data, index) => {
					return (
						<Card
							key={index}
							urlToImage={data.urlToImage}
							title={data.title}
							description={data.description}
							url={data.url}
						/>
					);
				})}
			</div>
			<Footer />
		</>
	);
}

export default App;
