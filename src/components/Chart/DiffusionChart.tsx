import "./chart.scss";

import { t } from "@lingui/macro";
import { Box, CircularProgress, MenuItem, Select, SvgIcon, Typography } from "@material-ui/core";
import { Skeleton } from "@material-ui/lab";
import { InfoTooltip } from "@olympusdao/component-library";
import { CSSProperties, useEffect, useState } from "react";
import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { CategoricalChartProps } from "recharts/types/chart/generateCategoricalChart";
import { ReactComponent as Fullscreen } from "src/assets/icons/fullscreen.svg";
import { formatCurrency, trim } from "src/helpers";

import CustomDiffusionTooltip from "./CustomDiffusionTooltip";
import ExpandedChart from "./ExpandedChart";

const tickCount = 3;
const expandedTickCount = 5;

const renderExpandedChartStroke = (isExpanded: boolean, color: string) => {
  return isExpanded ? <CartesianGrid vertical={false} stroke={color} /> : "";
};

interface MenuItemObj {
  label: string;
  value: string | number;
}

const renderAreaChart = (
  data: any[],
  dataKey: string[],
  stopColor: string[][],
  stroke: string[],
  dataFormat: string,
  bulletpointColors: CSSProperties[],
  itemNames: string[],
  itemType: string,
  isExpanded: boolean,
  expandedGraphStrokeColor: string,
  margin: CategoricalChartProps["margin"],
) => (
  <AreaChart data={data} margin={margin}>
    <defs>
      <linearGradient id={`color-${dataKey[0]}`} x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor={stopColor[0][0]} stopOpacity={1} />
        <stop offset="90%" stopColor={stopColor[0][1]} stopOpacity={0.9} />
      </linearGradient>
    </defs>
    <XAxis dataKey="timestamp" padding={{ right: 20 }} />
    <YAxis
      tickCount={isExpanded ? expandedTickCount : tickCount}
      axisLine={false}
      tickLine={false}
      width={dataFormat === "percent" ? 33 : 55}
      tickFormatter={number =>
        number !== 0
          ? dataFormat !== "percent"
            ? `${formatCurrency(parseFloat(number) / 1000000)}M`
            : `${trim(parseFloat(number), 2)}%`
          : ""
      }
      domain={[0, "auto"]}
      dx={3}
      allowDataOverflow={false}
    />
    <Tooltip
      content={
        <CustomDiffusionTooltip bulletpointColors={bulletpointColors} itemNames={itemNames} itemType={itemType} />
      }
    />
    <Area type="monotone" dataKey={dataKey[0]} stroke="none" fill={`url(#color-${dataKey[0]})`} fillOpacity={1} />
    {renderExpandedChartStroke(isExpanded, expandedGraphStrokeColor)}
  </AreaChart>
);

const renderStackedAreaChart = (
  data: any[],
  dataKey: string[],
  stopColor: string[][],
  stroke: string[],
  dataFormat: string,
  bulletpointColors: CSSProperties[],
  itemNames: string[],
  itemType: string,
  isExpanded: boolean,
  expandedGraphStrokeColor: string,
  margin: CategoricalChartProps["margin"],
) => (
  <AreaChart data={data} margin={margin}>
    <defs>
      <linearGradient id={`color-${dataKey[0]}`} x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor={stopColor[0][0]} stopOpacity={1} />
        <stop offset="90%" stopColor={stopColor[0][1]} stopOpacity={0.9} />
      </linearGradient>
      <linearGradient id={`color-${dataKey[1]}`} x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor={stopColor[1][0]} stopOpacity={1} />
        <stop offset="90%" stopColor={stopColor[1][1]} stopOpacity={0.9} />
      </linearGradient>
      <linearGradient id={`color-${dataKey[2]}`} x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor={stopColor[2][0]} stopOpacity={1} />
        <stop offset="90%" stopColor={stopColor[2][1]} stopOpacity={0.9} />
      </linearGradient>
      <linearGradient id={`color-${dataKey[3]}`} x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor={stopColor[3][0]} stopOpacity={1} />
        <stop offset="90%" stopColor={stopColor[3][1]} stopOpacity={0.9} />
      </linearGradient>
      <linearGradient id={`color-${dataKey[4]}`} x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor={stopColor[4][0]} stopOpacity={1} />
        <stop offset="90%" stopColor={stopColor[4][1]} stopOpacity={0.9} />
      </linearGradient>
      <linearGradient id={`color-${dataKey[5]}`} x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor={stopColor[5][0]} stopOpacity={1} />
        <stop offset="90%" stopColor={stopColor[5][1]} stopOpacity={0.9} />
      </linearGradient>
      <linearGradient id={`color-${dataKey[6]}`} x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor={stopColor[6][0]} stopOpacity={1} />
        <stop offset="90%" stopColor={stopColor[6][1]} stopOpacity={0.9} />
      </linearGradient>
    </defs>
    <XAxis dataKey="timestamp" padding={{ right: 20 }} />
    <YAxis
      tickCount={isExpanded ? expandedTickCount : tickCount}
      axisLine={false}
      tickLine={false}
      width={dataFormat === "percent" ? 33 : 55}
      tickFormatter={number => {
        if (number !== 0) {
          if (dataFormat === "percent") {
            return `${trim(parseFloat(number), 2)}%`;
          } else if (dataFormat === "k") return `${formatCurrency(parseFloat(number) / 1000)}k`;
          else return `${formatCurrency(parseFloat(number) / 1000000)}M`;
        }
        return "";
      }}
      domain={[0, "auto"]}
      allowDataOverflow={false}
    />
    <Tooltip
      formatter={(value: string) => trim(parseFloat(value), 2)}
      content={
        <CustomDiffusionTooltip bulletpointColors={bulletpointColors} itemNames={itemNames} itemType={itemType} />
      }
    />
    <Area
      type="monotone"
      dataKey={dataKey[0]}
      stroke={stroke ? stroke[0] : "none"}
      fill={`url(#color-${dataKey[0]})`}
      fillOpacity={1}
      stackId="1"
    />
    <Area
      type="monotone"
      dataKey={dataKey[1]}
      stroke={stroke ? stroke[1] : "none"}
      fill={`url(#color-${dataKey[1]})`}
      fillOpacity={1}
      stackId="1"
    />
    <Area
      type="monotone"
      dataKey={dataKey[2]}
      stroke={stroke ? stroke[2] : "none"}
      fill={`url(#color-${dataKey[2]})`}
      fillOpacity={1}
      stackId="1"
    />
    <Area
      type="monotone"
      dataKey={dataKey[3]}
      stroke={stroke ? stroke[3] : "none"}
      fill={`url(#color-${dataKey[3]})`}
      fillOpacity={1}
      stackId="1"
    />
    <Area
      type="monotone"
      dataKey={dataKey[4]}
      stroke={stroke ? stroke[4] : "none"}
      fill={`url(#color-${dataKey[4]})`}
      fillOpacity={1}
      stackId="1"
    />
    <Area
      type="monotone"
      dataKey={dataKey[5]}
      stroke={stroke ? stroke[5] : "none"}
      fill={`url(#color-${dataKey[5]})`}
      fillOpacity={1}
      stackId="1"
    />
    <Area
      type="monotone"
      dataKey={dataKey[6]}
      stroke={stroke ? stroke[6] : "none"}
      fill={`url(#color-${dataKey[6]})`}
      fillOpacity={1}
      stackId="1"
    />
    {renderExpandedChartStroke(isExpanded, expandedGraphStrokeColor)}
  </AreaChart>
);

const renderLineChart = (
  data: any[],
  dataKey: string[],
  stroke: string[],
  color: string,
  dataFormat: string,
  bulletpointColors: CSSProperties[],
  itemNames: string[],
  itemType: string,
  isExpanded: boolean,
  expandedGraphStrokeColor: string,
  scale: string,
  margin: CategoricalChartProps["margin"],
) => (
  <LineChart data={data} margin={margin}>
    <XAxis dataKey="timestamp" padding={{ right: 20 }} />
    <YAxis
      tickCount={scale == "log" ? 1 : isExpanded ? expandedTickCount : tickCount}
      axisLine={false}
      tickLine={false}
      width={32}
      scale={() => scale}
      tickFormatter={number =>
        number !== 0 ? (dataFormat !== "percent" ? `${number}` : `${parseFloat(number) / 1000}k`) : ""
      }
      domain={[scale == "log" ? "dataMin" : 0, "auto"]}
      allowDataOverflow={false}
    />
    <Tooltip
      content={
        <CustomDiffusionTooltip bulletpointColors={bulletpointColors} itemNames={itemNames} itemType={itemType} />
      }
    />
    <Line type="monotone" dataKey={dataKey[0]} stroke={stroke ? stroke[0] : "none"} color={color} dot={false} />;
    {renderExpandedChartStroke(isExpanded, expandedGraphStrokeColor)}
  </LineChart>
);

const renderMultiLineChart = (
  data: any[],
  dataKey: string[],
  stroke: string[],
  color: string,
  dataFormat: string,
  bulletpointColors: CSSProperties[],
  itemNames: string[],
  itemType: string,
  isExpanded: boolean,
  expandedGraphStrokeColor: string,
  margin: CategoricalChartProps["margin"],
) => (
  <LineChart data={data} margin={margin}>
    <XAxis dataKey="timestamp" padding={{ right: 20 }} />
    <YAxis
      tickCount={isExpanded ? expandedTickCount : tickCount}
      axisLine={false}
      tickLine={false}
      width={25}
      tickFormatter={number => (number !== 0 ? `${trim(parseFloat(number), 2)}` : "")}
      domain={[0, "auto"]}
      allowDataOverflow={false}
    />
    <Tooltip
      content={
        <CustomDiffusionTooltip bulletpointColors={bulletpointColors} itemNames={itemNames} itemType={itemType} />
      }
    />
    <Line type="monotone" dataKey={dataKey[0]} stroke={stroke[0]} dot={false} />;
    <Line type="monotone" dataKey={dataKey[1]} stroke={stroke[1]} dot={false} />;
    <Line type="monotone" dataKey={dataKey[2]} stroke={stroke[2]} dot={false} />;
    <Line type="monotone" dataKey={dataKey[3]} stroke={stroke[3]} dot={false} />;
    {renderExpandedChartStroke(isExpanded, expandedGraphStrokeColor)}
  </LineChart>
);

// JTBD: Bar chart for Holders
const renderBarChart = (
  data: any[],
  dataKey: string[],
  stroke: string[],
  dataFormat: string,
  bulletpointColors: CSSProperties[],
  itemNames: string[],
  itemType: string,
  isExpanded: boolean,
  expandedGraphStrokeColor: string,
  margin: CategoricalChartProps["margin"],
) => (
  <BarChart data={data} margin={margin}>
    <XAxis dataKey="timestamp" padding={{ right: 20 }} />
    <YAxis
      axisLine={false}
      tickLine={false}
      tickCount={isExpanded ? expandedTickCount : tickCount}
      width={33}
      domain={[0, "auto"]}
      allowDataOverflow={false}
      tickFormatter={number => (number !== 0 ? number : "")}
    />
    <Tooltip
      content={
        <CustomDiffusionTooltip bulletpointColors={bulletpointColors} itemNames={itemNames} itemType={itemType} />
      }
    />
    <Bar dataKey={dataKey[0]} fill={stroke[0]} radius={4} maxBarSize={18} />
    {renderExpandedChartStroke(isExpanded, expandedGraphStrokeColor)}
  </BarChart>
);

function DiffusionChart({
  type,
  data,
  scale,
  dataKey,
  color,
  stopColor,
  stroke,
  headerText,
  dataFormat,
  headerSubText,
  bulletpointColors,
  itemNames,
  itemType,
  infoTooltipMessage,
  expandedGraphStrokeColor,
  margin = {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
  },
  menuItemData,
}: {
  type: string;
  data: any[];
  scale: string;
  dataKey: string[];
  color: string;
  stopColor: string[][];
  stroke: string[];
  headerText: string;
  dataFormat: string;
  headerSubText: string;
  bulletpointColors: CSSProperties[];
  itemNames: string[];
  itemType: string;
  infoTooltipMessage: string;
  expandedGraphStrokeColor: string;
  margin?: CategoricalChartProps["margin"];
  menuItemData: MenuItemObj[];
}) {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(true);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const renderChart = (type: string, isExpanded: boolean) => {
    if (type === "line")
      return renderLineChart(
        data,
        dataKey,
        stroke,
        color,
        dataFormat,
        bulletpointColors,
        itemNames,
        itemType,
        isExpanded,
        expandedGraphStrokeColor,
        scale,
        margin,
      );
    if (type === "area")
      return renderAreaChart(
        data,
        dataKey,
        stopColor,
        stroke,
        dataFormat,
        bulletpointColors,
        itemNames,
        itemType,
        isExpanded,
        expandedGraphStrokeColor,
        margin,
      );
    if (type === "stack")
      return renderStackedAreaChart(
        data,
        dataKey,
        stopColor,
        stroke,
        dataFormat,
        bulletpointColors,
        itemNames,
        itemType,
        isExpanded,
        expandedGraphStrokeColor,
        margin,
      );
    if (type === "multi")
      return renderMultiLineChart(
        data,
        dataKey,
        stroke,
        color,
        dataFormat,
        bulletpointColors,
        itemNames,
        itemType,
        isExpanded,
        expandedGraphStrokeColor,
        margin,
      );

    if (type === "bar")
      return renderBarChart(
        data,
        dataKey,
        stroke,
        dataFormat,
        bulletpointColors,
        itemNames,
        itemType,
        isExpanded,
        expandedGraphStrokeColor,
        margin,
      );
    return <></>;
  };

  useEffect(() => {
    if (data) {
      setLoading(false);
    }
  }, [data]);

  return loading ? (
    <Box style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
      <CircularProgress />
    </Box>
  ) : (
    <Box style={{ width: "100%", height: "100%" }}>
      <div className="chart-card-header">
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          style={{ width: "100%", overflow: "hidden", display: "flex" }}
        >
          <Box display="flex" alignItems="center">
            <Typography
              variant="h5"
              className="card-title-text"
              style={{ fontWeight: 700, overflow: "hidden", color: "#6495f9" }}
            >
              {headerText}
            </Typography>
            <Typography variant={"h6"} style={{ color: "rgb(153, 153, 153)", fontWeight: 500 }}>
              <InfoTooltip message={infoTooltipMessage} />
            </Typography>
          </Box>
          {/* could make this svgbutton */}
          <Box display="flex" alignItems="center">
            {menuItemData && menuItemData.length && (
              <Select label="Time" style={{ width: "120px", height: "30px", marginRight: "8px" }}>
                {menuItemData.map(item => {
                  return <MenuItem value={item.value}>{item.label}</MenuItem>;
                })}
              </Select>
            )}

            <div style={{ borderRadius: "5px", background: "rgba(171, 182, 255, 0.1)", padding: "8px" }}>
              <SvgIcon
                component={Fullscreen}
                color="primary"
                onClick={handleOpen}
                style={{ fontSize: "15px", cursor: "pointer" }}
              />
            </div>
          </Box>

          <ExpandedChart
            open={open}
            handleClose={handleClose}
            renderChart={renderChart(type, true)}
            data={data}
            infoTooltipMessage={infoTooltipMessage}
            headerText={headerText}
            headerSubText={headerSubText}
          />
        </Box>
        {loading ? (
          <Skeleton variant="text" width={100} />
        ) : (
          <Box display="flex">
            <Typography
              variant="h6"
              className="card-sub-title-fixation-text"
              style={{ fontWeight: 400, color: "rgb(100, 149, 249)" }}
            >
              {t`Today`}
            </Typography>
            <Typography variant="h5" style={{ fontWeight: 600, marginRight: 5, color: "rgb(43, 133, 228)" }}>
              {headerSubText}
            </Typography>
          </Box>
        )}
      </div>
      <Box width="100%" minHeight={260} minWidth={310} className="ohm-chart">
        {loading || (data && data.length > 0) ? (
          <ResponsiveContainer minHeight={260} width="100%">
            {renderChart(type, true)}
          </ResponsiveContainer>
        ) : (
          <Skeleton variant="rect" width="100%" height={260} />
        )}
      </Box>
    </Box>
  );
}

export default DiffusionChart;
