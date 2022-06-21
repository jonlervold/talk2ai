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
    output,
    isLoading,
    handleSubmit,
  };
};

export default useAiRequest;
