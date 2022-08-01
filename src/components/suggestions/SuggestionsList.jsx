import { useState, useEffect } from 'react';
import SuggestionsItem from './SuggestionsItem';

const SuggestionsList = (props) => {
  // fetch https://randomuser.me/api/?results=12 using axios

  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('https://randomuser.me/api/?results=12')
      .then((res) => res.json())
      .then((data) => setUsers(data.results));
  }, []);

  console.log(users);

  return (
    <ul className='suggestions-list'>
      {users.map((user, id) => {
        return (
          <SuggestionsItem
            key={id}
            image={user.picture.medium}
            id={user.login.username}
            name={user.name.first}
            lastName={user.name.last}
          />
        );
      })}
    </ul>
  );
};

export default SuggestionsList;
