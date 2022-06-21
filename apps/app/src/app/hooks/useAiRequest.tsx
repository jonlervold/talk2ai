import { useState } from 'react';
import getAi from '../api/getAi';

const useAiRequest = () => {
  const [input, setInput] = useState('');
  const handleInput = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInput(e.currentTarget.value);
  };

  const [key, setKey] = useState('');
  const handleKey = (e: React.ChangeEvent<HTMLInputElement>) => {
    setKey(e.currentTarget.value);
  };

  const [output, setOutput] = useState<
    {
      timestamp: Date;
      query: string;
      response: string | undefined;
    }[]
  >([]);

  const [isLoading, setIsLoading] = useState(false);

  const dateTime = new Date();

  const [options, setOptions] = useState({
    model: 'text-davinci-002',
    temperature: 1,
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
    const response = await getAi(input, key);
    if (response.data.choices !== undefined) {
      const thisQuery = {
        timestamp: dateTime,
        query: input,
        response: response.data.choices[0].text,
      };
      setOutput([thisQuery, ...output]);
    }
    setIsLoading(false);
  };

  return {
    input,
    handleInput,
    key,
    handleKey,
    options,
    handleOptions,
    output,
    isLoading,
    handleSubmit,
  };
};

export default useAiRequest;
