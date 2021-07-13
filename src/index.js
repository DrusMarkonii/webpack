import "./css/style.css";
import Post from "./post";
import json from "./data.json";
import webpackLogo from "./img/WebpackLog.png";

const post = new Post("Webpack Post title", webpackLogo);

console.log("Post to string:", post.toString());
console.log("JSON", json);
