require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grace sell tackle spot crazy return place mixture harvest drip equal general'; 
let testAccounts = [
"0x2455e154f07ed0b12abdfbee90fc6c37b34147b4de86ee3677680a359a4bc9cf",
"0x44d38cbec3789335202fa578b2ff27a05bb564de67dd008068fb6a9b73fcb51b",
"0xcdeca4c3aa2e41b023c1a1dcd2119c81c3bb5ab2657d93d2f40e7dc8cd34edf2",
"0xf61bafcbe4b8c5b88376bf9e70e7374dc6e0656dabd14cd87991ff3ce2fbc5af",
"0x1adebad81f0bdae8021cbfd102dfceef503b860257588ec257ddfcd16d9bc76d",
"0xb8c087311df065124c536a9ab0485b6f336e8420492af052ae65d001d2d8b5f3",
"0xf11a1112e70eb0129025e7fb22fd2cf7eb9246df448bdc47853c924221a52fb3",
"0xca69b17418531717e1ee38b0ddea9edb05b73a904f202dc538d84c9548ee680c",
"0xaafbcd5ccd89f0876e2d565e2c34bf330a60b3f07feecc7fa1d7a455bf2f0a20",
"0x5527b0afff3e59a5b40fd8804edc142be040a2c6e23c8b779e8eb370b97f3f77"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

