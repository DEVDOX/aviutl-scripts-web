import { ReactNode, VFC } from 'react';

type Props = {
  children: ReactNode;
  className?: string;
};

export const HStack: VFC<Props> = ({ className, children }) => (
  <div className={`flex ${className}`}>{children}</div>
);
