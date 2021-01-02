import { Text } from '@/components/atoms';
import Footer from '@/components/organisms/Footer';
import Header from '@/components/organisms/Header';
import React from 'react';
import classes from './index.module.css';

const Layout: React.FC = ({ children }) => (
  <div className={classes.base}>
    <Header />

    <div className={classes.main}>{children}</div>

    {/* <Footer /> */}
  </div>
);

export default Layout;
