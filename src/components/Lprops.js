import React from 'react';
import '../style.css';

export const Lprops = () => {
    function Welcome(props) {
        return <h1>Hello, Welcome{props.name}</h1>;
      }
      return(
        <>
        <Welcome name=' Chandan!'/>
        </>
      );
}
