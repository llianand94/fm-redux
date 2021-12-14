import { connect } from "react-redux";
import * as Actions from './actions';



function App(props) {
  const {count, step, dispatch} = props;
  const increment = () =>dispatch(Actions.increment());    
  
  const decrement = () =>dispatch(Actions.decrement());    

const setStep = ({target:{value}}) =>dispatch(Actions.setStep(Number(value)))

  return (
    <div>
      <h2>Count:{count}</h2>
      <input type="number" value={step} onChange={setStep}/>
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
