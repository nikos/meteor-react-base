import React from 'react';

const styles = {
  paddingTop: '20px'
};

// define and export our Layout component
export const Spacer = React.createClass({
  render() {
    return <div style={styles}></div>;
  },
});
