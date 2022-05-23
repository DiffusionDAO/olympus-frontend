import { Paper } from "@material-ui/core";
import { CSSProperties } from "@material-ui/core/styles/withStyles";

interface Props {
  title: string;
  data: string;
  style?: CSSProperties;
  imgUrl?: string;
}
export const DataCell: React.FC<Props> = props => {
  return (
    <Paper className="data-cell-box" style={props.style}>
      <div>
        <div>{props.title}</div>
        <h3>{props.data}</h3>
      </div>
      {props.imgUrl && (
        <div>
          <img src={props.imgUrl} />
        </div>
      )}
    </Paper>
  );
};
