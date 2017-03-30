# Castle CLI

A comman-line Castle projects build tool

## Installation

```bash
sudo npm i -g castle-cli
```

## Usage

### Create new project

```bash
castle new my_project
```

The above command will create `my_project` directory with the following structure:

```
my_project/
├── package.json
└── src/
    ├── c/
    ├── castle/
    └── js/
```

### Build the project

```bash
castle build        # the whole project
castle build-castle # compile castle to c
castle build-target # compile c sources with cmake
```
