import React from 'react';
import cx from 'clsx';
import PropTypes from 'prop-types';
import Drawer from '@material-ui/core/Drawer';
import HeaderMagnet from './HeaderMagnet';
import { useLayoutCtx, useAutoCollapse } from '../hooks';
import { useTransitionStyles, useSidebarStyles } from '../styles';

const Sidebar = ({ children, PaperProps, SlideProps, opened, collapsed, changed, ...props }) => {
  useAutoCollapse();
  const [entered, setEntered] = React.useState(false);
  const styles = useSidebarStyles();
  const transitionStyles = useTransitionStyles();
  const ctx = useLayoutCtx();
  const { sidebar, setOpened, getSidebarWidth } = ctx;
  const isPermanent = sidebar.variant === 'permanent';
  return (
    < Drawer
      {...props}
      open={opened}
      onClose={() => {
        changed(false);
      }}
      style={{ transitionDuration: "500ms" }}
      variant={sidebar.variant}
      PaperProps={{
        ...PaperProps,
        classes: {
          root: cx(
            styles.paper,
            isPermanent && transitionStyles.root,
            entered && transitionStyles.all
          ),
        },
        style: {
          ...PaperProps.style,
          width: collapsed,
          overflowX: "hidden",
          transition: "width 300ms ease 0s"
        },
      }}
      SlideProps={{
        ...SlideProps,
        onEntered: () => setEntered(true),
        onExit: () => setEntered(false),
      }}
    >
      <HeaderMagnet />
      {typeof children === 'function' ? children(ctx) : children}
    </Drawer >
  );
};

Sidebar.propTypes = {
  PaperProps: PropTypes.shape({}),
  SlideProps: PropTypes.shape({}),
  children: PropTypes.oneOfType([PropTypes.func, PropTypes.node]),
};
Sidebar.defaultProps = {
  PaperProps: {},
  SlideProps: {},
  children: null,
};

export default Sidebar;
