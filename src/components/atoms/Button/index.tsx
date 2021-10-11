/* eslint-disable react/button-has-type */
import { forwardRef } from 'react';
import cx from 'clsx';
import classes from './index.module.css';

type ButtonProps = React.ComponentPropsWithoutRef<'button'>;

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, className, type = `button`, ...props }, ref) => (
    <button
      ref={ref}
      className={cx(classes.base, className || classes.default)}
      type={type}
      {...props}
    >
      {children}
    </button>
  ),
);
