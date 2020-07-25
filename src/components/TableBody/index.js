import React from "react";
import { useUserContext } from "../../utils/userContext";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function TableBody() {
    const { image, name, phone, email, DOB } = useUserContext;
    return (
        <tbody>
            <tr>
                <th>{image}</th>
                <td>{name}</td>
                <td>{phone}</td>
                <td>{email}</td>
                <td>{DOB}</td>
            </tr>
            <tr>
                <td>2</td>
                <td>E</td>
                <td>F</td>
                <td>G</td>
                <td>H</td>
            </tr>
        </tbody>
    );
}

export default TableBody;
