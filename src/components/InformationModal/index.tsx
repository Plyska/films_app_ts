import React from "react";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import { TransitionProps } from "@mui/material/transitions";
import Button from "@mui/material/Button";
import { styles } from "./styles";
import { Actor, Writer } from "../../screens/HomeScreen/types";
import Typography from "@mui/material/Typography";

interface InformationModalProps {
  open: boolean;
  setIsOpenModal: (isOpen: boolean) => void;
  actors: Array<Actor>;
  writers: Array<Writer>;
  title: string;
  overview: string;
}

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const InformationModal: React.FC<InformationModalProps> = ({
  open,
  setIsOpenModal,
  actors,
  writers,
  title,
  overview
}) => {

  const handleClose = () => {
    setIsOpenModal(false);
  }

  return (
    <Dialog
      open={open}
      TransitionComponent={Transition}
      keepMounted
      onClose={handleClose}
      aria-describedby="alert-dialog-slide-description"
    >
      <DialogTitle>{title}</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-slide-description">
          {/* <Typography variant="body2">Plot</Typography> */}
          {/* <Typography>{overview}</Typography> */}
        </DialogContentText>
      </DialogContent>
      <DialogActions sx={styles.buttonBox}>
        <Button variant="outlined" color="error" onClick={handleClose}>Cancel</Button>
      </DialogActions>
    </Dialog>
  );
};

export default InformationModal;
