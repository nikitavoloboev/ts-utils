import { expect, test } from "bun:test"
import { writeContentToSrcData } from "./file"
import fs from "node:fs"

test("save array of JSON in ~/src/data", async () => {
  const arrayObject = [{
    value: "test value",
  }, {
    value: "another value",
  }]
  const filePath = await writeContentToSrcData(arrayObject, "test-array.json")
  console.log(filePath, "file path")
  if (filePath) {
    const file = Bun.file(filePath!)
    const fileContent = await file.text()
    expect(fileContent).toContain("test value")
    fs.unlinkSync(filePath)
  }
})
