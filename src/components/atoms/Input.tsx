import { ComponentPropsWithoutRef, forwardRef } from 'react';

type Props = ComponentPropsWithoutRef<'input'> & {
  error?: boolean;
};

export const Input = forwardRef<HTMLInputElement, Props>(
  ({ error, type = `text`, ...rest }, ref) => (
    <input
      ref={ref}
      type={type}
      className={`flex-1 block w-full text-gray-200 duration-150 !bg-gray-900 border-gray-700 outline-none focus:outline-none sm:text-sm ring-0 focus:ring-0 border-t-0 border-l-0 border-r-0 border-b focus:border-b focus:border-t-0 hover:border-l-0 hover:border-r-0 ${
        error ? `!border-red-500` : ``
      }`}
      {...rest}
    />
  ),
);
