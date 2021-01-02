import { Component, createElement, ReactHTML } from 'react';
import cx from 'clsx';
import classes from './index.module.css';

type TypographyProps = {
  size?:
    | 'h1'
    | 'h2'
    | 'h3'
    | 'h4'
    | 'h5'
    | 'subtitle1'
    | 'subtitle2'
    | 'body1'
    | 'body2'
    | 'small'
    | 'button';
  weight?: 'light' | 'normal' | 'bold' | 'inheret';
  as?: keyof JSX.IntrinsicElements;
  htmlFor?: string;
  className?: string;
};

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
