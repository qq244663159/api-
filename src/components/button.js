import React from 'react';
import FlatButton from 'material-ui/FlatButton';


let style ={
  marLe:{
    margin:'30px',
    color:'blue',

  }
}
const FlatButtonExampleSimple = () => (

  <div>
    <FlatButton label="快点击这里！！！" style={style.marLe} type="submit" primary="true" />
  </div>
);

export default FlatButtonExampleSimple;
