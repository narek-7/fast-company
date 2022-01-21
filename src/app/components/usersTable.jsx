import React from "react";
import TableHeader from "./common/table/tableHeader";
import TableBody from "./common/table/tableBody";
import Table from "./common/table/table";
import Bookmark from "./common/bookmark";
import Quality from "./ui/quality";
import PropTypes from "prop-types";

const UsersTable = ({
   onUserStatusChange,
   selectedSort,
   onDeleteUser,
   onSort,
   users
}) => {
   const columns = {
      name: { path: "name", name: "Имя" },
      qualities: {
         name: "Качества",
         component: (user) => <Quality qualitiesList={user.qualities} />
      },
      profession: { path: "profession.name", name: "Профессия" },
      completedMeetings: { path: "completedMeetings", name: "Встретился, раз" },
      rate: { path: "rate", name: "Оценка" },
      favorite: {
         path: "favorite",
         name: "Избранное",
         component: (user) => (
            <span onClick={() => onUserStatusChange(user._id)}>
               <Bookmark status={user.favorite} />
            </span>
         )
      },
      delete: {
         component: (user) => (
            <button
               type="button"
               className="btn btn-danger"
               onClick={() => onDeleteUser(user._id)}
            >
               delete
            </button>
         )
      }
   };
   return (
      <Table
         onSort={onSort}
         selectedSort={selectedSort}
         columns={columns}
         data={users}
      >
         <TableHeader {...{ onSort, selectedSort, columns }} />
         <TableBody {...{ columns, data: users }} />
      </Table>
   );
};

UsersTable.propTypes = {
   users: PropTypes.array.isRequired,
   onSort: PropTypes.func.isRequired,
   selectedSort: PropTypes.object.isRequired,
   onUserStatusChange: PropTypes.func.isRequired,
   onDeleteUser: PropTypes.func.isRequired
};

export default UsersTable;
