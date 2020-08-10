import React from "react";

import { BigBreadcrumbs, WidgetGrid, JarvisWidget } from "../../../common";

export default class Invoice extends React.Component {
  onClick = e => {
    e.preventDefault();
  };
  render() {
    return (
      <div id="content">
        <div className="row">
          <BigBreadcrumbs
            items={["Invoice"]}
            icon="home"
            className="col-xs-12 col-sm-7 col-md-7 col-lg-4"
          />
        </div>

        <WidgetGrid>
          <div className="row">
            {/* NEW WIDGET START */}
            <article className="col-xs-12 col-sm-12 col-md-12 col-lg-12 sortable-grid ui-sortable">
              {/* Widget ID (each widget will need unique ID)*/}
              <JarvisWidget
                id="wid-id-0"
                sortable={false}
                deletebutton={false}
                editbutton={false}
                colorbutton={false}
                color="darken"
              >
                <header>
                  <h2>
                    <strong>Item #4457</strong>
                  </h2>
                </header>
                {/* widget div*/}
                <div>
                  {/* widget content */}
                  <div className="widget-body no-padding">
                    <div className="jarviswidget-editbox">
                      <input className="form-control" type="text" />
                    </div>
                    <div className="widget-body-toolbar">
                      <div className="row">
                        <div className="col-sm-4">
                          <div className="input-group">
                            <input
                              className="form-control"
                              type="text"
                              placeholder="Type invoice number or date..."
                            />
                            <div className="input-group-btn">
                              <button className="btn btn-default" type="button">
                                <i className="fa fa-search" /> Search
                              </button>
                            </div>
                          </div>
                        </div>
                        <div className="col-sm-8 text-align-right">
                          <div className="btn-group">
                            <button className="btn btn-sm btn-primary">
                              <i className="fa fa-edit" /> Edit
                            </button>
                          </div>
                          <div className="btn-group">
                            <button className="btn btn-sm btn-success">
                              <i className="fa fa-plus" /> Create New
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="padding-10">
                      <br />
                      <div className="pull-left">
                        <img
                          src="assets/img/logo-blacknwhite.png"
                          width={150}
                          height={32}
                          alt="invoice icon"
                        />
                        <address>
                          <br />
                          <strong>SmartAdmin, Inc.</strong>
                          <br />
                          231 Ajax Rd,
                          <br />
                          Detroit MI - 48212, USA
                          <br />
                          <abbr title="Phone">P:</abbr> (123) 456-7890
                        </address>
                      </div>
                      <div className="pull-right">
                        <h1 className="font-400">invoice</h1>
                      </div>
                      <div className="clearfix" />
                      <br />
                      <br />
                      <div className="row">
                        <div className="col-sm-9">
                          <h4 className="semi-bold">Rogers, Inc.</h4>
                          <address>
                            <strong>Mr. Simon Hedger</strong>
                            <br />
                            342 Mirlington Road,
                            <br />
                            Calfornia, CA 431464
                            <br />
                            <abbr title="Phone">P:</abbr> (467) 143-4317
                          </address>
                        </div>
                        <div className="col-sm-3">
                          <div>
                            <div>
                              <strong>INVOICE NO :</strong>
                              <span className="pull-right">
                                #AA-454-4113-00
                              </span>
                            </div>
                          </div>
                          <div>
                            <div className="font-md">
                              <strong>INVOICE DATE :</strong>
                              <span className="pull-right">
                                <i className="fa fa-calendar" /> 15/02/13
                              </span>
                            </div>
                          </div>
                          <br />
                          <div className="well well-sm  bg-color-darken txt-color-white no-border">
                            <div className="fa-lg">
                              Total Due :
                              <span className="pull-right"> 4,972 USD** </span>
                            </div>
                          </div>
                          <br />
                          <br />
                        </div>
                      </div>
                      <table className="table table-hover">
                        <thead>
                          <tr>
                            <th className="text-center">QTY</th>
                            <th>ITEM</th>
                            <th>DESCRIPTION</th>
                            <th>PRICE</th>
                            <th>SUBTOTAL</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="text-center">
                              <strong>1</strong>
                            </td>
                            <td>
                              <a href="#/" onClick={this.onClick}>
                                Print and Web Logo Design
                              </a>
                            </td>
                            <td>
                              Perspiciatis unde omnis iste natus error sit
                              voluptatem accusantium doloremque laudantium totam
                              rem aperiam xplicabo.
                            </td>
                            <td>$1,300.00</td>
                            <td>$1,300.00</td>
                          </tr>
                          <tr>
                            <td className="text-center">
                              <strong>1</strong>
                            </td>
                            <td>
                              <a href="#/" onClick={this.onClick}>SEO Management</a>
                            </td>
                            <td>
                              Sit voluptatem accusantium doloremque laudantium
                              inventore veritatis et quasi architecto beatae
                              vitae dicta sunt explicabo.
                            </td>
                            <td>$1,400.00</td>
                            <td>$1,400.00</td>
                          </tr>
                          <tr>
                            <td className="text-center">
                              <strong>1</strong>
                            </td>
                            <td>
                              <a href="#/" onClick={this.onClick}>
                                Backend Support and Upgrade
                              </a>
                            </td>
                            <td>
                              Inventore veritatis et quasi architecto beatae
                              vitae dicta sunt explicabo.
                            </td>
                            <td>$1,700.00</td>
                            <td>$1,700.00</td>
                          </tr>
                          <tr>
                            <td colSpan={4}>Total</td>
                            <td>
                              <strong>$4,400.00</strong>
                            </td>
                          </tr>
                          <tr>
                            <td colSpan={4}>HST/GST</td>
                            <td>
                              <strong>13%</strong>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                      <div className="invoice-footer">
                        <div className="row">
                          <div className="col-sm-7">
                            <div className="payment-methods">
                              <h5>Payment Methods</h5>
                              <img
                                src="assets/img/invoice/paypal.png"
                                width={64}
                                height={64}
                                alt="paypal"
                              />
                              <img
                                src="assets/img/invoice/americanexpress.png"
                                width={64}
                                height={64}
                                alt="american express"
                              />
                              <img
                                src="assets/img/invoice/mastercard.png"
                                width={64}
                                height={64}
                                alt="mastercard"
                              />
                              <img
                                src="assets/img/invoice/visa.png"
                                width={64}
                                height={64}
                                alt="visa"
                              />
                            </div>
                          </div>
                          <div className="col-sm-5">
                            <div className="invoice-sum-total pull-right">
                              <h3>
                                <strong>
                                  Total:
                                  <span className="text-success">
                                    $4,972 USD
                                  </span>
                                </strong>
                              </h3>
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-sm-12">
                            <p className="note">
                              **To avoid any excess penalty charges, please make
                              payments within 30 days of the due date. There
                              will be a 2% interest charge per month on all late
                              invoices.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* end widget content */}
                </div>
                {/* end widget div */}
              </JarvisWidget>
              {/* end widget */}
            </article>
            {/* WIDGET END */}
          </div>
        </WidgetGrid>
      </div>
    );
  }
}
