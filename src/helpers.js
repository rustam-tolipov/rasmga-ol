import Axios from 'axios';
import Cookies from 'js-cookie';

// Functoin that sends post follow request to the server
export const followUser = (userId) => {
  Axios.get(
    `https://rustam-social-media-rails-app.herokuapp.com/api/v1/users/2/follow`,
    {
      headers: {
        Authorization: `Bearer ${Cookies.get('jwt')}`,
      },
    }
  )
    .then((res) => {
    })
    .catch((err) => {
      console.log('Could not follow user', err);
    });
};
