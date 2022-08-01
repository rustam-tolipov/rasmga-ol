const h1Styles = {
  fontSize: '2.4rem',
  color: '#fff',
  fontWeight: '700',
};

const H1 = (props) => {
  return <h1 style={h1Styles}>{props.children}</h1>;
};

export default H1;
