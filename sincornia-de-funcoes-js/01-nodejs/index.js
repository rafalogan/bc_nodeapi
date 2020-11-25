/*
* 0 Obter um Usuário
* 1 Obter o número de telefone de usuário a partir de seu Id
* 2 Obter o endereço do usuário pelo Id
* */
const util = require('util');

const getAdressAsync = util.promisify(getAdress)

function getUser() {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			return resolve({
				id: 1,
				name: 'Aladin',
				birthday: new Date()
			})
		}, 1000)
	})
}

function getFone (userId) {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			return resolve({
				fone: '00000000000',
				code: '00'
			})
		}, 2000)
	})
}

function getAdress(userId, callback) {
	setTimeout(() => callback(null, {
		stret: 'rua dos bobos',
		number: 0
	}), 2000)
}

async function main() {
	try {
		const user = await getUser();
		const fone = await getFone(user.id);
		const adress = await getAdressAsync(user.id);

		console.log(`
	 	Nome: ${user.name}
	  Endereço: ${adress.stret}, ${adress.number}
	  fone: (${fone.code}) ${fone.fone}`);
	} catch error {
		console.error('DEU RUIM!!', error);
	}
}

 // const userPromise = getUser()
	//  .then(user => getFone(user.id)
	// 	 .then(fone => {
	// 	 	return {
	// 	 		user,
	// 			fone
	// 		}
	// 	 }))
	//  .then(result => getAdressAsync(result.user.id)
	// 	 .then(adress => {
	// 	 	return {
	// 	 		user: result.user,
	// 			fone: result.fone,
	// 			adress
	// 		}
	// 	 }))
	//  .then(result => console.log(`
	//  Nome: ${result.user.name}
	//  Endereço: ${result.adress.stret}, ${result.adress.number}
	//  fone: (${result.fone.code}) ${result.fone.fone}`))
	//  .catch(err => console.error('Deu ruim', err))

// getUser(function userResolve(error, user) {
// 	if (error) return console.error('Deu ruim', error);
// 	getFone(user.id, function foneResolve(error, fone) {
// 		if (error) return console.error('Deu ruim no telefone', error);
// 		getAdress(user.id, function adressResolve(err, adress) {
// 			if(err) return  console.error('Deu ruim no endereço', adress);
//
// 			console.log(`
// 			Nome: ${user.name}
// 			Endereco: ${adress.stret}, ${adress.number}
// 			telefone: (${fone.code}) ${fone.fone}`)
// 		})
// 	});
// });
