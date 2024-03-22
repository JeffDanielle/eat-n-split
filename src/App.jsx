import './custom.css'
import FriendList from './components/FriendList';
import FormAddFriend from './components/FormAddFriend';
import FormSplitBill from './components/FromSplitBill';
import Button from './components/Button';
import { useState } from 'react';

function App() {
  const [showAddFriend, setShowAddFriend] = useState(false);

  const handleShowAddFriend = () => {
    setShowAddFriend(prevState => !prevState)
  }

  return (
    <div className='app'>
      <div className="sidebar">
        <FriendList />
        {showAddFriend && <FormAddFriend />}
        <Button onClick={handleShowAddFriend}>{showAddFriend ? "Close" : "Add friend"}</Button>
      </div>

      <FormSplitBill></FormSplitBill>

    </div>
  )
}

export default App;
