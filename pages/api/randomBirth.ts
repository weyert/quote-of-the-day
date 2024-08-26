export default async (req, res) => {
  const today = new Date();
  const currentMonth = today.getMonth() + 1;
  const currentDate = today.getDate();

  const response = await fetch(
    `https://byabbe.se/on-this-day/${currentMonth}/${currentDate}/births.json`
  );
  const dailyBirths: {
    births: Array<{
      year: string;
      description: string;
      wikipedia?: Array<{ title: string; wikipedia: string }>;
    }>;
  } = await response.json();
  const availableBirths = dailyBirths.births ?? [];
  const filteredBirths = availableBirths.filter(
    (fact) => Number.parseInt(fact.year, 10) <= 1800
  );

  const randomBirthIndex = Math.floor(Math.random() * filteredBirths.length);
  const selectedBirth = filteredBirths[randomBirthIndex];
  res.status(200).json(selectedBirth);
};
