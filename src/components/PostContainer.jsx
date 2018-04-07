import React from 'react';
import { Link } from 'react-router-dom';
import { Div, Img, Hr } from 'glamorous';
import { PostGrid, PostBox, PostHeaderFooter, PostTitle, Tag } from './PostStyle';

const PostContainer = props => (
  <Div
    display="flex"
    flexDirection="column"
    alignItems="center"
    alignContent="center"
    justifyContent="center"
    padding={0}
    margin={0}
    fontSize={12}
  >
    <PostGrid>
      <PostHeaderFooter css={{ gridArea: 'header' }}>
        <Link
          to={{
            pathname: props.post.id,
            state: { post: props.post },
          }}
        >
          <PostTitle>{props.post.title}</PostTitle>
        </Link>
        {props.post.tags.map(t => <Tag key={t.id}>{t.name} </Tag>)}
      </PostHeaderFooter>
      <PostBox css={{ gridArea: 'sidebar' }}>
        <Img
          width="100%"
          height="100%"
          src={props.post.thumbnail}
        />
      </PostBox>
      <PostBox css={{ gridArea: 'content' }}>
        <p>{props.post.excerpt}</p>
      </PostBox>
    </PostGrid>
    <Hr width="95%" />
  </Div>
);

export default PostContainer;
