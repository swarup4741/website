import format from 'date-fns/format'

export function formatDate(date: string): string {
  const dateTokens = date.split('-').map(p => Number(p))
  const formattedDate = format(
    new Date(dateTokens[0], dateTokens[1] - 1, dateTokens[2]),
    'MMMM d, yyyy'
  )

  return formattedDate
}
