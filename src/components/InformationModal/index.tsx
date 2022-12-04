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
import Box from "@mui/material/Box";
import ThumbUpTwoToneIcon from "@mui/icons-material/ThumbUpTwoTone";
import ThumbDownOffAltTwoToneIcon from "@mui/icons-material/ThumbDownOffAltTwoTone";

interface InformationModalProps {
  open: boolean;
  setIsOpenModal: (isOpen: boolean) => void;
  actors: Array<Actor>;
  writers: Array<Writer>;
  title: string;
  overview: string;
  IMDB: number;
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
  overview,
  IMDB,
}) => {
  const handleClose = () => {
    setIsOpenModal(false);
  };

  return (
    <Dialog
      sx={styles.container}
      open={open}
      scroll="paper"
      TransitionComponent={Transition}
      keepMounted
      onClose={handleClose}
      aria-describedby="alert-dialog-slide-description"
    >
      <DialogTitle>{title}</DialogTitle>
      <DialogContent sx={styles.dialogContent}>
        <Box sx={styles.block}>
          <DialogContentText sx={styles.leftText}>Writers:</DialogContentText>

          <Box sx={{ ...styles.actorsBox, ...styles.rightText }}>
            {writers.length === 0 && (
              <DialogContentText>Unknown.</DialogContentText>
            )}
            {writers.length > 0 &&
              writers.map((writer, i) => (
                <DialogContentText key={writer.id}>{`${writer.name}${
                  i + 1 === writers.length ? "." : ","
                }`}</DialogContentText>
              ))}
          </Box>
        </Box>

        <Box sx={styles.block}>
          <DialogContentText sx={styles.leftText}>IMDB:</DialogContentText>

          <DialogContentText
            color={IMDB >= 7 ? "success" : "error"}
            sx={{ ...styles.rightText, ...styles.imdbBox }}
          >
            {IMDB}
            {IMDB >= 7 ? (
              <ThumbUpTwoToneIcon sx={styles.icon} color="success" />
            ) : (
              <ThumbDownOffAltTwoToneIcon
                sx={{ ...styles.icon, ...styles.thumbDownIcon }}
                color="error"
              />
            )}
          </DialogContentText>
        </Box>

        <Box sx={styles.block}>
          <DialogContentText sx={styles.leftText}>Actors:</DialogContentText>

          <Box sx={{ ...styles.actorsBox, ...styles.rightText }}>
            {actors.map((actor, i) => (
              <DialogContentText key={actor.id}>{`${actor.name}${
                i + 1 === actors.length ? "." : ","
              }`}</DialogContentText>
            ))}
          </Box>
        </Box>

        <Box sx={styles.block}>
          <DialogContentText sx={styles.leftText}>Plot:</DialogContentText>

          <DialogContentText sx={styles.rightText}>
            {overview}
          </DialogContentText>
        </Box>
      </DialogContent>
      <DialogActions sx={styles.buttonBox}>
        <Button variant="outlined" color="error" onClick={handleClose}>
          Cancel
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default InformationModal;
