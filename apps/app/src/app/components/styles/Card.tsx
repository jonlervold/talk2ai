import styled from '@emotion/styled';

const Card = styled.div`
  box-sizing: border-box;
  padding: 1rem;
  border: 1px solid black;
  background-color: #f5f5f5;
  width: 90%;
  margin: 1rem;
  margin-left: auto;
  margin-right: auto;
  text-align: left;
  table {
    background-color: #e4e4e4;
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
    white-space: pre-line;
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
  #card-bottom-buttons {
    display: flex;
    justify-content: space-around;
    margin-top: 1rem;
    width: 90%;
    margin-left: auto;
    margin-right: auto;
  }
  #request-continuation-button {
    /* width: 25%; */
  }
  #export-entry-button {
    margin-left: 1rem;
    margin-right: 1rem;
    /* width: 25%; */
    /* height: 3rem; */
  }
  #remove-button {
    /* width: 25%; */
  }
`;

export default Card;
