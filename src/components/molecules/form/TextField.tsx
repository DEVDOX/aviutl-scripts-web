import React, { ComponentPropsWithoutRef, forwardRef } from 'react';
import { FormField } from '@/components/molecules';
import { Input } from '@/components/atoms';

type Props = ComponentPropsWithoutRef<'input'> & {
  /**
   * idとnameを同時にセットする
   */
  labelText?: string;
  helpText?: string;
  errorText?: string;
};

export const TextField = forwardRef<HTMLInputElement, Props>(
  ({ name, helpText, labelText, errorText, ...rest }, ref) => (
    <FormField labelText={labelText} helpText={helpText} htmlFor={name}>
      <Input name={name} ref={ref} error={!!errorText} {...rest} />
    </FormField>
  ),
);
