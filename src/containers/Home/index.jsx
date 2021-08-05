// Packages
import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
// Selectors
import { selectDirectorySections } from '../../redux/directory/directory.selectors';
// Components
import { Directory } from '../../components';
// Styles
import './index.styles.scss';

export const Home = ({ sections }) => {
  const sectionsWithUpperCasedTitles = sections.map((item) => {
    return { ...item, title: item.title.toUpperCase() };
  });

  return (
    <div className="homepage">
      <Directory sections={sectionsWithUpperCasedTitles} />
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections,
});

export const ConnectedHome = connect(mapStateToProps)(Home);
