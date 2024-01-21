const fetchData = async (query, pageNo) => {
	const response = await fetch(
		`https://newsapi.org/v2/everything?q=${query}&pageSize=9&page=${pageNo}&from=2023-12-20&sortBy=publishedAt&apiKey=af2eaad40b1940c7a82732643cef799a`
	);
	const data = await response.json();
	return data;
};

export default fetchData;
