import express, { Request, Response } from "express";
import cookieParser, { CookieParseOptions } from "cookie-parser";
import path from "path";
import { addUser } from "./routes/add.js";
import { loginUser } from "./routes/login.js";

class Server {
  private app: express.Application;
  private port: number;
  private cookieParser: any;

  constructor(port: number) {
    this.port = port;
    this.app = express();
    this.cookieParser = cookieParser();
    this.configureRoutes();
  }

  private configureRoutes(): void {
    this.app.get("/", (req: Request, res: Response) => {
      res.status(200).json({ server: "Valkey", status: "ready" }).send();
    });

    this.app.use(express.urlencoded({ extended: true }));

    // this.app.use(cookieParser());

    // this.app.get("/", (req, res) => {
    //   res.sendFile(path.join(__dirname, "../public/index.html"));
    // });

    // this.app.get("/welcome", (req, res) => {
    //   res.sendFile(path.join(__dirname, "../public/welcome.html"));
    // });

    this.app.listen(this.port, () => {
      console.log(
        `Valkey Server is listening at http://localhost:${this.port}`
      );
    });
  }

  public start(): void {
    this.app.listen(this.port, () => {
      console.log(`Valkey Server is running on port ${this.port}`);
    });
  }
}

const port = 3000;
const server = new Server(port);
server.start();
