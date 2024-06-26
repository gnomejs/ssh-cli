import { sshKeygen } from "./mod.ts";
import { assertEquals as equals } from "jsr:@std/assert@^0.224.0";
import { remove } from "jsr:@gnome/fs@^0.0.0/node";

Deno.test("ssh-keygen", async () => {
    const result = await sshKeygen("-t rsa -b 4096 -N '' -f ./id_rsa", { log: (f, a) => console.log(f, a) });

    console.log(result.text());
    console.log(result.errorText());
    equals(result.code, 0);

    await remove("./id_rsa");
    await remove("./id_rsa.pub");
});
