export default (signedToken) => {
  document.cookie = `authToken=${signedToken};`; // set jwt token for auth. Read by the auth middleware on the server api routes.
};
