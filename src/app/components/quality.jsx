import React from "react";
import PropTypes from "prop-types";

const Quality = ({ qualitiesList }) => {
   return (
      <>
         {qualitiesList.map((quality) => {
            return (
               <span
                  className={`badge rounded-pill bg-${quality.color}`}
                  key={quality._id}
               >
                  {quality.name}
               </span>
            );
         })}
      </>
   );
};

Quality.propTypes = {
   _id: PropTypes.string,
   qualitiesList: PropTypes.array.isRequired
};

export default Quality;
