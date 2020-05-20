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

const PersonCardInput = props => (
  <Input LabelComponent={SmallLabel} {...props} />
);

const PersonCard = ({ ...restProps }) => {
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
            border: "2px solid #CCC",
            gridColumn: 1,
            gridRow: "1 / 3"
          }}
        />
        <PersonCardInput label="Osoba / Rota / Oddíl" />
        <PersonCardInput label="Kvalita" />
        <PersonCardInput
          label="Povolání"
          value=""
          css={{
            gridColumn: "1 / 3"
          }}
        />
        <PersonCardInput label="Lehké následky" />
        <PersonCardInput label="Jméno / Velitel" />
        <PersonCardInput label="Střední následky" css={{ gridColumn: 1 }} />
        <div>
          <SmallLabel>Zranění</SmallLabel>
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
        <PersonCardInput
          label="Těžké následky"
          value=""
          css={{ gridColumn: 1 }}
        />
        <div>
          <SmallLabel>Zkušenosti</SmallLabel>
          <div
            css={{
              display: "flex",
              flexDirection: "row"
            }}
          >
            {range(0, 10).map(index => {
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
        <PersonCardInput
          label="Vybavení"
          value=""
          css={{
            gridColumn: "1 / 3"
          }}
        />
      </div>
    </Paper>
  );
};

export default PersonCard;
