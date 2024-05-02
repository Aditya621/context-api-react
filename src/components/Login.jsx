import React, { useContext, useState } from 'react';
import UserContext from '../context/UserContext';

function Login() {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');

  const { setUser } = useContext(UserContext);

  function handleSubmit(e) {
    e.preventDefault();
    setUser({ userName, password });
    setUserName('');
    setPassword('');
  }

  return (
    <>
      <input
        type="text"
        placeholder="Username"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
      />{' '}
      <input
        type="text"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleSubmit}>Submit</button>
    </>
  );
}

export default Login;
