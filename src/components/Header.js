import React from 'react';
import IconButton from 'material-ui/IconButton';
import MenuButton from 'material-ui/svg-icons/navigation/menu';

import Search from './Search';
import NavBar from './NavBar';

class Header extends React.Component {
  handelOpen(){
    this.refs.navbar.handleToggle();
  }
  render () {
    let styles={
      root:{
        backgroundColor:'#00BCD4',
      },
      icon:{
        marginTop:'10px',
        marginLeft:'10px',
        width: '52px',
        height: '52px',
      },
      svg: {
        width: '32px',
        height: '32px',
      }
    }
    return(
      <div style={styles.root}>
        <IconButton tooltip="menu" style={styles.icon} iconStyle={styles.svg} onClick={this.handelOpen.bind(this)}>
          <MenuButton  color='#fff' hoverColor='#004D40'/>
        </IconButton>
        <Search />
        <NavBar ref='navbar'/>
      </div>
    )
  }
}

export default Header;
