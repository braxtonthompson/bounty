import app from "./app.js";
import "dotenv/config";

const PORT = process.env.SERVER_PORT || 5001;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});