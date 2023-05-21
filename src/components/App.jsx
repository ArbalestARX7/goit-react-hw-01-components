import { ProfileCard } from "./Profile/Profile";
import { user } from "components/user";

export const App = () => {
  return (
    <ProfileCard username={user.username}
  tag={user.tag}
  location={user.location}
  avatar={user.avatar}
  stats={user.stats}></ProfileCard>
  );
};

