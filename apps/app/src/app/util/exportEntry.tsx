import HistoryEntry from '../types/HistoryEntry';

const exportEntry = (instance: HistoryEntry) => {
  const filename = `talk2ai-export-entry-${instance.timestamp.getFullYear()}-${
    instance.timestamp.getMonth() + 1
  }-${instance.timestamp.getDate()}.txt`;

  const outputString = `Export from Talk2AI
https://jonlervold.com/talk2ai

Single Entry

==================== GENERATED  ====================
${instance.timestamp}

====================   QUERY    ====================
${instance.query}

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
