import React, { useState } from "react";
import axios from "axios";

function FetchUsers() {
  const [data, setData] = useState([]);
  const [error, setError] = useState([]);
  const [loading, setLoading] = useState([]);

  axios
    .get("/https://reqres.in/api/users")
    .then(function (response) {
      // handle success
      console.log(response);
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    });
  return <div>Fetch Users</div>;
}

export default FetchUsers;
