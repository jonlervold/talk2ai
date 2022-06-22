import { useState } from 'react';
import getAi from '../api/getAi';
import HistoryEntry from '../types/HistoryEntry';
import getEstimatedCost from '../util/getEstimatedCost';
import getMaxCost from '../util/getMaxCost';
import getModelShortName from '../util/getModelShortName';
import removeLeadingNewlines from '../util/removeLeadingNewlines';

const useAiRequest = () => {
  const [input, setInput] = useState('');
  const handleInput = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInput(e.currentTarget.value);
  };
  const handleClearInput = () => {
    setInput('');
  };

  const [key, setKey] = useState('');
  const handleKey = (e: React.ChangeEvent<HTMLInputElement>) => {
    setKey(e.currentTarget.value);
  };

  const [output, setOutput] = useState<HistoryEntry[]>([]);

  const [isLoading, setIsLoading] = useState(false);

  const dateTime = new Date();

  const [options, setOptions] = useState({
    model: 'text-davinci-002',
    temperature: 70,
    maxTokens: 256,
    frequencyPenalty: 0,
    presencePenalty: 0,
  });

  const handleOptions = (setting: string, value: string | number) => {
    const newOptions = { ...options, [setting]: value };
    setOptions(newOptions);
  };

  const handleSubmit = async () => {
    setIsLoading(true);
    const response = await getAi(
      input,
      key,
      options.model,
      Number(options.temperature / 100),
      Number(options.maxTokens),
      Number(options.frequencyPenalty),
      Number(options.presencePenalty)
    );
    let responseLength = 0;
    if (response.data.choices !== undefined) {
      if (response.data.choices[0].text !== undefined) {
        responseLength = response.data.choices[0].text.length;
      }
      const thisQuery = {
        timestamp: dateTime,
        query: input,
        response: removeLeadingNewlines(response.data.choices[0].text),
        model: getModelShortName(options.model),
        temperature: options.temperature / 100,
        maxTokens: options.maxTokens,
        frequencyPenalty: options.frequencyPenalty,
        presencePenalty: options.presencePenalty,
        stopReason: response.data.choices[0].finish_reason,
        maxCost: getMaxCost(options.model, options.maxTokens),
        estimatedCost: getEstimatedCost(
          options.model,
          input.length + responseLength / 4
        ),
      };
      setOutput([thisQuery, ...output]);
    }
    setIsLoading(false);
  };

  const handleClearHistory = () => {
    setOutput([]);
  };

  const handleRemoveHistoryItem = (index: number) => {
    const newOutput = [...output];
    newOutput.splice(index, 1);
    setOutput(newOutput);
  };

  return {
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
  };
};

export default useAiRequest;
