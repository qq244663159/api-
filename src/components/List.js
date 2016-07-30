import React from 'react'
import map from 'lodash/fp/map';

import BlogCard from './Card.js';

let blogs=[
  {index:1, title:'Hello World', date:'2016.7.24'},
  {index:2, title:'Good Job', date:'2016.7.25'},
  {index:3, title:'Welcome to My Site', date:'2016.7.26'},
]


class List extends React.Component {
  render () {
    var blogCards = [];
    map((b) => {blogCards.push(<BlogCard title={b.title} date={b.date} index={b.index} key={Math.random()}/>);},blogs);

    let styles={
      root:{
        maxWidth:'700px',
        padding:'30px 10px',
        margin:'0 auto',
      }
    }
    return(
      <div style={styles.root}>
        {blogCards}
      </div>
    )
  }
}

export default List;
