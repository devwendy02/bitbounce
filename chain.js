
export const BounceBit = {
  id: 6001,
  name: 'BounceBit Mainnet',
  network: 'BounceBit Mainnet',
  nativeCurrency: {
    decimals: 18,
    name: 'ETH',
    symbol: 'ETH',
  },
  rpcUrls: {
    public: { http: ['https://fullnode-mainnet.bouncebitapi.com'] },
    default: { http: ['https://fullnode-mainnet.bouncebitapi.com'] },
  },
  blockExplorers: {
    etherscan: { name: 'BBScan', url: 'https://bbscan.io/' },
    default: { name: 'BBScan', url: 'https://bbscan.io/' },
  },
  contracts: {
    multicall3: {
      address: '0xca11bde05977b3631167028862be2a173976ca11',
      blockCreated: 11_907_934,
    },
  },
} 
