// TODO: check baselime log code in la explore
// swap out baselime calls to log it into local clickhouse (locally)
// and log to remote clickhouse (remotely) (perhaps use supabase log service or baselime itself)
// what should type be here? see implementation of console.log maybe?
// do features of log_macro rust crate
// i.e. if you do `log(variable)`, it will log it as if you did `console.log({variable})` but cleaner (and use colors if you can, in browser maybe can't)
// should accept any number of arguments too
export function log(message: any) {}

export function logError(message: any) {}

export function logSeperator() {
  console.log("-----------------------")
}

// this is function that will be exported, users then define functions above themselves perhaps?
export function logSetup() {}

// TODO: for this to work well, there should be vscode extension or something that will automatically import the `log` function if it's ever used (auto add imports)
// applies to all things, i.e. if there is some code that if you do `action` on it, there is only one import action it, activate it instantly
