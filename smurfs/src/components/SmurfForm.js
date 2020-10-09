import React, { useState } from "react";
import { connect } from "react-redux";
import { postSmurf } from "../store/actions/index";

const initialFormValues = {
    name: '',
    age: '',
    height: ''
}

const Form = (props) => {
  const [smurf, setSmurf] = useState(initialFormValues);

  const inputHandler = (e) => {
    setSmurf({ ...smurf, [e.target.name]: e.target.value });
  }; 
  
  const submitHandler = (e) => {
    e.preventDefault();
    props.postSmurf(smurf);
    document.getElementById("smurfForm").reset();
  };

  return (
    <div>
      <form onSubmit={submitHandler} id="smurfForm">
        <label>
          Enter Smurf Name:
          <input
            type="text"
            name="name"
            value={props.name}
            placeholder="Name"
            onChange={inputHandler}
          />
        </label>
        <label>
          Enter Smurf Age:
          <input
            type="text"
            name="age"
            value={props.age}
            placeholder="Age"
            onChange={inputHandler}
          />
        </label>
        <label>
          Enter Smurf Height:
          <input
            type="text"
            name="height"
            value={props.height}
            placeholder="Height"
            onChange={inputHandler}
          />
        </label>
        <button>Add Smurf to Village!</button>
      </form>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    smurfs: state.smurfs,
    error: state.errors
  };
};

export default connect(mapStateToProps, { postSmurf })(Form);