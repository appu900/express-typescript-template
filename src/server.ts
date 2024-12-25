import app from "./app";
import { Config } from "./config";

const startServer = async () => {
  const PORT = Config.PORT || 5000;
  try {
    app.listen(PORT, () => {
      console.log(`Server started on port ${PORT}`);
    });
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

startServer();
