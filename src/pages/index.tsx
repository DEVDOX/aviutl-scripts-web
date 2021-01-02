import { useTheme } from 'next-themes';
import React from 'react';
import { Text } from '@/components/atoms';
import classes from './index.module.css';

const Home: React.FC = () => {
  const { theme, setTheme } = useTheme();

  return <Text>Unko</Text>;
};

export default Home;
