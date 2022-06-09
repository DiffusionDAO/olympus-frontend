import "./DiffusionChart.scss";

import { t } from "@lingui/macro";
import { Box, CircularProgress, MenuItem, Select, Typography } from "@material-ui/core";
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
import FullscreenPng from "src/assets/icons/fullscreen.png";
import { formatCurrency, trim } from "src/helpers";

import CustomDiffusionTooltip from "./CustomDiffusionTooltip";
import DiffusionExpandedChart from "./DiffusionExpandedChart";

const tickCount = 3;
const expandedTickCount = 5;

// 横着的网格线
const renderExpandedChartStroke = (isExpanded: boolean, color: string) => {
  return isExpanded ? <CartesianGrid vertical={false} stroke={color} /> : "";
};

// 注意事项
// 在多个charts的dataKey重复时,会导致渐变fill属性失效

interface MenuItemObj {
  label: string;
  value: string | number;
}
type LineType =
  | "basis"
  | "basisClosed"
  | "basisOpen"
  | "linear"
  | "linearClosed"
  | "natural"
  | "monotoneX"
  | "monotoneY"
  | "monotone"
  | "step"
  | "stepBefore"
  | "stepAfter";

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
  lineType: LineType,
) => (
  <AreaChart data={data} margin={margin}>
    <defs>
      {stopColor &&
        stopColor.map((item: string[], index: number) => (
          <linearGradient id={`color-${dataKey[index]}`} x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor={item[0]} stopOpacity={0.8} />
            <stop offset="95%" stopColor={item[1]} stopOpacity={0} />
          </linearGradient>
        ))}
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
    {dataKey.map((item: string, index: number) => (
      <Area
        type={lineType}
        dataKey={item}
        stroke={stroke && stroke[index] ? stroke[index] : "none"}
        fill={stopColor && stopColor.length ? `url(#color-${dataKey[index]})` : stroke[index]}
        fillOpacity={1}
      />
    ))}
    {renderExpandedChartStroke(isExpanded, expandedGraphStrokeColor)}
  </AreaChart>
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
  lineType: LineType,
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
    {dataKey.map((item: string, index: number) => (
      <Line type={lineType} dataKey={item} stroke={stroke[index]} dot={false} />
    ))}
    {renderExpandedChartStroke(isExpanded, expandedGraphStrokeColor)}
  </LineChart>
);

// JTBD: Bar chart for Holders
const renderBarChart = (
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
  <BarChart data={data} margin={margin}>
    <defs>
      {stopColor &&
        stopColor.map((item: string[], index: number) => (
          <linearGradient id={`color-${dataKey[index]}`} x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor={item[0]} stopOpacity={0.8} />
            <stop offset="95%" stopColor={item[1]} stopOpacity={0} />
          </linearGradient>
        ))}
    </defs>
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
    {dataKey.map((item: string, index: number) => (
      <Bar
        dataKey={dataKey[0]}
        radius={4}
        maxBarSize={18}
        fill={stopColor && stopColor.length ? `url(#color-${dataKey[index]})` : stroke[index]}
      />
    ))}
    {renderExpandedChartStroke(isExpanded, expandedGraphStrokeColor)}
  </BarChart>
);

const renderVerticalBarChart = (
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
  <BarChart data={data} margin={margin} layout="vertical">
    <defs>
      {stopColor &&
        stopColor.map((item: string[], index: number) => (
          // 渐变遵循svg的设置
          // 当y1和y2相等，x1和x2不同时，创建水平渐变
          // 当x1和x2相等，y1和y2不同时，创建垂直渐变
          <linearGradient id={`color-${dataKey[index]}`} x1="0" y1="0" x2="1" y2="0">
            <stop offset="5%" stopColor={item[0]} stopOpacity={1} />
            <stop offset="95%" stopColor={item[1]} stopOpacity={1} />
          </linearGradient>
        ))}
    </defs>
    <XAxis type="number" axisLine={false} tickLine={false} />
    <YAxis dataKey="timestamp" type="category" scale="band" axisLine={false} tickLine={false} />
    <Tooltip
      content={
        <CustomDiffusionTooltip bulletpointColors={bulletpointColors} itemNames={itemNames} itemType={itemType} />
      }
    />
    {dataKey.map((item: string, index: number) => (
      <Bar
        dataKey={item}
        fillOpacity={1}
        fill={stopColor && stopColor.length ? `url(#color-${dataKey[index]})` : stroke[index]}
        radius={5}
        maxBarSize={10}
        // 柱状图背景色设置
        background={{
          radius: 5,
          fill: "rgba(171, 182, 255, 0.1)",
        }}
        // 柱状图文字配置
        label={{ fill: "#fff", fontSize: 12, position: "right" }}
      />
    ))}
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
  lineType = "monotone", //折线的类型，圆弧或者直线折叠
  HeaderSuElement, // 副标题元素组件
  minHeight = 260, // echarts最小高度
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
  lineType: LineType;
  HeaderSuElement?: JSX.IntrinsicElements;
  minHeight: number;
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
        lineType,
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
        lineType,
      );
    if (type === "bar")
      return renderBarChart(
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
    if (type === "verticalBar")
      return renderVerticalBarChart(
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
              <Select
                label="Time"
                className="charts-select"
                style={{ width: "120px", height: "30px", marginRight: "8px" }}
              >
                {menuItemData.map(item => {
                  return <MenuItem value={item.value}>{item.label}</MenuItem>;
                })}
              </Select>
            )}

            <div
              style={{ borderRadius: "5px", background: "rgba(171, 182, 255, 0.1)", padding: "8px" }}
              onClick={handleOpen}
            >
              <img src={FullscreenPng} style={{ width: "15px", height: "15px", cursor: "pointer" }} />
            </div>
          </Box>

          <DiffusionExpandedChart
            open={open}
            handleClose={handleClose}
            renderChart={renderChart(type, true)}
            data={data}
            infoTooltipMessage={infoTooltipMessage}
            headerText={headerText}
            headerSubText={headerSubText}
            HeaderSuElement={HeaderSuElement}
          />
        </Box>
        {loading ? (
          <Skeleton variant="text" width={100} />
        ) : HeaderSuElement ? (
          HeaderSuElement
        ) : (
          <Box display="flex" alignItems="center">
            <Typography
              variant="h6"
              className="card-sub-title-fixation-text"
              style={{ fontWeight: 400, color: "#ABB6FF", fontSize: "14px" }}
            >
              {t`Today`}
            </Typography>
            <Typography variant="h5" style={{ fontWeight: "bold", marginRight: 5, color: "#fff", fontSize: "20px" }}>
              {headerSubText}
            </Typography>
          </Box>
        )}
      </div>
      <Box width="100%" minWidth={310} className="ohm-chart">
        {loading || (data && data.length > 0) ? (
          <ResponsiveContainer minHeight={minHeight} width="100%">
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
