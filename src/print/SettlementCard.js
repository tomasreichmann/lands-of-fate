/** @jsx jsx */
import { jsx } from "@emotion/core";
import range from "lodash/range";
import theme from "../theme";
import { pokerCard } from "./paperSizes";
import Paper from "./Paper";
import Input from "../controls/Input";
import Label from "../controls/Label";
import CheckBox from "../controls/CheckBox";

const SmallLabel = props => (
  <Label {...props} style={{ fontSize: "8pt", lineHeight: "8pt" }} />
);

const SettlementCardInput = props => (
  <Input LabelComponent={SmallLabel} {...props} />
);

const SettlementCard = ({ ...restProps }) => {
  return (
    <Paper
      size={pokerCard}
      printerMargin={0}
      padding={theme.spacing / 4}
      {...restProps}
    >
      <div
        css={{
          display: "grid",
          gridTemplateColumns: "1fr 2fr",
          gridGap: theme.spacing / 4,
          width: "100%",
          fontSize: "10pt",
          lineHeight: "18pt"
        }}
      >
        <div
          css={{
            border: '2px solid #CCC',
            gridColumn: 1,
            gridRow: "1 / 3"
          }}
        />
        <SettlementCardInput label="Zaměření" />
        <SettlementCardInput label="&nbsp;" />
        <SettlementCardInput label="Velikost"/>
        <SettlementCardInput label="Název" />
        <SettlementCardInput label="Majitel" css={{ gridColumn: '1 / 3' }} />
        <SettlementCardInput label="Produkce"/>
        <SettlementCardInput label="Posádka"/>
        <SettlementCardInput label="&nbsp;" />
        <SettlementCardInput label="&nbsp;" />
        <SettlementCardInput label="&nbsp;" />
        <div>
          <SmallLabel>Obyvatelé</SmallLabel>
          <div
            css={{
              display: "flex",
              flexDirection: "row"
            }}
          >
            {range(0, 6).map(index => {
              return (
                <CheckBox
                  key={index}
                  css={{
                    borderLeft: index > 0 ? 0 : undefined,
                    flex: "1 1 auto",
                    minWidth: "1em",
                    height: "20pt",
                    width: "auto"
                  }}
                />
              );
            })}
          </div>
        </div>
      </div>
    </Paper>
  );
};

export default SettlementCard;
