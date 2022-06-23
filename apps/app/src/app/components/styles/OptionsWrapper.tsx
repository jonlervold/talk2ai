import styled from '@emotion/styled';

const OptionsWrapper = styled.div`
  background-color: #f5f5f5;
  display: inline-block;
  width: 90%;
  margin-top: 1rem;
  margin-left: auto;
  margin-right: auto;
  border: 1px solid black;
  select {
    text-align: center;
    width: 50%;
    height: 1.5rem;
  }
  input {
    width: 50%;
  }
  table {
    margin-top: 1rem;
    border: 1px solid black;
    border-collapse: collapse;
  }
  td {
    border: 1px solid black;
    padding: 0.5rem;
  }
  #option-descriptions-toggle {
    width: 55.4%;
    margin: 1rem;
  }
`;

export default OptionsWrapper;
