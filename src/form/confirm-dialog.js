import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@material-ui/core";

export default function ConfirmDialog(props) {
  const { firstName, lastName, gender, birthday } = props.formInput;

  const items = [
    { name: "姓名", value: `${lastName} ${firstName}` },
    { name: "性別", value: gender },
    { name: "生年月日", value: birthday },
  ];

  const tableRows = items.map((item) => (
    <TableRow>
      <TableCell>{item.name}</TableCell>
      <TableCell>{item.value}</TableCell>
    </TableRow>
  ));

  return (
    <Dialog open={props.open} onClose={props.onClose}>
      <DialogTitle>確認</DialogTitle>
      <DialogContent>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>項目</TableCell>
                <TableCell>値</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>{tableRows}</TableBody>
          </Table>
        </TableContainer>
      </DialogContent>
      <DialogActions>
        <Button
          variant="outlined"
          color="primary"
          onClick={props.onConfirmCancel}
        >
          キャンセル
        </Button>
        <Button variant="contained" color="primary" onClick={props.onConfirmOk}>
          OK
        </Button>
      </DialogActions>
    </Dialog>
  );
}
