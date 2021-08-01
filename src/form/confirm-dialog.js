import {
  Dialog,
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
            <TableBody>
              <TableRow>
                <TableCell>姓名</TableCell>
                <TableCell>
                  {lastName} {firstName}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>性別</TableCell>
                <TableCell>{gender}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>生年月日</TableCell>
                <TableCell>{birthday}</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </DialogContent>
    </Dialog>
  );
}
