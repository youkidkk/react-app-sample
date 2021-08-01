import {
  Dialog,
  DialogContent,
  DialogTitle,
  List,
  ListItem,
} from "@material-ui/core";

export default function ConfirmDialog(props) {
  const { firstName, lastName, gender, birthday } = props.formInput;
  return (
    <Dialog
      aria-labelledby="simple-dialog-title"
      open={props.open}
      onClose={props.onClose}
    >
      <DialogTitle>確認</DialogTitle>
      <DialogContent>
        <List>
          <ListItem>
            姓名： {lastName} {firstName}
          </ListItem>
          <ListItem>性別： {gender}</ListItem>
          <ListItem>生年月日： {birthday}</ListItem>
        </List>
      </DialogContent>
    </Dialog>
  );
}
