import { render, screen } from '@site/src/test-utils';
import userEvent from '@testing-library/user-event';
import React, { act } from 'react';
import AppsTableOptionDialog, { IAppsTableOptionDialog, tableFilterOptions } from '..';

const Props: IAppsTableOptionDialog = {
  optionType: 'sort',
  isDialogOpen: true,
  selectedOptions: { sortBy: 'appIdAscending', filterBy: Object.keys(tableFilterOptions) },
  updateSelectedOptions: jest.fn(),
  toggleAppTableDialog: jest.fn(),
};

describe('Apps Table', () => {
  const renderAppTableOptionDialog = (props: IAppsTableOptionDialog = Props) => {
    render(<AppsTableOptionDialog {...props} />);
  };

  it('Should render sort option dialog properly', () => {
    renderAppTableOptionDialog();
    const modalHeader = screen.getByText('Sort by');
    expect(modalHeader).toBeInTheDocument();
  });

  it('Should render filter option dialog properly', () => {
    const updatedProps: IAppsTableOptionDialog = {
      ...Props,
      optionType: 'filter',
    };
    renderAppTableOptionDialog(updatedProps);
    const modalHeader = screen.getByText('Filter by OAuth scopes');
    expect(modalHeader).toBeInTheDocument();
  });

  it('Should handle sort when click on apply button', async () => {
    renderAppTableOptionDialog();
    const radioButton = screen.getByTestId('appNameAscending');
    expect(radioButton).not.toBeChecked();
    await act(async () => {
      await userEvent.click(radioButton);
    });
    expect(radioButton).toBeChecked();
    const dialogButton = screen.getByText('Apply');
    await act(async () => {
      await userEvent.click(dialogButton);
    });
    expect(Props.updateSelectedOptions).toHaveBeenCalled();
  });

  it('Should handle filter when uncheck any option and press apply button', async () => {
    const updatedProps: IAppsTableOptionDialog = {
      ...Props,
      optionType: 'filter',
    };
    renderAppTableOptionDialog(updatedProps);
    const checkbox = screen.getByTestId('admin');
    const dialogButton = screen.getByText('Apply');
    await act(async () => {
      await userEvent.click(checkbox);
      await userEvent.click(dialogButton);
    });
    expect(Props.updateSelectedOptions).toHaveBeenCalled();
  });

  it('Should handle filter when checked any option and press apply button', async () => {
    const updatedProps: IAppsTableOptionDialog = {
      ...Props,
      optionType: 'filter',
      selectedOptions: { sortBy: 'appIdAscending', filterBy: ['all'] },
    };
    renderAppTableOptionDialog(updatedProps);
    const checkbox = screen.getByTestId('admin');
    const dialogButton = screen.getByText('Apply');
    await act(async () => {
      await userEvent.click(checkbox);
      await userEvent.click(dialogButton);
    });
    expect(Props.updateSelectedOptions).toHaveBeenCalled();
  });

  it('Should handle filter when checked "all" option and press apply button', async () => {
    const updatedProps: IAppsTableOptionDialog = {
      ...Props,
      optionType: 'filter',
      selectedOptions: { sortBy: 'appIdAscending', filterBy: ['admin'] },
    };
    renderAppTableOptionDialog(updatedProps);
    const checkbox = screen.getByTestId('all');
    const dialogButton = screen.getByText('Apply');
    await act(async () => {
      await userEvent.click(checkbox);
      await userEvent.click(dialogButton);
    });
    expect(Props.updateSelectedOptions).toHaveBeenCalled();
  });

  it('Should handle filter when selected every option except "all" and press apply button', async () => {
    const updatedProps: IAppsTableOptionDialog = {
      ...Props,
      optionType: 'filter',
      selectedOptions: {
        sortBy: 'appIdAscending',
        filterBy: Object.keys(tableFilterOptions).slice(2),
      },
    };
    renderAppTableOptionDialog(updatedProps);
    const checkbox = screen.getByTestId('no_scope');
    const checkboxes = screen.getAllByRole('checkbox');
    expect(checkboxes.length).toBe(7);
    const dialogButton = screen.getByText('Apply');
    await act(async () => {
      await userEvent.click(checkbox);
      await userEvent.click(dialogButton);
    });
    expect(Props.updateSelectedOptions).toHaveBeenCalled();
  });
});
