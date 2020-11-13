import { resolve } from "path";
import fastify from "fastify";
import fastifyStatic from "fastify-static";

const app = fastify({
  logger: true,
});

app.register(fastifyStatic, {
  root: resolve(__dirname, "./dist"),
});

app.ready().then(async () => {
  const host = process.env.HOST ?? "localhost";
  const port = process.env.PORT ?? 3000;

  app.listen(port, host);
});
