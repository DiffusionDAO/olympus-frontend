// TODO: add paramaterization
import { t } from "@lingui/macro";

export const treasuryDataQuery = `
query {
  protocolMetrics(first: 100, orderBy: timestamp, orderDirection: desc) {
    id
    timestamp
    ohmCirculatingSupply
    sOhmCirculatingSupply
    totalSupply
    ohmPrice
    marketCap
    totalValueLocked
    treasuryRiskFreeValue
    treasuryMarketValue
    nextEpochRebase
    nextDistributedOhm
    treasuryDaiRiskFreeValue
    treasuryFraxMarketValue
    treasuryDaiMarketValue
    treasuryFraxRiskFreeValue
    treasuryXsushiMarketValue
    treasuryWETHMarketValue
    treasuryLusdRiskFreeValue
    treasuryLusdMarketValue
    treasuryOtherMarketValue
    treasuryWBTCMarketValue
    treasuryUstMarketValue
    currentAPY
    runway10k
    runway20k
    runway50k
    runway7dot5k
    runway5k
    runway2dot5k
    runwayCurrent
    treasuryOhmDaiPOL
    treasuryOhmFraxPOL
  }
}
`;

export const rebasesDataQuery = `
query {
  rebases(where: {contract: "0xfd31c7d00ca47653c6ce64af53c1571f9c36566a"}, orderBy: timestamp, first: 1000, orderDirection: desc) {
    percentage
    timestamp
  }
}
`;

// tootip样式配置
export const bulletpoints = {
  tvl: [
    {
      right: 20,
      top: -12,
      background: "#0031FF",
    },
  ],
  two: [
    {
      right: 20,
      top: -12,
      background: "#3D72FD",
    },
  ],
  three: [
    {
      right: 15,
      top: -12,
      background: "#3D72FD",
    },
    {
      right: 25,
      top: -12,
      background: "#F200FF",
    },
  ],
  four: [
    {
      right: 20,
      top: -12,
      background: "#D257FF",
    },
  ],
  five: [
    {
      right: 20,
      top: -12,
      background: "#26E6C5",
    },
  ],
  six: [
    {
      right: 20,
      top: -12,
      background: "#EC6EFF",
    },
  ],
  seven: [
    {
      right: 20,
      top: -12,
      background: "#DF741A",
    },
  ],
  eleven: [
    {
      right: 20,
      top: -12,
      background: "#FF3FF7",
    },
  ],
  twelve: [
    {
      right: 20,
      top: -12,
      background: "#DF741A",
    },
  ],
  thirteen: [
    {
      right: 20,
      top: -12,
      background: "#1C6CFF",
    },
  ],
  coin: [
    {
      right: 15,
      top: -12,
      background: "#F5AC37",
    },
    {
      right: 25,
      top: -12,
      background: "#768299",
    },
  ],
  rfv: [
    {
      right: 15,
      top: -12,
      background: "#F5AC37",
    },
    {
      right: 25,
      top: -12,
      background: "#768299",
    },
    {
      right: 29,
      top: -12,
      background: "#c9184a",
    },
    {
      right: 29,
      top: -12,
      background: "#4E1F71",
    },
  ],
  holder: [
    {
      right: 40,
      top: -12,
      background: "#A3A3A3",
    },
  ],
  apy: [
    {
      right: 20,
      top: -12,
      background: "#49A1F2",
    },
  ],
  runway: [
    {
      right: 45,
      top: -12,
      background: "#000000",
    },
    {
      right: 48,
      top: -12,
      background: "#2EC608",
    },
    {
      right: 48,
      top: -12,
      background: "#49A1F2",
    },
    {
      right: 48,
      top: -12,
      background: "#c9184a",
    },
  ],
  staked: [
    {
      right: 45,
      top: -11,
      background: "linear-gradient(180deg, #55EBC7 -10%, rgba(71, 172, 235, 0) 100%)",
    },
    {
      right: 68,
      top: -12,
      background: "rgba(151, 196, 224, 0.2)",
      border: "1px solid rgba(54, 56, 64, 0.5)",
    },
  ],
  pol: [
    {
      right: 15,
      top: -12,
      background: "linear-gradient(180deg, rgba(56, 223, 63, 1) -10%, rgba(182, 233, 152, 1) 100%)",
    },
    {
      right: 25,
      top: -12,
      background: "rgba(219, 242, 170, 1)",
      border: "1px solid rgba(118, 130, 153, 1)",
    },
  ],
};

//tooltip文字
export const tooltipItems = {
  tvl: [t`Tvl`],
  two: [t`Tvl`],
  three: ["DAI", "FRAX"],
  four: [t`Tvl`],
  five: [t`Tvl`],
  six: [t`Tvl`],
  seven: [t`Tvl`],
  eleven: [t`Tvl`],
  twelve: [t`Tvl`],
  thirteen: [t`Tvl`],
  coin: ["DAI", "FRAX"],
  rfv: ["DAI", "FRAX", "LUSD", "UST"],
  holder: ["OHMies"],
  apy: ["APY"],
  runway: [t`Current`, "7.5K APY", "5K APY", "2.5K APY"],
  pol: [t`SLP Treasury`, t`Market SLP`],
};

// 数据字段
export const dataKey = () => {
  return {
    tvl: ["tvl"],
    two: ["treasuryDaiMarketValue"],
    three: ["treasuryDaiMarketValue", "treasuryFraxMarketValue"],
    four: ["treasuryDaiMarketValue"],
    five: ["treasuryDaiMarketValue"],
    six: ["treasuryDaiMarketValue"],
    seven: ["treasuryDaiMarketValue"],
    eleven: ["treasuryDaiMarketValue"],
    twelve: ["treasuryDaiMarketValue"],
    thirteen: ["treasuryDaiMarketValue"],
    coin: ["treasuryDaiMarketValue", "treasuryFraxMarketValue"],
    runway: ["runwayCurrent"],
  };
};

export const headerText = () => {
  return {
    tvl: t`TVL`,
    two: t`TVL`,
    three: t`TVL`,
    four: t`TVL`,
    five: t`TVL`,
    six: t`TVL`,
    seven: t`TVL`,
    eleven: t`TVL`,
    twelve: t`TVL`,
    thirteen: t`TVL`,
    coin: t`Market`,
    runway: t`Runway Available`,
  };
};

export const tooltipInfoMessages = () => {
  return {
    tvl: t`Total Value Deposited, is the dollar amount of all OHM staked in the protocol. This metric is often used as growth or health indicator in DeFi projects.`,
    two: t`Total Value Deposited, is the dollar amount of all OHM staked in the protocol. This metric is often used as growth or health indicator in DeFi projects.`,
    three: t`Total Value Deposited, is the dollar amount of all OHM staked in the protocol. This metric is often used as growth or health indicator in DeFi projects.`,
    four: t`Total Value Deposited, is the dollar amount of all OHM staked in the protocol. This metric is often used as growth or health indicator in DeFi projects.`,
    five: t`Total Value Deposited, is the dollar amount of all OHM staked in the protocol. This metric is often used as growth or health indicator in DeFi projects.`,
    six: t`Total Value Deposited, is the dollar amount of all OHM staked in the protocol. This metric is often used as growth or health indicator in DeFi projects.`,
    seven: t`Total Value Deposited, is the dollar amount of all OHM staked in the protocol. This metric is often used as growth or health indicator in DeFi projects.`,
    eleven: t`Total Value Deposited, is the dollar amount of all OHM staked in the protocol. This metric is often used as growth or health indicator in DeFi projects.`,
    twelve: t`Total Value Deposited, is the dollar amount of all OHM staked in the protocol. This metric is often used as growth or health indicator in DeFi projects.`,
    thirteen: t`Total Value Deposited, is the dollar amount of all OHM staked in the protocol. This metric is often used as growth or health indicator in DeFi projects.`,
    mvt: t`Market Value of Treasury Assets, is the sum of the value (in dollars) of all assets held by the treasury (Excluding pTokens and Vested tokens).`,
    rfv: t`Risk Free Value, is the amount of funds the treasury guarantees to use for backing OHM.`,
    pol: t`Protocol Owned Liquidity, is the amount of LP the treasury owns and controls. The more POL the better for the protocol and its users.`,
    holder: t`Holders, represents the total number of Ohmies (sOHM holders)`,
    staked: t`OHM Staked is the ratio of sOHM to circulating supply of OHM (staked vs total)`,
    apy: t`Annual Percentage Yield, is the normalized representation of an interest rate, based on a compounding period over one year. Note that APYs provided are rather ballpark level indicators and not so much precise future results.`,
    runway: t`Runway, is the number of days sOHM emissions can be sustained at a given rate. Lower APY = longer runway`,
  };
};

export const itemType = {
  dollar: "$",
  percentage: "%",
};
