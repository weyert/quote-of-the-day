export default async (req, res) => {
  const today = new Date()
  const currentMonth = today.getMonth() + 1
  const currentDate = today.getDate()

  const response = await fetch(`https://byabbe.se/on-this-day/${currentMonth}/${currentDate}/events.json`)
  const dailyFacts: { events: Array<{ year: string, description: string }> } = await response.json()
  const availableFacts = dailyFacts.events ?? []
  const filteredFacts = availableFacts.filter(fact => parseInt(fact.year, 10) <= 1800)

  const randomFactIndex = Math.floor(Math.random() * filteredFacts.length)
  const selectedFact = filteredFacts[randomFactIndex]
  res.status(200).json(selectedFact)
}
