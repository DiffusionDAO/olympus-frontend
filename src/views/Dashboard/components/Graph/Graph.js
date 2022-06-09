import { t } from "@lingui/macro";
import { Box, LinearProgress, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useTheme } from "@material-ui/core/styles";
import DiffusionChart from "src/components/Chart/DiffusionChart";
import { formatCurrency, trim } from "src/helpers";
import { useProtocolMetrics } from "src/hooks/useProtocolMetrics";

import { bulletpoints, dataKey, headerText, itemType, tooltipInfoMessages, tooltipItems } from "../../dashboardData";
import { data } from "./MockData";

export const Graph = ({ children }) => <>{children}</>;

const { dashboardData } = data;

const menuItemData = [
  { label: "24h", value: "24h" },
  { label: "14d", value: "14d" },
  { label: "30d", value: "30d" },
  { label: "90d", value: "90d" },
  { label: "180d", value: "180d" },
  { label: "1year", value: "1year" },
  { label: "max", value: "max" },
];

export const OneGraph = () => {
  const theme = useTheme();
  return (
    <DiffusionChart
      type="bar"
      data={dashboardData}
      menuItemData={menuItemData}
      itemType={itemType.dollar}
      itemNames={tooltipItems.one}
      dataKey={dataKey().one}
      headerText={headerText().one}
      stroke={["#0031FF"]}
      bulletpointColors={bulletpoints.one}
      infoTooltipMessage={tooltipInfoMessages().one}
      expandedGraphStrokeColor={theme.palette.graphStrokeColor}
      headerSubText={`${dashboardData && formatCurrency(dashboardData[0].one)}`}
    />
  );
};
// 第二个指标图
export const TwoGraph = () => {
  const theme = useTheme();
  return (
    <DiffusionChart
      type="area"
      data={dashboardData}
      dataKey={dataKey().two}
      stopColor={[["#3D72FD", "#3D72FD"]]}
      stroke={["#3D72FD"]}
      headerText={headerText().two}
      headerSubText={`${dashboardData && formatCurrency(dashboardData[0].two)}`}
      bulletpointColors={bulletpoints.two}
      itemNames={tooltipItems.two}
      itemType={itemType.dollar}
      infoTooltipMessage={tooltipInfoMessages().two}
      expandedGraphStrokeColor={theme.palette.graphStrokeColor}
    />
  );
};

// 第三个指标图
export const ThreeGraph = () => {
  const theme = useTheme();
  const HeaderSuElement = () => {
    return (
      <Box display="flex">
        {tooltipItems.three.map(item => (
          <Box display="flex" alignItems="center" marginRight="20px">
            <Typography
              variant="h6"
              className="card-sub-title-fixation-text"
              style={{ fontWeight: 400, color: "#ABB6FF", fontSize: "14px" }}
            >
              {item}
            </Typography>
            <Typography variant="h5" style={{ fontWeight: "bold", marginRight: 5, color: "#fff", fontSize: "20px" }}>
              {`${dashboardData && formatCurrency(dashboardData[0].one)}`}
            </Typography>
          </Box>
        ))}
      </Box>
    );
  };
  return (
    <DiffusionChart
      type="area"
      data={dashboardData}
      menuItemData={menuItemData}
      dataKey={dataKey().three}
      stopColor={[
        ["#3D72FD", "#3D72FD"],
        ["#F200FF", "#F200FF"],
      ]}
      stroke={["#3D72FD", "#F200FF"]}
      headerText={headerText().three}
      headerSubText={`${dashboardData && formatCurrency(dashboardData[0].three1)}`}
      bulletpointColors={bulletpoints.three}
      itemNames={tooltipItems.three}
      itemType={itemType.dollar}
      infoTooltipMessage={tooltipInfoMessages().three}
      expandedGraphStrokeColor={theme.palette.graphStrokeColor}
      HeaderSuElement={<HeaderSuElement />}
    />
  );
};
// 第四个指标图
export const FourGraph = () => {
  const theme = useTheme();
  return (
    <DiffusionChart
      type="bar"
      data={dashboardData}
      menuItemData={menuItemData}
      itemType={itemType.dollar}
      itemNames={tooltipItems.four}
      dataKey={dataKey().four}
      headerText={headerText().four}
      stroke={["#D257FF"]}
      bulletpointColors={bulletpoints.four}
      infoTooltipMessage={tooltipInfoMessages().four}
      expandedGraphStrokeColor={theme.palette.graphStrokeColor}
      headerSubText={`${dashboardData && formatCurrency(dashboardData[0].four)}`}
    />
  );
};

// 第五个指标
export const FiveGraph = () => {
  const theme = useTheme();
  const { data } = useProtocolMetrics();
  return (
    <DiffusionChart
      type="line"
      data={dashboardData}
      dataKey={dataKey().five}
      stroke={["#26E6C5"]}
      headerText={headerText().five}
      headerSubText={`${data && trim(data[0].five, 1)} Days`}
      dataFormat="days"
      bulletpointColors={bulletpoints.five}
      itemNames={tooltipItems.five}
      itemType={""}
      margin={{ left: 30 }}
      infoTooltipMessage={tooltipInfoMessages().five}
      expandedGraphStrokeColor={theme.palette.graphStrokeColor}
      minHeight={150}
    />
  );
};

// 第六个指标
export const SixGraph = () => {
  const theme = useTheme();
  const { data } = useProtocolMetrics();
  return (
    <DiffusionChart
      type="line"
      data={dashboardData}
      dataKey={dataKey().six}
      stroke={["#EC6EFF"]}
      headerText={headerText().six}
      headerSubText={`${dashboardData && trim(dashboardData[0].six, 1)} Days`}
      dataFormat="days"
      bulletpointColors={bulletpoints.six}
      itemNames={tooltipItems.six}
      itemType={""}
      margin={{ left: 30 }}
      infoTooltipMessage={tooltipInfoMessages().six}
      expandedGraphStrokeColor={theme.palette.graphStrokeColor}
      minHeight={150}
    />
  );
};

// 第七个指标
export const SevenGraph = () => {
  const theme = useTheme();
  const { data } = useProtocolMetrics();
  return (
    <DiffusionChart
      type="line"
      data={dashboardData}
      dataKey={dataKey().seven}
      stroke={["#DF741A"]}
      headerText={headerText().seven}
      headerSubText={`${dashboardData && trim(dashboardData[0].seven, 1)} Days`}
      dataFormat="days"
      bulletpointColors={bulletpoints.seven}
      itemNames={tooltipItems.seven}
      itemType={""}
      margin={{ left: 30 }}
      infoTooltipMessage={tooltipInfoMessages().seven}
      expandedGraphStrokeColor={theme.palette.graphStrokeColor}
      minHeight={150}
    />
  );
};

// 第8个指标图
export const EightGraph = () => {
  const theme = useTheme();
  const HeaderSuElement = () => {
    return (
      <Box display="flex">
        {tooltipItems.three.map(item => (
          <Box display="flex" alignItems="center" marginRight="20px">
            <Typography
              variant="h6"
              className="card-sub-title-fixation-text"
              style={{ fontWeight: 400, color: "#ABB6FF", fontSize: "14px" }}
            >
              {item}
            </Typography>
            <Typography variant="h5" style={{ fontWeight: "bold", marginRight: 5, color: "#fff", fontSize: "20px" }}>
              {`${dashboardData && formatCurrency(dashboardData[0].one)}`}
            </Typography>
          </Box>
        ))}
      </Box>
    );
  };
  return (
    <DiffusionChart
      type="area"
      data={dashboardData}
      menuItemData={menuItemData}
      dataKey={dataKey().eight}
      stopColor={[
        ["#3D72FD", "#3D72FD"],
        ["#F200FF", "#F200FF"],
      ]}
      stroke={["#3D72FD", "#F200FF"]}
      lineType="linear"
      headerText={headerText().eight}
      headerSubText={`${dashboardData && formatCurrency(dashboardData[0].eight1)}`}
      bulletpointColors={bulletpoints.eight}
      itemNames={tooltipItems.eight}
      itemType={itemType.dollar}
      infoTooltipMessage={tooltipInfoMessages().eight}
      expandedGraphStrokeColor={theme.palette.graphStrokeColor}
      HeaderSuElement={<HeaderSuElement />}
    />
  );
};
// 第9个指标图
export const NineGraph = () => {
  const theme = useTheme();
  const useStyles = makeStyles({
    root: {
      height: 10,
      borderRadius: 5,
    },
    bar: {
      borderRadius: 5,
      background: `linear-gradient(228deg, #F576FF 0%, #7200FF 50%, #3900FF 100%)`,
    },
  });
  const classes = useStyles();
  const HeaderSuElement = () => {
    return (
      <Box display="flex" alignItems="center">
        <Typography
          variant="h6"
          className="card-sub-title-fixation-text"
          style={{ fontWeight: 400, color: "#ABB6FF", fontSize: "14px" }}
        >
          {t`Today`}
        </Typography>
        <Box width="100%" marginRight="10px">
          <LinearProgress variant="determinate" classes={{ root: classes.root, bar: classes.bar }} value={20} />
        </Box>
        <Typography variant="body2" color="textSecondary">{`${20}%`}</Typography>
      </Box>
    );
  };
  return (
    <DiffusionChart
      type="verticalBar"
      data={dashboardData}
      stopColor={[["#00A1FF", "#26E6C5"]]}
      menuItemData={menuItemData}
      itemType={itemType.dollar}
      itemNames={tooltipItems.nine}
      dataKey={dataKey().nine}
      headerText={headerText().nine}
      stroke={["#00A1FF"]}
      bulletpointColors={bulletpoints.nine}
      infoTooltipMessage={tooltipInfoMessages().nine}
      expandedGraphStrokeColor={theme.palette.graphStrokeColor}
      headerSubText={`${dashboardData && formatCurrency(dashboardData[0].nine)}`}
      HeaderSuElement={<HeaderSuElement />}
    />
  );
};

// 第10个指标
export const TenGraph = () => {
  const theme = useTheme();
  const { data } = useProtocolMetrics();
  return (
    <DiffusionChart
      type="line"
      data={dashboardData}
      menuItemData={menuItemData}
      dataKey={dataKey().ten}
      stroke={["#DF741A"]}
      lineType="linear"
      headerText={headerText().ten}
      headerSubText={`${dashboardData && trim(dashboardData[0].ten, 1)} Days`}
      dataFormat="days"
      bulletpointColors={bulletpoints.ten}
      itemNames={tooltipItems.ten}
      itemType={""}
      margin={{ left: 30 }}
      infoTooltipMessage={tooltipInfoMessages().ten}
      expandedGraphStrokeColor={theme.palette.graphStrokeColor}
    />
  );
};

// 第11个指标
export const ElevenGraph = () => {
  const theme = useTheme();
  const { data } = useProtocolMetrics();
  return (
    <DiffusionChart
      type="area"
      data={dashboardData}
      dataKey={dataKey().eleven}
      stopColor={[["#FB0158", "#FB0158"]]}
      stroke={["#FB0158"]}
      headerText={headerText().eleven}
      headerSubText={`${dashboardData && formatCurrency(dashboardData[0].eleven)}`}
      bulletpointColors={bulletpoints.eleven}
      itemNames={tooltipItems.eleven}
      itemType={itemType.dollar}
      infoTooltipMessage={tooltipInfoMessages().eleven}
      expandedGraphStrokeColor={theme.palette.graphStrokeColor}
    />
  );
};

// 第12个指标
export const TwelveGraph = () => {
  const theme = useTheme();
  const { data } = useProtocolMetrics();
  return (
    <DiffusionChart
      type="area"
      data={dashboardData}
      dataKey={dataKey().twelve}
      stopColor={[["#DF741A", "#DF741A"]]}
      stroke={["#DF741A"]}
      headerText={headerText().twelve}
      headerSubText={`${dashboardData && formatCurrency(dashboardData[0].twelve)}`}
      bulletpointColors={bulletpoints.twelve}
      itemNames={tooltipItems.twelve}
      itemType={itemType.dollar}
      infoTooltipMessage={tooltipInfoMessages().twelve}
      expandedGraphStrokeColor={theme.palette.graphStrokeColor}
    />
  );
};

// 第13个指标
export const ThirteenGraph = () => {
  const theme = useTheme();
  const { data } = useProtocolMetrics();
  return (
    <DiffusionChart
      type="area"
      data={dashboardData}
      dataKey={dataKey().thirteen}
      stopColor={[["#1C6CFF", "#1C6CFF"]]}
      stroke={["#1C6CFF"]}
      headerText={headerText().thirteen}
      headerSubText={`${dashboardData && formatCurrency(dashboardData[0].thirteen)}`}
      bulletpointColors={bulletpoints.thirteen}
      itemNames={tooltipItems.thirteen}
      itemType={itemType.dollar}
      infoTooltipMessage={tooltipInfoMessages().thirteen}
      expandedGraphStrokeColor={theme.palette.graphStrokeColor}
    />
  );
};

export const MarketValueGraph = () => {
  const theme = useTheme();
  return (
    <DiffusionChart
      type="area"
      data={dashboardData}
      dataKey={dataKey().coin}
      stopColor={[
        ["#c2efdb", "#c2efdb"],
        ["#bdd2fd", "#bdd2fd"],
      ]}
      stroke={["#c2efdb", "#bdd2fd"]}
      headerText={headerText().coin}
      headerSubText={`${dashboardData && formatCurrency(dashboardData[0].treasuryDaiMarketValue)}`}
      bulletpointColors={bulletpoints.coin}
      itemNames={tooltipItems.coin}
      itemType={itemType.dollar}
      infoTooltipMessage={tooltipInfoMessages().mvt}
      expandedGraphStrokeColor={theme.palette.graphStrokeColor}
    />
  );
};

export const AreaGraph = () => {
  const theme = useTheme();
  return (
    <DiffusionChart
      type="area"
      data={dashboardData}
      dataKey={dataKey().coin}
      stopColor={[["#c2efdb", "#c2efdb"]]}
      headerText={headerText().coin}
      headerSubText={`${dashboardData && formatCurrency(dashboardData[0].treasuryDaiMarketValue)}`}
      bulletpointColors={bulletpoints.coin}
      itemNames={tooltipItems.coin}
      itemType={itemType.dollar}
      infoTooltipMessage={tooltipInfoMessages().mvt}
      expandedGraphStrokeColor={theme.palette.graphStrokeColor}
    />
  );
};

export const RunwayAvailableGraph = () => {
  const theme = useTheme();
  const { data } = useProtocolMetrics();
  return (
    <DiffusionChart
      type="line"
      data={dashboardData}
      dataKey={dataKey().runway}
      color={theme.palette.text.primary}
      stroke={["#5d91f9"]}
      headerText={headerText().runway}
      headerSubText={`${data && trim(data[0].runwayCurrent, 1)} Days`}
      dataFormat="days"
      bulletpointColors={bulletpoints.runway}
      itemNames={tooltipItems.runway}
      itemType={""}
      margin={{ left: 30 }}
      infoTooltipMessage={tooltipInfoMessages().runway}
      expandedGraphStrokeColor={theme.palette.graphStrokeColor}
    />
  );
};
