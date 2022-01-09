import React from "react";
import PropTypes from "prop-types";

const SearchStatus = ({ itemsCount }) => {
   const numberOfUsers = itemsCount;

   const getBageClasses = () => {
      return numberOfUsers ? "badge bg-primary" : "badge bg-danger";
   };

   const renderPhrase = () => {
      if (numberOfUsers > 4 || numberOfUsers === 1) {
         return `${numberOfUsers} человек тусанет с тобой сегодня`;
      }
      if (numberOfUsers > 1) {
         return `${numberOfUsers} человека тусанет с тобой сегодня`;
      }
      if (numberOfUsers === 0) {
         return "Никто с тобой не тусанет";
      }
   };

   return (
      <span id="message" className={getBageClasses()}>
         {renderPhrase()}
      </span>
   );
};

SearchStatus.propTypes = {
   itemsCount: PropTypes.number
};

export default SearchStatus;
