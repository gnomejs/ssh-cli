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
export * from "./scp.ts";
export * from "./sftp.ts";
export * from "./ssh.ts";
export * from "./ssh-add.ts";
export * from "./ssh-agent.ts";
export * from "./ssh-keygen.ts";
export * from "./ssh-keyscan.ts";
export * from "./sshd.ts";
