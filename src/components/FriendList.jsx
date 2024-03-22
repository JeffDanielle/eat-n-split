import { list } from 'postcss';
import data from '../data/data'
import Friend from './Friend';
const FriendList = ({ friendsProp }) => {
    return (
        <ul>{friendsProp.map((friend) => <Friend key={friend.id} friend={friend} />)}</ul>
    );
}

export default FriendList;