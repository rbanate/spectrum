import { getContract } from '../helpers/contracts';

const environment = process.env.ENVIRONMENT;
const DEFAULT_NETWORKS = require(`../config/networks.${environment}.config.js`); // eslint-disable-line
const mainNetToken = getContract('Token', DEFAULT_NETWORKS, 'eth-mainnet');
const kovanToken = getContract('Token', DEFAULT_NETWORKS, 'eth-kovan');
const testRpcToken = getContract('Token', DEFAULT_NETWORKS, 'testrpc');

module.exports = [
  {
    address: mainNetToken.address,
    symbol: 'DGX',
    default: true,
    decimals: 9,
    network: 'eth-mainnet',
    name: 'Digix Gold Grams',
    color: 'yellow',
  },
  {
    address: kovanToken.address,
    symbol: 'DGX',
    default: true,
    decimals: 9,
    network: 'eth-kovan',
    name: 'Digix Gold Grams',
    color: 'yellow',
  },
  {
    address: testRpcToken.address,
    symbol: 'DGX',
    default: true,
    decimals: 9,
    network: 'testrpc',
    name: 'Digix Gold Grams',
    color: 'yellow',
  },

  {
    address: '0x0825c96db02b08dce25c67037d68b8bf83593e71',
    symbol: 'DGD',
    default: true,
    decimals: 9,
    network: 'eth-mainnet',
    name: 'Digix Governance Tokens',
    color: 'blue',
  },
  {
    address: '0x0825c96db02b08dce25c67037d68b8bf83593e71',
    symbol: 'DGD',
    default: true,
    decimals: 9,
    network: 'eth-kovan',
    name: 'Digix Governance Tokens',
    color: 'blue',
  },
  {
    address: '0x0825c96db02b08dce25c67037d68b8bf83593e71',
    symbol: 'DGD',
    default: true,
    decimals: 9,
    network: 'testrpc',
    name: 'Digix Governance Tokens',
    color: 'blue',
  },

  {
    address: '0x0000000000000000000000000000000000000000',
    symbol: 'DGDb',
    default: true,
    decimals: 0,
    network: 'eth-mainnet',
    name: 'Digix Governance Badges',
    color: 'green',
  },
  {
    address: '0x0000000000000000000000000000000000000000',
    symbol: 'DGDb',
    default: true,
    decimals: 0,
    network: 'eth-kovan',
    name: 'Digix Governance Badges',
    color: 'green',
  },
  {
    address: '0x0000000000000000000000000000000000000000',
    symbol: 'DGDb',
    default: true,
    decimals: 0,
    network: 'testrpc',
    name: 'Digix Governance Badges',
    color: 'green',
  },
];
