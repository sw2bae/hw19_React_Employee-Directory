import React from "react";
// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function SearchForm(props) {
    return (
        <form className="search">
            <div className="form-group">
                <input
                    onChange={props.handleSearch}
                    name="term"
                    type="text"
                    className="form-control"
                    placeholder="Search"
                />
            </div>
        </form>
    );
}
export default SearchForm;
