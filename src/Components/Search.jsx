import React from "react";
import "../App.css";
import { useState } from "react";
import fetchData from "./data";

function Search({ updateData, initialQuery }) {
	const [query, setQuery] = useState(initialQuery);
	const [pageNo, setPageNo] = useState(1);
	const fetcher = async () => {
		const result = await fetchData(query, pageNo);
		updateData(result);
	};

	const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

	const handlePageButtonClick = pageNumber => {
		setPageNo(pageNumber);
		fetcher();
	};

	return (
		<div className="header">
			<input
				type="text"
				placeholder="Search for latest news"
				onChange={e => {
					setQuery(e.target.value);
				}}
			/>
			<button className="Search" onClick={fetcher}>
				Search
			</button>
			<div className="pagebtn">
				{arr.map(item => {
					return (
						<button key={item} onClick={() => handlePageButtonClick(item)}>
							{item}
						</button>
					);
				})}
			</div>
		</div>
	);
}

export default Search;
