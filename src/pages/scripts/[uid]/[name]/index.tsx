import { Layout } from '@/components/templates';
import { NextPage } from 'next';
import React from 'react';

const ScriptPage: NextPage = () => <Layout>unko</Layout>;

ScriptPage.getInitialProps = async (ctx) => {
  const { uid, name } = ctx.query;
  console.log(uid, name);

  const dummy = {};

  return { uid, name };
};

export default ScriptPage;
