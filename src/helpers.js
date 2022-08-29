import Axios from 'axios';
import Cookies from 'js-cookie';

const followUser = (id) => {
  Axios.post(
    `https://rustam-social-media-rails-app.herokuapp.com/api/v1/users/${id}/follow`,
    { session: false },
    {
      headers: {
        Authorization: `Bearer ${Cookies.get('jwt')}`,
      },
    }
  ).then((res) => {
    updateUserLS();
    console.log('🍉 Followed');
  });
};

const unfollowUser = (id) => {
  Axios.delete(
    `https://rustam-social-media-rails-app.herokuapp.com/api/v1/users/${id}/unfollow`,
    {
      headers: {
        Authorization: `Bearer ${Cookies.get('jwt')}`,
      },
    }
  )
    .then((res) => {
      updateUserLS();
      console.log('🍉 Unfollowed');
    })
    .catch((err) => {
      console.log(err);
    });
};

const updateUserLS = () => {
  Axios.get(
    `https://rustam-social-media-rails-app.herokuapp.com/api/v1/auth/me`,
    {
      headers: {
        Authorization: `Bearer ${Cookies.get('jwt')}`,
      },
    }
  )
    .then((res) => {
      localStorage.setItem('user', JSON.stringify(res.data));
    })
    .catch((err) => {
      console.log(err);
    });
};

export { followUser, unfollowUser, updateUserLS };
