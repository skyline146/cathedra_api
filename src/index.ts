import app from "./app";
import { AppDataSource } from "./database/data-source";

const PORT = process.env.port || 3000
AppDataSource.initialize()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`server started at http://localhost:${PORT}/`)
    })
  })
  .catch((err) => {
    console.error("Error during Data Source initialization", err)
  })
