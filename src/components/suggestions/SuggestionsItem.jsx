import Button from '../UI/Button';
import './SuggestionsItem.scss';

const SuggestionsItem = (props) => {
  return (
    <li className='suggestions-item'>
      <div className='suggestions-item__profile'>
        <img className='suggestions-item__img' src={props.image} alt='user' />
        <div className='suggestions-item__name-box'>
          <span className='suggestions-item__id'>{props.id}</span>
          <span className='suggestions-item__name'>{props.name}</span>
        </div>
      </div>
      <Button>Follow</Button>
    </li>
  );
};

export default SuggestionsItem;
