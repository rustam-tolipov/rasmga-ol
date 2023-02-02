import Button from '../UI/Button';
import Verified from '../UI/Verified';
import './SuggestionsItem.scss';
import Follow from '../user/Follow';

const SuggestionsItem = (props) => {
  return (
    <li className='suggestions-item'>
      <div className='suggestions-item__profile'>
        <img className='suggestions-item__img' src={props.image} alt='user' />
        <div className='suggestions-item__name-box'>
          <span className='suggestions-item__id'>
            {props.name} <Verified />
          </span>
          <span className='suggestions-item__name'>{props.name}</span>
        </div>
        <Follow id={props.id} />
      </div>
    </li>
  );
};

export default SuggestionsItem;
