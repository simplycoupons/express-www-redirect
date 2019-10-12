function redirectWWWToNoWWW(whitelistHosts = [], redirectStatusCode = 301) {
  return function middlewareRredirectWWWtoNoWWW(req, res, next) {
    const host = req.get('host')
    const hostHasWWW = /^www\./.test(host)

    if (hostHasWWW && !whitelistHosts.includes(host)) {
      const protocol = req.protocol
      const hostWithoutWWW = host.replace(/^www\./, '')

      return res.redirect(
        redirectStatusCode,
        `${protocol}://${hostWithoutWWW}${req.url}`
      )
    }

    next()
  }
}

function redirectNoWWWToWWW(whitelistHosts = [], redirectStatusCode = 301) {
  return function middlewareRredirectWWWtoNoWWW(req, res, next) {
    const host = req.get('host')
    const hostHasWWW = /^www\./.test(host)

    if (!hostHasWWW && !whitelistHosts.includes(host)) {
      const protocol = req.protocol
      const hostWithWWW = `www.${host}`

      return res.redirect(
        redirectStatusCode,
        `${protocol}://${hostWithWWW}${req.url}`
      )
    }

    next()
  }
}

module.exports = { redirectWWWToNoWWW, redirectNoWWWToWWW }
