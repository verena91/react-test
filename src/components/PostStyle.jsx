import glamorous from 'glamorous';

const PostGridDetail = glamorous.div({
  marginLeft: '5%',
  marginRight: '5%',
  backgroundColor: '#fff',
  color: '#4d79ff',
  '@supports (display: grid)': {
    display: 'grid',
    gridGap: 10,
    gridTemplateAreas: `
      "header header header"
      "sidebar sidebar sidebar"
      "content  content  content"
    `,
  },
});

const PostGrid = glamorous.div({
  marginLeft: '5%',
  marginRight: '5%',
  backgroundColor: '#fff',
  color: '#4d79ff',
  '@supports (display: grid)': {
    display: 'grid',
    gridGap: 10,
    gridTemplateAreas: `
      "sidebar header header"
      "sidebar content content"
      "sidebar  footer  footer"
    `,
  },
});

const PostBox = glamorous.div({
  backgroundColor: '#fff',
  color: '#000',
  borderRadius: 5,
  padding: 10,
  fontSize: '150%',
});

const PostHeaderFooter = glamorous(PostBox)({
  backgroundColor: '#fff',
});

const PostTitle = glamorous.h2({
  color: '#4d79ff',
});

const PostAuthor = glamorous.span({
  color: '#000',
  fontSize: '14px',
});

const Tag = glamorous.div({
  backgroundColor: '#4d79ff',
  borderRadius: '2px',
  border: '1px solid #668cff',
  color: '#fff',
  display: 'inline-block',
  fontSize: '13px',
  fontWeight: '400',
  marginBottom: '4px',
  marginRight: '4px',
  padding: '3px',
});

export { PostGrid, PostGridDetail, PostBox, PostHeaderFooter, PostTitle, PostAuthor, Tag };
