import { Configuration, OpenAIApi } from 'openai';

const getAi = async (
  input: string,
  key: string,
  model: string,
  temperature: number,
  maxTokens: number,
  frequencyPenalty: number,
  presencePenalty: number
) => {
  const configuration = new Configuration({
    apiKey: key,
  });
  const openai = new OpenAIApi(configuration);

  const response = await openai.createCompletion({
    model: model,
    prompt: input,
    temperature: temperature,
    max_tokens: maxTokens,
    top_p: 1,
    frequency_penalty: frequencyPenalty,
    presence_penalty: presencePenalty,
  });
  return response;
};

export default getAi;
