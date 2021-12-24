import React, { useState, useEffect } from "react";
import { paginate } from "../utils/paginate";
import SearchStatus from "./searchStatus";
import Pagination from "./pagination";
import GroupList from "./groupList";
import PropTypes from "prop-types";
import api from "../api/index";
import User from "./user";

const Users = ({ usersList, onDeleteUser, onUserStatusChange }) => {
   const pageSize = 2;
   const [currentPage, setCurrentPage] = useState(1);
   const [professions, setProfessions] = useState();
   const [selectedProf, setSelectedProf] = useState();

   useEffect(() => {
      api.professions.fetchAll().then((data) => {
         if (Array.isArray(data)) {
            const object = {};
            data.forEach((elem) => (object[elem.name] = elem));
            setProfessions(object);
         } else {
            setProfessions(data);
         }
      });
   }, []);

   useEffect(() => {
      setCurrentPage(1);
   }, [selectedProf]);

   const handleProfessionSelect = (item) => {
      setSelectedProf(item);
   };

   const handlePageChange = (pageIndex) => {
      setCurrentPage(pageIndex);
   };

   const filteredUsers = selectedProf
      ? usersList.filter((user) => user.profession.name === selectedProf.name)
      : usersList;

   const count = filteredUsers.length;

   const userCrop = paginate(filteredUsers, currentPage, pageSize);

   const clearFilteredUsers = () => {
      setSelectedProf();
      setCurrentPage(1);
   };

   return (
      <div className="d-flex">
         {professions && (
            <div className="d-flex flex-column flex-shrink-0 p-3">
               <GroupList
                  items={professions}
                  onItemSelect={handleProfessionSelect}
                  selectedItem={selectedProf}
               />
               <button
                  className="btn btn-secondary mt-2"
                  onClick={clearFilteredUsers}
               >
                  Очистить
               </button>
            </div>
         )}
         <div className="d-flex flex-column">
            <SearchStatus {...filteredUsers} />
            {count > 0 && (
               <table className="table" id="usersTable">
                  <thead>
                     <tr>
                        <th>Имя</th>
                        <th>Качества</th>
                        <th>Профессия</th>
                        <th>Встретился, раз</th>
                        <th>Оценка</th>
                        <th>Избранное</th>
                        <th> </th>
                     </tr>
                  </thead>
                  <tbody>
                     {userCrop.map((user) => (
                        <User
                           key={user._id}
                           {...user}
                           onDelete={onDeleteUser}
                           onStatusChange={onUserStatusChange}
                        />
                     ))}
                  </tbody>
               </table>
            )}
            <div className="d-flex justify-content-center">
               <Pagination
                  itemsCount={count}
                  pageSize={pageSize}
                  currentPage={currentPage}
                  onPageChange={handlePageChange}
               />
            </div>
         </div>
      </div>
   );
};

Users.propTypes = {
   usersList: PropTypes.array.isRequired,
   onDeleteUser: PropTypes.func.isRequired,
   onUserStatusChange: PropTypes.func.isRequired
};

export default Users;
