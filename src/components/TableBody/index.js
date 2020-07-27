import React from "react";
import { useUserContext } from "../../utils/userContext";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function TableBody() {
    const data = useUserContext();
    console.log(data);
    const element = [];
    for (let i = 0; i < data.length; i++) {
        element.push(
            <tr>
                <td><img src={data[i].image} alt={data[i].id} /></td>
                <td>{data[i].name}</td>
                <td>{data[i].phone}</td>
                <td>{data[i].email}</td>
                <td>{data[i].DOB}</td>
            </tr>
        )
    };
    return (
        <tbody>
            {element}
        </tbody>
    );

}

export default TableBody;
