import styled from '@emotion/styled';

const Card = styled.div`
  border: 1px solid black;
  width: 90%;
  margin: 1rem;
  margin-left: auto;
  margin-right: auto;
  text-align: left;
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
