<!-- Route in Nodejs -->

const http = require("http");

const server = http.createServer((req, res) => {
if (req.url === "/about") {
res.end("<h1>about page</h1>");
} else if (req.url === "/") {
res.end("<h1>home page</h1>");
}
});
server.listen(5000, () => {
console.log("server is working properly");
});

<!-- "type": "module", in package.json -->
<!-- Modules -->

import http from "http";
import { getPercent } from "./moduleEG.js";

// import name from "./moduleEG.js";
// import { addr, pincode } from "./moduleEG.js";
// console.log(name, addr, pincode);

// import \* as info from "./moduleEG.js";
// console.log(info.default, info.addr, info.pincode);

console.log(getPercent());

<!-- in moduleEG.js file -->

const addr = "123 ruk";
const pincode = "123345";
const getPercent = () => {
// return `${Math.floor(Math.random() * 100)}%`;
return `${~~(Math.random() * 100)}%`;
};
export default name;
export { addr, pincode, getPercent };

<!-- fs module -->
<!-- step- 1 : create index.html file -->
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Home</title>
  </head>
  <body>
    <h1>Hello brother</h1>
  </body>
</html>
<!-- step- 2 asynch work -->
import http from "http";
import fs from "fs";

const server = http.createServer((req, res) => {
if (req.url === "/about") {
res.end("<h1>about page</h1>");
} else if (req.url === "/") {
// here its asynch function
fs.readFile("./index.html", (err, data) => {
res.end(data);
});
}
});
server.listen(5000, () => {
console.log("server is working properly");
});

 <!-- step-3 sych -->

import http from "http";
import fs from "fs";

const home = fs.readFileSync("./index.html");
const server = http.createServer((req, res) => {
if (req.url === "/about") {
res.end("<h1>about page</h1>");
} else if (req.url === "/") {
res.end(home);
}
});
server.listen(5000, () => {
console.log("server is working properly");
});

<!-- Express -->

<!-- 1 st code -->

import express from "express";

const app = express();

app.listen(5000, () => {
console.log("server start");
});

<!-- packeage.json changes -->

"scripts": {
"start": "node index.js",
"dev": "nodemon index.js"
},

<!-- 2nd -->

import express from "express";

const app = express();

app.get("/", (req, res) => {
res.send("hi");
});

app.listen(5000, () => {
console.log("server start");
});

<!-- 3rd  -->

app.get("/", (req, res) => {
res.sendStatus(404);
});

<!-- 4th  -->

app.get("/", (req, res) => {
res.json({
sucess:true,
product:[]
})
});

<!-- 5th -->

app.get("/", (req, res) => {
const pathLocation = path.resolve();
const file = path.join(pathLocation, "./index.html");
res.sendFile(file);
});

<!-- 6th -->
<!-- dynamic data serve  -->

create index.ejs in views folder

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Home</title>
  </head>
  <body>
    <h1>Hello brother</h1>
    <p>hello <%= name %></p>
  </body>
</html>
 
 create app.js
 import express from "express";
import path from "path";
const app = express();

app.set("view engine", "ejs");
app.get("/", (req, res) => {
res.render("index.ejs", { name: "jatin" });
});

app.listen(5000, () => {
console.log("server start");
});
