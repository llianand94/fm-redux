import { connect } from "react-redux";



function App(props) {
  const {count, dispatch} = props;
  const increment = () =>{      
      dispatch({type:'INCREMENT'});    
  }
  const decrement = () =>{      
    dispatch({type:'DECREMENT'});    
}
  return (
    <div>
      <h2>Count:{count}</h2>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </div>
  );
}



function mapStateToProps(state){
  return state;
}


// const withProps = connect(mapStateToProps);
// const ComponentWithProps = withProps(App);

export default connect(mapStateToProps)(App);
