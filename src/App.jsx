import './custom.css'
import FriendList from './components/FriendList';
import FormAddFriend from './components/FormAddFriend';
import FormSplitBill from './components/FromSplitBill';
import Button from './components/Button';
import { useState } from 'react';
import data from "./data/data"

function App() {
  const [showAddFriend, setShowAddFriend] = useState(false);
  const [friends, setFriends] = useState(data);
  const [selectedFriend, setSelectedFriend] = useState(null);

  const handleShowAddFriend = () => {
    setShowAddFriend(prevState => !prevState)
  }

  const handleAddFriend = (friend) => {
    setFriends(prevObj => [...prevObj, friend])
    setShowAddFriend(prevState => !prevState)
  }

  const handleSelection = (friend) => {
    // setSelectedFriend(friend);
    setSelectedFriend(selected => selected?.id === friend.id ? null : friend)
    setShowAddFriend(false);
  }

  const handleSplitBill = (value) => {

    setFriends(friends => friends.map(
      friend => friend.id === selectedFriend.id ? { ...friend, balance: friend.balance + value } : friend))
    setSelectedFriend(null);
  }

  return (
    <div className='app'>
      <div className="sidebar">
        <FriendList
          friendsProp={friends}
          onSelection={handleSelection}
        />

        {showAddFriend && <FormAddFriend onAddFriend={handleAddFriend} />}

        <Button onClick={handleShowAddFriend}>{showAddFriend ? "Close" : "Add friend"}</Button>
      </div>

      {selectedFriend && <FormSplitBill selectedFriend={selectedFriend} onSplitBill={handleSplitBill} />}

    </div>
  )
}

export default App;
