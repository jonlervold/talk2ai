import { FC } from 'react';
import Card from './styles/Card';

const Help: FC = () => {
  return (
    <Card>
      <h3 style={{ textAlign: 'center' }}>Welcome to Talk2AI</h3>
      <p>
        Talk2AI is an interface for creating prompts and receiving responses to
        those prompts from OpenAI's GPT-3.
      </p>
      <p>
        Usage requires an account with OpenAI. One can be created at{' '}
        <a href="https://openai.com/api" target="_blank" rel="noreferrer">
          openai.com/api
        </a>
        .
      </p>
      <h4>Steps for Use</h4>
      <ol>
        <li>
          Sign in to{' '}
          <a href="https://openai.com/api" target="_blank" rel="noreferrer">
            openai.com/api
          </a>
          .
        </li>
        <li>
          Click the colored circle on the top right of the page with the first
          letter of your name.
        </li>
        <li>In the dropdown menu, click "View API Keys."</li>
        <li>On this page, under the "Secret Key" header, click "copy."</li>
        <li>Paste this key into the "API Key" input field below.</li>
        <li>Enter something into the input box and click "Submit."</li>
      </ol>
      <p>
        More information about creating prompts for the AI can be found in the{' '}
        <a
          href="https://beta.openai.com/docs/"
          target="_blank"
          rel="noreferrer"
        >
          OpenAI documentation
        </a>
        .
      </p>
      <h4>Other</h4>
      <p>
        This app falls under the category of Open-Source / Bring-Your-Own-Key
        applications, which the{' '}
        <a
          href="https://beta.openai.com/docs/usage-guidelines/content-policy"
          target="_blank"
          rel="noreferrer"
        >
          Usage Guidelines
        </a>{' '}
        section of the documentation states can be made live without an app
        review so long as users' API keys are not stored on the server and that
        the application does not fall into any domains deemed unacceptable. This
        application is entirely client-side code and does not have the
        capability to store API keys. Communication runs directly from the
        user's browser to OpenAI.
      </p>
      <p>
        Source code for this application can be found on{' '}
        <a
          href="https://github.com/jonlervold/talk2ai"
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>
        .
      </p>
    </Card>
  );
};

export default Help;
