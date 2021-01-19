module.exports = {
  images: {
    domains: ['pbs.twimg.com', 'abs.twimg.com'],
  },
  async headers() {
    return [{
      source: '/api/:path*',
      headers: [
        { key: 'Access-Control-Allow-Origin', value: process.env.WEB_URL },
        { key: 'Access-Control-Allow-Methods', value: 'GET,POST' },
        { key: 'Access-Control-Allow-Credentials', value: 'true' }
      ]
    }]
  }
}