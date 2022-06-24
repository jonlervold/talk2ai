import styled from '@emotion/styled';

const Option = styled.span`
  margin: 1rem;
  min-width: 200px;
  display: inline-flex;
  flex-direction: column;
  select {
    text-align: center;
    width: 50%;
    height: 2rem;
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
  .slider-number {
    font-style: italic;
  }
  .option-description {
    margin-top: 1rem;
  }
`;

export default Option;
