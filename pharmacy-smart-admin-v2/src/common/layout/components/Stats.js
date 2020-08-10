import React from "react";

import { Sparkline } from "../../graphs/inline";

export default class Stats extends React.Component {
  getStats() {
    return {
      income: {
        total: "$47,171",
        values: [
          1300,
          1877,
          2500,
          2577,
          2000,
          2100,
          3000,
          2700,
          3631,
          2471,
          2700,
          3631,
          2471
        ]
      },
      traffic: {
        total: "45%",
        values: [110, 150, 300, 130, 400, 240, 220, 310, 220, 300, 270, 210]
      },
      orders: {
        total: "2447",
        values: [110, 150, 300, 130, 400, 240, 220, 310, 220, 300, 270, 210]
      }
    };
  }

  render() {
    const className = this.props.className;
    const stats = this.getStats();
    return (
      <div className="col-xs-12 col-sm-5 col-md-5 col-lg-8">
        <ul id="sparks" className={className}>
          <li className="sparks-info">
            <h5 className="m-0">
              My Income
              <span className="txt-color-blue"> {stats.income.total}</span>
            </h5>
            <Sparkline
              values={stats.income.values}
              className="txt-color-blue hidden-mobile hidden-md hidden-sm"
            />
          </li>
          <li className="sparks-info">
            <h5 className="m-0">
              Site Traffic
              <span className="txt-color-purple">
                <i className="fa fa-arrow-circle-up" /> {stats.traffic.total}
              </span>
            </h5>
            <Sparkline
              values={stats.traffic.values}
              className="txt-color-purple hidden-mobile hidden-md hidden-sm"
            />
          </li>
          <li className="sparks-info">
            <h5 className="m-0">
              Site Orders
              <span className="txt-color-greenDark">
                <i className="fa fa-shopping-cart" /> {stats.orders.total}
              </span>
            </h5>
            <Sparkline
              values={stats.orders.values}
              className="txt-color-greenDark hidden-mobile hidden-md hidden-sm"
            />
          </li>
        </ul>
      </div>
    );
  }
}
