import React from "react";
import TableHead from "../TableHead";
import TableBody from "../TableBody"

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function TableContainer({ sortByChar }) {
    return (
        <table className="table table-striped">
            <TableHead onClick={sortByChar} />
            <TableBody />
        </table>
    );
}

export default TableContainer;
