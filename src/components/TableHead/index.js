import React from "react";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function TableHead() {
    return (
        <thead>
            <tr>
                <th scope="col">Image</th>
                <th scope="col">Name</th>
                <th scope="col">Phone</th>
                <th scope="col">Email</th>
                <th scope="col">DOB</th>
            </tr>
        </thead>
    );
}

export default TableHead;
