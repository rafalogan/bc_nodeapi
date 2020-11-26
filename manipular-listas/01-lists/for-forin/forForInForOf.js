const service = require('./service');


const resultFor = (result) => {
	const names = [];

	console.time('for');
	for (let i = 0; i<= result.results.length -1;  i++) {
		const pessoa = result.results[i];
		names.push(pessoa.name);
	}
	console.timeEnd('for');

	return names;
}

const resultForIn = result => {
	const output = [];

	console.time('forIn');
	for (let i in result.results) {
		const people = result.results[i];
		output.push(people.name);
	}
	console.timeEnd('forIn');

	return output;
}

const resultForOf = result => {
	const output = [];

	console.time('forOf');
	for (const people of result.results) output.push(people.name);
	console.timeEnd('forOf');

	return output;
}


const main = async () => {
	try {
		const result = await service.getPeople('');

		console.log('01. For ForIn ForOf');
		console.log('Nomes com for..', resultFor(result));
		console.log('Nomes com for in ..', resultForIn(result));
		console.log('Nomes com for of ..', resultForOf(result));

	} catch (err) {
		console.error('Erro interno', err);
	}
}

module.exports = { main }
