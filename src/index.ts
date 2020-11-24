import { tokenize } from "kuromojin"
import { katakanaToMora } from "kana2mora"

const SEPARATOR = " "

export async function ke2dairanization(line: string): Promise<string> {
  const yomis = await toYomi(line.trim().split(SEPARATOR))

  if (yomis.length <= 1) {
    return yomis.join(SEPARATOR)
  }

  const firstMora = katakanaToMora(yomis[0])
  const firstHead = firstMora[0]
  const firstTail = firstMora.slice(1).join("")

  const lastMora = katakanaToMora(yomis[yomis.length - 1])
  const lastHead = lastMora[0]
  const lastTail = lastMora.slice(1).join("")

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
