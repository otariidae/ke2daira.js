import { strict as assert } from "assert"
import { ke2dairanization } from "../src"

describe("test words", () => {
  it("松平 健", async () => {
    assert.equal(await ke2dairanization("松平 健"), "ケツダイラ マン")
  })
  it("ポール マッカートニー", async () => {
    assert.equal(
      await ke2dairanization("ポール マッカートニー"),
      "マール ポッカートニー"
    )
  })
  it("森 進一", async () => {
    assert.equal(await ke2dairanization("森 進一"), "シリ モンイチ")
  })
  it("デーモン 小暮", async () => {
    assert.equal(await ke2dairanization("デーモン 小暮"), "コーモン デグレ")
  })
  it("チェ ゲバラ", async () => {
    assert.equal(await ke2dairanization("チェ ゲバラ"), "ゲ チェバラ")
  })
  it("カトウ アイ", async () => {
    assert.equal(await ke2dairanization("加藤 あい"), "アトウ カイ")
  })
  it("アトウ カイ", async () => {
    assert.equal(await ke2dairanization("阿藤 快"), "カトウ アイ")
  })
  it("ハリー ジェームズ ポッター", async () => {
    assert.equal(
      await ke2dairanization("ハリー ジェームズ ポッター"),
      "ポリー ジェームズ ハッター"
    )
  })
  it("アルバス パーシバル ウルフリック ブライアン ダンブルドア", async () => {
    assert.equal(
      await ke2dairanization(
        "アルバス パーシバル ウルフリック ブライアン ダンブルドア"
      ),
      "ダルバス パーシバル ウルフリック ブライアン アンブルドア"
    )
  })

  it("1 word", async () => {
    assert.equal(await ke2dairanization("松平"), "マツダイラ")
  })
  it("space + 1 word", async () => {
    assert.equal(await ke2dairanization(" 松平"), "マツダイラ")
  })
  it("1 word + space", async () => {
    assert.equal(await ke2dairanization(" 松平 "), "マツダイラ")
  })
  it("space", async () => {
    assert.equal(await ke2dairanization(" "), "")
  })
  it("empty", async () => {
    assert.equal(await ke2dairanization(""), "")
  })
})
