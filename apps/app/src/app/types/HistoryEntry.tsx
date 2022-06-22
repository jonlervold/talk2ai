type HistoryEntry = {
  timestamp: Date;
  query: string;
  response: string | undefined;
  model: string;
  temperature: number;
  maxTokens: number;
  frequencyPenalty: number;
  presencePenalty: number;
  stopReason: string | undefined;
};

export default HistoryEntry;
