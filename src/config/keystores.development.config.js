module.exports = [
  {
    id: 'v3',
    name: 'Single Account',
    subtitle: 'v3 Encrypted Keystore',
    description: 'The standard "default" wallet used by Geth, Parity, and many other services',
    color: 'green',
    icon: 'key',
  },
  {
    id: 'ledger',
    name: 'Ledger Wallet',
    subtitle: 'Nano S (or blue) Hardware Wallet',
    description: 'Ethereum hardware wallet, based on robust safety features for storing cryptographic assets and securing digital payments. It connects to any computer via USB.',
    color: 'black',
    icon: 'usb',
  },
  {
    id: 'cold',
    name: 'Cold Accounts',
    subtitle: 'for Offline Signing / Read Only',
    description: 'Reference to an Ethereum address that allows for generating offline signing data, or simply checking account balances',
    color: 'blue',
    icon: 'hide',
  },
  {
    id: 'multisig',
    name: 'MultiSig Wallet',
    subtitle: 'Multi-party sigining for increased security',
    description: 'Assigns multiple other keystores to administer a contract that can execute transactions with a miniumum threashold of approvals',
    color: 'orange',
    icon: 'users',
  },
];