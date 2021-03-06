import React from 'react';
import AutoComplete from 'material-ui/AutoComplete';
import axios from 'axios'

import FlatButtonExampleSimple from './button'

export default class AutoCompleteExampleSimple extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      dataSource: [],
    };
  }

  handleUpdateInput(value){
    this.setState({
      dataSource: [
        value,
        value + value,
        value + value + value,
      ],
    });
  };
  _handleSubmit(e){
	   e.preventDefault();
     const account= this.refs.account.getValue();
     console.log(account);
     axios.get(`https://api.github.com/users/${account}`)
      .then(function (response) {
        let Img = response.data.avatar_url;
        let Followers = response.data.followers;
        let Following = response.data.following;
         console.log(response);
         console.log(Img);
         console.log(Followers);
         console.log(Following);
        })
      // .catch(function (error) {
      //    console.log(error);
      // });
   }



  render() {
    let style ={
      marLe:{
        margin:'30px'
      },
      formStyle:{
        width:'360px',
        height:'260px',
        backgroundColor:'white',
        border:'20px solid yellow',
        borderRadius:'20px'
      }
    }
    return (
      <form onSubmit={this._handleSubmit.bind(this)}>
        <AutoComplete style={style.marLe}
          hintText="请输入用户名"
          dataSource={this.state.dataSource}
          onUpdateInput={this.handleUpdateInput.bind(this)}
          floatingLabelText="你想查找谁？？？"
          ref="account"
        />

        <FlatButtonExampleSimple />

        <img src="{this.state.Img}" />
        <ul>
          <li>{this.state.Followers}</li>
          <li>{this.state.Following}</li>
        </ul>
      </form>
    );
  }
}
