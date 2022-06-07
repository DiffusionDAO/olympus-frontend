import "./Dashboard.scss";

import { t } from "@lingui/macro";
import { Container, Grid, useMediaQuery } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Paper } from "@olympusdao/component-library";
import { memo } from "react";

import cellBg1SVG from "../../assets/images/dashboard/cell-bg1.svg";
import cellBg1MobileSVG from "../../assets/images/dashboard/cell-bg1-mobile.svg";
import cellBgPNG from "../../assets/images/dashboard/cell-bg4.png";
import cfPNG from "../../assets/images/dashboard/cf.png";
import diPNG from "../../assets/images/dashboard/di.png";
import drSVG from "../../assets/images/dashboard/dr.svg";
import hsSVG from "../../assets/images/dashboard/hs.svg";
import rfSVG from "../../assets/images/dashboard/rf.svg";
import rmSVG from "../../assets/images/dashboard/rm.svg";
import rzSVG from "../../assets/images/dashboard/rz.svg";
import tfotdSVG from "../../assets/images/dashboard/tfotd.svg";
import troiSVG from "../../assets/images/dashboard/troi.svg";
import tvlSVG from "../../assets/images/dashboard/tvl.svg";
import { DataCell } from "./components/DataCell/DataCell";
import {
  EightGraph,
  ElevenGraph,
  FiveGraph,
  FourGraph,
  NineGraph,
  OneGraph,
  SevenGraph,
  SixGraph,
  TenGraph,
  ThirteenGraph,
  ThreeGraph,
  TwelveGraph,
  TwoGraph,
} from "./components/Graph/Graph";
const useStyles = makeStyles(theme => ({
  cellItemBg: {
    backgroundImage: `url(${cellBg1MobileSVG})`,
    [theme.breakpoints.up(981)]: {
      backgroundImage: `url(${cellBg1SVG})`,
    },
  },
  hasRLBorder: {
    [theme.breakpoints.up(981)]: {
      borderRight: "1px solid rgba(255, 255, 255, 0.05)",
      borderLeft: "1px solid rgba(255, 255, 255, 0.05)",
    },
  },
}));

const Dashboard = () => {
  const isSmallScreen = useMediaQuery("(max-width: 650px)");
  const isVerySmallScreen = useMediaQuery("(max-width: 379px)");
  const classes = useStyles();
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
                    <div className={`${classes.cellItemBg} cell-box cell-item1`}>
                      <Grid container spacing={0}>
                        <Grid item lg={4} md={4} sm={12} xs={12}>
                          <div className="cell-sub-item">
                            <DataCell title="TVL" data="$123.22M" style={{ fontSize: "32px" }} />
                            <DataCell title="" data="" imgUrl={tvlSVG} />
                          </div>
                        </Grid>
                        <Grid item lg={4} md={4} sm={12} xs={12}>
                          <div className={`${classes.hasRLBorder} cell-sub-item`}>
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
                    <div className="cell-box cell-item4" style={{ position: "relative" }}>
                      <div className="cell-sub-item">
                        <img
                          src={cellBgPNG}
                          style={{ width: "100%", height: "100%", position: "absolute", left: 0, top: 0 }}
                        />
                        <div className="disvg">
                          <img src={diPNG} style={{ width: "56px", height: "52px" }} />
                        </div>
                        <div className="di-font">Diffusion index</div>
                        <h3 className="di-content">89</h3>
                        <DataCell title="Factors of attention" data="23" titleStyle={{ color: "#ABB6FF" }} />
                        <DataCell
                          title="Call fator"
                          data="43"
                          imgUrl={cfPNG}
                          titleStyle={{ color: "#ABB6FF" }}
                          imgStyle={{ height: "85px", width: "54px" }}
                        />
                      </div>
                    </div>
                  </Grid>
                  <Grid item lg={12} md={12} sm={12} xs={12}>
                    <div className="cell-box cell-item5">
                      <div className="cell-sub-item">
                        <DataCell title="Reserve fund" data="$123.22M" imgUrl={rzSVG} />
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
                  <OneGraph />
                </Paper>
              </Grid>
              <Grid item lg={5} md={5} sm={12} xs={12}>
                <Paper className="ohm-card ohm-chart-card">
                  <TwoGraph />
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
                      <ThreeGraph />
                    </Paper>
                  </Grid>
                  <Grid item lg={12} md={12} sm={12} xs={12}>
                    <Paper className="ohm-card ohm-chart-card">
                      <FourGraph />
                    </Paper>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item lg={5} md={5} sm={12} xs={12}>
                <Grid container spacing={2}>
                  <Grid item lg={12} md={12} sm={12} xs={12}>
                    <Paper className="ohm-card ohm-chart-card" style={{ height: "238px" }}>
                      <FiveGraph />
                    </Paper>
                  </Grid>
                  <Grid item lg={12} md={12} sm={12} xs={12}>
                    <Paper className="ohm-card ohm-chart-card" style={{ height: "238px" }}>
                      <SixGraph />
                    </Paper>
                  </Grid>
                  <Grid item lg={12} md={12} sm={12} xs={12}>
                    <Paper className="ohm-card ohm-chart-card" style={{ height: "238px" }}>
                      <SevenGraph />
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
                  <EightGraph />
                </Paper>
              </Grid>
              <Grid item lg={5} md={5} sm={12} xs={12}>
                <Paper className="ohm-card ohm-chart-card">
                  <NineGraph />
                </Paper>
              </Grid>
            </Grid>
          </Grid>

          <Grid item lg={12} md={12} sm={12} xs={12}>
            <Paper className="ohm-card ohm-chart-card">
              <TenGraph />
            </Paper>
          </Grid>

          <Grid item lg={12} md={12} sm={12} xs={12}>
            <Grid container spacing={2}>
              <Grid item lg={4} md={4} sm={12} xs={12}>
                <Paper className="ohm-card ohm-chart-card">
                  <ElevenGraph />
                </Paper>
              </Grid>
              <Grid item lg={4} md={4} sm={12} xs={12}>
                <Paper className="ohm-card ohm-chart-card">
                  <TwelveGraph />
                </Paper>
              </Grid>
              <Grid item lg={4} md={4} sm={12} xs={12}>
                <Paper className="ohm-card ohm-chart-card">
                  <ThirteenGraph />
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
