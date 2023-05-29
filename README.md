# Test task "Delivery app". Front-end part

This application was written in React and TypeScript.

## Features

This application works in conjunction with the backend part, which is hosted at
https://github.com/Kcepriu/back_end_delivery.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

## Settings

This application does not require any prior configuration. However, you may need to enter your key data.

./src/constant/googkeKeys.tsx

export const CAPTHCA_KEY = "captcha key for captcha functionality";
export const MAP_KEY = "key for working with Google Maps API";

./src/constant/api.tsx

export const URL_API = "backend application URL";
