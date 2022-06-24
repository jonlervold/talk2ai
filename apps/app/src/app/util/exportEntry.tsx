import HistoryEntry from '../types/HistoryEntry';

const exportEntry = (instance: HistoryEntry) => {
  const filename = `talk2ai_export-entry_${instance.timestamp.getFullYear()}-${
    instance.timestamp.getMonth() + 1
  }-${instance.timestamp.getDate()}_${instance.timestamp.getHours()}-${instance.timestamp.getMinutes()}-${instance.timestamp.getSeconds()}.txt`;

  const outputString = `Export from Talk2AI
https://jonlervold.com/talk2ai

Single Entry

==================== GENERATED  ====================
${instance.timestamp}

====================   PROMPT   ====================
${instance.prompt}

====================  RESPONSE  ====================
${instance.response}

==================== RAW OUTPUT ====================
${JSON.stringify(instance, null, 2)}
`;

  const outputBlob = new Blob([outputString], { type: 'text/plain' });
  const url = window.URL.createObjectURL(outputBlob);
  const anchor = document.createElement('a');
  anchor.href = url;
  anchor.download = filename;

  anchor.click();
  window.URL.revokeObjectURL(url);
};

export default exportEntry;
