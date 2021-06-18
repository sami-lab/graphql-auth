import React, { useState } from 'react';

function AuthForm(props) {
  const [data, setData] = useState({
    email: '',
    password: '',
  });

  const onSubmit = (e) => {
    e.preventDefault();
    props.onSubmit(data);
  };
  return (
    <div className="row">
      <form className="col s4" onSubmit={onSubmit}>
        <div className="input-field">
          <label>Email</label>
          <input
            value={data.email}
            onChange={(e) => setData({ ...data, email: e.target.value })}
          />
        </div>
        <div className="input-field">
          <label>Password</label>
          <input
            value={data.password}
            onChange={(e) => setData({ ...data, password: e.target.value })}
          />
        </div>
        <div className="errors">
          {props.errors((err) => (
            <div key={err}>{err}</div>
          ))}
        </div>
        <button className="btn">Submit</button>
      </form>
    </div>
  );
}
export default AuthForm;
