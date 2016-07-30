import React from 'react';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
//
// import Header from './components/Header';
// import List from './components/List';
// import Footer from './components/Footer';
import AutoCompleteExampleSimple from './components/form';




class App extends React.Component {
  getChildContext() {
    return {muiTheme: getMuiTheme()};
  }
  render () {
    return(
      <div>
        <AutoCompleteExampleSimple />

      </div>
    )
  }
}

App.childContextTypes = {
  muiTheme: React.PropTypes.object.isRequired,
};

export default App;
