"use strict";

document.title = document.querySelector("#title").textContent;

document.addEventListener("DOMContentLoaded", () => {
    const selector = ".colspan-full";
    const elements = document.querySelectorAll(selector);
    for (const e of elements) {
        let table = e.parentElement;
        while (table.tagName.toLowerCase() !== "table") {
            table = table.parentElement;
        }

        if (table !== undefined) {
            const columnCount = table
                .querySelector("thead", table)
                .querySelector("tr")
                .querySelectorAll("th, td").length;
            e.setAttribute("colspan", columnCount);
        } else {
            console.error("couldn't find the table!");
        }
    }
});

function switchClasses(event, classes) {
    const target = event.target.parentElement;
    for (let i = classes.length; i > 0; i--) {
        const e = classes[i - 1];
        if (target.classList.contains(e)) {
            target.classList.remove(e);
            target.classList.add(classes[i % classes.length]);
            break;
        }
    }
}

document
    .querySelector("#change-alert")
    .addEventListener("click", (event) =>
        switchClasses(event, ["alert-warning", "alert-success", "alert-danger"])
    );

document
    .querySelector("#breakpoint")
    .addEventListener("click", (event) =>
        switchClasses(event, ["start-0", "end-0"])
    );
