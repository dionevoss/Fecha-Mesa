class AuthService {
    async login(email, pass, auth) {
      return await auth.withRefreshToken()
        .attempt(email, pass, {
          email: email,
        })
    }
  
    async updateToken(refreshToken, auth) {
      return await auth.generateForRefreshToken(refreshToken);
    }
  
    async getUserInfo(auth) {
      return await auth.getUser();
    }
  
  }
  
  module.exports = new AuthService();