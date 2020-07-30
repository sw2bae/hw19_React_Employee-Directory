import React from "react";
// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function SearchForm(props) {
    return (

        <div className="form-group">
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
