function sortTable(columnIndex) {
    const table = document.querySelector(".missions-table tbody");
    const rows = Array.from(table.rows);
    const isAscending = table.dataset.sortOrder !== "asc";

    rows.sort((rowA, rowB) => {
        const cellA = rowA.cells[columnIndex].textContent.trim();
        const cellB = rowB.cells[columnIndex].textContent.trim();

        return isAscending
            ? cellA.localeCompare(cellB, undefined, { numeric: true })
            : cellB.localeCompare(cellA, undefined, { numeric: true });
    });

    // Append sorted rows
    rows.forEach(row => table.appendChild(row));
    table.dataset.sortOrder = isAscending ? "asc" : "desc";
}


function filterTable(columnIndex) {
    const input = document.querySelectorAll("thead input")[columnIndex];
    const filter = input.value.toUpperCase();
    const table = document.querySelector(".missions-table");
    const rows = table.querySelectorAll("tbody tr");

    rows.forEach(row => {
        const cell = row.cells[columnIndex];
        if (cell && cell.textContent.toUpperCase().includes(filter)) {
            row.style.display = "";
        } else {
            row.style.display = "none";
        }
    });
}
