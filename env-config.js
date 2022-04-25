const {process} = require("next/dist/server/web/sandbox/polyfills");
const prod = process.env.NODE_ENV === 'production'
module.exports = {
    'process.env.BACKEND_URL': prod ? '/Next-gh-page-example' : ''
}