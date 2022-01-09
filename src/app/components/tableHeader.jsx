import React, { useState } from "react";
import PropTypes from "prop-types";
import Arrow from "./arrow";

const TableHeader = ({ onSort, selectedSort, columns }) => {
   const [direction, setDirection] = useState({
      columnName: "",
      columnOrder: "asc"
   });

   const handleSort = (item) => {
      if (selectedSort.path === item) {
         const activOrder = selectedSort.order === "asc" ? "desc" : "asc";
         onSort({
            ...selectedSort,
            order: activOrder
         });
         handleDirection(item, activOrder);
      } else {
         onSort({ path: item, order: "asc" });
         handleDirection(item, "asc");
      }
   };

   const handleDirection = (item, order) => {
      setDirection({ columnName: item, columnOrder: order });
   };

   return (
      <thead>
         <tr>
            {Object.keys(columns).map((column) => {
               return (
                  <th
                     key={column}
                     onClick={
                        columns[column].path
                           ? () => handleSort(columns[column].path)
                           : undefined
                     }
                     {...{ role: columns[column].path ? "button" : "" }}
                  >
                     {columns[column].name}
                     {
                        <Arrow
                           direction={direction}
                           column={columns[column].path}
                        />
                     }
                  </th>
               );
            })}
         </tr>
      </thead>
   );
};

TableHeader.propTypes = {
   onSort: PropTypes.func.isRequired,
   selectedSort: PropTypes.object.isRequired,
   columns: PropTypes.object.isRequired
};

export default TableHeader;
