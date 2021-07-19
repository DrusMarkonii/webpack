import * as $ from 'jquery'

import Post from "./model/post";
import json from "./data";
import webpackLogo from "./img/WebpackLog.png";
import xml from "./data.xml";
import csv from "./data.csv";
const post = new Post("Webpack Post title", webpackLogo);


import "@css/style.css";
import "./less/style.less";
import "./scss/style.scss";



$('pre').addClass('code').html(post.toString())
console.log("JSON", json);
console.log("XML", xml);
console.log("CSV", csv);
