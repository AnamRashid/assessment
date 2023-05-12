import React, { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { showUser } from "../features/userDetailSlice";
import { deleteUser } from "../features/userDetailSlice";
import CustomModal from "./CustomModal";
import axios from "axios";
import { Link } from "react-router-dom";
import { dispatch } from "react";


const Read = () => {

  const [id, setId]= useState();

  const [showPopup , setShowPopup] = useState(false);

  const [users, setUsers] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      // Make a request for a user with a given ID
      axios
        .get("https://6458c7b24eb3f674df7d1c0b.mockapi.io/crud")
        .then(function (response) {
          // handle success
          setUsers(response.data);
        });
    };
    fetchData();
  }, []);

  return (
    <div>
    { showPopup && <CustomModal id={id} showPopup={showPopup} setShowPopup={setShowPopup}/>}
      <h2>All Data</h2>
      <div>
        {users.map((user, _index) => {
          return (
            <div key={user.id} className="card w-50 mx-auto">
              <div className="card-body">
                <h5 className="card-title">{user.name}</h5>
                <h6 className="card-subtitle mb-2 text-body-secondary">
                {user.email}
                </h6>
                <p className="card-text">{user.number}</p>
                <p className="card-text">{user.age}</p>
                <p className="card-text">{user.gender}</p>
                <button className="card-link" onClick={() => [setId(user.id) , setShowPopup(true)]}>
                  view
                </button>
                <Link to={'/edit/${user.id}'} class="card-link">
                  edit
                </Link>
                <Link onClick={ () => dispatch(deleteUser(user.id))} class="card-link">
                  delete
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Read;