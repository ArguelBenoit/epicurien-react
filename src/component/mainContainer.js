import './css/mainContainer.css';
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';
import PageContainer from './pageContainer';
import PostsContainer from './postsContainer';
import { withRouter } from 'react-router-dom';


const MainContainer = (props) => {
  let { apiUrl, pages, posts, categ, tags } = props;

  if (pages && pages.length > 0) {

    let homePage;
    let homePageRender;
    //
    let route = pages.map( (page, i) => {
      if (page.link === apiUrl) homePage = page;
      return <Route path={'/' + page.slug} key={i} render={() => (
        page.content.rendered !== ''
          ? <PageContainer data={page}/>
          : <PostsContainer
              data={page}
              posts={posts}
              categories={categ}
              tags={tags}
            />
      )} />;
    });
    //
    if (homePage) {
      homePageRender = <Route path={'/'} exact key={-1} render={() => (
        homePage.content.rendered !== ''
          ? <PageContainer data={homePage}/>
          : <PostsContainer
              data={homePage}
              posts={posts}
              categories={categ}
              tags={tags}
            />
      )} />;
    } else {
      homePageRender = <Route path={'/'} exact key={-1} render={() => (
        <PostsContainer
          posts={posts}
          categories={categ}
          tags={tags}
        />
      )} />;
    }
    //
    return <div className="main-container">
      <div className="container">
        {homePageRender}
        {route}
      </div>
    </div>;

  } else if (pages && pages.length === 0) {
    return <div className="main-container">
      <div className="container">
        <Route path={'/'} render={() => (
          <PostsContainer
            posts={posts}
            categories={categ}
            tags={tags}
          />
        )} />;
      </div>
    </div>;

  } else {
    return <div className="main-container">
      <div className="container">
        <p className="error">
          This wordpress theme requires two speciphic modules :
          <br />
          <a href="https://fr.wordpress.org/plugins/wp-rest-api-v2-menus/" rel="noopener noreferrer" target="_blank">
            - wordpress rest api v2 menus
          </a>
          <br />
          <a href="https://wordpress.org/plugins/wp-rest-api-sidebars/" rel="noopener noreferrer" target="_blank">
            - wordpress rest api sidebars
          </a>.
        </p>
      </div>
    </div>;

  }
};


MainContainer.propTypes = {
  apiUrl: PropTypes.string,
  posts: PropTypes.array,
  pages: PropTypes.array,
  tags: PropTypes.array,
  categ: PropTypes.array
};
const mapStateToProps = state => ({
  apiUrl: state.apiUrl,
  posts: state.posts,
  pages: state.pages,
  tags: state.tags,
  categ: state.categ
});
export default withRouter(connect(
  mapStateToProps
)(MainContainer));
