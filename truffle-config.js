//require('dotenv').config();
const HDWalletProvider = require('truffle-hdwallet-provider');
//var seed = "mind retreat mind endorse improve lawsuit drastic object face exotic domain diet";
//privateId = 0a1d452933984adca47242da02638014


module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // for more about customizing your Truffle configuration!
  networks: {
    ropsten: {
      provider: function() {
        return new HDWalletProvider(
          "mind retreat mind endorse improve lawsuit drastic object face exotic domain diet",
          'https://ropsten.infura.io/v3/0a1d452933984adca47242da02638014'
        )
      },
      gasPrice: 35000000000,
      network_id: 3
    },
    goerli: {
      provider: function() {
        return new HDWalletProvider(
          "mind retreat mind endorse improve lawsuit drastic object face exotic domain diet",
          'https://goerli.infura.io/v3/0a1d452933984adca47242da02638014'
        )
      },
      gasPrice: 35000000000,
      network_id: 5
    },
    development: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "*" // Match any network id
    },
    solc: {
      optimizer: {
        enabled: true,
        runs:200,
      }
    },
    //develop: {
      //port: 7545,
    //}
  }
};
