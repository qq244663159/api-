import React from 'react'

import Me from '../images/aboutme.jpg';

class Footer extends React.Component {
  render () {
    let styles={
      root:{
        textAlign:'center',
        color:'#fff',
        backgroundColor:'#212121',
        padding:'30px 10px'
      },
      img:{
        width:'40%',
        marginTop:'20px',
        maxWidth:'200px'
      }
    }
    return(
      <div style={styles.root}>
        <p>更多信息，请添加我的微信</p>
        <img src={Me}  style={styles.img}/>
      </div>
    )
  }
}

export default Footer;
