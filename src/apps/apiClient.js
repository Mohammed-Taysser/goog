const options = {
	method: 'GET',
	headers: {
		'X-User-Agent': 'desktop',
		'X-Proxy-Location': 'EU',
		'X-RapidAPI-Key': process.env.REACT_APP_RapidAPI_Key,
		'X-RapidAPI-Host': 'google-search3.p.rapidapi.com',
	},
};

function googleSearch(query = '', type = '') {
	return fetch(
		`https://google-search3.p.rapidapi.com/api/v1/${
			type && `${type}/`
		}q=${query}&num=40`,
		options
	);
}

export { googleSearch };
