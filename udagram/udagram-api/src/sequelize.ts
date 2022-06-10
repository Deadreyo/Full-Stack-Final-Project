import { Sequelize } from "sequelize-typescript";
import { config } from "./config/config";

console.log("config", config);
console.log("config.username", config.username);
console.log("config.password", config.password);
console.log("config.database", config.database);
console.log("config.port", config.port);
console.log("config.dbPort", config.dbPort);
console.log("config.host", config.host);
let sequelizeConn = undefined;
try{
  sequelizeConn = new Sequelize({
    username: config.username,
    password: config.password,
    database: config.database,
    host: config.host,
    port: config.dbPort,
  
    dialect: "postgres",
    storage: ":memory:",
  });
} catch (e) {
  console.log(e);
};
export const sequelize = sequelizeConn;
