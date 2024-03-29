import auth0 from 'auth0-js';
import Cookies from 'js-cookie'
import jwt from 'jsonwebtoken'
import axios from 'axios'

import { getCookieFromReq } from '../helper/utils'

class Auth {
  constructor() {
    this.auth0 = new auth0.WebAuth({
      domain: 'm00p1ng.auth0.com',
      clientID: 'Y1Vz3lPebNPATvmf3uXHfZ31kMtGuh7u',
      redirectUri: 'http://localhost:3000/callback',
      responseType: 'token id_token',
      scope: 'openid profile'
    });

    this.login = this.login.bind(this)
    this.handleAuthentication = this.handleAuthentication.bind(this)
    this.logout = this.logout.bind(this)
  }

  handleAuthentication() {
    return new Promise((resolve, reject) => {
      this.auth0.parseHash((err, authResult) => {
        if (authResult && authResult.accessToken && authResult.idToken) {
          this.setSession(authResult)
          resolve();
        } else if (err) {
          console.log(err)
          reject(err)
        }
      })
    })
  }

  setSession(authResult) {
    let expiresAt = (authResult.expiresIn * 1000) + new Date().getTime();

    Cookies.set('user', authResult.idTokenPayload, { expires: 0.5 })
    Cookies.set('jwt', authResult.idToken, { expires: 0.5 })
    Cookies.set('expiresAt', expiresAt, { expires: 0.5 })
  }

  async verifyToken(token) {
    if (token) {
      const decodedToken = jwt.decode(token, { complete: true })
      if (!decodedToken) {
        return undefined
      }
      const jwks = await this.getJWKS()
      const jwk = jwks.keys[0]

      let cert = jwk.x5c[0]
      cert = cert.match(/.{1,64}/g).join('\n')
      cert = `-----BEGIN CERTIFICATE-----\n${cert}\n-----END CERTIFICATE-----\n`

      if (jwk.kid === decodedToken.header.kid) {
        try {
          const verifiedToken = jwt.verify(token, cert)
          const expiresAt = verifiedToken.exp * 1000

          return (verifiedToken && new Date().getTime() < expiresAt) ? verifiedToken : undefined
        } catch (err) {
          return undefined
        }
      }
    }

    return undefined
  }

  async getJWKS() {
    const res = await axios.get('https://m00p1ng.auth0.com/.well-known/jwks.json')
    const jwks = res.data
    return jwks
  }

  login() {
    this.auth0.authorize();
  }

  logout() {
    Cookies.remove('user')
    Cookies.remove('jwt')
    Cookies.remove('expiresAt')

    this.auth0.logout({
      returnTo: '',
      clientID: 'Y1Vz3lPebNPATvmf3uXHfZ31kMtGuh7u',
    })
  }

  async clientAuth() {
    const token = Cookies.getJSON('jwt')
    const verifiedToken = await this.verifyToken(token)

    return verifiedToken
  }

  async serverAuth(req) {
    if (req.headers.cookie) {
      const token = getCookieFromReq(req, 'jwt')
      const verifiedToken = await this.verifyToken(token)

      return verifiedToken
    }

    return undefined
  }
}

const auth0Client = new Auth()

export default auth0Client