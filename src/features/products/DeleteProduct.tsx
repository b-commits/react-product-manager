/** @jsxImportSource @emotion/react */
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import DeleteIcon from '@mui/icons-material/Delete';
import { useState } from 'react';
import { useAppDispatch } from '../../util/hooks';
import { deleteProducts } from '../thunks/apiCalls';
import { deleteIcon } from './Product.module.style';

interface PopupProps {
  id: number;
  productName: string;
}

export function DeletePopup({ id, productName }: PopupProps) {
  const dispatch = useAppDispatch();

  const [open, setOpen] = useState<boolean>(false);

  const handleClickOpen: () => void = () => {
    setOpen(true);
  };

  const handleDelete: () => void = () => {
    dispatch(deleteProducts(id));
  };

  const handleClose: () => void = () => {
    setOpen(false);
  };

  return (
    <>
      <DeleteIcon onClick={handleClickOpen} css={deleteIcon} />
      <Dialog
        open={open}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{`Are you sure you want to delete: ${productName} [#${id}]?`}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            Please remember that all changes are permanent. You will not be able
            to restore the product.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleDelete}>Delete</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
