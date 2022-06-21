import Options from './components/Options';
import Card from './components/styles/Card';
import Container from './components/styles/Container';
import useAiRequest from './hooks/useAiRequest';
import getEstimatedCost from './util/getEstimatedCost';
import getMaxCost from './util/getMaxCost';
import './app.css';
import { useState } from 'react';

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
    handleClearHistory,
  } = useAiRequest();

  const [showOptionDescriptions, setShowOptionDescriptions] = useState(false);

  return (
    <Container>
      <h1>TALK2AI</h1>
      <div>
        Key
        <input type="password" value={key} onChange={(e) => handleKey(e)} />
      </div>
      <div>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</div>
      <Options
        options={options}
        handleOptions={handleOptions}
        showOptionDescriptions={showOptionDescriptions}
      />
      <button
        onClick={() => setShowOptionDescriptions(!showOptionDescriptions)}
      >
        {showOptionDescriptions
          ? 'Hide Option Descriptions'
          : 'Show Option Descriptions'}
      </button>
      <textarea value={input} onChange={(e) => handleInput(e)}></textarea>{' '}
      <div>
        <button disabled={isLoading} onClick={handleSubmit}>
          {isLoading ? 'Loading...' : 'Submit'}
        </button>
      </div>
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

          <table>
            <tbody>
              <tr>
                <td>Model</td>
                <td>{instance.model}</td>
                <td>Stop Reason</td>
                <td>{instance.stopReason}</td>
                <td>Temperature</td>
                <td>{instance.temperature}</td>
              </tr>
              <tr>
                <td>Max Tokens</td>
                <td>{instance.maxTokens}</td>
                <td>Estimated Tokens</td>
                <td>
                  {instance.response !== undefined &&
                    instance.query.length + instance.response.length / 4}
                </td>
                <td>Frequency Penalty</td>
                <td>{instance.frequencyPenalty}</td>
              </tr>
              <tr>
                <td>Max Cost</td>
                <td>~${getMaxCost(instance.model, instance.maxTokens)}</td>
                <td>Estimated Cost</td>
                <td>
                  ~$
                  {instance.response !== undefined &&
                    getEstimatedCost(
                      instance.model,
                      instance.query.length + instance.response.length / 4
                    )}
                </td>
                <td>Presence Penalty</td>
                <td>{instance.presencePenalty}</td>
              </tr>
            </tbody>
          </table>
        </Card>
      ))}
      <div>
        {output.length > 0 && (
          <button onClick={handleClearHistory}>Clear History</button>
        )}
      </div>
    </Container>
  );
}

export default App;
