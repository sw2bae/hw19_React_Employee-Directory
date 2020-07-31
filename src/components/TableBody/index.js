import React from "react";
import { useUserContext } from "../../utils/userContext";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function TableBody() {
    const data = useUserContext();
    // console.log(data);
    return (
        <tbody>
            {data.map((user, index) => {
                return (
                    <tr key={index}>
                        <td><img src={user.image} alt={user.uuid} /></td>
                        <td>{user.name}</td>
                        <td>{user.phone}</td>
                        <td>{user.email}</td>
                        <td>{user.DOB}</td>
                    </tr>
                )
            })}
        </tbody>
    );

}

export default TableBody;