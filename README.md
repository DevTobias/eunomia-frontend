# Eunomia Frontend

`Eunomia` is a To-Do-Application for a shared appartment, so they can manage their tasks. This repositorie is the frontend part of the whole Program.

[![CI/CD](https://github.com/devtobias/eunomia-frontend/workflows/CI/CD/badge.svg)](https://codecov.io/gh/devtobias/eunomia-frontend)
[![Codecov](https://img.shields.io/codecov/c/github/devtobias/eunomia-frontend)](https://codecov.io/gh/devtobias/eunomia-frontend)
[![GitHub license](https://img.shields.io/github/license/devtobias/eunomia-frontend)](https://github.com/DevTobias/eunomia-frontend/blob/main/LICENSE)

## Table of content

* [Features](#features)
* [Requirements](#requirements)
* [Getting started](#getting-started)
* [License](#license)

## Features

## Requirements

- [ ] [Node](https://nodejs.org/en/)
- [ ] [NPM](https://www.npmjs.com/)

## Getting started

First of all make sure you install **all** the above **listed requirements** on your local system. After you installed everything, follow the upcoming installation steps.

### Installation

```bash
# Clone this git repository
git clone https://github.com/DevTobias/eunomia-frontend.git

# Move to the project root directory
cd eunomia-frontend

# Install the dependencies with npm package manager
npm install
```

Now everything should be installed and is ready to start.

### Starting the application
```bash
# Run the local react server
npm start
```

### Authentication problems

**Note**: This is only a production problem, which means that this problem doesn't occur on local hosts!
There is a problem with chrome (-based) browsers, where the autentication dows not work. The reason are the SameSite Cookie flags. You can change them with typing `chrome://flags` in your search field. Then look for the following flags and set them to disabled: `SameSite by default cookies`, `Enable removing SameSite=None cookies` and `Cookies without SameSite must be secure
`. Now everything should work as intended.

## License

The Eunomia Frontend is available under the MIT license, see the [LICENSE](https://github.com/DevTobias/eunomia-frontend/blob/main/LICENSE) file for more information.
