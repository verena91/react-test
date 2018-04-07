import React from 'react';
import Moment from 'react-moment';
import { Div, Img } from 'glamorous';
import { PostGridDetail, PostBox, PostHeaderFooter, PostTitle, PostAuthor, Tag, PostDate } from './PostStyle';

const PostDetailContainer = (props) => {
  const locationState = props.history.location.state;
  if (!locationState) {
    props.history.push('/');
    return <div />;
  }
  return (
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
      <PostGridDetail>
        <PostHeaderFooter css={{ gridArea: 'header' }}>
          <PostTitle>
            {locationState.post.title}
            <PostAuthor><br /> By: {locationState.post.authors}</PostAuthor><br />
            <PostDate>Date: <Moment format="YYYY/MM/DD HH:mm">{locationState.post.date}</Moment></PostDate>
          </PostTitle>
          {locationState.post.tags.map(t => <Tag key={t.id}>{t.name} </Tag>)}
        </PostHeaderFooter>
        <PostBox css={{ gridArea: 'sidebar' }}>
          <Img width="50%" height="50%" src={locationState.post.thumbnail} />
        </PostBox>
        <PostBox css={{ gridArea: 'content' }}>
          {locationState.post.content.map((paragraph, index) => {
              switch (paragraph.type) {
                case 'header':
                  return <h2 key={index}>{paragraph.text}</h2>;
                case 'block_quote':
                  return (
                    <blockquote key={index} dangerouslySetInnerHTML={{ __html: paragraph.text }} />);
                case 'image':
                  return (
                    <Img key={index} width="40%" height="40%" src={paragraph.url} />);
                case 'unknown':
                  return (
                    <a key={index} href={paragraph.url}>{paragraph.url}</a>);
                default:
                  return (
                    <p key={index} dangerouslySetInnerHTML={{ __html: paragraph.text }} />);
              }
            })}
        </PostBox>
      </PostGridDetail>
    </Div>
  );
};

export default PostDetailContainer;
