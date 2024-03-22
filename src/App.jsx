import './custom.css'
import FriendList from './components/FriendList';
import FormAddFriend from './components/FormAddFriend';
import FormSplitBill from './components/FromSplitBill';
import Button from './components/Button';
import { useState } from 'react';
import data from "./data/data"

function App() {
  const [showAddFriend, setShowAddFriend] = useState(false);
  const [friends, setFriends] = useState(data)

  const handleShowAddFriend = () => {
    setShowAddFriend(prevState => !prevState)
  }

  const handleAddFriend = (friend) => {
    setFriends(prevObj => [...prevObj, friend])
    setShowAddFriend(prevState => !prevState)
  }

  return (
    <div className='app'>
      <div className="sidebar">
        <FriendList friendsProp={friends} />
        {showAddFriend && <FormAddFriend onAddFriend={handleAddFriend} />}
        <Button onClick={handleShowAddFriend}>{showAddFriend ? "Close" : "Add friend"}</Button>
      </div>

      <FormSplitBill></FormSplitBill>

    </div>
  )
}

export default App;
