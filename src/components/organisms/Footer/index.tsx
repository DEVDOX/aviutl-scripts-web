import Link from 'next/link';
import React from 'react';
import { Text } from '@/components/atoms';
import classes from './index.module.css';

const Footer: React.FC = () => (
  <footer className="py-6 bg-gray-800 border-b-2 border-blue-700 footer">
    <div className="container mx-auto">
      <p className="text-sm font-bold text-gray-300">
        © 2021 by{` `}
        <a
          href="https://twitter.com/RikuS3n"
          className="text-blue-500 hover:text-blue-600"
        >
          rikusen0335
        </a>
      </p>
    </div>
  </footer>
);

export default Footer;
