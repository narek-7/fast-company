import React, { useState, useEffect } from "react";
import SearchedPhrase from "../components/searchedPhrase";
import SearchStatus from "../components/ui/searchStatus";
import UsersTable from "../components/usersTable";
import Pagination from "../components/common/pagination";
import GroupList from "../components/common/groupList";
import { paginate } from "../utils/paginate";
import PropTypes from "prop-types";
import api from "../api/index";
import _ from "lodash";

const Users = () => {
   let initialUsers = [];
   let newUsersArray = [];
   const pageSize = 8;
   const [users, setUsers] = useState();
   const [currentPage, setCurrentPage] = useState(1);
   const [professions, setProfessions] = useState();
   const [selectedProf, setSelectedProf] = useState();
   const [searchedPhrase, setSearchedPhrase] = useState("");
   const [sortBy, setSortBy] = useState({ iter: "name", order: "asc" });
   let count = -1;

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

   useEffect(() => {
      api.users.fetchAll().then((data) => {
         initialUsers = data;
         newUsersArray = addStatusToUsers(initialUsers);
         setUsers(newUsersArray);
      });
   }, []);

   function addStatusToUsers(prevUsers) {
      return prevUsers.map((user) => {
         return { ...user, favorite: Math.floor(Math.random() * 2) };
      });
   }

   const handleStatusChange = (userId) => {
      setUsers(
         users.map((user) => {
            if (user._id === userId) {
               user.favorite = Number(!user.favorite);
            }
            return user;
         })
      );
   };

   const handleSearchInput = (e) => {
      if (e.trim()) {
         clearFilteredUsers();
         setSearchedPhrase((prevState) => (prevState = e));
      } else {
         setSearchedPhrase((prevState) => (prevState = ""));
      }
   };

   function handleDelete(userId) {
      setUsers((prevState) => prevState.filter((user) => user._id !== userId));
   }

   const handleProfessionSelect = (item) => {
      setSearchedPhrase((prevState) => (prevState = ""));
      setSelectedProf(item);
   };

   const handlePageChange = (pageIndex) => {
      setCurrentPage(pageIndex);
   };

   const clearFilteredUsers = () => {
      setSelectedProf();
      setCurrentPage(1);
   };

   const handleSort = (item) => {
      setSortBy(item);
   };

   if (users) {
      let filteredUsers = [];
      if (selectedProf) {
         filteredUsers = users.filter(
            (user) => user.profession.name === selectedProf.name
         );
      }
      if (searchedPhrase) {
         filteredUsers = users.filter((user) =>
            user.name.includes(searchedPhrase)
         );
      }
      if (!selectedProf && !searchedPhrase) {
         filteredUsers = users;
      }

      const sortedUsers = _.orderBy(
         filteredUsers,
         [sortBy.path],
         [sortBy.order]
      );
      const userCrop = paginate(sortedUsers, currentPage, pageSize);
      count = filteredUsers.length;

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
                     ????????????????
                  </button>
               </div>
            )}

            <div className="d-flex flex-column">
               {count >= 0 && <SearchStatus itemsCount={count} />}
               <SearchedPhrase
                  onSearch={handleSearchInput}
                  searchedPhrase={searchedPhrase}
               />
               {count > 0 && (
                  <UsersTable
                     users={userCrop}
                     onSort={handleSort}
                     selectedSort={sortBy}
                     onDeleteUser={handleDelete}
                     onUserStatusChange={handleStatusChange}
                  />
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
   }
   return <h4>{"...loading"}</h4>;
};

Users.propTypes = {
   users: PropTypes.array
};

export default Users;
