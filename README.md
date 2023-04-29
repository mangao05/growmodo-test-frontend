# Growmodo Exam Frontend

This project is the frontend for the Growmodo Exam. It is built with Vue.js and provides a user interface for interacting with the backend API.

## Prerequisites

Before getting started, make sure you have the following installed on your computer:

- Node.js (version 12 or later)
- Git

## Installation

1. Clone this repository to your local machine:
```
https://github.com/mangao05/growmodo-test-frontend.git
```

2. Change into the project directory:

``` 
cd growmodo-test-frontend
```

3. Install the project dependencies:
```
npm install
```

## Configuration

The frontend application relies on a backend API to function properly. You will need to configure the API endpoint by setting the `VUE_APP_API_URL` environment variable in a `.env` file. An example `.env` file is provided in the root of the project directory:

```
VUE_APP_API_URL=http://localhost:8000/api
```

## Backend Setup

This frontend application requires a backend API to function. Please ensure that the backend API is set up and running before continuing. You can find instructions for setting up the backend API at [https://github.com/mangao05/growmodo-test-backend](https://github.com/mangao05/growmodo-test-backend).

## Usage

To start the frontend development server, run the following command:

```
npm run serve
```


The application will be accessible at `http://localhost:8080`.

## Building for Production

To build the frontend application for production, run the following command:

```
npm run build
```


The compiled assets will be located in the `dist/` directory.

## Contributing

If you would like to contribute to this project, please follow these steps:

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Write tests for your changes
5. Run the tests
6. Submit a pull request



