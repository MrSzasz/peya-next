/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  rewrites: async () => {
    return [{
      source: "/docs/tycTest",
      destination: "/pages/docs/tyc.html",
    },
    {
    source: "/docs/tyc-balonTest",
    destination: "/pages/docs/tyc-balon.html",
  }]
  },
}

module.exports = nextConfig