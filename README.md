# Talk2AI

Talk2AI is an interface for creating prompts and receiving responses to those prompts from OpenAI's GPT-3.

Usage requires an account with OpenAI. One can be created on their site. https://openai.com/api/

The advantages of using this app over the OpenAI's provided playground are:

1. History of the user's entries throughout the session, including the settings used for that entry, and a delete button for removing unwanted responses.
2. For those who go beyond the OpenAI free trial: a max cost calculator based on input settings and an estimated cost calculator for each entry based on the return. The history logs these costs with each entry as well.
3. Simple exports of individual entries or the entire session history to text files.
4. Easy continuation of previous entries without needing to copy/paste.
5. Significantly easier use on mobile!

### Running the App

Live at https://jonlervold.com/talk2ai/

### Running the App via Source Code

1. Clone repo
2. Run <code>npm install</code>
3. Run <code>nx serve app</code>
4. Navigate to http://localhost:4200 in browser.

### Steps for Use

1. Sign in to openai.com.
2. Click the colored circle on the top right of the page with the first letter of your name.
3. In the dropdown menu, click "View API Keys."
4. On this page, under the "Secret Key" header, click "copy."
5. Paste this key into the "API Key" input field below.
6. Enter something into the input box and click "Submit."

More information about creating prompts for the AI can be found in the OpenAI documentation. https://beta.openai.com/docs/

### Other

This app falls under the category of Open-Source / Bring-Your-Own-Key applications, which the Usage Guidelines section of the documentation states can be made live without an app review so long as users' API keys are not stored on the server and that the application does not fall into any domains deemed unacceptable. This application is entirely client-side code and does not have the capability to store API keys. Communication runs directly from the user's browser to OpenAI.
