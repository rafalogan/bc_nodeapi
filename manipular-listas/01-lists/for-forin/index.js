const forForInForOf = require('./forForInForOf');
const toMap = require('./map');


(async () => {
	const exemple = await forForInForOf.main();
	const exempleMap = await toMap.main();
})()
