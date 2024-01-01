import $ from "jquery";
import "./style/style.css";
import main from "./script/view/main.js";

/* icon */
const urlIcon =
  "https://png.pngtree.com/png-clipart/20220121/ourmid/pngtree-original-cat-s-ear-icon-png-image_4275650.png";
document.head.innerHTML += `<link rel="icon" type="image/x-icon" href="${urlIcon}">`;

/* setup */
main();
$("#home").show();
