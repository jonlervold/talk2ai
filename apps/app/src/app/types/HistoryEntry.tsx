type HistoryEntry = {
  timestamp: Date;
  prompt: string;
  response: string | undefined;
  model: string;
  temperature: number;
  maxTokens: number;
  frequencyPenalty: number;
  presencePenalty: number;
  stopReason: string | undefined;
  maxCost: string;
  estimatedCost: string;
};

export default HistoryEntry;
