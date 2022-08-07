import './Post.scss';

const Post = (props) => {
  console.log(props)

  return (
    <div className='post'>
      <img className='post__img' src={props.url} alt='' />
      <p className='post__content'>{props.content}</p>
    </div>
  );
};

export default Post;
