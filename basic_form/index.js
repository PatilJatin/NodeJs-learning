import express from "express";
import path from "path";
const app = express();

//middleware use
app.use(express.static(path.join(path.resolve(), "public")));
app.use(express.urlencoded({ extended: true }));

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index.ejs", { name: "jatin" });
});

const users = [];
// if there is no route in action of form
// app.post("/", (req, res) => {
//   console.log(req.body);
//   users.push(req.body);
//   res.redirect("/success");
// });

app.post("/contact", (req, res) => {
  console.log(req.body);
  users.push(req.body);
  res.redirect("/success");
});

app.get("/success", (req, res) => {
  res.render("success.ejs");
});

app.get("/users", (req, res) => {
  res.json({
    users,
  });
});

app.listen(4000, () => {
  console.log("server start");
});
