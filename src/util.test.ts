import { test } from "bun:test"
import { getTitleFromUrl } from "./url"

test("Utils", async () => {
  const res = await getTitleFromUrl("https://nikiv.dev")
  console.log(res)
  // expect().toEqual(expectedOutput)
})
