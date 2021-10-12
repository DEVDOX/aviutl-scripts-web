import React, { ComponentPropsWithoutRef, VFC } from 'react';
import { VStack } from '@/components/molecules';

type Props = ComponentPropsWithoutRef<'label'> & {
  labelText?: string;
  helpText?: string;
};

export const FormField: VFC<Props> = ({
  children,
  className = ``,
  htmlFor,
  labelText,
  helpText,
  ...rest
}) => (
  <VStack className={className}>
    <label className="mb-2 text-sm text-light-200" htmlFor={htmlFor} {...rest}>
      {labelText}
    </label>
    {children}
    <span className="mt-1 text-xs text-gray-500">{helpText}</span>
  </VStack>
);
