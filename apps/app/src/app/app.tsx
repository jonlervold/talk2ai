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
    handleRemoveHistoryItem,
  } = useAiRequest();

  // create hook
  const [showOptionDescriptions, setShowOptionDescriptions] = useState(false);
  const handleShowOptionDescriptions = () => {
    setShowOptionDescriptions(!showOptionDescriptions);
  };
  const [showOptions, setShowOptions] = useState('options-hidden');
  const handleShowOptions = () => {
    if (showOptions === 'options-hidden') {
      setShowOptions('options-visible');
    } else setShowOptions('options-hidden');
  };

  return (
    <Container>
      <h1>TALK2AI</h1>
      <div>
        Key
        <input type="password" value={key} onChange={(e) => handleKey(e)} />
      </div>
      <div>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</div>
      <button onClick={handleShowOptions}>
        {showOptions === 'options-visible' ? 'Hide Options' : 'Show Options'}
      </button>
      <div id={showOptions}>
        <Options
          options={options}
          handleOptions={handleOptions}
          showOptionDescriptions={showOptionDescriptions}
          handleShowOptionDescriptions={handleShowOptionDescriptions}
        />
      </div>
      <textarea value={input} onChange={(e) => handleInput(e)}></textarea>{' '}
      <div>
        <button disabled={isLoading} onClick={handleSubmit}>
          {isLoading ? 'Loading...' : 'Submit'}
        </button>
      </div>
      {output.map((instance, index) => (
        <Card>
          <div className="heading">{output.length - index}</div>
          <div className="timestamp">{instance.timestamp.toLocaleString()}</div>
          <div className="query">
            <div className="heading">Query</div>
            {instance.query}
          </div>
          <div className="response">
            <div className="heading">Response -leading remove newlines-</div>
            {instance.response}
          </div>

          <table>
            <tbody>
              <tr>
                <td className="heading">Model</td>
                <td>{instance.model}</td>
                <td className="heading">Stop Reason</td>
                <td>{instance.stopReason}</td>
                <td className="heading">Temperature</td>
                <td>{instance.temperature}</td>
              </tr>
              <tr>
                <td className="heading">Max Tokens</td>
                <td>{instance.maxTokens}</td>
                <td className="heading">Estimated Tokens</td>
                <td>
                  {instance.response !== undefined &&
                    instance.query.length + instance.response.length / 4}
                </td>
                <td className="heading">Frequency Penalty</td>
                <td>{instance.frequencyPenalty}</td>
              </tr>
              <tr>
                <td className="heading">Max Cost</td>
                <td>~${getMaxCost(instance.model, instance.maxTokens)}</td>
                <td className="heading">Estimated Cost</td>
                <td>
                  ~$
                  {instance.response !== undefined &&
                    getEstimatedCost(
                      instance.model,
                      instance.query.length + instance.response.length / 4
                    )}
                </td>
                <td className="heading">Presence Penalty</td>
                <td>{instance.presencePenalty}</td>
              </tr>
            </tbody>
          </table>
          <button onClick={() => handleRemoveHistoryItem(index)}>
            Remove from History
          </button>
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
