import { TableCell, TableRow } from "@material-ui/core";
import Button from "../buttons";
import BasicTable from "../table";
const columns = [
  "id",
  " product name",
  "description",
  "art price",
  "image",
  "creator name",
  "sequence",
  "action",
];

const clients = [
  "1",
  "RJ Gohar",
  "Singer RJ Gohar",
  "0.513ETH",
  "Naamo",
  "Naamo",
  "Naamo",
];
const rows = [clients, clients, clients, clients, clients];

const HotCollection = () => {
  const head = columns.map((col) => <TableCell>{col}</TableCell>);
  const body = rows.map((row) => (
    <TableRow>
      {row.map((col) => (
        <TableCell>{col}</TableCell>
      ))}

      <TableCell>
        <Button variant="outline">Preview </Button>{" "}
        <Button variant="contain">delete</Button>
      </TableCell>
    </TableRow>
  ));
  return <BasicTable head={head} body={body} />;
};
export default HotCollection;
