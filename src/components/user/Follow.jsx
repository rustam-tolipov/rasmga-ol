import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import Button from '../UI/Button';

import './UserProfile.scss';
import followsApi from '../../api/follows';

const Follow = (props) => {
  const [isFollowing, setIsFollowing] = useState(false);

  const userData = useSelector((state) => state.auth.currentUser);

  useEffect(() => {
    async function fetchFollow() {
      const response = await followsApi.getFollowings(userData.id);
      const followed = response.find((followee) => {
        return followee.id === props.id;
      });
      if (followed) {
        setIsFollowing(true);
      }
    }

    fetchFollow();
  }, [userData.id, props.id]);

  const followUser = async () => {
    const response = await followsApi.followUser(props.id);
    if (response.status === 201) {
      setIsFollowing(true);
    }
  };

  const unfollowUser = async () => {
    const response = await followsApi.unfollowUser(props.id);
    if (response.status === 200) {
      setIsFollowing(false);
    }
  };

  return (
    <>
      {isFollowing ? (
        <Button
          onClick={() => {
            setIsFollowing(false);
            unfollowUser();
          }}
        >
          Unfollow
        </Button>
      ) : (
        <Button
          onClick={() => {
            setIsFollowing(true);
            followUser();
          }}
        >
          Follow
        </Button>
      )}
    </>
  );
};

export default Follow;
