import styled from 'styled-components';

export const Form = styled.div`
  width: 700px;
  height: calc(100vh - 61px);
  margin: 20px auto;
  display: flex;
  flex-flow: column;
`;

export const FormGroup = styled.div`
  margin-bottom: 1rem;
`;

export const Label = styled.label`
  display: inline-block;
  margin-bottom: 0.5rem;
`;

export const Input = styled.input`
  display: block;
  height: (calc1.5rem + 0.75rem + 2px);
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #495057;
  background-color: #fff;
  background-clip: padding-box;
  border-radius: 0.25rem;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
`;

export const InputText = styled(Input)`
  resize: none;
  width: 100%;
  border: 1px solid #ced4da;
`;

export const CreateBtn = styled.button`
  width: 100px;
  color: #fff;
  background-color: #007bff;
  border-color: #007bff;
  height: 35px;
  display: inline-block;
  font-weight: 400;
  text-align: center;
  vertical-align: middle;
  cursor: pointer;
  user-select: none;
  border: 1px solid transparent;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  line-height: 1.5;
  border-radius: 0.25rem;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
`;
