import { ReactNode, VFC } from 'react';

type Props = {
  children: ReactNode;
  className?: string;
};

export const VStack: VFC<Props> = ({ className, children }) => (
  <div className={`flex flex-col ${className}`}>{children}</div>
);
