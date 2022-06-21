import Options from './components/Options';
import Card from './components/styles/Card';
import Container from './components/styles/Container';
import useAiRequest from './hooks/useAiRequest';
import getEstimatedCost from './util/getEstimatedCost';
import getMaxCost from './util/getMaxCost';

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
          <div>Model: {instance.model}</div>
          <div>Temperature: {instance.temperature}</div>
          <div>Frequency Penalty: {instance.frequencyPenalty}</div>
          <div>Presence Penalty: {instance.presencePenalty}</div>
          <div>Stop Reason: {instance.stopReason}</div>
          <div>Max Tokens: {instance.maxTokens}</div>
          <div>
            Max Cost: ~${getMaxCost(instance.model, instance.maxTokens)}
          </div>
          <div>
            Estimated Tokens:{' '}
            {instance.response !== undefined &&
              instance.query.length + instance.response.length / 4}
          </div>
          <div>
            Estimated Cost: ~$
            {instance.response !== undefined &&
              getEstimatedCost(
                instance.model,
                instance.query.length + instance.response.length / 4
              )}
          </div>
        </Card>
      ))}
      {/* <div>
        response.data.choices[0].finish_reason 
        temperature: 0.7, (scale: 0 - 0.99, higher more creative)
        max_tokens: 256, 
        frequency_penalty: 0 (-2 - 2, higher value means less likely to repeat)
        presence_penalty: 0 (-2 to 2, higher value means more likely to move on to new topics)

      </div> */}
    </Container>
  );
}

export default App;
