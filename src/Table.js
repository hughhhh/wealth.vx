import React, { useState } from "react";
import { Cell, Column, Table } from "@blueprintjs/table";
import { NumericInput } from "@blueprintjs/core";

const totalInvestment = 10000;
const stocks = [
  { ticker: "AMZN", price: 597.94, numStock: 5, percentAllocated: 0.2119 },
  { ticker: "TSLA", price: 597.94, numStock: 5, percentAllocated: 0.1771 },
  { ticker: "GOOGL", price: 597.94, numStock: 5, percentAllocated: 0.1555 },
  { ticker: "ABNB", price: 597.94, numStock: 5, percentAllocated: 0.0556 },
  { ticker: "AAPL", price: 597.94, numStock: 5, percentAllocated: 0.0509 },
  { ticker: "VOO", price: 597.94, numStock: 5, percentAllocated: 0.0503 },
  { ticker: "VGT", price: 597.94, numStock: 5, percentAllocated: 0.049 },
  { ticker: "VTI", price: 597.94, numStock: 5, percentAllocated: 0.0275 },
  { ticker: "DASH", price: 597.94, numStock: 5, percentAllocated: 0.0245 },
  { ticker: "OKTA", price: 597.94, numStock: 5, percentAllocated: 0.0209 },
  { ticker: "VIG", price: 597.94, numStock: 5, percentAllocated: 0.0203 },
  { ticker: "PLTR", price: 597.94, numStock: 5, percentAllocated: 0.0195 },
  { ticker: "RCL", price: 597.94, numStock: 5, percentAllocated: 0.0187 },
  { ticker: "PYPL", price: 597.94, numStock: 5, percentAllocated: 0.0163 },
  { ticker: "UBER", price: 597.94, numStock: 5, percentAllocated: 0.0161 },
  { ticker: "MSFT", price: 597.94, numStock: 5, percentAllocated: 0.0146 },
  { ticker: "NFLX", price: 597.94, numStock: 5, percentAllocated: 0.013 },
  { ticker: "JPM", price: 597.94, numStock: 5, percentAllocated: 0.0107 },
  { ticker: "TWLO", price: 597.94, numStock: 5, percentAllocated: 0.0103 },
  { ticker: "UAL", price: 597.94, numStock: 5, percentAllocated: 0.0048 },
  { ticker: "DAL", price: 597.94, numStock: 5, percentAllocated: 0.0047 },
  { ticker: "DDOG", price: 597.94, numStock: 5, percentAllocated: 0.0046 },
  { ticker: "LYFT", price: 597.94, numStock: 5, percentAllocated: 0.0045 },
  { ticker: "JBLU", price: 597.94, numStock: 5, percentAllocated: 0.004 },
  { ticker: "JMIA", price: 597.94, numStock: 5, percentAllocated: 0.0028 },
  { ticker: "OPEN", price: 597.94, numStock: 5, percentAllocated: 0.0025 },
  { ticker: "BND", price: 597.94, numStock: 5, percentAllocated: 0.0021 },
  { ticker: "SQ", price: 597.94, numStock: 5, percentAllocated: 0.0013 },
  { ticker: "NIO", price: 597.94, numStock: 5, percentAllocated: 0.0012 },
  { ticker: "WORK", price: 597.94, numStock: 5, percentAllocated: 0.0011 },
  { ticker: "LUV", price: 597.94, numStock: 5, percentAllocated: 0.001 },
  { ticker: "SFTBY", price: 597.94, numStock: 5, percentAllocated: 0.0009 }
];

export default () => {
  const [numRows, setNumRows] = useState(50);
  const [totalInvestment, setTotalInvestment] = useState(0);

  const infiniteLoad = ({ rowIndexEnd }) =>
    rowIndexEnd + 1 >= numRows && setNumRows(numRows + 50);

  return (
    <div style={{ height: "100%", width: "100%" }}>
      <NumericInput
        placeholder="Enter a total invesment in $.."
        onValueChange={setTotalInvestment}
        style={{ width: "100%" }}
      />
      <Table numRows={stocks.length} onVisibleCellsChange={infiniteLoad}>
        <Column
          name="Ticker"
          cellRenderer={(i) => <Cell>{stocks[i].ticker}</Cell>}
        />
        <Column
          name="Price"
          cellRenderer={(i) => <Cell>{stocks[i].price}</Cell>}
        />
        <Column
          name="# of Stocks"
          cellRenderer={(i) => (
            <Cell>{totalInvestment * stocks[i].percentAllocated}</Cell>
          )}
        />
      </Table>
    </div>
  );
};
