import React from 'react';
import { Directory } from '../../components';
import './index.styles.scss';

const sections = [
  {
    id: 1,
    title: 'Hats',
    imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
    linkUrl: 'hats',
    isNavegable: true,
  },
  {
    id: 2,
    title: 'Jackets',
    imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
    linkUrl: '',
    isNavegable: true,
  },
  {
    id: 3,
    title: 'Sneakers',
    imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
    linkUrl: '',
    isNavegable: true,
  },
  {
    id: 4,
    title: 'Women',
    imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
    size: 'large',
    linkUrl: '',
    isNavegable: true,
  },
  {
    id: 5,
    title: 'Men',
    imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
    size: 'large',
    linkUrl: '',
    isNavegable: true,
  },
];

export const Home = () => {
  const sectionsWithUpperCasedTitles = sections.map((item) => {
    return { ...item, title: item.title.toUpperCase() };
  });

  return (
    <div className="homepage">
      <Directory sections={sectionsWithUpperCasedTitles} />
    </div>
  );
};
