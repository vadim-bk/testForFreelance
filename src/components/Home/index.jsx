import React, { useEffect, useState } from 'react';

// import { getAllUsers } from "../redux/usersReducer";

export const Home = () => {

  const dispatch = useDispatch()

  

  useEffect(() => {
    getAllUsers();
  }, []);

  return <>{/* <Users users={currentUsers} /> */}</>;
};
