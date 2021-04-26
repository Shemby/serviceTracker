require("./db/mongoose");
const app = require("./app");
const port = process.env.PORT || 2000;

app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
