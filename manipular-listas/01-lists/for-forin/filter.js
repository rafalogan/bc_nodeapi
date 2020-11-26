const {getPeople} = require('./service');

Array.prototype.myFilter = function (callback) {
	const list  = [];

	for (const index in this) {
		const item = this[index];
		const result  = callback(item, index, this);

		if (!result) continue;

		list.push(item);
	}

	return list;
}

const larsFilter = results => results.filter(people => people.name.toLowerCase().indexOf('lars') !== -1);

const noLarCustomFilter = results => results.myFilter((people, i, list) => {
	console.log(`index: ${i}`, list.length);
	return people.name.toLowerCase().indexOf('lars') !== 1
})

const main = async () => {
	try {
		const {results} = await getPeople('');
		const larsFamily = larsFilter(results);
		const noLarsFamily = noLarCustomFilter(results);

		console.log('Nomes falilia lars', larsFamily.map(people => people.name))
		console.log('Não pertencem a falimia lars', noLarsFamily.map(people => people.name))

	} catch (err) {
		console.error('Deu ruim no Filter', err);
	}
}


module.exports = {main}
