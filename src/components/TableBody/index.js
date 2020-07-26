import React from "react";
import { useUserContext } from "../../utils/userContext";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function TableBody() {
    const { image, name, phone, email, DOB } = useUserContext();
    let element = [];
    for (let i = 0; i < image.length; i++) {
        element.push(
            <tr>
                <td><img src={image[i]} alt={i} /></td>
                <td>{name[i]}</td>
                <td>{phone[i]}</td>
                <td>{email[i]}</td>
                <td>{DOB[i]}</td>
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
