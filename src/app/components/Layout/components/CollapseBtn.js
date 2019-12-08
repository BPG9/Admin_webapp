import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import { useLayoutCtx } from '../hooks';

const CollapseBtn = ({ component: Component, onClick, ...props }) => {
  return (
    <Component
      onClick={e => {

      }}
      sssss
      {...props}
    />
  );
};

CollapseBtn.propTypes = {
  onClick: PropTypes.func,
  component: PropTypes.elementType,
};
CollapseBtn.defaultProps = {
  onClick: () => { },
  component: Button,
};

export default CollapseBtn;
