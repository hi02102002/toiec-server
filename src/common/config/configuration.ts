export default () => ({
  port: parseInt(process.env.PORT, 10) || 4000,
  jwt_secret: process.env.JWT_SECRET,
});
