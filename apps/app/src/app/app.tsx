import Container from './components/styles/Container';
import Options from './components/Options';
import History from './components/History';
import useAiRequest from './hooks/useAiRequest';
import useOptionsVisibility from './hooks/useOptionsVisibility';
import './app.css';
import exportFullHistory from './util/exportFullHistory';
import getYearDisplay from './util/getYearDisplay';
import { useState } from 'react';
import Help from './components/Help';

export function App() {
  const {
    input,
    handleInput,
    handleClearInput,
    key,
    handleKey,
    options,
    handleOptions,
    output,
    isLoading,
    error,
    handleSubmit,
    handleClearHistory,
    handleRemoveHistoryItem,
  } = useAiRequest();

  const [showHelp, setShowHelp] = useState(false);

  const {
    showOptions,
    handleShowOptions,
    showOptionDescriptions,
    handleShowOptionDescriptions,
  } = useOptionsVisibility();

  return (
    <Container>
      <div id="page-title">TALK2AI</div>
      <div>
        <button id="help-toggle" onClick={() => setShowHelp(!showHelp)}>
          {showHelp ? 'Hide Help' : 'Help'}
        </button>
      </div>
      {showHelp && <Help />}
      <div>
        <button id="options-visibility-toggle" onClick={handleShowOptions}>
          {showOptions === 'options-visible' ? 'Hide Options' : 'Options'}
        </button>
      </div>
      <div id={showOptions}>
        <Options
          options={options}
          handleOptions={handleOptions}
          showOptionDescriptions={showOptionDescriptions}
          handleShowOptionDescriptions={handleShowOptionDescriptions}
        />
      </div>
      <textarea value={input} onChange={(e) => handleInput(e)}></textarea>
      {error && <div className="error-message">{error}</div>}
      <div className="heading">API Key</div>
      <div>
        <input
          id="key-field"
          type="password"
          value={key}
          onChange={(e) => handleKey(e)}
        />
      </div>
      <div>
        <button
          disabled={isLoading || input.length < 1 || key.length < 1}
          onClick={() => handleSubmit()}
        >
          {key.length === 0
            ? 'Enter Access Key to Submit'
            : isLoading
            ? 'Loading...'
            : 'Submit'}
        </button>
      </div>
      <div>
        <button
          id="clear-input-button"
          onClick={handleClearInput}
          disabled={input.length < 1}
        >
          Clear
        </button>
      </div>
      <History
        output={output}
        isLoading={isLoading}
        handleSubmit={handleSubmit}
        handleRemoveHistoryItem={handleRemoveHistoryItem}
      />
      {output.length > 0 && (
        <div>
          <button
            onClick={() => exportFullHistory(output)}
            id="export-history-button"
          >
            Export All Entries
          </button>
        </div>
      )}
      <div>
        {output.length > 0 && (
          <button onClick={handleClearHistory}>Clear History</button>
        )}
      </div>
      <div id="footer">
        <a target="_blank" rel="noreferrer" href="https://jonlervold.com">
          jonlervold.com
        </a>{' '}
        //{' '}
        <a
          target="_blank"
          rel="noreferrer"
          href="https://github.com/jonlervold/talk2ai"
        >
          GitHub
        </a>{' '}
        // {getYearDisplay()}
      </div>
      <div id="disclaimer">
        * Price calculations are based on the documentation on the OpenAI
        website and their accuracy is not guaranteed by this application nor its
        creator. This application is merely an interface for using their service
        and no party responsible for its creation nor hosting are responsible
        for any costs incurred to the end user by OpenAI. This application has
        no affiliation with, and is not endorsed by, OpenAI, OpenAI LP, nor
        OpenAI Inc.
      </div>
      {/* <div>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</div> */}
    </Container>
  );
}

export default App;
