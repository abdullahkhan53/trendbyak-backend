const app = require("./api/index.js")
const {dbConnect}  = require("./utils/mongodb.js");
const PORT = process.env.PORT || 5000;



app.listen(PORT, () => {
  console.log(`Server running on port ${PORT} ✅`);
  dbConnect()
});

