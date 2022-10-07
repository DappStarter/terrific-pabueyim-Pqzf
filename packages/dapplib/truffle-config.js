require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inner clog orient spot grief ranch remind around give private furnace spy'; 
let testAccounts = [
"0x7712ec12fe37d4ef1d32f39c6a3d84cda50c3a4a2714526c16ec724e621ddc2c",
"0x88ae8d6b4ea8e1cdd0a160b096b755a9ea6ca5a25b89afa0bdc72c376727695a",
"0x66429b8ddee40676a5462879097dc885a01276d9f26718cf953dc54287182d55",
"0xf02f1eee2cd76679309b2e9a9299495988c3e8f4182f26896aef0bebd19a1611",
"0x5325a4f28210aa0455e53722009685f0cc77d02f44cbf631298b82fec748b233",
"0x141eed78c67948ab623fcc2ad8819a6d29933e8b9108b959c955820811d90815",
"0xc1aabab624cb2d28e840051aec1f9a368371d57431b552fc5e0fe8ef7b65e021",
"0x6cd2f6e3ab9eb52e9c5e27aa89a3dd1014d9b8a8091851683ae78804ca88b430",
"0xcd751de31987f2356c42ec951b1c362549e0eaba51fa2d1bc87fb62ee0dc4261",
"0x82a4b865f3b49197cd0a806f716f1f2e01e5e2b13bc2c23a3c78da6f7c892662"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

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
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


