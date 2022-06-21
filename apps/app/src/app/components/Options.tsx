import { FC } from 'react';

type Props = {
  options: {
    model: string;
    temperature: number;
    maxTokens: number;
    frequencyPenalty: number;
    presencePenalty: number;
  };
  handleOptions: (setting: string, value: string | number) => void;
};

const Options: FC<Props> = ({ options, handleOptions }) => {
  return (
    <div>
      <div>
        Model:
        <select
          value={options.model}
          onChange={(e) => handleOptions('model', e.target.value)}
        >
          <option value="text-davinci002">DaVinci</option>
          <option value="text-curie-001">Curie</option>
          <option value="text-babbage-001">Babbage</option>
          <option value="text-ada-001">Ada</option>
        </select>
      </div>
      <div>
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
          max="999"
        />{' '}
        {options.maxTokens}
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
      </div>
    </div>
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
