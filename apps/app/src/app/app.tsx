import Container from './components/styles/Container';
import Options from './components/Options';
import History from './components/History';
import useAiRequest from './hooks/useAiRequest';
import useOptionsVisibility from './hooks/useOptionsVisibility';
import './app.css';

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
    handleSubmit,
    handleClearHistory,
    handleRemoveHistoryItem,
  } = useAiRequest();

  const {
    showOptions,
    handleShowOptions,
    showOptionDescriptions,
    handleShowOptionDescriptions,
  } = useOptionsVisibility();

  return (
    <Container>
      <div id="page-title">TALK2AI</div>
      <div>Access Key</div>
      <div>
        <input
          id="key-field"
          type="password"
          value={key}
          onChange={(e) => handleKey(e)}
        />
      </div>
      <button id="options-visibility-toggle" onClick={handleShowOptions}>
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
        <button
          id="clear-input-button"
          onClick={handleClearInput}
          disabled={input.length < 1}
        >
          Clear
        </button>
      </div>
      <div>
        <button
          disabled={isLoading || input.length < 1 || key.length < 1}
          onClick={handleSubmit}
        >
          {isLoading ? 'Loading...' : 'Submit'}
        </button>
      </div>
      <History
        output={output}
        handleRemoveHistoryItem={handleRemoveHistoryItem}
      />
      {output.length > 0 && (
        <div>
          <button id="export-history-button">
            Export Full History -implement-
          </button>
        </div>
      )}
      <div>
        {output.length > 0 && (
          <button onClick={handleClearHistory}>Clear History</button>
        )}
      </div>
      <div>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</div>
      <div id="disclaimer">
        * Price calculations are based on the documentation on the OpenAI
        website and their accuracy is not guaranteed by this application nor its
        creator. This application is merely an interface for using their service
        and no party responsible for its creation nor hosting are responsible
        for any costs incurred to the end user by OpenAI.
      </div>
    </Container>
  );
}

export default App;
