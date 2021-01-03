import { useTheme } from 'next-themes';
import React from 'react';
import { Text } from '@/components/atoms';
import Layout from '@/components/templates/Layout';
import { Card } from '@/components/molecules';
import { NextPage } from 'next';
import classes from './index.module.css';

const HomePage: NextPage = () => {
  const { theme, setTheme } = useTheme();

  return (
    <Layout>
      <div className="container px-8 py-12 mx-auto lg:px-24 lg:pt-24 lg:pb-28">
        <h1 className="mb-8 text-3xl text-gray-200">Scripts</h1>
        <div className="grid grid-cols-1 xl:grid-cols-4 sm:grid-cols-2 gap-9">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </Layout>
  );
};

export default HomePage;
