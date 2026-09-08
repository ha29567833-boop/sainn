import { buildApp } from "../dist/app.js";

let appPromise;

export default async function handler(req, res) {
  if (!appPromise) {
    appPromise = buildApp();
  }

  const app = await appPromise;
  await app.ready();
  app.server.emit("request", req, res);
}
