import "./Dashboard.scss";

import { Box, Container, Grid, useMediaQuery } from "@material-ui/core";
import { Metric, MetricCollection, Paper } from "@olympusdao/component-library";
import { memo } from "react";

import { MarketValueGraph, RunwayAvailableGraph, TVLGraph } from "./components/Graph/Graph";
import { BackingPerOHM, CircSupply, CurrentIndex, GOHMPrice, MarketCap, OHMPrice } from "./components/Metric/Metric";

const sharedMetricProps: PropsOf<typeof Metric> = { labelVariant: "h6", metricVariant: "h5" };
const Dashboard = () => {
  const isSmallScreen = useMediaQuery("(max-width: 650px)");
  const isVerySmallScreen = useMediaQuery("(max-width: 379px)");
  return (
    <div id="dashboard-view" className={`${isSmallScreen && "smaller"} ${isVerySmallScreen && "very-small"}`}>
      <Container
        style={{
          paddingLeft: isSmallScreen || isVerySmallScreen ? "0" : "20px",
          paddingRight: isSmallScreen || isVerySmallScreen ? "0" : "20px",
        }}
      >
        <Box className="hero-metrics">
          <Paper className="ohm-card">
            <div className="card-header">
              <h2>概览</h2>
              <div>2020/09/09 22:22:22</div>
            </div>
            <MetricCollection>
              <MarketCap {...sharedMetricProps} />
              <OHMPrice {...sharedMetricProps} />
              <GOHMPrice {...sharedMetricProps} className="wsoprice" />
              <CircSupply {...sharedMetricProps} />
              <BackingPerOHM {...sharedMetricProps} />
              <CurrentIndex {...sharedMetricProps} />
              <MarketCap {...sharedMetricProps} />
              <OHMPrice {...sharedMetricProps} />
              <GOHMPrice {...sharedMetricProps} className="wsoprice" />
              <CircSupply {...sharedMetricProps} />
              <BackingPerOHM {...sharedMetricProps} />
              <CurrentIndex {...sharedMetricProps} />
              <BackingPerOHM {...sharedMetricProps} />
              <CurrentIndex {...sharedMetricProps} />
            </MetricCollection>
          </Paper>
        </Box>

        <Grid container spacing={2} className="data-grid">
          <Grid item lg={6} md={6} sm={12} xs={12}>
            <Paper className="ohm-card ohm-chart-card">
              <TVLGraph />
            </Paper>
          </Grid>

          <Grid item lg={6} md={6} sm={12} xs={12}>
            <Paper className="ohm-card ohm-chart-card">
              <MarketValueGraph />
            </Paper>
          </Grid>

          <Grid item lg={6} md={6} sm={12} xs={12}>
            <Paper className="ohm-card ohm-chart-card">
              <RunwayAvailableGraph />
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default memo(Dashboard);
