const axios = require('axios');

const URL = 'https://swapi.dev/api/people';

const getPeople = async name => {
	try {
		const url = `${URL}/?search=${name}`;
		const response = await axios.get(url);

		return response.data;
	} catch (err) {
		console.error('Deu ruim', err);
	}
}

module.exports = { getPeople }
