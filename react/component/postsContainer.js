import React from 'react';
import Parser from 'html-react-parser';
import './css/postsContainer.css';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const PostsContainer = (props) => {
  let {
    data,
    posts,
    categories,
    tags
  } = props;

  if (posts.length === 0) {
    return <div className="posts-container">
      <h2>
        {data
          ? Parser(data.title.rendered)
          : 'Posts'
        }
      </h2>
      <p>
        There are no articles...
      </p>
    </div>;

  } else {
    let postsRender = posts.map((post, i) => {

      let postCateg = [];
      post.categories.forEach(e1 => {
        categories.forEach( e2 => {
          if(e1 === e2.id) postCateg.push(e2.name);
        });
      });

      let postTags = [];
      post.tags.forEach(e1 => {
        tags.forEach( e2 => {
          if(e1 === e2.id) postTags.push(e2.name);
        });
      });

      return <div key={i} className="post">
        <h3>{Parser(post.title.rendered)}</h3>
        <ul>
          <li>date: {post.date}</li>
          <li>
            categ: {postCateg.map((e, i) => {
              return <span key={i}>
                <Link to={`/category/${e}`}>{e}</Link>
                &nbsp;
              </span>;
            })}
          </li>
          <li>
            tags: {postTags.map((e, i) => {
              return <span key={i}>
                <Link to={`/tag/${e}`}>{e}</Link>
                &nbsp;
              </span>;
            })}
          </li>
        </ul>
      </div>;
    });
    return <div className="posts-container">
      {postsRender}
    </div>;

  }
};

PostsContainer.propTypes = {
  posts: PropTypes.array,
  data: PropTypes.object,
  categories: PropTypes.array
};

export default PostsContainer;
