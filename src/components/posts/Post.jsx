import './Post.scss';

const Post = (props) => {
  console.log(props)

  return (
    <div className='post'>
      <img className='post__img' src={props.url} alt='' />
    </div>
  );
};

export default Post;
