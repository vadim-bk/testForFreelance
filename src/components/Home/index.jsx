import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import routes from '../../config/routes';
import { Spinner } from '../../common/Spinner';
import { getUsers, removeUser } from './Home.actions';
import { BtnAction, Container, Item, ItemImg, List, WrapperBtn } from './Home.styled';

export const Home = () => {
  const dispatch = useDispatch();

  const { loading } = useSelector((state) => state.home);
  const { users } = useSelector((state) => state.home);

  useEffect(() => {
    if (!users) {
      dispatch(getUsers());
    }
  }, []);

  const handleClickRemove = (id) => dispatch(removeUser(id));

  return loading ? (
    <Spinner />
  ) : (
    <Container>
      <List>
        {users?.map((user) => (
          <Item key={user.id}>
            <WrapperBtn>
              <BtnAction onClick={() => handleClickRemove(user.id)}>&times;</BtnAction>
              <Link to={routes.editUser + user.id}>
                <BtnAction>&#9998;</BtnAction>
              </Link>
            </WrapperBtn>

            <ItemImg src={user.avatar} alt="" />

            <p>{user.first_name + ' ' + user.last_name}</p>

            <p>{user.email}</p>
          </Item>
        ))}
      </List>
    </Container>
  );
};
