import { expect, test } from "bun:test"
import { splitUrlByProtocol } from "./url"

test("url parsing", async () => {
  let testUrl = "https://www.shapeways.com/"
  let [url, protocol] = splitUrlByProtocol(testUrl)
  expect(url).toContain("shapeways.com")
  expect(protocol).toContain("https")

  testUrl = "https://github.com/libfive/libfive"
  ;[url, protocol] = splitUrlByProtocol(testUrl)
  expect(url).toContain("github.com/libfive/libfive")
  expect(protocol).toContain("https")

  testUrl = "https://formlabs.com/"
  ;[url, protocol] = splitUrlByProtocol(testUrl)
  expect(url).toContain("formlabs.com")
  expect(protocol).toContain("https")

  testUrl = "https://blog.jessfraz.com/post/a-tale-of-two-3d-printers/"
  ;[url, protocol] = splitUrlByProtocol(testUrl)
  expect(url).toContain("blog.jessfraz.com/post/a-tale-of-two-3d-printers")
  expect(protocol).toContain("https")

  testUrl = "https://www.youtube.com/watch?v=BDpqt-haLLM"
  ;[url, protocol] = splitUrlByProtocol(testUrl)
  expect(url).toContain("youtube.com/watch?v=BDpqt-haLLM")
  expect(protocol).toContain("https")

  testUrl = "https://www.youtube.com/results?search_query=karabiner+wow"
  ;[url, protocol] = splitUrlByProtocol(testUrl)
  expect(url).toContain("youtube.com/results?search_query=karabiner+wow")
  expect(protocol).toContain("https")
})
