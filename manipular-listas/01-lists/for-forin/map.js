const service  = require('./service');

Array.prototype.myMap = function (callback) {
	const newArrayMapping = [];

	for (let indice = 0; indice <= this.length -1; indice++) {
		const result = callback(this[indice], indice)
		newArrayMapping.push(result);
	}

	return  newArrayMapping;

}

const resultForEach = data => {
	const output = [];

	data.results.forEach(people => output.push(people.name));

	return output;
}

const resultMap = data => data.results.map(people => people.name);

const customMap = data => data.results.myMap(people => people.name);

const main = async () => {
	try {
		const results = await service.getPeople('');

		console.log('02. map')
		console.log('foreach', resultForEach(results));
		console.log('map', resultMap(results));
		console.log('custom', customMap(results));

	} catch (err) {
		console.error('Deu ruim no map', err);
	}
}

module.exports = {main}
