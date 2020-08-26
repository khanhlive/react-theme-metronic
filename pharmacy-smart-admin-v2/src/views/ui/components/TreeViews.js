import React from "react";

import {
  Stats,
  BigBreadcrumbs,
  WidgetGrid,
  JarvisWidget
} from "../../../common";

import TreeView from "../../../common/ui/components/TreeView";

import { getJSON } from "../../../common/utils";
export default class TreeViews extends React.Component {
  state = {
    demo1: [],
    demo2: []
  };

  UNSAFE_componentWillMount() {
    getJSON("assets/api/ui-examples/tree-view.json").then(data => {
      this.setState(data);
    });
  }

  render() {
    return (
      <div id="content">
        <div className="row">
          <BigBreadcrumbs
            items={["UI Elements", "Tree View"]}
            icon="fa fa-fw fa-desktop"
            className="col-xs-12 col-sm-7 col-md-7 col-lg-4"
          />
          <Stats />
        </div>
        {/* widget grid */}
        <WidgetGrid>
          {/* row */}
          <div className="row">
            {/* NEW WIDGET START */}
            <article className="col-sm-12 col-md-12 col-lg-6">
              {/* Widget ID (each widget will need unique ID)*/}
              <JarvisWidget id="wid-id-0" editbutton={false} color="orange">
                <header>
                  <span className="widget-icon">
                    <i className="fa fa-lg fa-calendar" />
                  </span>
                  <h2>Organizing view </h2>
                </header>
                {/* widget div*/}
                <div>
                  {/* widget content */}
                  <div className="widget-body">
                    <div className="widget-body-toolbar bg-color-white">
                      <form className="form-inline">
                        <div className="row">
                          <div className="col-sm-12 col-md-10">
                            <div className="form-group">
                              <label className="sr-only">Task title</label>
                              <input
                                type="text"
                                className="form-control input-sm"
                                placeholder="My Task"
                              />
                            </div>
                            <div className="form-group">
                              <label className="sr-only">Pick Week</label>
                              <select className="form-control input-sm">
                                <option>Week 1</option>
                                <option>Week 2</option>
                              </select>
                            </div>
                            <div className="form-group">
                              <label className="sr-only">Days</label>
                              <select className="form-control input-sm">
                                <option>Monday</option>
                                <option>Tuesday</option>
                                <option>Wednesday</option>
                                <option>Thursday</option>
                                <option>Friday</option>
                                <option>Saturday</option>
                                <option>Sunday</option>
                              </select>
                            </div>
                          </div>
                          <div className="col-sm-12 col-md-2 text-align-right">
                            <button
                              type="submit"
                              className="btn btn-warning btn-xs"
                            >
                              <i className="fa fa-plus" /> Add
                            </button>
                          </div>
                        </div>
                      </form>
                    </div>
                    <div className="tree">
                      <TreeView items={this.state.demo1} role="tree" />
                    </div>
                  </div>
                  {/* end widget content */}
                </div>
                {/* end widget div */}
              </JarvisWidget>
              {/* end widget */}
            </article>
            {/* WIDGET END */}
            {/* NEW WIDGET START */}
            <article className="col-sm-12 col-md-12 col-lg-6">
              {/* Widget ID (each widget will need unique ID)*/}
              <JarvisWidget id="wid-id-1" editbutton={false} color="blue">
                <header>
                  <span className="widget-icon">
                    <i className="fa fa-sitemap" />
                  </span>
                  <h2>Simple View </h2>
                </header>
                {/* widget div*/}
                <div>
                  {/* widget content */}
                  <div className="widget-body">
                    <div className="tree smart-form">
                      <TreeView items={this.state.demo2} role="tree" />
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
          {/* end row */}
          {/* row */}
          <div className="row" />
          {/* end row */}
        </WidgetGrid>
        {/* end widget grid */}
      </div>
    );
  }
}
