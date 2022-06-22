import styled from '@emotion/styled';

const Card = styled.div`
  box-sizing: border-box;
  padding: 1rem;
  border: 1px solid black;
  background-color: #e4e4e4;
  width: 90%;
  margin: 1rem;
  margin-left: auto;
  margin-right: auto;
  text-align: left;
  table {
    table-layout: fixed;
    font-size: 0.75rem;
    width: 90%;
    margin-top: 1rem;
    border: 1px solid black;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    border-collapse: collapse;
  }

  th {
    font-weight: bold;
  }
  .table-left-line {
    border-left: 1px solid black;
  }
  .timestamp {
    margin-top: 1rem;
  }
  .query {
    margin-top: 1rem;
  }
  .response {
    margin-top: 1rem;
    white-space: pre-line;
  }
  #card-number {
    font-size: 1.25rem;
  }
  #query-heading {
    margin-bottom: 1rem;
  }
  #response-heading {
    margin-bottom: 1rem;
  }
  #stop-reason-td {
    text-transform: capitalize;
  }
  #export-entry-button {
    margin-top: 1rem;
    display: table;
    width: 57.5%;
  }
  #remove-button {
    margin-top: 0.33rem;
    display: table;
    width: 57.5%;
  }
`;

export default Card;
