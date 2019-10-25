# clippy-say

Bring back Clippy and his friends to your operating system of choice.

![Preview](https://i.imgur.com/dlXkv4z.gif)

## Install

You need to install [NodeJS 8.x.x](https://nodejs.org/en/), in order to install `clippy-say` using the node package manager ([npm](https://docs.npmjs.com/getting-started/what-is-npm)).

```bash
# Install electron
# If you have trouble installing it, you may use BUT WITH CAUTION
# npm install -g electron --unsafe-perm=true --allow-root
npm install -g electron
npm install -g clippy-say
```

## Usage

After the [installation](#install), `clippy-say` can be used as described.

```bash

# Run clippy
clippysay

# Run Merlin and let him say "Hello World"
# Possible characters: "Clippy", "Merlin", "Rover" and "Links"
clippysay "Hello World" --character "Merlin"

# Play animations with the -a parameter
# All the possible animations can be found on https://www.smore.com/clippy-js
clippysay "Hello my Dudes" \
    --animation Alert \
    --animation Explain \
    --animation CheckingSomething \
    --nohold

```

### Parameters

 Parameter |     Alias     | Description | Usage
---------- | ------------- | ----------- | ------
`-c`       | `--character` | The character to display (e.g. "Clippy", "Merlin", "Rover" or "Links") | `clippysay "Hello World" --character "Merlin"`
`-x`       | -             | The x-Coordinate to display the agent | `clippysay "Hello World" -x 20 -y 20`
`-y`       | -             | The y-Coordinate to display the agent | `clippysay "Hello World" -x 20 -y 20`
`-r`       | `--random`    | Spawns the agent at a random x-/y-coordinate | `clippysay "Hello World" -r`
`--nohold` | -             | Makes the speech-bubble disappear after 2 seconds | `clippysay "Hello World" --nohold`
`-a` | `--animation`       | Display an animation. All the animations are on [smore.com/clippy-js](https://www.smore.com/clippy-js)  | `clippysay "Hello World" -a Alert -a Explain -a CheckingSomething --nohold`



## Features

- Clippy!
- A lot of CPU usage
- Merlin
- Even more CPU usage
- CLIPPY

## Related

- [Electron](https://github.com/electron/electron)
- [Clippy.js](https://www.smore.com/clippy-js)

## License

>You can check out the full license [here](LICENSE)

This project is licensed under the terms of the **MIT** license.

## Notice

> Please don't kill me because of this application
