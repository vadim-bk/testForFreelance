import styled from 'styled-components';

export const Container = styled.div`
  width: 75%;
  margin: 0 auto;
  height: calc(100vh - 61px);
`;

export const List = styled.ul`
  display: flex;
  flex-flow: wrap;
  justify-content: center;
  list-style-type: none;
`;

export const Item = styled.li`
  border: 1px solid #b7b7b7;
  border-radius: 5px;
  width: 200px;
  margin: 10px;
  display: flex;
  flex-flow: column;
  align-items: center;
  padding: 10px;
  position: relative;
`;

export const ItemImg = styled.img`
  width: 150px;
`;

export const WrapperBtn = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  display: flex;
  flex-flow: column;
`;

export const BtnAction = styled.button`
  border: none;
  background-color: transparent;
  font-size: 18px;
  outline: none;
  cursor: pointer;
`;
