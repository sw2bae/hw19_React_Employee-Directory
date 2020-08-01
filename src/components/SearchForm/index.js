import React from "react";
// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function SearchForm(props) {
    return (

        <div className="form-group container col-4 mb-5">
            <input
                onChange={props.handleSearch}
                name="term"
                type="text"
                className="form-control"
                placeholder="Search"
            />
        </div>

    );
}
export default SearchForm;
