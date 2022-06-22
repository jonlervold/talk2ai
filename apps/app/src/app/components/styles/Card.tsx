import styled from '@emotion/styled';

const Card = styled.div`
  border: 1px solid black;
  background-color: #e4e4e4;
  width: 90%;
  margin: 1rem;
  margin-left: auto;
  margin-right: auto;
  text-align: left;
  table {
    width: 90%;
    margin: 1rem;
    border: 1px solid black;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    border-collapse: collapse;
  }
  td {
    border: 1px solid black;
  }
  th {
    font-weight: bold;
  }
  .header {
    font-weight: bold;
  }
  .timestamp {
    margin: 1rem;
  }
  .query {
    margin: 1rem;
  }
  .response {
    margin: 1rem;
    white-space: pre-line;
  }
`;

export default Card;
