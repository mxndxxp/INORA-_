If you haven't already, make sure you have Node.js installed on your computer. This will also give you npm (Node Package Manager).

You can download and install it from the official website: nodejs.org
Your application uses Genkit for AI features, which requires a Google Gemini API key. Since .env files are not (and should not be) committed to GitHub for security reasons, you will need to create this file locally.

In the root folder of your project (the one you just cloned), create a new file named .env.
Open this new .env file and add your Gemini API key:
GEMINI_API_KEY=YOUR_API_KEY_HERE

Replace YOUR_API_KEY_HERE with your actual key from Google AI Studio.
Now, you need to install all the libraries and packages your project relies on, which are listed in your package.json file.

In your terminal, inside the project folder, run the following command:
npm install

This will download and install all the necessary dependencies into a node_modules folder.
Finally, you can start the application.

In the same terminal window, run the dev script defined in your package.json:
npm run dev

Your terminal will show that the server has started. You can now open your web browser and navigate to the address it provides, which is http://localhost:9002.
Your application is now running locally from the code you pulled from GitHub. Any changes you make to the files will be reflected in your browser automatically.
