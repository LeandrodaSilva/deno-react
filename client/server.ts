const start = ["deno", "task", "build"];

// create subprocess
const a = Deno.run({ start });

// await its completion
await a.status();

const serve = ["deno", "task", "serve"];

// create subprocess
const b = Deno.run({ serve });

// await its completion
await b.status();
