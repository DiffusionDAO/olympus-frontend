import { useTheme } from "@material-ui/core/styles";
import DiffusionChart from "src/components/Chart/DiffusionChart";
import { formatCurrency, trim } from "src/helpers";
import { useProtocolMetrics } from "src/hooks/useProtocolMetrics";

import { bulletpoints, dataKey, headerText, itemType, tooltipInfoMessages, tooltipItems } from "../../dashboardData";
import { dashboardData } from "./MockData";

export const Graph = ({ children }) => <>{children}</>;

export const TVLGraph = () => {
  const theme = useTheme();
  return (
    <DiffusionChart
      type="bar"
      data={dashboardData}
      itemType={itemType.dollar}
      itemNames={tooltipItems.tvl}
      dataKey={dataKey().tvl}
      headerText={headerText().tvl}
      stroke={["#6495f9"]}
      bulletpointColors={bulletpoints.tvl}
      infoTooltipMessage={tooltipInfoMessages().tvl}
      expandedGraphStrokeColor={theme.palette.graphStrokeColor}
      headerSubText={`${dashboardData && formatCurrency(dashboardData[0].tvl)}`}
    />
  );
};

export const MarketValueGraph = () => {
  const theme = useTheme();
  return (
    <DiffusionChart
      type="stack"
      data={dashboardData}
      dataKey={dataKey().coin}
      stopColor={[
        ["#c2efdb", "#c2efdb"],
        ["#bdd2fd", "#bdd2fd"],
        ["#DC30EB", "#DC30EB"],
        ["#8BFF4D", "#8BFF4D"],
        ["#ff758f", "#ff758f"],
        ["#4E1F71", "#4E1F71"],
        ["#8AECCD", "#8AECCD"],
      ]}
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
      type="multi"
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
