import React from "react";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function TableHead({ sortByChar }) {
    return (
        <thead>
            <tr>
                <th scope="col">Image</th>
                <th scope="col">Name<button type="button" mode="AtoZ" onClick={sortByChar}></button></th>
                <th scope="col">Phone</th>
                <th scope="col">Email</th>
                <th scope="col">DOB<button type="button" mode="0to10" /*onClick={}*/></button></th>
            </tr>
        </thead>
    );
}

export default TableHead;
