import './App.css';
import { Amplify } from 'aws-amplify';
import awsConfig from './aws-exports';
import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

Amplify.configure(awsConfig);

function App() {
  return (
    <Authenticator>
      {({ signOut, user }) => (
        <main style={{ textAlign: 'center' }}>
          <h1>Hello {user.username}</h1>
          <button onClick={signOut}>Sign out</button>
        </main>
      )}
    </Authenticator>
  );
}

export default App;