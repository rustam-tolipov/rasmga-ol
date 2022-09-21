// import loading image from assets/waiting.gif
import logo from '../../assets/waiting.gif';

function Loading(loading) {
  return (
    <div className="loading">
      <img src={logo} alt="Instagram logo" />
    </div>
  );
}

export default Loading;