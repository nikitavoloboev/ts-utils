// published
export * from "./src/clipboard.ts"
export * from "./src/url.ts"
export * from "./src/jxa.ts"

// local
export * from "./bun/file.ts"
export * from "./src/date.ts"
export * from "./src/html.ts"
export * from "./src/safari.ts"
export * from "./src/time.ts"
export * from "./src/other.ts"
export * from "./src/git.ts"
export * from "./src/log.ts"

// TODO: have way to distinguish code that relies to be ran via bun
// TODO: can do same for deno/node too but focus is on bun
// by default it is intended to be ran in any environment
