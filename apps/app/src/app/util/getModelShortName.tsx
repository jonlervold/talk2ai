const getModelShortName = (fullName: string) => {
  let shortName = 'DaVinci';
  if (fullName === 'text-curie-001') {
    shortName = 'Curie';
  }
  if (fullName === 'text-babbage-001') {
    shortName = 'Babbage';
  }
  if (fullName === 'text-ada-001') {
    shortName = 'Ada';
  }
  return shortName;
};

export default getModelShortName;
