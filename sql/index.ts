import * as SQLite from "expo-sqlite";

const Database: SQLite.WebSQLDatabase = SQLite.openDatabase("deriveDB");

export default Database;
