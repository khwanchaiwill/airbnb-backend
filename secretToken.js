module.exports = {
    jwtSecret: process.env.JWT_SECCRET || "This is very secret data",
    pgConnection:
    process.env.DATABASE_URL || "postgresql://postgres@localhost/auth",
  rounds: parseInt(process.env.BCRYPT_ROUNDS) || 12,
}