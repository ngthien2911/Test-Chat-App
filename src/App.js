import { ChatEngine } from 'react-chat-engine';

import ChatFeed from './components/ChatFeed';
import LoginForm from './components/LoginForm';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

const projectID = '7bea4439-2348-4d05-b988-89de3b2e16db';

const App = () => { 
  if (!localStorage.getItem('username')) return <Router><Routes><Route path='/' element={<LoginForm />} /></Routes></Router>;

  return (
    <Router>
    <ChatEngine
      height="100vh"
      projectID={projectID}
      userName={localStorage.getItem('username')}
      userSecret={localStorage.getItem('password')}
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
      onNewMessage={() => new Audio('https://chat-engine-assets.s3.amazonaws.com/click.mp3').play()}
    />
    
    </Router>
    
  );
};

export default App;