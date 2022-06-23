import styled from '@emotion/styled';

const Container = styled.div`
  text-align: center;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  textarea,
  button {
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    resize: none;
  }
  button {
    width: 50%;
    min-height: 2rem;
    margin-left: auto;
    margin-right: auto;
    border: 1px solid black;
    background-color: #e4e4e4;
  }
  // query disables sticky hover on mobile
  @media (hover: hover) {
    button:hover {
      background-color: #9191fc;
    }
  }
  button:hover:disabled {
    background-color: #e4e4e4;
  }
  button:active {
    background-color: #6f6fc2;
  }
  textarea {
    box-sizing: border-box;
    border: 1px solid black;
    background-color: #ffffff;
    margin: 1rem;
    margin-left: auto;
    margin-right: auto;
    width: 90%;
    height: 3in;
    padding: 1rem;
  }
  a {
    color: black;
  }
  a:hover {
    color: #6f6fc2;
  }
  a:active {
    color: #6161a5;
  }
  .heading {
    font-weight: bold;
  }
  .error-message {
    margin-bottom: 1rem;
    color: #8f0000;
  }
  #page-title {
    font-size: 2.5rem;
    font-weight: bold;
    margin-top: 1rem;
    margin-bottom: 0.5rem;
  }
  #key-field {
    width: 30%;
    text-align: center;
    margin-bottom: 1.5rem;
  }
  #help-toggle {
    margin-top: 1rem;
  }
  #options-visibility-toggle {
    margin-top: 0.33rem;
  }
  #options-hidden {
    visibility: hidden;
    height: 0;
  }
  #options-visible {
    //
  }
  #clear-input-button {
    margin-top: 0.33rem;
  }
  #export-history-button {
    margin-bottom: 0.33rem;
  }
  #footer {
    margin: 1rem;
  }
  #disclaimer {
    font-size: 0.7rem;
    width: 80%;
    margin-bottom: 1rem;
    margin-left: auto;
    margin-right: auto;
  }
`;

export default Container;
