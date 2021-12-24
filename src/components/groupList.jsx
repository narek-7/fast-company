import React from "react";
import PropTypes from "prop-types";

const GroupList = ({
   items,
   valueProperty,
   contentProperty,
   onItemSelect,
   selectedItem
}) => {
   const profList = Object.keys(items);
   console.log("items", items);
   return (
      <ul className="list-group">
         {profList.map((item) => (
            <li
               className={
                  "list-group-item" +
                  (items[item] === selectedItem ? " active" : "")
               }
               key={items[item][valueProperty]}
               onClick={() => onItemSelect(items[item])}
               role="button"
            >
               {items[item][contentProperty]}
            </li>
         ))}
      </ul>
   );
};

GroupList.defaultProps = {
   valueProperty: "_id",
   contentProperty: "name"
};

GroupList.propTypes = {
   items: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
   valueProperty: PropTypes.string.isRequired,
   contentProperty: PropTypes.string.isRequired,
   onItemSelect: PropTypes.func,
   selectedItem: PropTypes.object
};

export default GroupList;
