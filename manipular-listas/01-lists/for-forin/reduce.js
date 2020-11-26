const service = require('./service');

Array.prototype.myReduce = function (callback, initialValue) {
	let endValue = typeof (initialValue !== undefined) ? initialValue : this[0];

	for (let index = 0; index <= this.length -1; index++) endValue = callback(endValue, this[index], this);

	return endValue;
}

const heightMap = results => results.map(people => parseInt(people.height));
const heightReduce = heights => heights.reduce((prev, next) => prev + next, 0);
const costomReduce = list => list.myReduce((prev, next) => prev.concat(next), [])
	.join(',');

const main = async () => {
	try {
		const {results}  = await service.getPeople('');
		const heights = heightMap(results);
		const total = heightReduce(heights);

		const myLists = [
			['Rafael', 'Candeira'],
			['NodeBr', 'JovemNerd', 'Gavita', 'Felipe Deshamps']
		]

		const myListTotal = costomReduce(myLists)

		console.log('Pesos', heights);
		console.log('total', total);
		console.log('total do meu Reduce ->', myListTotal);
	} catch (err) {
		console.log('Deu Ruim reduce', err);
	}
}


module.exports = {main};
