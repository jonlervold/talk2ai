const getEstimatedCost = (model: string, estimatedTokens: number) => {
  let perToken = 0.06;
  if (model === 'text-curie-001') {
    perToken = 0.006;
  }
  if (model === 'text-babbage-001') {
    perToken = 0.0012;
  }
  if (model === 'text-ada-001') {
    perToken = 0.0008;
  }

  return ((estimatedTokens * perToken) / 1000).toFixed(4);
};

export default getEstimatedCost;
