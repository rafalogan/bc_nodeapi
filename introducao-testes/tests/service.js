const { get } = require('axios');
const URL = 'https://swapi.dev/api/people'

const getPeople = async (name) => {
	const url = `${URL}/?search=${name}`;
	const result = await get(url);

	return result.data.results.map(peopleMapping);
};

const peopleMapping = (people) => {
	return {
		name: people.name,
		height: people.height
	}
}

module.exports = {getPeople, peopleMapping}
