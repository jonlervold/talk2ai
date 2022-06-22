const removeLeadingNewlines = (text: string | undefined) => {
  if (text !== undefined) {
    while (text.slice(0, 1) === '\n') {
      text = text?.slice(2);
    }
  }

  return text;
};

export default removeLeadingNewlines;
