import React from 'react';
import { connect } from 'react-redux';

const Spinner = (props) => {
  const { isDataLoaded } = props;
  
  return (
    <>
      <div className={`${isDataLoaded ? 'spinner-wrapper' : 'visually-hidden'}`}>
        <div className="loader-1 center"><span></span></div>
        <div className="spinner-wrapper-layer"></div>
      </div>
    </>
  );
};

const mapStateToProps = (state) => ({
  isDataLoaded: state.isDataLoaded
});

export { Spinner };
export default connect(mapStateToProps,)(Spinner);
