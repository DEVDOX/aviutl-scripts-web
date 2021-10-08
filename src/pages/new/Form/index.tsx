import React from 'react';
import { NextPage } from 'next';

const Form: React.FC = () => {
  return (
    <div className="mx-auto mt-5 md:my-4 lg:my-8 md:col-span-2">
      <form action="#" method="POST">
        <div className="shadow sm:rounded-md sm:overflow-hidden">
          <div className="px-4 py-5 space-y-6 bg-gray-800 sm:p-6">

            <div className="grid grid-cols-3 gap-6">
              <div className="col-span-3 sm:col-span-2">
                <label htmlFor="company_website" className="block text-sm font-medium text-gray-300">
                  名前
                  </label>
                <div className="flex mt-1 rounded-md shadow-sm">
                  <input type="text" name="company_website" id="company_website" className="flex-1 block w-full text-gray-200 duration-150 bg-gray-900 border-gray-700 rounded-md outline-none focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" placeholder="ほげほげスクリプト" />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-6">
              <div className="col-span-3 sm:col-span-2">
                <label htmlFor="company_website" className="block text-sm font-medium text-gray-300">
                  スクリプトのバージョン
                  </label>
                <div className="flex mt-1 rounded-md shadow-sm">
                  <input type="text" name="company_website" id="company_website" className="flex-1 block w-full text-gray-200 bg-gray-900 border-gray-700 rounded-md focus:ring-blue-500 focus:border-blue-500 rounded-r-md sm:text-sm" placeholder="1.10" />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-6">
              <div className="col-span-3 sm:col-span-2">
                <label htmlFor="company_website" className="block text-sm font-medium text-gray-300">
                  AviUtlの対応バージョン
                  </label>
                <div className="flex mt-1 rounded-md shadow-sm">
                  <input type="text" name="company_website" id="company_website" className="flex-1 block w-full text-gray-200 bg-gray-900 border-gray-700 rounded-md focus:ring-blue-500 focus:border-blue-500 rounded-r-md sm:text-sm" placeholder="1.10" />
                </div>
              </div>
            </div>

            <div>
              <label htmlFor="about" className="block text-sm font-medium text-gray-300">
                説明
                </label>
              <div className="mt-1">
                <textarea id="about" name="about" rows={3} className="block w-full mt-1 text-gray-200 bg-gray-900 border-gray-700 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm" placeholder="スクリプトについての説明"></textarea>
              </div>
              <p className="mt-2 text-sm text-gray-500">
                Brief description for your profile. URLs are hyperlinked.
                    </p>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                プレビュー
              </label>
              <div className="flex flex-col items-center mt-2">
                <div className="my-4">
                  <img className="w-auto rounded-md h-128" src="https://picsum.photos/1920/1080/?random" />
                </div>
                <button type="button" className="px-3 py-2 ml-5 text-sm font-medium leading-4 text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                  変更する
                </button>
              </div>
            </div>
          </div>

          <div className="px-4 py-3 text-right bg-gray-700 sm:px-6">
            <button type="submit" className="inline-flex justify-center px-4 py-2 text-sm font-medium text-white bg-blue-600 border border-transparent rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
              投稿する
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Form;
