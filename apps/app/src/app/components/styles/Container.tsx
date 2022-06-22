import styled from '@emotion/styled';

const Container = styled.div`
  text-align: center;
  button {
    width: 50%;
    margin-left: auto;
    margin-right: auto;
  }
  textarea {
    border: 1px solid black;
    background-color: #e4e4e4;
    margin: 1rem;
    margin-left: auto;
    margin-right: auto;
    width: 90%;
    height: 3in;
  }
  .heading {
    font-weight: bold;
  }
  #options-hidden {
    visibility: hidden;
    height: 0;
  }
  #options-visible {
    //
  }
`;

export default Container;
