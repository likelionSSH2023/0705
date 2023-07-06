// Child.jsx
import React, { useContext } from 'react';
import { userContext } from '../../App';

export default function Child() {
  const user = useContext(userContext);

  return (
    <>
      <p>name: {user.name}</p>
      <p>job: {user.job}</p>
    </>
  );
}