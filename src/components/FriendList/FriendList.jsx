import PropTypes from "prop-types";
import { Friends, Item, Status, Avatar, Name } from "./FriendList.styled"

export const FriendList = ({friends}) => {
    return  <Friends>
                {friends.map(({ avatar, name, isOnline, id }) => 
                    <Item key={id}>
                        <Status style={{backgroundColor: `${isOnline? "red" : "green"}`}}></Status>
                        <Avatar src={avatar} alt="User avatar" width="48" />
                        <Name>{name}</Name>
                    </Item>)}
            </Friends>
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
};