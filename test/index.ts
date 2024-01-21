import test from "node:test"
import { strict as assert } from "assert"
import { ke2dairanization } from "../src/index.ts"

test("test words", async (t) => {
  await t.test("松平 健", async () => {
    assert.equal(await ke2dairanization("松平 健"), "ケツダイラ マン")
  })
  await t.test("ポール マッカートニー", async () => {
    assert.equal(
      await ke2dairanization("ポール マッカートニー"),
      "マール ポッカートニー"
    )
  })
  await t.test("森 進一", async () => {
    assert.equal(await ke2dairanization("森 進一"), "シリ モンイチ")
  })
  await t.test("デーモン 小暮", async () => {
    assert.equal(await ke2dairanization("デーモン 小暮"), "コーモン デグレ")
  })
  await t.test("チェ ゲバラ", async () => {
    assert.equal(await ke2dairanization("チェ ゲバラ"), "ゲ チェバラ")
  })
  await t.test("カトウ アイ", async () => {
    assert.equal(await ke2dairanization("加藤 あい"), "アトウ カイ")
  })
  await t.test("アトウ カイ", async () => {
    assert.equal(await ke2dairanization("阿藤 快"), "カトウ アイ")
  })
  await t.test("ハリー ジェームズ ポッター", async () => {
    assert.equal(
      await ke2dairanization("ハリー ジェームズ ポッター"),
      "ポリー ジェームズ ハッター"
    )
  })
  await t.test(
    "アルバス パーシバル ウルフリック ブライアン ダンブルドア",
    async () => {
      assert.equal(
        await ke2dairanization(
          "アルバス パーシバル ウルフリック ブライアン ダンブルドア"
        ),
        "ダルバス パーシバル ウルフリック ブライアン アンブルドア"
      )
    }
  )

  await t.test("1 word", async () => {
    assert.equal(await ke2dairanization("松平"), "マツダイラ")
  })
  await t.test("space + 1 word", async () => {
    assert.equal(await ke2dairanization(" 松平"), "マツダイラ")
  })
  await t.test("1 word + space", async () => {
    assert.equal(await ke2dairanization(" 松平 "), "マツダイラ")
  })
  await t.test("space", async () => {
    assert.equal(await ke2dairanization(" "), "")
  })
  await t.test("empty", async () => {
    assert.equal(await ke2dairanization(""), "")
  })
})
