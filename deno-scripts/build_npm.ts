import { build, emptyDir } from "@deno/dnt"

await emptyDir("./npm")

await build({
  entryPoints: ["./mod.ts"],
  test: false,
  outDir: "./npm",
  shims: {
    // see JS docs for overview and more options
    deno: true,
  },
  package: {
    // package.json properties
    name: "@nikiv/ts-utils",
    version: Deno.args[0],
    description: "Utils of all kind",
    license: "MIT",
    repository: {
      type: "git",
      url: "git+https://github.com/nikitavoloboev/ts-utils",
    },
    bugs: {
      url: "https://github.com/nikitavoloboev/ts-utils/issues",
    },
  },
  postBuild() {
    // steps to run after building and before running the tests
    // Deno.copyFileSync("license", "npm/license")
    // Deno.copyFileSync("readme.md", "npm/readme.md")
  },
})
