import { useState, useEffect } from 'react';
import SuggestionsItem from './SuggestionsItem';
import userApi from '../../api/users';

import './SuggestionsList.scss';

const SuggestionsList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function fetchUsers() {
      const response = await userApi.suggestedUsers();
      if (response.status === 200) {
        setUsers(response.data);
      } else {
        console.log(response.status);
      }
    }
    fetchUsers();
  }, []);

  return (
    <ul className='suggestions-list'>
      {users.map((user) => {
        return (
          <SuggestionsItem
            key={user.user.id}
            image={user.user.avatar}
            id={user.user.id}
            name={`${user.user.first_name} ${user.user.last_name}`}
            lastName={user.user.last_name}
          />
        );
      })}
    </ul>
  );
};

export default SuggestionsList;
