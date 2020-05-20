/** @jsx jsx */
import { jsx } from "@emotion/core";
import Page from "../src/page";
import theme, { stacking } from "../src/theme";
import Input from "../src/controls/Input";
import Test from "../src/controls/test";
import Paper from "../src/print/Paper";
import PersonCard from "../src/print/PersonCard";
import { pokerCard } from "../src/print/paperSizes";
import SettlementCard from "../src/print/SettlementCard";

const Index = () => {
  return (
    <Page css={{
      '@media screen': {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap'
      }
    }}>
      <Paper
        printerMargin="0.9cm"
        css={{
          ...stacking
        }}
      >
        <PersonCard rule={true} />
        <PersonCard rule={true} />
        <PersonCard rule={true} />
        <PersonCard rule={true} />
        <PersonCard rule={true} />
        <PersonCard rule={true} />
        <PersonCard rule={true} />
        <PersonCard rule={true} />
        <PersonCard rule={true} />
      </Paper>
      <Paper
        printerMargin="0.9cm"
        css={{
          ...stacking
        }}
      >
        <SettlementCard rule={true} />
        <SettlementCard rule={true} />
        <SettlementCard rule={true} />
        <SettlementCard rule={true} />
        <SettlementCard rule={true} />
        <SettlementCard rule={true} />
        <SettlementCard rule={true} />
        <SettlementCard rule={true} />
        <SettlementCard rule={true} />
      </Paper>
    </Page>
  );
};

export default Index;
