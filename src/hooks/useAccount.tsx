import { useState } from 'react';

export function useAccount() {
  const [isLogin, setIsLogin] = useState<boolean>(false);

  return { isLogin, setIsLogin };
}
