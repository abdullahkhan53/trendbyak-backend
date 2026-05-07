
import app from "./api/index.js";
import {dbConnect} from "./utils/mongodb.js"
const PORT = process.env.PORT || 5000;



app.listen(PORT, () => {
  console.log(`Server running on port ${PORT} ✅`);
  dbConnect()
});

export default app;