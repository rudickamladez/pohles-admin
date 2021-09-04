export const environment = {
  production: true,
  backend: {
    api: "https://api.pohles.rudickamladez.cz",
    socketio: "https://api.pohles.rudickamladez.cz/ws"
  },
  keycloak: {
    issuer: 'https://auth.rudickamladez.cz/auth/realms/pohles',
    redirectUri: 'https://pohles.rudickamldez.cz/',
    clientId: 'frontend',
    responseType: 'code',
    scope: 'openid profile email',
    requireHttps: true,
    showDebugInformation: true,
    disableAtHashCheck: true
  }
};
