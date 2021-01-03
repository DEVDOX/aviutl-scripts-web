import React, { useState } from 'react';
import { NextPage } from 'next';
import Menu from './Menu';
import Account from './Account';
import Products from './Products';

export type MenuType = 'アカウント' | '投稿したもの';

const ProfilePage: NextPage = () => {
  const [current, setCurrent] = useState<MenuType>(`アカウント`);

  return (
    <div className="flex bg-gray-900">
      <Menu current={current} setCurrent={setCurrent} />
      <div className="container mx-auto my-12 text-gray-200">
        {current === `アカウント` && <Account />}
        {current === `投稿したもの` && <Products />}
      </div>
    </div>
  );
};

export default ProfilePage;
