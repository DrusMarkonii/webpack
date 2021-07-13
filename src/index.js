import "@css/style.css";
import Post from "./model/post";
import json from "./data";
import webpackLogo from "./img/WebpackLog.png";
import xml from "./data.xml";
import csv from "./data.csv";
const post = new Post("Webpack Post title", webpackLogo);

console.log("Post to string:", post.toString());
console.log("JSON", json);
console.log("XML", xml);
console.log("CSV", csv);
