import "./Dashboard.scss";

import { t } from "@lingui/macro";
import { Container, Grid, useMediaQuery } from "@material-ui/core";
import { Metric, Paper } from "@olympusdao/component-library";
import { memo } from "react";

import { AreaGraph, MarketValueGraph, RunwayAvailableGraph, TVLGraph } from "./components/Graph/Graph";

const sharedMetricProps: PropsOf<typeof Metric> = { labelVariant: "h6", metricVariant: "h5" };
const Dashboard = () => {
  const isSmallScreen = useMediaQuery("(max-width: 650px)");
  const isVerySmallScreen = useMediaQuery("(max-width: 379px)");
  return (
    <div id="dashboard-view" className={`${isSmallScreen && "smaller"} ${isVerySmallScreen && "very-small"}`}>
      <Container
        style={{
          paddingLeft: isSmallScreen || isVerySmallScreen ? "0" : "8px",
          paddingRight: isSmallScreen || isVerySmallScreen ? "0" : "8px",
        }}
      >
        <div style={{ fontWeight: 500, fontSize: "15px", overflow: "hidden", lineHeight: "40px" }}>
          {t`Overview`}
          <span style={{ color: "grey", fontSize: "12px", fontWeight: 400, marginLeft: "16px" }}>
            2020/09/09 22:22:22
          </span>
        </div>
        <Grid container spacing={2}>
          {/* 13个指标 */}
          <Grid item lg={12} md={12} sm={12} xs={12}>
            <Grid container spacing={2}>
              <Grid item lg={9} md={9} sm={12} xs={12}>
                <Grid container spacing={2}>
                  <Grid item lg={12} md={12} sm={12} xs={12}>
                    <div style={{ backgroundColor: "white", width: "100%", height: "200px", color: "#000" }}>1</div>
                  </Grid>
                  <Grid item lg={4} md={4} sm={12} xs={12}>
                    <div style={{ backgroundColor: "white", width: "100%", height: "200px", color: "#000" }}>2</div>
                  </Grid>
                  <Grid item lg={8} md={8} sm={12} xs={12}>
                    <div style={{ backgroundColor: "white", width: "100%", height: "200px", color: "#000" }}>3</div>
                  </Grid>
                </Grid>
              </Grid>

              <Grid item lg={3} md={3} sm={12} xs={12}>
                <Grid container spacing={2}>
                  <Grid item lg={12} md={12} sm={12} xs={12}>
                    <div style={{ backgroundColor: "white", width: "100%", height: "300px", color: "#000" }}>4</div>
                  </Grid>
                  <Grid item lg={12} md={12} sm={12} xs={12}>
                    <div style={{ backgroundColor: "white", width: "100%", height: "100px", color: "#000" }}>5</div>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          {/* echarts图表 */}
          <Grid item lg={12} md={12} sm={12} xs={12}>
            <Grid container spacing={2}>
              <Grid item lg={7} md={7} sm={12} xs={12}>
                <Paper className="ohm-card ohm-chart-card">
                  <TVLGraph />
                </Paper>
              </Grid>
              <Grid item lg={5} md={5} sm={12} xs={12}>
                <Paper className="ohm-card ohm-chart-card">
                  <AreaGraph />
                </Paper>
              </Grid>
            </Grid>
          </Grid>

          <Grid item lg={12} md={12} sm={12} xs={12}>
            <Grid container spacing={2}>
              <Grid item lg={7} md={7} sm={12} xs={12}>
                <Grid container spacing={4}>
                  <Grid item lg={12} md={12} sm={12} xs={12}>
                    <Paper className="ohm-card ohm-chart-card">
                      <MarketValueGraph />
                    </Paper>
                  </Grid>
                  <Grid item lg={12} md={12} sm={12} xs={12}>
                    <Paper className="ohm-card ohm-chart-card">
                      <TVLGraph />
                    </Paper>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item lg={5} md={5} sm={12} xs={12}>
                <Grid container spacing={2}>
                  <Grid item lg={12} md={12} sm={12} xs={12}>
                    <Paper className="ohm-card ohm-chart-card" style={{ height: "238px" }}>
                      <RunwayAvailableGraph />
                    </Paper>
                  </Grid>
                  <Grid item lg={12} md={12} sm={12} xs={12}>
                    <Paper className="ohm-card ohm-chart-card" style={{ height: "238px" }}>
                      <RunwayAvailableGraph />
                    </Paper>
                  </Grid>
                  <Grid item lg={12} md={12} sm={12} xs={12}>
                    <Paper className="ohm-card ohm-chart-card" style={{ height: "238px" }}>
                      <RunwayAvailableGraph />
                    </Paper>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>

          <Grid item lg={12} md={12} sm={12} xs={12}>
            <Grid container spacing={2}>
              <Grid item lg={7} md={7} sm={12} xs={12}>
                <Paper className="ohm-card ohm-chart-card">
                  <MarketValueGraph />
                </Paper>
              </Grid>
              <Grid item lg={5} md={5} sm={12} xs={12}>
                <Paper className="ohm-card ohm-chart-card">
                  <MarketValueGraph />
                </Paper>
              </Grid>
            </Grid>
          </Grid>

          <Grid item lg={12} md={12} sm={12} xs={12}>
            <Paper className="ohm-card ohm-chart-card">
              <RunwayAvailableGraph />
            </Paper>
          </Grid>

          <Grid item lg={12} md={12} sm={12} xs={12}>
            <Grid container spacing={2}>
              <Grid item lg={4} md={4} sm={12} xs={12}>
                <Paper className="ohm-card ohm-chart-card">
                  <MarketValueGraph />
                </Paper>
              </Grid>
              <Grid item lg={4} md={4} sm={12} xs={12}>
                <Paper className="ohm-card ohm-chart-card">
                  <MarketValueGraph />
                </Paper>
              </Grid>
              <Grid item lg={4} md={4} sm={12} xs={12}>
                <Paper className="ohm-card ohm-chart-card">
                  <MarketValueGraph />
                </Paper>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default memo(Dashboard);
