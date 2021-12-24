import React, { useState, useEffect } from "react";
import Users from "./components/users";
import api from "./api/index";

const App = () => {
   let initialUsers = [];
   let newUsersArray = [];
   const [users, setUsers] = useState([]);

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

   function handleDelete(userId) {
      setUsers((prevState) => prevState.filter((user) => user._id !== userId));
      hideUsersTable(users.length);
   }

   const hideUsersTable = (numberOfUsers) => {
      if (numberOfUsers === 1) {
         document.querySelector("#usersTable").style.display = "none";
      }
   };

   const handleUsersList = () => {
      if (users.length) {
         return (
            <Users
               usersList={users}
               onDeleteUser={handleDelete}
               onUserStatusChange={handleStatusChange}
            />
         );
      }
   };

   return <>{handleUsersList(users)}</>;
};

export default App;
