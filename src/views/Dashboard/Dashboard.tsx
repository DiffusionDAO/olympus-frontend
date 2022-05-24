import "./Dashboard.scss";

import { t } from "@lingui/macro";
import { Container, Grid, useMediaQuery } from "@material-ui/core";
import { Paper } from "@olympusdao/component-library";
import { memo } from "react";

import cfSVG from "../../assets/images/dashboard/cf.svg";
import diSVG from "../../assets/images/dashboard/di.svg";
import drSVG from "../../assets/images/dashboard/dr.svg";
import hsSVG from "../../assets/images/dashboard/hs.svg";
import rfSVG from "../../assets/images/dashboard/rf.svg";
import rmSVG from "../../assets/images/dashboard/rm.svg";
import rzSVG from "../../assets/images/dashboard/rz.svg";
import tfotdSVG from "../../assets/images/dashboard/tfotd.svg";
import troiSVG from "../../assets/images/dashboard/troi.svg";
import tvlSVG from "../../assets/images/dashboard/tvl.svg";
import { DataCell } from "./components/DataCell/DataCell";
import { AreaGraph, MarketValueGraph, RunwayAvailableGraph, TVLGraph } from "./components/Graph/Graph";

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
                    <div className="cell-box cell-item1">
                      <Grid container spacing={0}>
                        <Grid item lg={4} md={4} sm={12} xs={12}>
                          <div className="cell-sub-item">
                            <DataCell title="TVL" data="$123.22M" style={{ fontSize: "32px" }} />
                            <div>
                              <img src={tvlSVG} style={{ width: "50%", float: "right" }} />
                            </div>
                          </div>
                        </Grid>
                        <Grid item lg={4} md={4} sm={12} xs={12}>
                          <div className="has-border cell-sub-item">
                            <DataCell title="Total circulation" data="$123.22M" />
                            <DataCell title="Single currency internal savings fund" data="$123.22M" />
                          </div>
                        </Grid>
                        <Grid item lg={4} md={4} sm={12} xs={12}>
                          <div className="cell-sub-item">
                            <DataCell title="Reserve fund" data="$123.22M" imgUrl={rfSVG} />
                            <DataCell title="Reserve fund" data="$123.22M" imgUrl={rmSVG} />
                          </div>
                        </Grid>
                      </Grid>
                    </div>
                  </Grid>
                  <Grid item lg={4} md={4} sm={12} xs={12}>
                    <div className="cell-box cell-item2">
                      <div className="has-border cell-sub-item">
                        <div className="ctir-image">23%</div>
                        <div className="ctir-title">Current target inflation rate</div>
                      </div>
                    </div>
                  </Grid>
                  <Grid item lg={8} md={8} sm={12} xs={12}>
                    <div className="cell-box cell-item3">
                      <Grid container spacing={0}>
                        <Grid item lg={6} md={6} sm={12} xs={12}>
                          <div
                            className="cell-sub-item"
                            style={{ borderBottom: "1px solid rgba(255, 255, 255, 0.05)" }}
                          >
                            <DataCell
                              title="Household savings rate"
                              data="23%"
                              imgUrl={hsSVG}
                              imgStyle={{ width: "44px", height: "44px" }}
                            />
                          </div>
                        </Grid>
                        <Grid item lg={6} md={6} sm={12} xs={12}>
                          <div
                            className="cell-sub-item"
                            style={{ borderBottom: "1px solid rgba(255, 255, 255, 0.05)" }}
                          >
                            <DataCell
                              title="The fit of the DSGE"
                              data="23%"
                              imgUrl={tfotdSVG}
                              imgStyle={{ width: "44px", height: "44px" }}
                            />
                          </div>
                        </Grid>
                        <Grid item lg={6} md={6} sm={12} xs={12}>
                          <div className="cell-sub-item">
                            <DataCell
                              title="The rate of inflation"
                              data="23%"
                              imgUrl={troiSVG}
                              imgStyle={{ width: "44px", height: "44px" }}
                            />
                          </div>
                        </Grid>
                        <Grid item lg={6} md={6} sm={12} xs={12}>
                          <div className="cell-sub-item">
                            <DataCell
                              title="Debt ratio"
                              data="23%"
                              imgUrl={drSVG}
                              imgStyle={{ width: "44px", height: "44px" }}
                            />
                          </div>
                        </Grid>
                      </Grid>
                    </div>
                  </Grid>
                </Grid>
              </Grid>

              <Grid item lg={3} md={3} sm={12} xs={12}>
                <Grid container spacing={2}>
                  <Grid item lg={12} md={12} sm={12} xs={12}>
                    <div className="cell-box cell-item4">
                      <div className="cell-sub-item">
                        <div className="disvg">
                          <img src={diSVG} />
                        </div>
                        <div className="di-font">Diffusion index</div>
                        <h3 className="di-content">89</h3>
                        <DataCell title="Factors of attention" data="23" titleStyle={{ color: "#ABB6FF" }} />
                        <DataCell
                          title="Call fator"
                          data="43"
                          imgUrl={cfSVG}
                          titleStyle={{ color: "#ABB6FF" }}
                          imgStyle={{ height: "85px" }}
                        />
                      </div>
                    </div>
                  </Grid>
                  <Grid item lg={12} md={12} sm={12} xs={12}>
                    <div className="cell-box cell-item5">
                      <div className="cell-sub-item">
                        <DataCell title="Reserve fund" data="$123.22M" imgUrl={rzSVG} imgStyle={{ width: "120px" }} />
                      </div>
                    </div>
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