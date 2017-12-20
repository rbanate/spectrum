// import DigixDirectory from '@digix/poa-ui/node_modules/@digix/core2/build/contracts/DigixDirectory.json';
// import ProductsList from '@digix/poa-ui/node_modules/@digix/core2/build/contracts/ProductsList.json';
// import PoAAdmin from '@digix/poa-ui/node_modules/@digix/core2/build/contracts/PoAAdmin.json';
// import AssetsExplorer from '@digix/poa-ui/node_modules/@digix/core2/build/contracts/AssetsExplorer.json';
// import DigixDirectoryService from '@digix/poa-ui/node_modules/@digix/core2/build/contracts/DigixDirectoryService.json';
// import MarketPlace from '@digix/poa-ui/node_modules/@digix/core2/build/contracts/Marketplace.json';
// import Token from '@digix/poa-ui/node_modules/@digix/core2/build/contracts/Token.json';

// const contracts = {
//   DigixDirectory,
//   ProductsList,
//   PoAAdmin,
//   AssetsExplorer,
//   DigixDirectoryService,
//   MarketPlace,
//   Token,
// };

// export function getContract(name, DEFAULT_NETWORKS, network) {
//   const contract = contracts[name];
//   let latestNetwork = Math.max(...Object.keys(contract.networks));
//   const selectedNetwork = DEFAULT_NETWORKS.find(n => n.id.toLowerCase() === network.toLowerCase());

//   if (selectedNetwork.id.toLowerCase() !== 'testrpc') {
//     latestNetwork = selectedNetwork.chainId;
//   }
//   return {
//     abi: contract.abi,
//     address: contract.networks[latestNetwork] ?
//       contract.networks[latestNetwork].address :
//       '0x0000000000000000000000000000000000000001',
//   };
// }
