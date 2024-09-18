// import express, { NextFunction, Request, Response } from "express";
// import { messaage_route } from "./router";
// import { ErrorWithStatus } from "./error";
// import cors from "cors";
// import "dotenv/config";

// //init
// const app = express();

// app.set("port", 3000);

// //midware
// app.use(cors());

// //routes
// app.use("", messaage_route);

// //error handler
// app.use((err: unknown, req: Request, res: Response, next: NextFunction) => {
//   if (err instanceof ErrorWithStatus) {
//     res.status(err.status).send(err.message);
//   } else if (err instanceof Error) {
//     res.status(5000).send(err.message);
//   } else {
//     res.status(500).send("Unknown Error");
//   }
// });

// //bootstarp
// app.listen(app.get("port"), () => {
//   console.log("Listining to port " + " " + app.get("port"));
// });
// module.exports = app;

// export default app;
import express, { NextFunction, Request, Response } from "express";
import { messaage_route } from "./router";
import { ErrorWithStatus } from "./error";
import cors from "cors";
import "dotenv/config";

//init
const app = express();

// Use process.env.PORT for Vercel deployment
const port = process.env.PORT || 3000;
app.set("port", port);

// Middleware
app.use(cors());

// Routes
app.use("", messaage_route);

// Error handler
app.use((err: unknown, req: Request, res: Response, next: NextFunction) => {
  if (err instanceof ErrorWithStatus) {
    res.status(err.status).send(err.message);
  } else if (err instanceof Error) {
    res.status(500).send(err.message);
  } else {
    res.status(500).send("Unknown Error");
  }
});

// Bootstrapping server
app.listen(app.get("port"), () => {
  console.log(`Listening on port ${app.get("port")}`);
});

export default app;
