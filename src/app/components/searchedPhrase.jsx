import React from "react";
import PropTypes from "prop-types";

const SearchedPhrase = ({ onSearch, searchedPhrase }) => {
   return (
      <div className="mb-4">
         <input
            type="text"
            className="form-control"
            placeholder="Search..."
            onChange={(e) => onSearch(e.target.value)}
            value={searchedPhrase}
         />
      </div>
   );
};

SearchedPhrase.propTypes = {
   onSearch: PropTypes.func,
   searchedPhrase: PropTypes.string
};

export default SearchedPhrase;
