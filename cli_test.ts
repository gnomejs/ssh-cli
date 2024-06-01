import { ssh } from "./cli.ts";
import { assertEquals as equals } from "jsr:@std/assert@^0.224.0";

Deno.test("ssh-help", async () => {
    const result = await ssh({ help: true });
    equals(result.code, 255);
});
