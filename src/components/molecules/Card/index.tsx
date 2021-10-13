import { mdiCheck, mdiClose, mdiDownload, mdiHeart } from '@mdi/js';
import { Icon } from '@mdi/react';
import Link from 'next/link';
import React from 'react';
import { Text } from '@/components/atoms';
import classes from './index.module.css';

export const Card: React.FC = ({ children }) => (
  <Link
    href="/scripts/[uid]/[name]"
    as="/scripts/suf24kdhba244adb34gbs/スーパーグリッチ"
  >
    <article className="overflow-hidden duration-300 transform bg-gray-800 rounded shadow-lg cursor-pointer hover:-translate-y-1 hover:shadow-xl bg-opacity-40 active:translate-y-0">
      <div className="relative">
        <img
          alt="プレビュー"
          className="block w-full h-auto"
          src="https://picsum.photos/600/400/?random"
        />
        <div className="absolute bottom-0 right-0 flex items-center m-2 space-x-3 text-gray-100">
          <div className="flex items-center space-x-1">
            <Icon className="w-4 h-4" path={mdiDownload} />
            <p className="text-sm">352</p>
          </div>
          <div className="flex items-center space-x-1">
            <Icon className="w-4 h-4" path={mdiHeart} />
            <p className="text-sm">17</p>
          </div>
          {/* スクリプトが正常動作するかしないかで変える */}
          {true ? (
            <Icon
              className="w-4 h-4 font-bold text-green-500"
              path={mdiCheck}
            />
          ) : (
            <Icon className="w-4 h-4 font-bold text-red-500" path={mdiClose} />
          )}
        </div>
      </div>

      <div className="p-3 space-y-4">
        <header className="flex items-end justify-between mx-2 leading-tight">
          <h2 className="text-xl font-medium text-white title-font">
            扇クリッピング
          </h2>
        </header>

        <div className="flex items-end justify-between mx-2 leading-tight">
          <p>AviUtl愛用者なら知らない人は居な...</p>
        </div>

        <footer className="flex items-center justify-between leading-none">
          <Link href="/">
            <a className="flex items-center text-black no-underline hover:underline">
              <img
                alt="作成者"
                className="block rounded-full"
                src="https://picsum.photos/32/32/?random"
              />
              <p className="ml-2 text-sm text-gray-300">rikusen0335</p>
            </a>
          </Link>
          <p className="text-sm text-gray-400">2021/01/04</p>
        </footer>
      </div>
    </article>
  </Link>
);
