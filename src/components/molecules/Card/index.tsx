import { Text } from '@/components/atoms';
import Link from 'next/link';
import React from 'react';
import classes from './index.module.css';

const Card: React.FC = ({ children }) => (
  <Link
    href="/scripts/[uid]/[name]"
    as="/scripts/suf24kdhba244adb34gbs/sen_kurippingu"
  >
    <article className="overflow-hidden duration-300 transform bg-gray-800 rounded shadow-lg cursor-pointer hover:-translate-y-1 hover:shadow-xl bg-opacity-40 active:translate-y-0">
      <img
        alt="プレビュー"
        className="block w-full h-auto"
        src="https://picsum.photos/600/400/?random"
      />

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

export default Card;
