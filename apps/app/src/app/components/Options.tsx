import { FC } from 'react';
import getMaxCost from '../util/getMaxCost';
import Option from './styles/Option';
import OptionsWrapper from './styles/OptionsWrapper';

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
    <OptionsWrapper>
      <div>
        <button
          id="option-descriptions-toggle"
          onClick={handleShowOptionDescriptions}
        >
          {showOptionDescriptions ? 'Hide Descriptions' : 'Show Descriptions'}
        </button>
      </div>
      {showOptionDescriptions && (
        <Option>Descriptions taken verbatim from the OpenAI website.</Option>
      )}
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
        <span className="heading">Max Tokens / Max Cost*</span>

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
    </OptionsWrapper>
  );
};

export default Options;
