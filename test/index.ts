import { strict as assert } from "assert"
import ke2dairazation from "../src"

describe("test words", () => {
  it("松平 健", async () => {
    assert.equal(await ke2dairazation("松平 健"), "ケツダイラ マン")
  })
  it("ポール マッカートニー", async () => {
    assert.equal(
      await ke2dairazation("ポール マッカートニー"),
      "マール ポッカートニー"
    )
  })
  it("森 進一", async () => {
    assert.equal(await ke2dairazation("森 進一"), "シリ モンイチ")
  })
  it("デーモン 小暮", async () => {
    assert.equal(await ke2dairazation("デーモン 小暮"), "コーモン デグレ")
  })
  it("チェ ゲバラ", async () => {
    assert.equal(await ke2dairazation("チェ ゲバラ"), "ゲ チェバラ")
  })
  it("{ア,カ}トウ {カ,ア}イ", async () => {
    assert.equal(
      await ke2dairazation("阿藤 快"),
      await ke2dairazation("加藤 あい")
    )
  })
  it("ハリー ジェームズ ポッター", async () => {
    assert.equal(
      await ke2dairazation("ハリー ジェームズ ポッター"),
      "ポリー ジェームズ ハッター"
    )
  })
  it("アルバス パーシバル ウルフリック ブライアン ダンブルドア", async () => {
    assert.equal(
      await ke2dairazation(
        "アルバス パーシバル ウルフリック ブライアン ダンブルドア"
      ),
      "ダルバス パーシバル ウルフリック ブライアン アンブルドア"
    )
  })
})
