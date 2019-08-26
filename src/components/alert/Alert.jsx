import React from "react";
// import $ from 'jquery';


const Alert = (props) => {
  return (
    <div>
      <div className="alert alert-warning alert-dismissible fade show" role="alert">
        <strong>{props.title} </strong> 
        { props.content}
        <button
          type="button"
          className="close"
          data-dismiss="alert"
          aria-label="Close"
        >
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
    </div>
  );
};

export default Alert;
