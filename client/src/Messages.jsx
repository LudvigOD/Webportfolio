import { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db, auth } from './firebase'; // Ensure db is imported from your firebase configuration
import LoginDropdown from './components/LoginDropdown/LoginDropdown';
import './Messages.css';

function Messages() {
  const [messages, setMessages] = useState([]);
  const [user, setUser] = useState(null); // Track authenticated user
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null); // State to store error message

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      setUser(user);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    if (user) {
      fetchMessages();
    }
  }, [user]);

  const fetchMessages = async () => {
    try {
      const messagesCollection = collection(db, 'contact_messeges');
      const messagesSnapshot = await getDocs(messagesCollection);
      const messagesData = messagesSnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setMessages(messagesData);
    } catch (error) {
      setError(error.message); // Set error message in state
      console.error('Error fetching messages:', error);
    }
  };

  const handleLogin = () => {
    fetchMessages(); // Fetch messages after successful login
  };

  const handleLogout = () => {
    auth.signOut().then(() => {
      setUser(null);
      setMessages([]); // Clear messages after logout
    }).catch(error => {
      console.error('Error signing out:', error);
    });
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div id="messages-container">
      {!user ? (
        <LoginDropdown onLogin={handleLogin} />
      ) : (
        <>
          <button onClick={handleLogout}>Logout</button>
          {error && <p>Error: {error}</p>}
          {messages.length === 0 && !error && <p>No messages found.</p>}
          {messages.map(message => (
            <div key={message.id} className="message">
              <p>{message.message}</p>
              <p>Posted by: {message.name}</p>
              <p>Date: {message.date}</p>
              <p>Email: {message.email}</p>
            </div>
          ))}
        </>
      )}
    </div>
  );
}

export default Messages;
