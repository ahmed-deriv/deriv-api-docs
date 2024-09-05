import React from 'react';
import { Column } from 'react-table';
import { Button, Heading, Text } from '@deriv-com/quill-ui';
import { LabelPairedCirclePlusMdRegularIcon } from '@deriv/quill-icons';
import { TTokenType } from '@site/src/types';
import { TDashboardTab } from '@site/src/contexts/app-manager/app-manager.context';
import useAppManager from '@site/src/hooks/useAppManager';
import useApiToken from '@site/src/hooks/useApiToken';
import useDeviceType from '@site/src/hooks/useDeviceType';
import Spinner from '@site/src/components/Spinner';
import ApiTokenCell from './table.token.cell';
import ApiLastUsedCell from './table.lastused.cell';
import TokenActionsCell from './delete.token.cell';
import AccountTypeCell from './account.type.cell';
import ResponsiveTable from './responsive-table';
import ScopesCell from '../Table/scopes.cell';
import Table from '../Table';
import styles from './api-table.module.scss';
import { translate } from '@docusaurus/Translate';

export type TTokenColumn = Column<TTokenType>;

const tableColumns: TTokenColumn[] = [
  {
    Header: translate({
      message: 'Name',
    }),
    accessor: 'display_name',
  },
  {
    Header: translate({
      message: 'Account type',
    }),
    Cell: AccountTypeCell,
  },
  {
    Header: translate({
      message: 'Token',
    }),
    accessor: 'token',
    Cell: ApiTokenCell,
  },
  {
    Header: translate({
      message: 'Token scopes',
    }),
    accessor: 'scopes',
    Cell: ScopesCell,
  },
  {
    Header: translate({
      message: 'Last used',
    }),
    accessor: 'last_used',
    Cell: ApiLastUsedCell,
  },
  {
    Header: translate({
      message: 'Actions',
    }),
    id: 'actions',
    accessor: (originalRow) => originalRow.token,
    Cell: ({ row }) => <TokenActionsCell tokenId={row.original.token} flex_end />,
  },
];

const ApiTokenTable = () => {
  const { tokens, isLoadingTokens } = useApiToken();
  const { deviceType } = useDeviceType();
  const is_desktop = deviceType === 'desktop';
  const { updateCurrentTab } = useAppManager();

  const renderTable = () => {
    return is_desktop ? (
      <Table data={tokens} columns={tableColumns} parentClass='api_token_table' />
    ) : (
      <ResponsiveTable tokens={tokens} />
    );
  };

  return (
    <div className={styles.api_table}>
      <div className={styles.api_table__header}>
        <div className={styles.api_table__header__texts}>
          <Heading.H3>API token manager</Heading.H3>
          <Text size='md'>Access all your API token details here.</Text>
        </div>
        <Button
          color='coral'
          size='lg'
          variant='primary'
          role='submit'
          iconPosition='start'
          icon={<LabelPairedCirclePlusMdRegularIcon />}
          className={styles.api_table__header__button}
          data-testid='create-new-token-button'
          onClick={() => {
            updateCurrentTab(TDashboardTab.REGISTER_TOKENS);
          }}
        >
          <span className={styles.api_table__header__button__text}>Create new token</span>
        </Button>
      </div>

      {tokens.length ? renderTable() : null}
      {isLoadingTokens && <Spinner />}
    </div>
  );
};

export default ApiTokenTable;
