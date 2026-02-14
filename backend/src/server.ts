import "dotenv/config";
import app from "./app"

const PORT = process.env.SERVER_PORT || 5001;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});