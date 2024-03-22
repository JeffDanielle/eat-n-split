import { list } from 'postcss';
import data from '../data/data'
import Friend from './Friend';
const FriendList = () => {
    const friends = data;
    return (
        <ul>{friends.map((friend) => <Friend key={friend.id} friend={friend} />)}</ul>
    );
}

export default FriendList;