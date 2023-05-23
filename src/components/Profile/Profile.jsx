import PropTypes from "prop-types";
import { Profile, Description, Avatar, ProfileName, ProfileTag, ProfileLocation, StatsList, StatsQuantity, StatsLabel } from "./Profile.styled";


export const ProfileCard = ({ username, tag, location, avatar, stats }) => {
    return <Profile>
        <Description>
            <Avatar
                src={avatar}
                alt="User avatar"
            />
            <ProfileName>{username}</ProfileName>
            <ProfileTag>@{tag}</ProfileTag>
            <ProfileLocation>{location}</ProfileLocation>
         </Description>

        <StatsList>
            <li>
                <StatsLabel>Followers</StatsLabel>
                <StatsQuantity>{stats.followers}</StatsQuantity>
            </li>
            <li>
                <StatsLabel>Views</StatsLabel>
                <StatsQuantity>{stats.views}</StatsQuantity>
            </li>
            <li>
                <StatsLabel>Likes</StatsLabel>
                <StatsQuantity>{stats.likes}</StatsQuantity>
            </li>
        </StatsList>
</Profile>
}

ProfileCard.propTypes = {
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.exact({
        followers: PropTypes.number.isRequired,
        views: PropTypes.number.isRequired,
        likes: PropTypes.number.isRequired,
    }),
}