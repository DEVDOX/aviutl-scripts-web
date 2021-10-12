import { ComponentPropsWithoutRef, forwardRef } from 'react';
import { FormField } from '@/components/molecules';
import { TextArea } from '@/components/atoms';

type Props = ComponentPropsWithoutRef<'textarea'> & {
  /**
   * idとnameを同時にセットする
   */
  labelText?: string;
  helpText?: string;
  errorText?: string;
};

export const TextAreaField = forwardRef<HTMLTextAreaElement, Props>(
  ({ name, helpText, labelText, errorText, ...rest }, ref) => (
    <FormField labelText={labelText} helpText={helpText} htmlFor={name}>
      <TextArea name={name} ref={ref} error={!!errorText} {...rest} />
    </FormField>
  ),
);
