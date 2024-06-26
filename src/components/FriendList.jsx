import Friend from './Friend';
const FriendList = ({ friendsProp, onSelection, selectedFriend }) => {
    console.log(friendsProp)
    return (
        <ul>{friendsProp.map((friend) => <Friend key={friend.id} friend={friend} selectedFriend={selectedFriend} onSelection={onSelection} />)}</ul>
    );
}

export default FriendList;