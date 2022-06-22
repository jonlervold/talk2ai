import styled from '@emotion/styled';
import { FC } from 'react';
import getMaxCost from '../util/getMaxCost';

const Wrapper = styled.div`
  background-color: #e4e4e4;
  display: inline-block;
  width: 90%;
  margin-left: auto;
  margin-right: auto;
  border: 1px solid black;
  #option-descriptions-toggle {
    width: 55.4%;
    margin: 1rem;
  }
`;

const Option = styled.span`
  margin: 1rem;
  min-width: 200px;
  display: inline-flex;
  flex-direction: column;
`;

type Props = {
  options: {
    model: string;
    temperature: number;
    maxTokens: number;
    frequencyPenalty: number;
    presencePenalty: number;
  };
  handleOptions: (setting: string, value: string | number) => void;
  showOptionDescriptions: boolean;
  handleShowOptionDescriptions: () => void;
};

const Options: FC<Props> = ({
  options,
  handleOptions,
  showOptionDescriptions,
  handleShowOptionDescriptions,
}) => {
  return (
    <Wrapper>
      <div>
        <button
          id="option-descriptions-toggle"
          onClick={handleShowOptionDescriptions}
        >
          {showOptionDescriptions
            ? 'Hide Option Descriptions'
            : 'Show Option Descriptions'}
        </button>
      </div>
      <Option>
        <span className="heading">Model</span>

        <span>
          <select
            value={options.model}
            onChange={(e) => handleOptions('model', e.target.value)}
          >
            <option value="text-davinci-002">DaVinci</option>
            <option value="text-curie-001">Curie</option>
            <option value="text-babbage-001">Babbage</option>
            <option value="text-ada-001">Ada</option>
          </select>
        </span>

        {showOptionDescriptions && (
          <span>
            <table>
              <tr>
                <td className="heading">Name</td>
                <td className="heading">Cost per 1k Tokens</td>
                <td className="heading">Strengths</td>
              </tr>
              <tr>
                <td>DaVinci</td>
                <td>$0.06</td>
                <td>
                  Anything the other models can do, complex intent, cause and
                  effect, creative generation, search, summarization.
                </td>
              </tr>
              <tr>
                <td>Curie</td>
                <td>$0.006</td>
                <td>
                  Language translation, complex classification, sentiment,
                  summarization
                </td>
              </tr>
              <tr>
                <td>Babbage</td>
                <td>$0.0012</td>
                <td>Moderate classification, semantic search</td>
              </tr>
              <tr>
                <td>Ada</td>
                <td>$0.0008</td>
                <td>Simple classification, address correction, keywords</td>
              </tr>
            </table>
          </span>
        )}
      </Option>
      <Option>
        <span className="heading">Temperature</span>

        <span>
          <input
            value={options.temperature}
            onChange={(e) => handleOptions('temperature', e.target.value)}
            type="range"
            min="0"
            max="99"
          />
        </span>

        <span>{options.temperature / 100}</span>

        {showOptionDescriptions && (
          <span>
            Higher values means the model will take more risks. Try 0.9 for more
            creative applications, and 0 (argmax sampling) for ones with a
            well-defined answer.
          </span>
        )}
      </Option>
      <Option>
        <span className="heading">Frequency Penalty</span>

        <span>
          <input
            value={options.frequencyPenalty}
            onChange={(e) => handleOptions('frequencyPenalty', e.target.value)}
            type="range"
            min="-2"
            max="2"
          />
        </span>

        <span>{options.frequencyPenalty}</span>

        {showOptionDescriptions && (
          <span>
            Number between -2.0 and 2.0. Positive values penalize new tokens
            based on their existing frequency in the text so far, decreasing the
            model's likelihood to repeat the same line verbatim.
          </span>
        )}
      </Option>
      <Option>
        <span className="heading">Presence Penalty</span>
        <span>
          <input
            value={options.presencePenalty}
            onChange={(e) => handleOptions('presencePenalty', e.target.value)}
            type="range"
            min="-2"
            max="2"
          />
        </span>
        <span>{options.presencePenalty}</span>{' '}
        {showOptionDescriptions && (
          <span>
            Number between -2.0 and 2.0. Positive values penalize new tokens
            based on whether they appear in the text so far, increasing the
            model's likelihood to talk about new topics.
          </span>
        )}
      </Option>
      <Option>
        <span className="heading">Max Tokens / Max Cost</span>

        <span>
          <input
            value={options.maxTokens}
            onChange={(e) => handleOptions('maxTokens', e.target.value)}
            type="range"
            min="100"
            max="2048"
          />
        </span>

        <span>
          {options.maxTokens} / ~$
          {getMaxCost(options.model, options.maxTokens)}
        </span>

        {showOptionDescriptions && (
          <span>
            Prices are per 1,000 tokens. You can think of tokens as pieces of
            words, where 1,000 tokens is about 750 words. You can think of
            tokens as pieces of words used for natural language processing. For
            English text, 1 token is approximately 4 characters or 0.75 words.
            As a point of reference, the collected works of Shakespeare are
            about 900,000 words or 1.2M tokens.
          </span>
        )}
      </Option>
      {/* <div>
        Temperature:{' '}
        <input
          value={options.temperature}
          onChange={(e) => handleOptions('temperature', e.target.value)}
          type="range"
          min="0"
          max="99"
        />{' '}
        {options.temperature / 100}
      </div>
      <div>
        Max Tokens:{' '}
        <input
          value={options.maxTokens}
          onChange={(e) => handleOptions('maxTokens', e.target.value)}
          type="range"
          min="100"
          max="2048"
        />{' '}
        {options.maxTokens}
        <div>Max Cost: ~${getMaxCost(options.model, options.maxTokens)}</div>
      </div>
      <div>
        Frequency Penalty:{' '}
        <input
          value={options.frequencyPenalty}
          onChange={(e) => handleOptions('frequencyPenalty', e.target.value)}
          type="range"
          min="-2"
          max="2"
        />{' '}
        {options.frequencyPenalty}
      </div>
      <div>
        Presence Penalty:{' '}
        <input
          value={options.presencePenalty}
          onChange={(e) => handleOptions('presencePenalty', e.target.value)}
          type="range"
          min="-2"
          max="2"
        />{' '}
        {options.presencePenalty}
      </div> */}
    </Wrapper>
  );
};

export default Options;

// -davinci - 0.06/1k - everything the others can do plus complex intent, cause and
//     effect, creative generation, search, summarization
//     -curie - 0.006/1k - language translation, complex classification, sentiment, summarization
//     -babbage - 0.0012/1k - moderate classification, semantic search
//     -ada - 0.0008/1k parsing text, simple
//     classification, address correction, keywords

// temperature - higher is more creative

// frequency_penalty: 0 (-2 - 2, higher value means less likely to repeat)
// presence_penalty: 0 (-2 to 2, higher value means more likely to move on to new topics)
