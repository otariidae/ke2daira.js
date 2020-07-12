import { tokenize } from "kuromojin"

const SEPARATOR = " "

export async function ke2dairanization(line: string): Promise<string> {
  const yomis = await toYomi(line.split(SEPARATOR))

  const firstHead = yomis[0][0]
  const firstTail = yomis[0].substring(1)

  const lastHead = yomis[yomis.length - 1][0]
  const lastTail = yomis[yomis.length - 1].substring(1)

  yomis[0] = lastHead + firstTail
  yomis[yomis.length - 1] = firstHead + lastTail
  return yomis.join(SEPARATOR)
}

async function toYomi(words: string[]): Promise<string[]> {
  const yomis: string[] = []
  for (const word of words) {
    const tokens = await tokenize(word)
    const yomi = tokens
      .map((token) => token.reading ?? token.surface_form)
      .join("")
    yomis.push(yomi)
  }
  return yomis
}
