import { Elysia, t } from "elysia";
import { swagger } from "@elysiajs/swagger";
import { databasePlugin } from "./database";

new Elysia()
  .use(swagger())
  .use(databasePlugin())
  .group("/books", (app) =>
    app
      .get("/", async ({ database }) => {
        console.log(database);
        return await database.getBooks();
      })
      .post(
        "/",
        async ({ database, body }) => {
          console.log(body);
          const result = await database.addBook(body);
          console.log(result);
          return { success: true, id: result.id };
        },
        {
          body: t.Object({
            name: t.String(),
            author: t.String(),
          }),
        }
      )
  )
  .listen(8080);
