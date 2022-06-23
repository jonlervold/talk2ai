const getYearDisplay = () => {
  const currentYear = new Date().getFullYear();
  let yearDisplay = '2022';
  if (currentYear !== 2022) {
    yearDisplay = `2022-${currentYear.toString()}`;
  }
  return yearDisplay;
};

export default getYearDisplay;
