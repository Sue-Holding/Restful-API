import express, {Express, Request, Response } from "express";

const app: Express = express();
app.use(express.json());
const port = process.env.PORT || 3000;

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!')
})

app.get("/test", (req: Request, res: Response) => {
  res.status(200).json({ message: "Hello, world!" });
});

// Start Server (Only when running directly, not during testing)
if (process.env.NODE_ENV !== "test") {
  app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });
}


export default app;