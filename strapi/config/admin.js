module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '06cc99bf5a036bf66c224f30e94620eb'),
  },
});
