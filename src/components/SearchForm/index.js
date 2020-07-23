import React from "react";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function SearchForm() {
    return (
        <form className="search">
            <div className="form-group">
                <input
                    // value={props.search}
                    // onChange={props.handleInputChange}
                    name="term"
                    list="term"
                    type="text"
                    className="form-control"
                    // placeholder=""
                    id="term"
                />
            </div>
        </form>
    );
}

export default SearchForm;
