import { Text } from '@/components/atoms';
import React, { useState } from 'react';
import cx from 'clsx';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { useAccount } from '@/hooks/useAccount';
import Icon from '@mdi/react';
import { mdiLoginVariant } from '@mdi/js';
import classes from './index.module.css';

// Nav sample from: https://tailwindui.com/components/application-ui/navigation/navbars

const Header: React.FC = () => {
  const router = useRouter();

  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const { isLogin, setIsLogin } = useAccount();

  return (
    <nav className="bg-gray-800">
      <div className="px-2 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            {/* <!-- Mobile menu button--> */}
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 text-gray-400 rounded-md hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-expanded="false"
            >
              <span className="sr-only">メインメニューを開く</span>

              <svg
                onClick={() => setIsMenuOpen(true)}
                className={cx(`w-6 h-6`, isMenuOpen ? `hidden` : `block`)}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>

              <svg
                onClick={() => setIsMenuOpen(false)}
                className={cx(`w-6 h-6`, isMenuOpen ? `block` : `hidden`)}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div className="flex items-center justify-center flex-1 sm:items-stretch sm:justify-start">
            <div className="flex items-center flex-shrink-0">
              <Link href="/">
                <a className="focus:outline-none">
                  <img
                    className="block w-auto h-8 lg:hidden"
                    src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
                    alt="Workflow"
                  />
                  <img
                    className="hidden w-auto h-8 lg:block"
                    src="https://tailwindui.com/img/logos/workflow-logo-indigo-500-mark-white-text.svg"
                    alt="Workflow"
                  />
                </a>
              </Link>
            </div>
            <div className="hidden sm:block sm:ml-6">
              <div className="flex space-x-4">
                <Link href="/">
                  <a
                    className={cx(
                      `px-3 py-2 text-sm font-medium`,
                      router.pathname === `/`
                        ? `text-white bg-gray-900 rounded-md`
                        : `text-gray-300 rounded-md hover:bg-gray-700 hover:text-white`,
                    )}
                  >
                    Home
                  </a>
                </Link>
                {/* <Link href="/scripts">
                  <a className={cx(
                    "px-3 py-2 text-sm font-medium",
                    router.pathname === "/scripts" ? "text-white bg-gray-900 rounded-md" : "text-gray-300 rounded-md hover:bg-gray-700 hover:text-white"
                  )}>Scripts</a>
                </Link> */}
              </div>
            </div>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            {/* <!-- Profile dropdown --> */}
            <div className="relative ml-3">
              {isLogin ? (
                <Link href="/profile">
                  <button
                    type="button"
                    className="flex text-sm bg-gray-800 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                    id="user-menu"
                    aria-haspopup="true"
                  >
                    <span className="sr-only">プロフィールを開く</span>
                    <img
                      className="w-8 h-8 rounded-full"
                      src="https://picsum.photos/32/32/?random"
                      alt=""
                    />
                  </button>
                </Link>
              ) : (
                <Link href="/signin">
                  <p className="flex items-center justify-center space-x-1 text-gray-200 cursor-pointer hover:text-gray-300">
                    <Icon className="w-5 h-5" path={mdiLoginVariant} />
                    <span>Sign in</span>
                  </p>
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className={cx(`sm:hidden`, isMenuOpen ? `block` : `hidden`)}>
        <div className="px-2 pt-2 pb-3 space-y-1">
          <Link href="/">
            <a
              className={cx(
                `block px-3 py-2 text-base font-medium`,
                router.pathname === `/`
                  ? `text-white bg-gray-900 rounded-md`
                  : `text-gray-300 rounded-md hover:bg-gray-700 hover:text-white`,
              )}
            >
              Home
            </a>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Header;
