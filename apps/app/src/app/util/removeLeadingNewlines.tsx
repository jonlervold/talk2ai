const removeLeadingNewlines = (text: string | undefined) => {
  if (text !== undefined) {
    while (text.slice(0, 1) === '\n') {
      text = text?.slice(2);
    }
  }
  if (text !== undefined && text.length === 0) {
    text = '* The AI returned nothing to this query *';
  }

  return text;
};

export default removeLeadingNewlines;
