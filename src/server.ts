import app from "./app";
import { Config } from "./config";
import logger from "./config/logger";

const startServer = async () => {
  const PORT = Config.PORT || 5000;
  try {
    app.listen(PORT, () => {
      logger.info(`Server is running on port ${PORT}`);
    });
  } catch (error: any) {
    logger.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

startServer();
