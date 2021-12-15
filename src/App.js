import { connect } from "react-redux";
import * as Actions from './actions';



function App(props) {
  const {count, step, incrementAction, decrementAction, setStepAction} = props;
//   const increment = () =>dispatch(Actions.increment());
//   const decrement = () =>dispatch(Actions.decrement());    

const setStep = ({target:{value}}) =>setStepAction(Number(value))

  return (
    <div>
      <h2>Count:{count}</h2>
      <input type="number" value={step} onChange={setStep}/>
      <button onClick={incrementAction}>+</button>
      <button onClick={decrementAction}>-</button>
    </div>
  );
}



const  mapStateToProps= ({count, step})=> ({count, step});

const mapDispatchToProps = (dispatch) =>({
  incrementAction: ()=>dispatch(Actions.increment()),
  decrementAction: ()=>dispatch(Actions.decrement()),
  setStepAction:(newStep)=>dispatch(Actions.setStep(newStep))
})

// const withProps = connect(mapStateToProps);
// const ComponentWithProps = withProps(App);

export default connect(mapStateToProps, mapDispatchToProps)(App);
