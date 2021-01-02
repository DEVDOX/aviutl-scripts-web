/* eslint-disable react/button-has-type */
import { forwardRef } from 'react';
import cx from 'clsx';
import classes from './index.module.css';

type ButtonProps = React.ComponentPropsWithoutRef<'button'>;

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, className, type = `button`, ...props }, ref) => (
    <button
      ref={ref}
      className={cx(className, classes.base)}
      type={type}
      {...props}
    >
      {children}
    </button>
  ),
);

export default Button;
