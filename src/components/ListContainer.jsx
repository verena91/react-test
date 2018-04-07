import React, { Component } from 'react';
import axios from 'axios';
import { Div } from 'glamorous';
import PostContainer from './PostContainer';

export default class ListContainer extends Component {
  constructor(props) {
    super(props);
    this.state = { posts: [], loaded: false, error: false };
  }

  componentDidMount() {
    axios
      .get('https://techcrunch.com/wp-json/tc/mobile/v1/posts/featured')
      .then(({ data }) => {
        this.setState({ posts: data.posts, loaded: true, error: false });
      })
      .catch(() => {
        this.setState({ loaded: true, error: true });
      });
  }

  render() {
    if (this.state.error) {
      throw new Error('I crashed!');
    }
    return (
      <Div>
        {this.state.loaded && this.state.posts.map(p => <PostContainer key={p.id} post={p} />)}
        {!this.state.loaded && (<p>Loading...</p>)}
      </Div>
    );
  }
}
