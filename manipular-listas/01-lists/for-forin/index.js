const forForInForOf = require('./forForInForOf');
const toMap = require('./map');
const filter = require('./filter');
const reduce = require('./reduce');


(async () => {
	const exemple = await forForInForOf.main();
	const exempleMap = await toMap.main();
	const expFilter = await filter.main();
	const expReduce = await reduce.main();
})()
