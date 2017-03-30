# Castle CLI

A comman-line Castle projects build tool

## Installation

```bash
sudo npm i -g castle-cli
```

## Usage

```bash
Castle CLI  0.2.2

Usage: castle [<command>] [options]

Commands:
  new           Create new Castle project
  build         Compile Castle to C, and the build C project with make
  build-castle  Compile Castle to C
  build-target  Compile C sources
  help          Show this screen

Options:
  --version           Show version number                              [boolean]
  -s, --src-dir       source files directory                            [string]
  -t, --target-dir    target directory                                  [string]
  -b, --build-dir     build directory                                   [string]
  -r, --root-dir      project root directory                            [string]
  -m, --mode          compilation mode (debug or release)               [string]
  -c, --c-build-tool  what to use for compiling C sources
                                                      [string] [choices: "make"]
  -n, --no-syntax     turns off sweet.js macros                        [boolean]
  -B, --build-script  use build script                                  [string]
```
