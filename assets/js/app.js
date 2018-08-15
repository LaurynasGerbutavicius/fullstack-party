/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */

// any CSS you require will output into a single css file (app.css in this case)
import ReactDOM from "react-dom";
import React from "react";
import IssueList from "./components/list/IssueList";
import IssueForm from "./components/form/IssueForm";

require('../css/app.css');

// Need jQuery? Install it with "yarn add jquery", then uncomment to require it.
// var $ = require('jquery');

let list = document.getElementById("list");
let form = document.getElementById("issue-form");

if (list) {
    ReactDOM.render(
        <IssueList/>,
        list
    );
} else if (form) {
    ReactDOM.render(
        <IssueForm/>,
        form
    );
}
