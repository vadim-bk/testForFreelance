import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import routes from '../../config/routes';
import { getRandomInt } from '../../helpers';
import { ItemImg } from '../Home/Home.styled';
import { Spinner } from '../../common/Spinner';
import { editUser, getUser } from '../Home/Home.actions';
import { GET_USER_FAILURE } from '../../config/types';
import { createUser } from './CreateUser.actions';
import { CreateBtn, Form, FormGroup, Input, InputText, Label } from './CreateUser.styled';

export const CreateUser = ({ match }) => {
  const id = match.params.id;
  const { currentUser } = useSelector((state) => state.home);

  const initialState = {
    id: `${getRandomInt(100)} ${new Date()}`,
    first_name: '',
    last_name: '',
    email: '',
    avatar: null,
  };

  const [fields, setFields] = useState(initialState);

  const history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    if (id) {
      dispatch(getUser(id));
    }
    return () => {
      setFields(initialState);
      dispatch({ type: GET_USER_FAILURE });
    };
  }, [id]);

  useEffect(() => {
    if (currentUser?.id) {
      setFields({
        ...fields,
        id: currentUser?.id,
        first_name: currentUser?.first_name,
        last_name: currentUser?.last_name,
        email: currentUser?.email,
        avatar: currentUser?.avatar,
      });
    }
  }, [currentUser]);

  const handleChangeInput = (e, input) => setFields({ ...fields, [input]: e.target.value });

  const handleUploadAvatar = (e) => {
    e.preventDefault();
    let reader = new FileReader();
    let file = e.target.files[0];
    reader.onloadend = () => setFields({ ...fields, avatar: reader.result });
    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = () => {
    if (
      fields.first_name.length &&
      fields.first_name.length &&
      fields.email.length &&
      fields.avatar
    ) {
      if (id) {
        dispatch(editUser(fields));
      } else {
        dispatch(createUser(fields));
      }
      setFields(initialState);
      history.push(routes.home);
    }
  };

  return id && fields.id !== id ? (
    <Spinner />
  ) : (
    <Form>
      <FormGroup>
        <Label>First name</Label>
        <InputText
          placeholder="Enter first name"
          value={fields.first_name}
          onChange={(e) => handleChangeInput(e, 'first_name')}
        ></InputText>
      </FormGroup>

      <FormGroup>
        <Label>Last name</Label>
        <InputText
          placeholder="Enter last name"
          value={fields.last_name}
          onChange={(e) => handleChangeInput(e, 'last_name')}
        ></InputText>
      </FormGroup>

      <FormGroup>
        <Label>Email</Label>
        <InputText
          placeholder="Enter email"
          value={fields.email}
          onChange={(e) => handleChangeInput(e, 'email')}
        ></InputText>
      </FormGroup>

      <FormGroup>
        <Label>Photo</Label>
        <Input type="file" onChange={handleUploadAvatar}></Input>
        {fields.avatar && <ItemImg src={fields.avatar} />}
      </FormGroup>

      <CreateBtn onClick={handleSubmit}>{id ? 'Update' : 'Create'}</CreateBtn>
    </Form>
  );
};
