import { Sequelize } from "sequelize-typescript";
import { config } from "../config/config";
import { User } from "./User/user";

const models = [User];

const db: any = {};
const dbConfig = config.dbConfig;
console.log("🚀 ~ file: index.ts:9 ~ dbConfig:", dbConfig);
let sequelize: Sequelize;
sequelize = new Sequelize(
  "postgres://" +
    dbConfig.username +
    ":" +
    dbConfig.password +
    "@localhost/" +
    dbConfig.database,
  {
    dialect: "postgres",
    host: dbConfig.host,
    port: Number(dbConfig.port),
  }
);
sequelize.addModels(models);

async function initializeDatabase() {
  await sequelize.sync();
}
initializeDatabase();
db.sequelize = sequelize;
db.Sequelize = Sequelize;
export default db;
