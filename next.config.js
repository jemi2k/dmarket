module.exports = {
  reactStrictMode: true,

  images: {
    domains: [
      "assets.vercel.com",
      "dmarket.vercel.app",
      "infura-ipfs.io",
      "ipfs.infura.io",
      "dmarket1.infura-ipfs.io",
      "d.atlasofshop.com",
    ],
    // domains: ["assets.vercel.com", "infura-ipfs.io", ""],
    formats: ["image/avif", "image/webp"],
    // unoptimized: true,
    // fill: true
  },
  API: {
    HTTPHeaders: {
      "Access-Control-Allow-Origin": ["*"],
    },
  },
};
// git config --global --unset https.proxy
