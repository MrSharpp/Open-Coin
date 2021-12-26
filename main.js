const {Blockchain, Transaction} = require('./Blockchain');

let openCoin = new Blockchain();
openCoin.createTransaction(new Transaction("addres1", "address2", 50));
openCoin.createTransaction(new Transaction("addres2", "address1", 150));

openCoin.minePendingTransactions('nick-address');
console.log("\n Balance of nick is", openCoin.getBalanceOfAddress('nick-address'));

openCoin.minePendingTransactions('nick-address');
console.log("\n Balance of nick is", openCoin.getBalanceOfAddress('nick-address'));

openCoin.minePendingTransactions('nick-address');
console.log("\n Balance of nick is", openCoin.getBalanceOfAddress('nick-address'));

openCoin.minePendingTransactions('nick-address');
console.log("\n Balance of nick is", openCoin.getBalanceOfAddress('nick-address'));
