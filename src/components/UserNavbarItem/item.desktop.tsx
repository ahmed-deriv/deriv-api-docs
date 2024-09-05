import React from 'react';
import clsx from 'clsx';
import { Button } from '@deriv-com/quill-ui';
import {
  LabelPairedGridLgRegularIcon,
  StandaloneRightFromBracketBoldIcon,
} from '@deriv/quill-icons';
import useLogout from '@site/src/hooks/useLogout';
import useDeviceType from '@site/src/hooks/useDeviceType';
import { IUserNavbarItemProps } from './item.types';
import styles from './UserNavbarItem.module.scss';
import Translate from '@docusaurus/Translate';

interface IActionProps {
  handleClick: () => void;
  isDesktop: boolean;
}

const DashboardActions: React.FC<IActionProps> = ({ handleClick, isDesktop }) => {
  return (
    <React.Fragment>
      <Button
        onClick={() => location.assign('/dashboard')}
        type='button'
        className={styles.dashboardButton}
        variant='tertiary'
        color='black'
        icon={<LabelPairedGridLgRegularIcon />}
        data-testid='da_login'
      >
        <Translate>Dashboard</Translate>
      </Button>
      {isDesktop && (
        <Button
          onClick={handleClick}
          type='button'
          variant='tertiary'
          color='black'
          className={styles.logoutButton}
          icon={<StandaloneRightFromBracketBoldIcon />}
          data-testid='da_logout'
        >
          <Translate>Log out</Translate>
        </Button>
      )}
    </React.Fragment>
  );
};

const SignedInActions: React.FC<IActionProps> = ({ handleClick, isDesktop }) => {
  const signedInButtonClasses = clsx('navbar__item', styles.UserNavbarItem, styles.SignedInButton);

  return (
    <nav className='right-navigation'>
      <Button
        variant='secondary'
        color='black'
        onClick={handleClick}
        className={signedInButtonClasses}
        data-testid='sa_login'
      >
        <Translate>Log in</Translate>
      </Button>
      {isDesktop && (
        <Button
          variant='primary'
          onClick={() => location.assign('https://deriv.com/signup/')}
          className={signedInButtonClasses}
          data-testid='sa_signup'
        >
          <Translate>Sign up</Translate>
        </Button>
      )}
    </nav>
  );
};

const UserNavbarDesktopItem = ({ authUrl, is_logged_in }: IUserNavbarItemProps) => {
  const { logout } = useLogout();
  const { deviceType } = useDeviceType();
  const isDesktop = deviceType === 'desktop';

  const handleClick = () => {
    location.assign(authUrl);
  };

  return is_logged_in ? (
    <DashboardActions handleClick={logout} isDesktop={isDesktop} />
  ) : (
    <SignedInActions handleClick={handleClick} isDesktop={isDesktop} />
  );
};

export default UserNavbarDesktopItem;
