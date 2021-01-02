import React, { useState } from 'react';
import {
  mdiAccountOutline,
  mdiArrowLeft,
  mdiCubeOutline,
  mdiLoginVariant,
  mdiSecurity,
} from '@mdi/js';
import { Icon } from '@mdi/react';
import Link from 'next/link';
import MenuItem from '../MenuItem';

const Menu: React.FC = () => {
  const [current, setCurrent] = useState<string>(`アカウント`);
  return (
    <div className="flex h-screen bg-gray-900">
      <nav className="flex flex-col w-56 overflow-y-auto transition duration-500 ease-in-out bg-gray-800 select-none">
        <div className="flex flex-col items-center">
          <img
            className="object-cover w-16 h-16 mt-6 rounded-full"
            src="https://via.placeholder.com/150"
            alt="a profile"
          />
          <span className="mt-2 mb-6 text-gray-400 capitalize transition duration-500 ease-in-out">
            rikusen0335
          </span>
        </div>

        <ul className="flex-grow">
          <MenuItem
            active={current === `アカウント`}
            icon={mdiAccountOutline}
            label="アカウント"
            onClick={() => setCurrent(`アカウント`)}
          />
          <MenuItem
            active={current === `セキュリティ`}
            icon={mdiSecurity}
            label="セキュリティ"
            onClick={() => setCurrent(`セキュリティ`)}
          />
          <MenuItem
            active={current === `投稿したもの`}
            icon={mdiCubeOutline}
            label="投稿したもの"
            onClick={() => setCurrent(`投稿したもの`)}
          />
        </ul>

        {/* ログアウトしたあとに、トップページへ戻る */}
        <div className="mb-2 font-semibold text-gray-300 transition duration-300 ease-in-out hover:bg-gray-700">
          <Link href="/">
            <button
              type="button"
              className="w-full py-2 pl-8 transition duration-500 ease-in-out focus:outline-none"
            >
              <span className="flex items-center">
                <Icon className="w-4 h-4" size={1} path={mdiLoginVariant} />
                <span className="ml-4 capitalize">サインアウト</span>
              </span>
            </button>
          </Link>
        </div>
        <div className="mb-2 font-semibold text-gray-300 transition duration-300 ease-in-out hover:bg-gray-700">
          <Link href="/">
            <button
              type="button"
              className="w-full py-2 pl-8 transition duration-500 ease-in-out focus:outline-none"
            >
              <span className="flex items-center">
                <Icon className="w-4 h-4" size={1} path={mdiArrowLeft} />
                <span className="ml-4 capitalize">トップへ戻る</span>
              </span>
            </button>
          </Link>
        </div>
      </nav>

      <div className="text-gray-200">aaa</div>
    </div>
  );
};

export default Menu;
