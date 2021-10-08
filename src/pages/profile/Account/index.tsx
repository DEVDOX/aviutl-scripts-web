import { mdiAccountCancelOutline } from '@mdi/js';
import { Icon } from '@mdi/react';
import React from 'react';
import { Button } from '@/components/atoms';

const Account: React.FC = () => (
  <Button className="bg-red-700 focus:bg-red-800">
    <Icon className="w-5 h-5" path={mdiAccountCancelOutline} />
    <span className="text-md">アカウントを削除する</span>
  </Button>
);

export default Account;
