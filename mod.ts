/**
 * The `ssh-cli` module provides a simple way to execute
 * ssh commands.
 *
 * The module relies upon the @gnome/exec module and
 * has the same basic usage as the `Command` class.
 *
 * ## Basic Usage
 *
 * ```typescript
 * import { ssh } from "@gnome/sh-cli";
 *
 * await ssh(["user@host", "ls"]).run();
 * ```
 * @module
 */
export * from "./scp/mod.ts";
export * from "./sftp/mod.ts";
export * from "./cli.ts";
export * from "./ssh-add/mod.ts";
export * from "./ssh-agent/mod.ts";
export * from "./ssh-keygen/mod.ts";
export * from "./ssh-keyscan/mod.ts";
export * from "./sshd/mod.ts";
