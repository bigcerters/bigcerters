const { ethers } = require('ethers');

function createWallet() {
    const wallet = ethers.Wallet.createRandom();
    console.log(`Wallet: ${wallet.address}`);
    console.log(`Mnemonic: ${wallet.mnemonic.phrase}`);
    console.log(`Private Key: ${wallet.privateKey}`);
}

module.exports = { createWallet };
