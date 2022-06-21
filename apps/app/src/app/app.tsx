import styled from '@emotion/styled';
import { useState } from 'react';
import getAi from './api/getAi';

const Container = styled.div`
  text-align: center;
  button {
    width: 50%;
    margin-left: auto;
    margin-right: auto;
  }
  textarea {
    margin: 1rem;
    margin-left: auto;
    margin-right: auto;
    width: 90%;
    height: 3in;
  }
`;

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

export function App() {
  const [input, setInput] = useState('');
  const handleInput = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInput(e.currentTarget.value);
  };
  const [key, setKey] = useState('');
  const handleKey = (e: React.ChangeEvent<HTMLInputElement>) => {
    setKey(e.currentTarget.value);
  };
  const [output, setOutput] = useState<
    {
      timestamp: Date;
      query: string;
      response: string | undefined;
    }[]
  >([]);

  const [isLoading, setIsLoading] = useState(false);
  const dateTime = new Date();
  const handleSubmit = async () => {
    setIsLoading(true);
    const response = await getAi(input, key);
    if (response.data.choices !== undefined) {
      const thisQuery = {
        timestamp: dateTime,
        query: input,
        response: response.data.choices[0].text,
      };
      setOutput([thisQuery, ...output]);
    }
    setIsLoading(false);
  };

  return (
    <Container>
      <h1>TALK2AI</h1>
      <div>
        API KEY
        <input type="password" value={key} onChange={(e) => handleKey(e)} />
      </div>
      <div>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</div>
      <textarea value={input} onChange={(e) => handleInput(e)}></textarea>{' '}
      <button disabled={isLoading} onClick={handleSubmit}>
        {isLoading ? 'Loading...' : 'Submit'}
      </button>
      {output.map((instance, index) => (
        <Card>
          <div className="header">{index + 1}</div>
          <div className="timestamp">{instance.timestamp.toLocaleString()}</div>
          <div className="query">
            {' '}
            <div className="header">Query</div>
            {instance.query}
          </div>
          <div className="response">
            {' '}
            <div className="header">Response</div>
            {instance.response}
          </div>
        </Card>
      ))}
      {/* <div>
        response.data.choices[0].finish_reason - model: "text-davinci-002",
        prompt: "CHECK", temperature: 0.7, max_tokens: 256, top_p: 1,
        frequency_penalty: 0, presence_penalty: 0, remove axios - remove express
        - input bar for api key
      </div> */}
    </Container>
  );
}

export default App;
