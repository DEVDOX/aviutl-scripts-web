import { Component, createElement, ReactHTML } from 'react';
import cx from 'clsx';
import classes from './index.module.css';

interface TypographyProps {
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl' | 'inheret';
  weight?: 'light' | 'normal' | 'bold' | 'inheret';
  as?: keyof JSX.IntrinsicElements;
  className?: string;
}

const Text: React.FC<TypographyProps> = ({
  children,
  size = `inheret`,
  weight = `inheret`,
  as = `span`,
  className,
  ...rest
}) =>
  createElement(
    as,
    {
      className: cx(
        classes.base,
        classes[`size-${size}`],
        classes[`weight-${weight}`],
        className,
      ),
      ...rest,
    },
    children,
  );

export default Text;
