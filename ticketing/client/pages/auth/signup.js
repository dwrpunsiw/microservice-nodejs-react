import { useState } from "react";
import Router from "next/router";
import useRequest from "../../hooks/use-request";

export default () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  //   const [errors, setErrors] = useState([]);
  const { doRequest, errors } = useRequest({
    url: "/api/users/signup",
    method: "POST",
    body: {
      email,
      password,
    },
    onSuccess: () => Router.push("/"),
  });

  const onEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const onPasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    // try {
    //   const response = await axios.post("/api/users/signup", {
    //     email,
    //     password,
    //   });
    // } catch (error) {
    //   setErrors(error.response.data.errors);
    // }

    await doRequest();
  };

  return (
    <form onSubmit={onSubmit}>
      <h1>Sign Up</h1>
      <div className="form-group">
        <label>Email Address</label>
        <input
          type="text"
          className="form-control"
          value={email}
          onChange={onEmailChange}
        />
      </div>
      <div className="form-group">
        <label>Password</label>
        <input
          type="password"
          className="form-control"
          value={password}
          onChange={onPasswordChange}
        />
      </div>
      {errors}
      <button className="btn btn-primary">Sign Up</button>
    </form>
  );
};
