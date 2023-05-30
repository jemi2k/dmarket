module.exports = {
  reactStrictMode: true,
  
  images: {
    domains: ["assets.vercel.com", "dmarket.vercel.app", "infura-ipfs.io", "ipfs.infura.io", "dmarket.infura-ipfs.io"],
    //domains: ["assets.vercel.com", "dmarket.infura-ipfs.io", ""],
    formats: ["image/avif", "image/webp"],
    unoptimized: true,
    fill: true 
  },
    "API": {
    "HTTPHeaders": {
      "Access-Control-Allow-Origin": [
        "*"
      ]
    }
  },
};
