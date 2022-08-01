const SuggestionsItem = (props) => {
  return <li>
    <img src={props.image} alt='user' />
    <br />
    <span>{props.id}</span>
    <br />
    <span>{props.name}</span><span>{props.lastName}</span>
  </li>;
};

export default SuggestionsItem;
