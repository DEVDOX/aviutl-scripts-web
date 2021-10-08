import React, { useState } from 'react';
import { NextPage } from 'next';
import Form from './Form';
import { Layout } from '@/components/templates';

export type MenuType = 'アカウント' | '投稿したもの';

const NewScriptPage: NextPage = () => {
  const [current, setCurrent] = useState<MenuType>(`アカウント`);

  return (
    <Layout>
      <Form />
    </Layout>
  );
};

export default NewScriptPage;
