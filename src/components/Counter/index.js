import { connect } from "react-redux";
import * as Actions from './../../actions/counterCreators';


function Counter(props) {
  const {count, step, incrementAction, decrementAction, setStepAction} = props;
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


const  mapStateToProps= (counter)=> counter;

const mapDispatchToProps = (dispatch) =>({
  incrementAction: ()=>dispatch(Actions.increment()),
  decrementAction: ()=>dispatch(Actions.decrement()),
  setStepAction: (newStep)=>dispatch(Actions.setStep(newStep))
})


export default connect(mapStateToProps, mapDispatchToProps)(Counter);