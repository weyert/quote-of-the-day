import allQuotes from '../../facts.json'
import { parse, format } from 'date-fns'

export default (req, res) => {
  const { author } = req.query
  let quotes = allQuotes

  if (author) {
    quotes = quotes.filter((quote) => quote.author?.toLowerCase().includes(author.toLowerCase()))
  }

  if (!quotes.length) {
    quotes = allQuotes.filter((quote) => quote.author === null)
  }

  const quote = quotes[Math.floor(Math.random() * quotes.length)]

  const quoteDate = quote.date.substr(1)
  const isCompleteDate = quote.date.includes('/')
  const kind = quote.date === '-' ? 'BC' : 'AD'
  const formattedDate = isCompleteDate
    ? format(parse(quoteDate, 'yyyy/MM/dd', new Date()), 'MMMMMM')
    : `${quoteDate} ${kind}`
  const formattedQuote = {
    date: formattedDate,
    content: quote.description,
    category: quote.category1,
    country: quote.category2,
    author: `${formattedDate}, ${quote.category2}, ${quote.category1}`,
  }
  res.status(200).json(formattedQuote)
}
