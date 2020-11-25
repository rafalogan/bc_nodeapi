/*
* 0 Obter um Usuário
* 1 Obter o número de telefone de usuário a partir de seu Id
* 2 Obter o endereço do usuário pelo Id
* */

function getUser() {
	return new Promise(((resolve, reject) => {
		setTimeout(() => {
			return resolve({
				id: 1,
				name: 'Aladin',
				birthday: new Date()
			})}, 1000)
	}))

function getFone (userId, callback) {
	setTimeout(() => {
		return callback(null, {
			fone: '00000000000',
			code: '00'
		})
	}, 2000)
}

function getAdress(userId, callback) {
	setTimeout(() => callback(null, {
		stret: 'rua dos bobos',
		number: 0
	}), 2000)
}

 const user = getUser()
	 .then(user => console.log('usuário', user))
	 .catch(err => console.error('Deu ruim', err));

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
