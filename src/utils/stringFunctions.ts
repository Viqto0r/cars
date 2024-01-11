export const getEnding = (count: number, endings: string[]) => {
  if (count > 100) count = count % 100
  if (count <= 20 && count >= 10) return endings[2]
  if (count > 20) count = count % 10
  return count === 1
    ? endings[0]
    : count > 1 && count < 5
    ? endings[1]
    : endings[2]
}
