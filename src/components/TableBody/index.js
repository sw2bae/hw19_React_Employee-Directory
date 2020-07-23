import React from "react";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function TableBody() {
    return (
        <tbody>
            <tr>
                <th scope="row">1</th>
                <td>A</td>
                <td>B</td>
                <td>C</td>
                <td>D</td>
            </tr>
            <tr>
                <th scope="row">2</th>
                <td>E</td>
                <td>F</td>
                <td>G</td>
                <td>H</td>
            </tr>
        </tbody>
    );
}

export default TableBody;
