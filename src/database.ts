import { Elysia } from "elysia";
import { BooksDatabase } from "./BooksDatabase";

export const databasePlugin = () => (app: Elysia) =>
  app.decorate("database", new BooksDatabase());
