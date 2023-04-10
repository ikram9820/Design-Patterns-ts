import History from "./History";
import * as fs from "fs";

class HistoryStorage {
  public save(history: History) {
    try {
      fs.writeFileSync("history.txt", JSON.stringify(history));
    } catch (error) {
      if (error instanceof Error) console.log(error.message);
    }
  }

  public restore(): History {
    try {
      let history = fs.readFileSync("history.txt");
      return JSON.parse(history.toString()) as History;
    } catch (error) {
      let message = "unknown error";
      if (error instanceof Error) message = error.message;
      throw new Error(message);
    }
  }
}

export default HistoryStorage;
