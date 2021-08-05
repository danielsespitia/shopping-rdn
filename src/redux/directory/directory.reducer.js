const INITIAL_STATE = {
  sections: [
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
  ],
};

const directoryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default directoryReducer;
