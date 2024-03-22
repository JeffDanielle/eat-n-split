import './custom.css'
import FriendList from './components/FriendList';
import FormAddFriend from './components/FormAddFriend';
import FormSplitBill from './components/FromSplitBill';
import Button from './components/Button';

function App() {

  return (
    <div className='app'>
      <div className="sidebar">
        <FriendList />
        <FormAddFriend />
        <Button>Add Friend</Button>
      </div>

      <FormSplitBill></FormSplitBill>

    </div>
  )
}

export default App;
