import Axios from 'axios';
import Cookies from 'js-cookie';

export const followUser = (id) => {
  Axios.post(
    `https://rustam-social-media-rails-app.herokuapp.com/api/v1/users/${id}/follow`,
    { session: false },
    {
      headers: {
        Authorization: `Bearer ${Cookies.get('jwt')}`,
      },
    }
  ).then((res) => {
    console.log(res);
    updateUserLS();
  });
};

export const unfollowUser = (id) => {
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
    })
    .catch((err) => {
      console.log(err);
    });
};

export const updateUserLS = () => {
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
