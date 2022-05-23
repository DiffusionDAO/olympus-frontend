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
    <Paper className="data-box" style={props.style}>
      <div>
        <div className="data-cell-title">{props.title}</div>
        <div className="data-cell-content">{props.data}</div>
      </div>
      {props.imgUrl && (
        <div className="data-cell-img">
          <img src={props.imgUrl} />
        </div>
      )}
    </Paper>
  );
};
