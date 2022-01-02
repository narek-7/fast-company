import React, { useState, useEffect } from "react";
import { paginate } from "../utils/paginate";
import SearchStatus from "./searchStatus";
import Pagination from "./pagination";
import UsersTable from "./usersTable";
import GroupList from "./groupList";
import PropTypes from "prop-types";
import api from "../api/index";
import _ from "lodash";

const Users = ({ usersList, ...rest }) => {
   const pageSize = 8;
   const [currentPage, setCurrentPage] = useState(1);
   const [professions, setProfessions] = useState();
   const [selectedProf, setSelectedProf] = useState();
   const [sortBy, setSortBy] = useState({ iter: "name", order: "asc" });

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
   const sortedUsers = _.orderBy(filteredUsers, [sortBy.path], [sortBy.order]);
   const userCrop = paginate(sortedUsers, currentPage, pageSize);
   const count = filteredUsers.length;

   const clearFilteredUsers = () => {
      setSelectedProf();
      setCurrentPage(1);
   };

   const handleSort = (item) => {
      setSortBy(item);
   };

   return (
      <div className="d-flex">
         {professions && (
            <div className="d-flex flex-column flex-shrink p-3">
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
            <SearchStatus itemsCount={count} />
            {count > 0 && (
               <UsersTable
                  users={userCrop}
                  onSort={handleSort}
                  selectedSort={sortBy}
                  {...rest}
               />
            )}

            <div className="d-flex justify-content-center">
               <Pagination
                  itemsCount={count}
                  pageSize={pageSize}
                  currentPage={currentPage}
                  {...handlePageChange}
               />
            </div>
         </div>
      </div>
   );
};

Users.propTypes = {
   usersList: PropTypes.array.isRequired
};

export default Users;
