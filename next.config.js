module.exports = {
  reactStrictMode: true,
  images: {
    domains: ["assets.vercel.com", "infura-ipfs.io", "ipfs.infura.io", "dmarket.infura-ipfs.io"],
    //domains: ["assets.vercel.com", "dmarket.infura-ipfs.io", ""],
    formats: ["image/avif", "image/webp"],
  },
    "API": {
    "HTTPHeaders": {
      "Access-Control-Allow-Origin": [
        "*"
      ]
    }
  },
};
