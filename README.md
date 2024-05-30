# @gnome/ssh-cli

<div height=30" vertical-align="top">
<image src="https://raw.githubusercontent.com/gnomejs/gnomejs/main/assets/icon.png"
    alt="logo" width="60" valign="middle" />
<span>Work less. Do more. </span>
</div>

## Overview

The `ssh-cli` module provides a simple way to execute
ssh commands.

The module relies upon the @gnome/exec module and
has the same basic usage as the `Command` class.

## Basic Usage

```typescript
import { ssh } from "@gnome/ssh-cli";

await ssh(["user@host", "ls"]).run(); 
```

[MIT License](./LICENSE.md)
