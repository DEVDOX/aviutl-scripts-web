import { ComponentPropsWithoutRef, forwardRef } from 'react';
import { FormField } from '../molecules';

type Props = ComponentPropsWithoutRef<'input'> & {
  /**
   * idとnameを同時にセットする
   */
  name: string;
  labelText?: string;
  helpText?: string;
  errorText?: string;
};

export const TextInput = forwardRef<HTMLInputElement, Props>(
  ({ name, helpText, labelText, errorText, type = `text`, ...rest }, ref) => (
    <FormField labelText={labelText} helpText={helpText} htmlFor={name}>
      <input
        id={name}
        ref={ref}
        type={type}
        className={`flex-1 block w-full text-gray-200 duration-150 !bg-gray-900 border-gray-700 outline-none focus:outline-none sm:text-sm ring-0 focus:ring-0 border-t-0 border-l-0 border-r-0 border-b focus:border-b focus:border-t-0 hover:border-l-0 hover:border-r-0 ${
          errorText ? `!border-red-500` : ``
        }`}
        {...rest}
      />
    </FormField>
  ),
);
