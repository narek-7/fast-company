import React, { useState } from "react";
import Users from "./components/users";
import api from "./api/index";
import SearchStatus from "./components/searchStatus";

const App = () => {
   const initialUsers = api.users.fetchAll();

   const newUsersArray = addStatusToUsers(initialUsers);
   const [users, setUsers] = useState(newUsersArray);

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

   function handleDelete(userId) {
      setUsers((prevState) => prevState.filter((user) => user._id !== userId));
      hideUsersTable(users.length);
   }

   const hideUsersTable = (numberOfUsers) => {
      if (numberOfUsers === 1) {
         document.querySelector("#usersTable").style.display = "none";
      }
   };

   return (
      <>
         <SearchStatus {...users} />
         <Users
            {...users}
            onDeleteUser={handleDelete}
            onUserStatusChange={handleStatusChange}
         />
      </>
   );
};

export default App;
