import { t, Trans } from "@lingui/macro";
import { Box, Divider, Link, makeStyles, Paper, Typography } from "@material-ui/core";
import { Icon, NavItem } from "@olympusdao/component-library";
import React from "react";
import { NavLink } from "react-router-dom";
import { sortByDiscount } from "src/helpers/bonds/sortByDiscount";
import { Environment } from "src/helpers/environment/Environment/Environment";
import { useTestableNetworks } from "src/hooks/useTestableNetworks";
import { useWeb3Context } from "src/hooks/web3Context";
import { BondDiscount } from "src/views/Bond/components/BondDiscount";
import { useLiveBonds } from "src/views/Bond/hooks/useLiveBonds";

import logoPNG from "../../assets/images/layout/logo.png";
import WalletAddressEns from "../TopBar/Wallet/WalletAddressEns";

const useStyles = makeStyles(theme => ({
  gray: {
    color: theme.colors.gray[10],
  },
}));

const NavContent: React.VFC = () => {
  const classes = useStyles();
  const { networkId } = useWeb3Context();
  const networks = useTestableNetworks();

  return (
    <Paper className="dapp-sidebar">
      <Box className="dapp-sidebar-inner" display="flex" justifyContent="space-between" flexDirection="column">
        <div className="dapp-menu-top">
          <Box className="branding-header">
            <Link href="https://olympusdao.finance" target="_blank">
              <img src={logoPNG} style={{ width: "180px", margin: "20px 0" }} />
            </Link>

            <WalletAddressEns />
          </Box>

          <div className="dapp-menu-links">
            <div className="dapp-nav" id="navbarNav">
              {networkId === networks.MAINNET ? (
                <>
                  <NavItem to="/dashboard" icon="dashboard" label={t`Dashboard`} />

                  <NavItem to="/dashboard-new" icon="dashboard" label={t`Dashboard`} />

                  <NavItem to="/bonds" icon="bond" label={t`Bond`}>
                    <Bonds />
                    <InverseBonds />
                  </NavItem>

                  <NavItem to="/stake" icon="stake" label={t`Stake`} />

                  <NavItem to="/zap" icon="zap" label={t`Zap`} />

                  {Environment.isGiveEnabled() && <NavItem to="/give" icon="give" label={t`Give`} />}

                  <NavItem to="/wrap" icon="wrap" label={t`Wrap`} />

                  <NavItem
                    icon="bridge"
                    label={t`Bridge`}
                    href="https://synapseprotocol.com/?inputCurrency=gOHM&outputCurrency=gOHM&outputChain=43114"
                  />

                  <Box className="menu-divider">
                    <Divider />
                  </Box>

                  <NavItem href="https://pro.olympusdao.finance/" icon="olympus" label={t`Olympus Pro`} />

                  <Box className="menu-divider">
                    <Divider />
                  </Box>
                </>
              ) : (
                <>
                  <NavItem to="/wrap" icon="wrap" label={t`Wrap`} />

                  <NavItem
                    icon="bridge"
                    label={t`Bridge`}
                    href="https://synapseprotocol.com/?inputCurrency=gOHM&outputCurrency=gOHM&outputChain=43114"
                  />
                </>
              )}

              <NavItem href="https://forum.olympusdao.finance/" icon="forum" label={t`Forum`} />

              <NavItem href="https://vote.olympusdao.finance/" icon="governance" label={t`Governance`} />

              <NavItem href="https://docs.olympusdao.finance/" icon="docs" label={t`Docs`} />

              <NavItem href="https://immunefi.com/bounty/olympus/" icon="bug-report" label={t`Bug Bounty`} />

              <NavItem href="https://grants.olympusdao.finance/" icon="grants" label={t`Grants`} />
            </div>
          </div>
        </div>

        <Box display="flex" justifyContent="space-between" paddingX="50px" paddingY="24px">
          <Link href="https://github.com/OlympusDAO" target="_blank">
            <Icon name="github" className={classes.gray} />
          </Link>

          <Link href="https://olympusdao.medium.com/" target="_blank">
            <Icon name="medium" className={classes.gray} />
          </Link>

          <Link href="https://twitter.com/OlympusDAO" target="_blank">
            <Icon name="twitter" className={classes.gray} />
          </Link>

          <Link href="https://discord.gg/6QjjtUcfM4" target="_blank">
            <Icon name="discord" className={classes.gray} />
          </Link>
        </Box>
      </Box>
    </Paper>
  );
};

const Bonds: React.VFC = () => {
  const bonds = useLiveBonds().data;

  if (!bonds || bonds.length === 0) return null;

  return (
    <Box ml="26px" mt="16px" mb="12px">
      {sortByDiscount(bonds)
        .filter(bond => !bond.isSoldOut)
        .map(bond => (
          <Box mt="8px">
            <Link key={bond.id} component={NavLink} to={`/bonds/${bond.id}`}>
              <Typography variant="body1">
                <Box display="flex" flexDirection="row" justifyContent="space-between">
                  {bond.quoteToken.name}
                  <BondDiscount discount={bond.discount} />
                </Box>
              </Typography>
            </Link>
          </Box>
        ))}
    </Box>
  );
};

const InverseBonds: React.VFC = () => {
  const bonds = useLiveBonds({ isInverseBond: true }).data;

  if (!bonds || bonds.length === 0) return null;

  return (
    <Box ml="26px" mt="16px" mb="12px">
      <Typography variant="body2" color="textSecondary">
        <Trans>Inverse Bonds</Trans>
      </Typography>

      <Box mt="12px">
        {sortByDiscount(bonds)
          .filter(bond => !bond.isSoldOut)
          .map(bond => (
            <Box mt="8px">
              <Link key={bond.id} component={NavLink} to={`/bonds/inverse/${bond.id}`}>
                <Typography variant="body1">
                  <Box display="flex" flexDirection="row" justifyContent="space-between">
                    {bond.quoteToken.name}
                    <BondDiscount discount={bond.discount} />
                  </Box>
                </Typography>
              </Link>
            </Box>
          ))}
      </Box>
    </Box>
  );
};

export default NavContent;
