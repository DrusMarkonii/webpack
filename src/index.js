import "@babel/polyfill";
import * as $ from "jquery";

import Post from "./model/post";
import json from "./data";
import webpackLogo from "./img/WebpackLog.png";
import xml from "./data.xml";
import csv from "./data.csv";
const post = new Post("Webpack Post title", webpackLogo);

import "@css/style.css";
import "./less/style.less";
import "./scss/style.scss";

$("pre").addClass("code").html(post.toString());
console.log("JSON", json);
console.log("XML", xml);
console.log("CSV", csv);

async function start() {
  return await new Promise((r) => setTimeout(() => r("Async done"), 2000));
}

start().then((res) => console.log(res));

class util{
    static id = Date.now()
}
console.log('Util ID:', util.id )
