import React, { useCallback, useEffect, useState } from 'react';
import { Modal } from '@deriv-com/quill-ui';
import { useDeleteApp } from '../../../hooks/useDeleteApp';
import useDeviceType from '@site/src/hooks/useDeviceType';
import './delete-app-dialog.scss';

type TDeleteAppDialogProps = {
  appId: number;
  onClose: () => void;
};

const DeleteAppDialog = ({ appId, onClose }: TDeleteAppDialogProps) => {
  const { deleteApp } = useDeleteApp();
  const { deviceType } = useDeviceType();
  const [isMobile, setIsMobile] = useState(deviceType === 'mobile');

  const onOpenChange = useCallback(
    (open) => {
      if (!open) {
        onClose();
      }
    },
    [onClose],
  );

  useEffect(() => {
    setIsMobile(deviceType === 'mobile');
  }, [deviceType]);

  return (
    <Modal
      isOpened={true}
      toggleModal={onOpenChange}
      primaryButtonLabel='Yes, delete'
      secondaryButtonLabel='Cancel'
      disableCloseOnOverlay
      isMobile={isMobile}
      showHandleBar
      primaryButtonCallback={() => {
        deleteApp(appId);
        onClose();
      }}
      secondaryButtonCallback={onClose}
      showSecondaryButton
    >
      <div className='icon-wrapper'>
        <div className='modal-icon'>
          <img src='img/trash.svg' alt='Trash Icon' />
        </div>
      </div>
      <div className='modal-content'>
        <h4>Delete app</h4>
        <p>Are you sure you want to delete this app?</p>
      </div>
    </Modal>
  );
};

export default DeleteAppDialog;
