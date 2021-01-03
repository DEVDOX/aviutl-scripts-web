import React from 'react';
import { NextPage } from 'next';
import { Layout } from '@/components/templates';
import Icon from '@mdi/react';
import { mdiGoogle } from '@mdi/js';
import classes from './index.module.css';

const SigninPage: NextPage = () => (
  <Layout>
    <div className="container flex items-stretch justify-center flex-1 w-full h-full m-auto">
      <div className="p-5 m-auto overflow-hidden overflow-y-auto bg-gray-800 rounded shadow-xl cursor-pointer w-96 bg-opacity-40">
        <div className="flex flex-col items-center my-auto space-y-4">
          <h1 className="text-xl text-gray-200">サインイン</h1>
          <button
            type="button"
            className="flex items-center justify-center w-full px-4 py-2 space-x-1 text-white duration-150 transform rounded shadow-lg bg-google hover:-translate-y-1 focus:bg-google-dark"
          >
            <Icon className="w-5 h-5" path={mdiGoogle} />
            <span className="text-md">Google</span>
          </button>
        </div>
      </div>
    </div>
  </Layout>
);

export default SigninPage;
