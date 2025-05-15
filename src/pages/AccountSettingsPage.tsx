import React from 'react';
import TemplatePage from '../pages/Template';
import AccountSettings from '../components/AccountSettings/AccountSettings';

const AccountSettingsPage: React.FC = () => {
  return (
    <TemplatePage>
      <AccountSettings />
    </TemplatePage>
  );
};

export default AccountSettingsPage;
