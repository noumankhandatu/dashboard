import { TableCell, TableRow } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
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
  "  FADEDED",
  "0.513ETH",
  "bawa g",
  " helloo",
  "sauna",
];
const rows = [clients, clients, clients, clients, clients];

const HotCollection = () => {
  const classes = useStyles();
  const head = columns.map((col) => <TableCell>{col}</TableCell>);

  const body = rows.map((row) => (
    <TableRow>
      {row.map((col) => (
        <TableCell className={classes.textcell}>{col}</TableCell>
      ))}

      <TableCell>
        <Button className={classes.btnview} variant="outline">
          view{" "}
        </Button>{" "}
        <Button variant="contain">delete</Button>
      </TableCell>
    </TableRow>
  ));
  return <BasicTable tableName="Hot Collections" head={head} body={body} />;
};
export default HotCollection;
const useStyles = makeStyles((theme) => ({
  textcell: {
    color: theme.palette.color.secondary,
  },
  btnview: {
    [theme.breakpoints.down("sm")]: {
      marginBottom: 10,
    },
  },
}));
