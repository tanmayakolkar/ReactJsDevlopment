import React, { useState } from "react";
import { render } from "react-dom";
import axios from "axios";

const Home = () => {
  let [user, setUser] = useState({
    email: "",
    password: "",
  });

  let update = (event) => {
    setUser({
      ...user,
      [event.target.name]: event.target.value,
    });
  };
  let submit = (event) => {
    event.preventDefault();

    let url = "https://reqres.in/api/login";

    const config = {
      headers: {
        "Content-type": "application/json",
      },
    };
    let body = {
      email: user.email,
      password: user.password,
    };
    axios
      .post(url, body, config)
      .then((res) => {
        alert("Successfully logged");
        let url = "https://reqres.in/api/unknown";
        const config = {
          headers: {
            Authorization: `Bearer ${res.data.token}`,
            "Content-type": "application/json",
          },
        };
        axios
          .get(url, config)
          .then((res1) => {
            console.log(res1.data.data);
          })
          .catch((error1) => {
            console.log(error1);
          });
      })
      .catch((err) => {
        if (err) {
          alert("Invalid UserName or PassWord! Please check it again.");
        }
      });
  };
  return (
    <div>
      <pre>{JSON.stringify(user)}</pre>
      <div>
        <div>
          <h3>Hello there, Sign in to continue</h3>

          <div>
            <form onSubmit={submit}>
              <div>
                <label>Username/Email</label>
                <input
                  value={user.email}
                  name="email"
                  onChange={update}
                  type="text"
                />
                <div></div>
              </div>
              <div>
                <label>Password</label>
                <input
                  value={user.password}
                  name="password"
                  onChange={update}
                  type="password"
                />
                <div></div>
              </div>
              <button class="btn bt-sm btn-danger">Login</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
