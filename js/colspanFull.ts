export default function () {
    const selector = ".colspan-full";
    const tables = document.querySelectorAll("table");
    for (const table of tables) {
        const elements = table.querySelectorAll(selector);
        const columns = table
            .querySelector("thead")
            ?.querySelector("tr")
            ?.querySelectorAll("th, td").length;
        if (columns) {
            for (const element of elements) {
                element.setAttribute("colspan", columns.toString());
            }
        }
    }
}
