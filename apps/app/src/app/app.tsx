import Options from './components/Options';
import Card from './components/styles/Card';
import Container from './components/styles/Container';
import useAiRequest from './hooks/useAiRequest';

export function App() {
  const {
    input,
    handleInput,
    key,
    handleKey,
    options,
    handleOptions,
    output,
    isLoading,
    handleSubmit,
  } = useAiRequest();

  return (
    <Container>
      <h1>TALK2AI</h1>
      <div>
        API KEY
        <input type="password" value={key} onChange={(e) => handleKey(e)} />
      </div>
      <div>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</div>
      <Options options={options} handleOptions={handleOptions} />
      <textarea value={input} onChange={(e) => handleInput(e)}></textarea>{' '}
      <button disabled={isLoading} onClick={handleSubmit}>
        {isLoading ? 'Loading...' : 'Submit'}
      </button>
      {output.map((instance, index) => (
        <Card>
          <div className="header">{output.length - index}</div>
          <div className="timestamp">{instance.timestamp.toLocaleString()}</div>
          <div className="query">
            <div className="header">Query</div>
            {instance.query}
          </div>
          <div className="response">
            <div className="header">Response</div>
            {instance.response}
          </div>
          <div>Finish Reason: {}</div>
        </Card>
      ))}
      {/* <div>
        response.data.choices[0].finish_reason 
        temperature: 0.7, (scale: 0 - 0.99, higher more creative)
        max_tokens: 256, 
        frequency_penalty: 0 (-2 - 2, higher value means less likely to repeat)
        presence_penalty: 0 (-2 to 2, higher value means more likely to move on to new topics)
        - input bar for api key
      </div> */}
    </Container>
  );
}

export default App;
