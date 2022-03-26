import colspanFull from "./colspanFull.js";
import rotateClasses from "./rotateClasses.js";

document.title = document.querySelector("#title")?.textContent as string;

document.addEventListener("DOMContentLoaded", colspanFull);

document
    .querySelector("#change-alert")
    ?.addEventListener("click", (event) =>
        rotateClasses(event, ["alert-warning", "alert-success", "alert-danger"])
    );

document
    .querySelector("#breakpoint")
    ?.addEventListener("click", (event) =>
        rotateClasses(event, ["start-0", "end-0"])
    );
