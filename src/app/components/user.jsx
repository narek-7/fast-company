import React, { useState, useEffect } from "react";
import api from "../api/index";
import { useParams, useHistory } from "react-router-dom";
import Quality from "./ui/quality";
// import { Link } from "react-router-dom";

const User = () => {
   const params = useParams();
   const history = useHistory();
   const [activeUser, setActiveUser] = useState();

   useEffect(() => {
      api.users.getById(params.id).then((user) => {
         if (user) {
            setActiveUser(user);
         }
      });
   });

   if (activeUser) {
      return (
         <div id="activeUser">
            <h2>{activeUser.name}</h2>
            <h4>{`Profession: ${activeUser.profession.name}`}</h4>
            <div>
               <Quality qualitiesList={activeUser.qualities} />
            </div>
            <p>{`completedMeetings: ${activeUser.completedMeetings}`}</p>
            <h4> {`Rate: ${activeUser.rate}`}</h4>
            <button
               className="btn btn-outline-secondary"
               onClick={() => history.push("/users")}
            >
               {"All Users"}
            </button>
         </div>
      );
   }
   return <h4>{"...loading"}</h4>;
};

export default User;
