import React from "react";
import Quality from "./quality";
import Bookmark from "./bookmark";
import PropTypes from "prop-types";

const User = (props) => {
   return (
      <tr key={props._id}>
         <td>{props.name}</td>
         <td>{<Quality {...props} />}</td>
         <td>{props.profession.name}</td>
         <td>{props.completedMeetings}</td>
         <td>{`${props.rate} / 5`}</td>
         <td>
            {
               <span onClick={() => props.onStatusChange(props._id)}>
                  <Bookmark status={props.favorite} />
               </span>
            }
         </td>
         <td>
            <button
               type="button"
               className="btn btn-danger"
               onClick={() => props.onDelete(props._id)}
            >
               delete
            </button>
         </td>
      </tr>
   );
};

User.propTypes = {
   _id: PropTypes.string.isRequired,
   name: PropTypes.string.isRequired,
   profession: PropTypes.object,
   onDelete: PropTypes.func.isRequired,
   rate: PropTypes.number.isRequired,
   completedMeetings: PropTypes.number.isRequired,
   favorite: PropTypes.number.isRequired,
   onStatusChange: PropTypes.func.isRequired
};

export default User;
