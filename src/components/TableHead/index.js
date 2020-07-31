import React from "react";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function TableHead({ sortByChar, sortByNum }) {
    return (
        <thead>
            <tr>
                <th scope="col">Image</th>
                <th scope="col">Name
                <button type="button" mode="A" onClick={sortByChar}>A</button>
                    {/* <button type="button" mode="Z" onClick={sortByChar}>Z</button> */}
                </th>
                <th scope="col">Phone</th>
                <th scope="col">Email</th>
                <th scope="col">DOB
                <button type="button" mode="0" onClick={sortByNum}>↑</button>
                    {/* <button type="button" mode="10" onClick={sortByNum}>Young</button> */}
                </th>
            </tr>
        </thead>
    );
}

export default TableHead;
