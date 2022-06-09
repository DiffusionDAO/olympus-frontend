import { t } from "@lingui/macro";
import { Box, Typography } from "@material-ui/core";
import { InfoTooltip } from "@olympusdao/component-library";
import { Modal } from "@olympusdao/component-library";
import React from "react";
import { ResponsiveContainer } from "recharts";

function DiffusionExpandedChart({
  open,
  handleClose,
  renderChart,
  data,
  infoTooltipMessage,
  headerText,
  headerSubText,
  runwayExtraInfo,
  HeaderSuElement,
}: {
  open: boolean;
  handleClose: () => void;
  renderChart: React.ReactElement;
  data: any[];
  infoTooltipMessage: string;
  headerText: string;
  headerSubText: string;
  runwayExtraInfo?: string;
  HeaderSuElement?: JSX.IntrinsicElements;
}) {
  return (
    <Modal
      open={open}
      onClose={handleClose}
      closePosition={"right"}
      minHeight={"450px"}
      headerContent={
        <div className="chart-card-header">
          <Box display="flex">
            <Box display="flex" alignItems="center" style={{ width: "max-content", whiteSpace: "nowrap" }}>
              <Typography variant="h6" color="textSecondary" style={{ fontWeight: 400 }}>
                {headerText}
              </Typography>
            </Box>
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              style={{ width: "100%", marginLeft: "5px" }}
            >
              <Typography variant="h6" style={{ cursor: "pointer" }}>
                <InfoTooltip message={infoTooltipMessage} />
              </Typography>
            </Box>
          </Box>
          {HeaderSuElement ? (
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
      }
    >
      <div>
        <Box minWidth={300} width="100%">
          {data && data.length > 0 && (
            <ResponsiveContainer minHeight={260} minWidth={300}>
              {renderChart}
            </ResponsiveContainer>
          )}
        </Box>
        <Box display="flex" style={{ width: "100%", margin: "15px" }}>
          <Typography variant="h6">{infoTooltipMessage}</Typography>
        </Box>
      </div>
    </Modal>
  );
}

export default DiffusionExpandedChart;
