import React from "react";
import { useUserContext } from "../../utils/userContext";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function TableBody() {
    const data = useUserContext();
    return (
        <tbody>
            {data.map((user) => {
                return (
                    <tr key={user.id}>
                        <td><img src={user.image} alt={user.id} /></td>
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