const {Blockchain, Transaction} = require('./Blockchain');
const EC = require('elliptic').ec;
const ec = new EC('secp256k1');

const myKey = ec.keyFromPrivate('3318c44798cad669141bc7a3c3a66fc0407bb90442c1c38a6a2c39bea13b9a24');
const myWalletAddress = myKey.getPublic('hex');

let openCoin = new Blockchain();

console.log("\n Balance of nick is", openCoin.getBalanceOfAddress(myWalletAddress));

const tx1 = new Transaction(myWalletAddress, 'publickey', 20);
tx1.signTransaction(myKey);
openCoin.addTransaction(tx1);

openCoin.minePendingTransactions(myWalletAddress);

console.log("\n Balance of nick is", openCoin.getBalanceOfAddress(myWalletAddress));