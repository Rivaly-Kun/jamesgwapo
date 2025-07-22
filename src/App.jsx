import { useState } from 'react';
import './App.css';

import ChatComponent from './components/ChatComponent';
import HomeScreen from './components/HomeScreen';

function App() {
  const [showChat, setShowChat] = useState(false); // initially hidden

  return (
    <div>
      {/* Always show HomeScreen */}
      <HomeScreen />

      {/* Toggle Button */}
      <div style={{ padding: '1rem' }}>

        <button onClick={() => setShowChat(!showChat)}>
          {showChat ? 'Hide Chat' : 'Show Chat'}
        </button>
        
      </div>

      {/* Conditionally render ChatComponent */}
      {showChat && <ChatComponent />}
    </div>
  );
}

export default App;
