const jwt = require('express-jwt')
const jwksRSA = require('jwks-rsa')

exports.checkJWT = jwt({
  secret: jwksRSA.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 15,
    jwksUri: 'https://m00p1ng.auth0.com/.well-known/jwks.json',
  }),
  audience: 'Y1Vz3lPebNPATvmf3uXHfZ31kMtGuh7u',
  issuer: 'https://m00p1ng.auth0.com/',
  algorithms: ['RS256'],
})