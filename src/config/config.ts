const config = {
  serverConfig: {
    PORT: process.env.SERVER_PORT,
    env: process.env.NODE_ENV,
  },
  dbConfig: {
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: "postgres",
    define: {
      freezeTableName: true,
      underscored: true,
      timestamps: true,
    },
  },
};

console.log("🚀 ~ file: config.ts:22 ~ config:", config);

console.log("🚀 ~ file: config.ts:22 ~ config:", config);

export { config };
