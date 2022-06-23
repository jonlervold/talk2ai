import HistoryEntry from '../types/HistoryEntry';

const exportFullHistory = (historyEntries: HistoryEntry[]) => {
  const dateTime = new Date();

  const filename = `talk2ai-export-full-history-${dateTime.getFullYear()}-${
    dateTime.getMonth() + 1
  }-${dateTime.getDate()}.txt`;

  let outputString = `Export from Talk2AI
https://jonlervold.com/talk2ai

Full History

Generated ${dateTime}`;

  historyEntries.forEach(
    (instance, index) =>
      (outputString =
        outputString +
        `




====================   INDEX    ====================
${historyEntries.length - index}

==================== GENERATED  ====================
${instance.timestamp}
  
====================   QUERY    ====================
${instance.query}
  
====================  RESPONSE  ====================
${instance.response}
  
==================== RAW OUTPUT ====================
${JSON.stringify(instance, null, 2)}




////////////////////////////////////////////////////
////////////////////////////////////////////////////
`)
  );

  const outputBlob = new Blob([outputString], { type: 'text/plain' });
  const url = window.URL.createObjectURL(outputBlob);
  const anchor = document.createElement('a');
  anchor.href = url;
  anchor.download = filename;

  anchor.click();
  window.URL.revokeObjectURL(url);
};

export default exportFullHistory;
