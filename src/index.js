import "./css/style.css";
import Post from "./post";
import json from "./data.json";
import webpackLogo from "./img/WebpackLog.png";
import xml from "./data.xml";
import csvl from "./data.csv";
const post = new Post("Webpack Post title", webpackLogo);

console.log("Post to string:", post.toString());
console.log("JSON", json);
console.log("XML", xml);
console.log("CSV", csv);
