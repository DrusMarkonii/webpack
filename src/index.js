import "./css/style.css";
import Post from "./post";
import json from "./data.json";
const post = new Post("Webpack Post title");

console.log("Post to string:", post.toString());
console.log("JSON", json);
