import SuggestionsList from './SuggestionsList';
import H1 from '../UI/H1';

import './Suggestions.scss';

const Suggestions = (props) => {
  return (
    <div className='suggestions'>
      <H1>Suggestions</H1>
      <SuggestionsList />
    </div>
  );
};

export default Suggestions;
