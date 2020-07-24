import React, { Component } from "react";
import PropTypes from "prop-types";
//import { Test } from './PageContainerComponent.styles';

class PageContainerComponent extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount = () => {
    console.log("PageContainerComponent will mount");
  };

  componentDidMount = () => {
    console.log("PageContainerComponent mounted");
  };

  componentWillReceiveProps = (nextProps) => {
    console.log("PageContainerComponent will receive props", nextProps);
  };

  componentWillUpdate = (nextProps, nextState) => {
    console.log("PageContainerComponent will update", nextProps, nextState);
  };

  componentDidUpdate = () => {
    console.log("PageContainerComponent did update");
  };

  componentWillUnmount = () => {
    console.log("PageContainerComponent will unmount");
  };

  render() {
    return (
      <div className="page-container">
        {/* BEGIN SIDEBAR */}
        <div className="page-sidebar-wrapper">
          {/* DOC: Set data-auto-scroll="false" to disable the sidebar from auto scrolling/focusing */}
          {/* DOC: Change data-auto-speed="200" to adjust the sub menu slide up/down speed */}
          <div className="page-sidebar navbar-collapse collapse">
            {/* BEGIN SIDEBAR MENU */}
            {/* DOC: Apply "page-sidebar-menu-light" class right after "page-sidebar-menu" to enable light sidebar menu style(without borders) */}
            {/* DOC: Apply "page-sidebar-menu-hover-submenu" class right after "page-sidebar-menu" to enable hoverable(hover vs accordion) sub menu mode */}
            {/* DOC: Apply "page-sidebar-menu-closed" class right after "page-sidebar-menu" to collapse("page-sidebar-closed" class must be applied to the body element) the sidebar sub menu mode */}
            {/* DOC: Set data-auto-scroll="false" to disable the sidebar from auto scrolling/focusing */}
            {/* DOC: Set data-keep-expand="true" to keep the submenues expanded */}
            {/* DOC: Set data-auto-speed="200" to adjust the sub menu slide up/down speed */}
            <ul
              className="page-sidebar-menu"
              data-keep-expanded="false"
              data-auto-scroll="true"
              data-slide-speed={200}
            >
              {/* DOC: To remove the sidebar toggler from the sidebar you just need to completely remove the below "sidebar-toggler-wrapper" LI element */}
              <li className="sidebar-toggler-wrapper">
                {/* BEGIN SIDEBAR TOGGLER BUTTON */}
                <div className="sidebar-toggler"></div>
                {/* END SIDEBAR TOGGLER BUTTON */}
              </li>
              {/* DOC: To remove the search box from the sidebar you just need to completely remove the below "sidebar-search-wrapper" LI element */}
              <li className="sidebar-search-wrapper">
                {/* BEGIN RESPONSIVE QUICK SEARCH FORM */}
                {/* DOC: Apply "sidebar-search-bordered" class the below search form to have bordered search box */}
                {/* DOC: Apply "sidebar-search-bordered sidebar-search-solid" class the below search form to have bordered & solid search box */}
                <form
                  className="sidebar-search "
                  action="extra_search.html"
                  method="POST"
                >
                  <a href="javascript:;" className="remove">
                    <i className="icon-close" />
                  </a>
                  <div className="input-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Search..."
                    />
                    <span className="input-group-btn">
                      <a href="javascript:;" className="btn submit">
                        <i className="icon-magnifier" />
                      </a>
                    </span>
                  </div>
                </form>
                {/* END RESPONSIVE QUICK SEARCH FORM */}
              </li>
              <li className="start ">
                <a href="javascript:;">
                  <i className="icon-home" />
                  <span className="title">Dashboard</span>
                  <span className="arrow " />
                </a>
                <ul className="sub-menu">
                  <li>
                    <a href="index.html">
                      <i className="icon-bar-chart" />
                      Default Dashboard
                    </a>
                  </li>
                  <li>
                    <a href="index_2.html">
                      <i className="icon-bulb" />
                      New Dashboard #1
                    </a>
                  </li>
                  <li>
                    <a href="index_3.html">
                      <i className="icon-graph" />
                      New Dashboard #2
                    </a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="javascript:;">
                  <i className="icon-basket" />
                  <span className="title">eCommerce</span>
                  <span className="arrow " />
                </a>
                <ul className="sub-menu">
                  <li>
                    <a href="ecommerce_index.html">
                      <i className="icon-home" />
                      Dashboard
                    </a>
                  </li>
                  <li>
                    <a href="ecommerce_orders.html">
                      <i className="icon-basket" />
                      Orders
                    </a>
                  </li>
                  <li>
                    <a href="ecommerce_orders_view.html">
                      <i className="icon-tag" />
                      Order View
                    </a>
                  </li>
                  <li>
                    <a href="ecommerce_products.html">
                      <i className="icon-handbag" />
                      Products
                    </a>
                  </li>
                  <li>
                    <a href="ecommerce_products_edit.html">
                      <i className="icon-pencil" />
                      Product Edit
                    </a>
                  </li>
                </ul>
              </li>
              <li className="active open">
                <a href="javascript:;">
                  <i className="icon-rocket" />
                  <span className="title">Page Layouts</span>
                  <span className="selected" />
                  <span className="arrow open" />
                </a>
                <ul className="sub-menu">
                  <li>
                    <a href="layout_horizontal_sidebar_menu.html">
                      Horizontal &amp; Sidebar Menu
                    </a>
                  </li>
                  <li>
                    <a href="index_horizontal_menu.html">
                      Dashboard &amp; Mega Menu
                    </a>
                  </li>
                  <li>
                    <a href="layout_horizontal_menu1.html">
                      Horizontal Mega Menu 1
                    </a>
                  </li>
                  <li>
                    <a href="layout_horizontal_menu2.html">
                      Horizontal Mega Menu 2
                    </a>
                  </li>
                  <li>
                    <a href="layout_fontawesome_icons.html">
                      <span className="badge badge-roundless badge-danger">
                        new
                      </span>
                      Layout with Fontawesome Icons
                    </a>
                  </li>
                  <li>
                    <a href="layout_glyphicons.html">Layout with Glyphicon</a>
                  </li>
                  <li>
                    <a href="layout_full_height_portlet.html">
                      <span className="badge badge-roundless badge-success">
                        new
                      </span>
                      Full Height Portlet
                    </a>
                  </li>
                  <li>
                    <a href="layout_full_height_content.html">
                      <span className="badge badge-roundless badge-warning">
                        new
                      </span>
                      Full Height Content
                    </a>
                  </li>
                  <li>
                    <a href="layout_search_on_header1.html">
                      Search Box On Header 1
                    </a>
                  </li>
                  <li>
                    <a href="layout_search_on_header2.html">
                      Search Box On Header 2
                    </a>
                  </li>
                  <li>
                    <a href="layout_sidebar_search_option1.html">
                      Sidebar Search Option 1
                    </a>
                  </li>
                  <li>
                    <a href="layout_sidebar_search_option2.html">
                      Sidebar Search Option 2
                    </a>
                  </li>
                  <li>
                    <a href="layout_sidebar_reversed.html">
                      <span className="badge badge-roundless badge-warning">
                        new
                      </span>
                      Right Sidebar Page
                    </a>
                  </li>
                  <li>
                    <a href="layout_sidebar_fixed.html">Sidebar Fixed Page</a>
                  </li>
                  <li>
                    <a href="layout_sidebar_closed.html">Sidebar Closed Page</a>
                  </li>
                  <li>
                    <a href="layout_ajax.html">Content Loading via Ajax</a>
                  </li>
                  <li>
                    <a href="layout_disabled_menu.html">Disabled Menu Links</a>
                  </li>
                  <li className="active">
                    <a href="layout_blank_page.html">Blank Page</a>
                  </li>
                  <li>
                    <a href="layout_boxed_page.html">Boxed Page</a>
                  </li>
                  <li>
                    <a href="layout_language_bar.html">Language Switch Bar</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="javascript:;">
                  <i className="icon-diamond" />
                  <span className="title">UI Features</span>
                  <span className="arrow " />
                </a>
                <ul className="sub-menu">
                  <li>
                    <a href="ui_general.html">General Components</a>
                  </li>
                  <li>
                    <a href="ui_buttons.html">Buttons</a>
                  </li>
                  <li>
                    <a href="ui_confirmations.html">Popover Confirmations</a>
                  </li>
                  <li>
                    <a href="ui_icons.html">
                      <span className="badge badge-roundless badge-danger">
                        new
                      </span>
                      Font Icons
                    </a>
                  </li>
                  <li>
                    <a href="ui_colors.html">Flat UI Colors</a>
                  </li>
                  <li>
                    <a href="ui_typography.html">Typography</a>
                  </li>
                  <li>
                    <a href="ui_tabs_accordions_navs.html">
                      Tabs, Accordions &amp; Navs
                    </a>
                  </li>
                  <li>
                    <a href="ui_tree.html">
                      <span className="badge badge-roundless badge-danger">
                        new
                      </span>
                      Tree View
                    </a>
                  </li>
                  <li>
                    <a href="ui_page_progress_style_1.html">
                      <span className="badge badge-roundless badge-warning">
                        new
                      </span>
                      Page Progress Bar
                    </a>
                  </li>
                  <li>
                    <a href="ui_blockui.html">Block UI</a>
                  </li>
                  <li>
                    <a href="ui_bootstrap_growl.html">
                      <span className="badge badge-roundless badge-warning">
                        new
                      </span>
                      Bootstrap Growl Notifications
                    </a>
                  </li>
                  <li>
                    <a href="ui_notific8.html">Notific8 Notifications</a>
                  </li>
                  <li>
                    <a href="ui_toastr.html">Toastr Notifications</a>
                  </li>
                  <li>
                    <a href="ui_alert_dialog_api.html">
                      <span className="badge badge-roundless badge-danger">
                        new
                      </span>
                      Alerts &amp; Dialogs API
                    </a>
                  </li>
                  <li>
                    <a href="ui_session_timeout.html">Session Timeout</a>
                  </li>
                  <li>
                    <a href="ui_idle_timeout.html">User Idle Timeout</a>
                  </li>
                  <li>
                    <a href="ui_modals.html">Modals</a>
                  </li>
                  <li>
                    <a href="ui_extended_modals.html">Extended Modals</a>
                  </li>
                  <li>
                    <a href="ui_tiles.html">Tiles</a>
                  </li>
                  <li>
                    <a href="ui_datepaginator.html">
                      <span className="badge badge-roundless badge-success">
                        new
                      </span>
                      Date Paginator
                    </a>
                  </li>
                  <li>
                    <a href="ui_nestable.html">Nestable List</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="javascript:;">
                  <i className="icon-puzzle" />
                  <span className="title">UI Components</span>
                  <span className="arrow " />
                </a>
                <ul className="sub-menu">
                  <li>
                    <a href="components_pickers.html">
                      Date &amp; Time Pickers
                    </a>
                  </li>
                  <li>
                    <a href="components_context_menu.html">Context Menu</a>
                  </li>
                  <li>
                    <a href="components_dropdowns.html">Custom Dropdowns</a>
                  </li>
                  <li>
                    <a href="components_form_tools.html">
                      Form Widgets &amp; Tools
                    </a>
                  </li>
                  <li>
                    <a href="components_form_tools2.html">
                      Form Widgets &amp; Tools 2
                    </a>
                  </li>
                  <li>
                    <a href="components_editors.html">
                      Markdown &amp; WYSIWYG Editors
                    </a>
                  </li>
                  <li>
                    <a href="components_ion_sliders.html">Ion Range Sliders</a>
                  </li>
                  <li>
                    <a href="components_noui_sliders.html">
                      NoUI Range Sliders
                    </a>
                  </li>
                  <li>
                    <a href="components_jqueryui_sliders.html">
                      jQuery UI Sliders
                    </a>
                  </li>
                  <li>
                    <a href="components_knob_dials.html">Knob Circle Dials</a>
                  </li>
                </ul>
              </li>
              {/* BEGIN ANGULARJS LINK */}
              <li
                className="tooltips"
                data-container="body"
                data-placement="right"
                data-html="true"
                data-original-title="AngularJS version demo"
              >
                <a href="angularjs" target="_blank">
                  <i className="icon-paper-plane" />
                  <span className="title">AngularJS Version </span>
                </a>
              </li>
              {/* END ANGULARJS LINK */}
              <li className="heading">
                <h3 className="uppercase">Features</h3>
              </li>
              <li>
                <a href="javascript:;">
                  <i className="icon-settings" />
                  <span className="title">Form Stuff</span>
                  <span className="arrow " />
                </a>
                <ul className="sub-menu">
                  <li>
                    <a href="form_controls_md.html">
                      <span className="badge badge-roundless badge-danger">
                        new
                      </span>
                      Material Design
                      <br />
                      Form Controls
                    </a>
                  </li>
                  <li>
                    <a href="form_controls.html">
                      Bootstrap
                      <br />
                      Form Controls
                    </a>
                  </li>
                  <li>
                    <a href="form_icheck.html">iCheck Controls</a>
                  </li>
                  <li>
                    <a href="form_layouts.html">Form Layouts</a>
                  </li>
                  <li>
                    <a href="form_editable.html">
                      <span className="badge badge-roundless badge-warning">
                        new
                      </span>
                      Form X-editable
                    </a>
                  </li>
                  <li>
                    <a href="form_wizard.html">Form Wizard</a>
                  </li>
                  <li>
                    <a href="form_validation.html">Form Validation</a>
                  </li>
                  <li>
                    <a href="form_image_crop.html">
                      <span className="badge badge-roundless badge-danger">
                        new
                      </span>
                      Image Cropping
                    </a>
                  </li>
                  <li>
                    <a href="form_fileupload.html">Multiple File Upload</a>
                  </li>
                  <li>
                    <a href="form_dropzone.html">Dropzone File Upload</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="javascript:;">
                  <i className="icon-briefcase" />
                  <span className="title">Data Tables</span>
                  <span className="arrow " />
                </a>
                <ul className="sub-menu">
                  <li>
                    <a href="table_basic.html">Basic Datatables</a>
                  </li>
                  <li>
                    <a href="table_tree.html">Tree Datatables</a>
                  </li>
                  <li>
                    <a href="table_responsive.html">Responsive Datatables</a>
                  </li>
                  <li>
                    <a href="table_managed.html">Managed Datatables</a>
                  </li>
                  <li>
                    <a href="table_editable.html">Editable Datatables</a>
                  </li>
                  <li>
                    <a href="table_advanced.html">Advanced Datatables</a>
                  </li>
                  <li>
                    <a href="table_ajax.html">Ajax Datatables</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="javascript:;">
                  <i className="icon-wallet" />
                  <span className="title">Portlets</span>
                  <span className="arrow " />
                </a>
                <ul className="sub-menu">
                  <li>
                    <a href="portlet_general.html">General Portlets</a>
                  </li>
                  <li>
                    <a href="portlet_general2.html">
                      <span className="badge badge-roundless badge-danger">
                        new
                      </span>
                      New Portlets #1
                    </a>
                  </li>
                  <li>
                    <a href="portlet_general3.html">
                      <span className="badge badge-roundless badge-danger">
                        new
                      </span>
                      New Portlets #2
                    </a>
                  </li>
                  <li>
                    <a href="portlet_ajax.html">Ajax Portlets</a>
                  </li>
                  <li>
                    <a href="portlet_draggable.html">Draggable Portlets</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="javascript:;">
                  <i className="icon-bar-chart" />
                  <span className="title">Charts</span>
                  <span className="arrow " />
                </a>
                <ul className="sub-menu">
                  <li>
                    <a href="charts_amcharts.html">amChart</a>
                  </li>
                  <li>
                    <a href="charts_flotcharts.html">Flotchart</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="javascript:;">
                  <i className="icon-docs" />
                  <span className="title">Pages</span>
                  <span className="arrow " />
                </a>
                <ul className="sub-menu">
                  <li>
                    <a href="page_timeline.html">
                      <i className="icon-paper-plane" />
                      <span className="badge badge-warning">2</span>New Timeline
                    </a>
                  </li>
                  <li>
                    <a href="extra_profile.html">
                      <i className="icon-user-following" />
                      <span className="badge badge-success badge-roundless">
                        new
                      </span>
                      New User Profile
                    </a>
                  </li>
                  <li>
                    <a href="page_todo.html">
                      <i className="icon-check" />
                      Todo
                    </a>
                  </li>
                  <li>
                    <a href="inbox.html">
                      <i className="icon-envelope" />
                      <span className="badge badge-danger">4</span>Inbox
                    </a>
                  </li>
                  <li>
                    <a href="extra_faq.html">
                      <i className="icon-question" />
                      FAQ
                    </a>
                  </li>
                  <li>
                    <a href="page_calendar.html">
                      <i className="icon-calendar" />
                      <span className="badge badge-danger">14</span>Calendar
                    </a>
                  </li>
                  <li>
                    <a href="page_coming_soon.html">
                      <i className="icon-flag" />
                      Coming Soon
                    </a>
                  </li>
                  <li>
                    <a href="page_blog.html">
                      <i className="icon-speech" />
                      Blog
                    </a>
                  </li>
                  <li>
                    <a href="page_blog_item.html">
                      <i className="icon-link" />
                      Blog Post
                    </a>
                  </li>
                  <li>
                    <a href="page_news.html">
                      <i className="icon-eye" />
                      <span className="badge badge-success">9</span>News
                    </a>
                  </li>
                  <li>
                    <a href="page_news_item.html">
                      <i className="icon-bell" />
                      News View
                    </a>
                  </li>
                  <li>
                    <a href="page_timeline_old.html">
                      <i className="icon-paper-plane" />
                      <span className="badge badge-warning">2</span>Old Timeline
                    </a>
                  </li>
                  <li>
                    <a href="extra_profile_old.html">
                      <i className="icon-user" />
                      Old User Profile
                    </a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="javascript:;">
                  <i className="icon-present" />
                  <span className="title">Extra</span>
                  <span className="arrow " />
                </a>
                <ul className="sub-menu">
                  <li>
                    <a href="page_about.html">About Us</a>
                  </li>
                  <li>
                    <a href="page_contact.html">Contact Us</a>
                  </li>
                  <li>
                    <a href="extra_search.html">Search Results</a>
                  </li>
                  <li>
                    <a href="extra_invoice.html">Invoice</a>
                  </li>
                  <li>
                    <a href="page_portfolio.html">Portfolio</a>
                  </li>
                  <li>
                    <a href="extra_pricing_table.html">Pricing Tables</a>
                  </li>
                  <li>
                    <a href="extra_404_option1.html">404 Page Option 1</a>
                  </li>
                  <li>
                    <a href="extra_404_option2.html">404 Page Option 2</a>
                  </li>
                  <li>
                    <a href="extra_404_option3.html">404 Page Option 3</a>
                  </li>
                  <li>
                    <a href="extra_500_option1.html">500 Page Option 1</a>
                  </li>
                  <li>
                    <a href="extra_500_option2.html">500 Page Option 2</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="javascript:;">
                  <i className="icon-folder" />
                  <span className="title">Multi Level Menu</span>
                  <span className="arrow " />
                </a>
                <ul className="sub-menu">
                  <li>
                    <a href="javascript:;">
                      <i className="icon-settings" /> Item 1{" "}
                      <span className="arrow" />
                    </a>
                    <ul className="sub-menu">
                      <li>
                        <a href="javascript:;">
                          <i className="icon-user" />
                          Sample Link 1 <span className="arrow" />
                        </a>
                        <ul className="sub-menu">
                          <li>
                            <a href="#">
                              <i className="icon-power" /> Sample Link 1
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="icon-paper-plane" /> Sample Link 1
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="icon-star" /> Sample Link 1
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="#">
                          <i className="icon-camera" /> Sample Link 1
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="icon-link" /> Sample Link 2
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="icon-pointer" /> Sample Link 3
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="javascript:;">
                      <i className="icon-globe" /> Item 2{" "}
                      <span className="arrow" />
                    </a>
                    <ul className="sub-menu">
                      <li>
                        <a href="#">
                          <i className="icon-tag" /> Sample Link 1
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="icon-pencil" /> Sample Link 1
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="icon-graph" /> Sample Link 1
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="#">
                      <i className="icon-bar-chart" />
                      Item 3{" "}
                    </a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="javascript:;">
                  <i className="icon-user" />
                  <span className="title">Login Options</span>
                  <span className="arrow " />
                </a>
                <ul className="sub-menu">
                  <li>
                    <a href="login.html">Login Form 1</a>
                  </li>
                  <li>
                    <a href="login_2.html">Login Form 2</a>
                  </li>
                  <li>
                    <a href="login_3.html">Login Form 3</a>
                  </li>
                  <li>
                    <a href="login_soft.html">Login Form 4</a>
                  </li>
                  <li>
                    <a href="extra_lock.html">Lock Screen 1</a>
                  </li>
                  <li>
                    <a href="extra_lock2.html">Lock Screen 2</a>
                  </li>
                </ul>
              </li>
              <li className="heading">
                <h3 className="uppercase">More</h3>
              </li>
              <li>
                <a href="javascript:;">
                  <i className="icon-logout" />
                  <span className="title">Quick Sidebar</span>
                  <span className="arrow " />
                </a>
                <ul className="sub-menu">
                  <li>
                    <a href="quick_sidebar_push_content.html">Push Content</a>
                  </li>
                  <li>
                    <a href="quick_sidebar_over_content.html">Over Content</a>
                  </li>
                  <li>
                    <a href="quick_sidebar_over_content_transparent.html">
                      Over Content &amp; Transparent
                    </a>
                  </li>
                  <li>
                    <a href="quick_sidebar_on_boxed_layout.html">
                      Boxed Layout
                    </a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="javascript:;">
                  <i className="icon-envelope-open" />
                  <span className="title">Email Templates</span>
                  <span className="arrow " />
                </a>
                <ul className="sub-menu">
                  <li>
                    <a href="email_template1.html">New Email Template 1</a>
                  </li>
                  <li>
                    <a href="email_template2.html">New Email Template 2</a>
                  </li>
                  <li>
                    <a href="email_template3.html">New Email Template 3</a>
                  </li>
                  <li>
                    <a href="email_template4.html">New Email Template 4</a>
                  </li>
                  <li>
                    <a href="email_newsletter.html">Old Email Template 1</a>
                  </li>
                  <li>
                    <a href="email_system.html">Old Email Template 2</a>
                  </li>
                </ul>
              </li>
              <li className="last ">
                <a href="javascript:;">
                  <i className="icon-pointer" />
                  <span className="title">Maps</span>
                  <span className="arrow " />
                </a>
                <ul className="sub-menu">
                  <li>
                    <a href="maps_google.html">Google Maps</a>
                  </li>
                  <li>
                    <a href="maps_vector.html">Vector Maps</a>
                  </li>
                </ul>
              </li>
            </ul>
            {/* END SIDEBAR MENU */}
          </div>
        </div>
        {/* END SIDEBAR */}
        {/* BEGIN CONTENT */}
        <div className="page-content-wrapper">
          <div className="page-content">
            {/* BEGIN SAMPLE PORTLET CONFIGURATION MODAL FORM*/}
            <div
              className="modal fade"
              id="portlet-config"
              tabIndex={-1}
              role="dialog"
              aria-labelledby="myModalLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <button
                      type="button"
                      className="close"
                      data-dismiss="modal"
                      aria-hidden="true"
                    />
                    <h4 className="modal-title">Modal title</h4>
                  </div>
                  <div className="modal-body">
                    Widget settings form goes here
                  </div>
                  <div className="modal-footer">
                    <button type="button" className="btn blue">
                      Save changes
                    </button>
                    <button
                      type="button"
                      className="btn default"
                      data-dismiss="modal"
                    >
                      Close
                    </button>
                  </div>
                </div>
                {/* /.modal-content */}
              </div>
              {/* /.modal-dialog */}
            </div>
            {/* /.modal */}
            {/* END SAMPLE PORTLET CONFIGURATION MODAL FORM*/}
            {/* BEGIN STYLE CUSTOMIZER */}
            <div className="theme-panel hidden-xs hidden-sm">
              <div className="toggler"></div>
              <div className="toggler-close"></div>
              <div className="theme-options">
                <div className="theme-option theme-colors clearfix">
                  <span>THEME COLOR </span>
                  <ul>
                    <li
                      className="color-default current tooltips"
                      data-style="default"
                      data-container="body"
                      data-original-title="Default"
                    ></li>
                    <li
                      className="color-darkblue tooltips"
                      data-style="darkblue"
                      data-container="body"
                      data-original-title="Dark Blue"
                    ></li>
                    <li
                      className="color-blue tooltips"
                      data-style="blue"
                      data-container="body"
                      data-original-title="Blue"
                    ></li>
                    <li
                      className="color-grey tooltips"
                      data-style="grey"
                      data-container="body"
                      data-original-title="Grey"
                    ></li>
                    <li
                      className="color-light tooltips"
                      data-style="light"
                      data-container="body"
                      data-original-title="Light"
                    ></li>
                    <li
                      className="color-light2 tooltips"
                      data-style="light2"
                      data-container="body"
                      data-html="true"
                      data-original-title="Light 2"
                    ></li>
                  </ul>
                </div>
                <div className="theme-option">
                  <span>Layout </span>
                  <select className="layout-option form-control input-sm">
                    <option value="fluid" selected="selected">
                      Fluid
                    </option>
                    <option value="boxed">Boxed</option>
                  </select>
                </div>
                <div className="theme-option">
                  <span>Header </span>
                  <select className="page-header-option form-control input-sm">
                    <option value="fixed" selected="selected">
                      Fixed
                    </option>
                    <option value="default">Default</option>
                  </select>
                </div>
                <div className="theme-option">
                  <span>Top Menu Dropdown</span>
                  <select className="page-header-top-dropdown-style-option form-control input-sm">
                    <option value="light" selected="selected">
                      Light
                    </option>
                    <option value="dark">Dark</option>
                  </select>
                </div>
                <div className="theme-option">
                  <span>Sidebar Mode</span>
                  <select className="sidebar-option form-control input-sm">
                    <option value="fixed">Fixed</option>
                    <option value="default" selected="selected">
                      Default
                    </option>
                  </select>
                </div>
                <div className="theme-option">
                  <span>Sidebar Menu </span>
                  <select className="sidebar-menu-option form-control input-sm">
                    <option value="accordion" selected="selected">
                      Accordion
                    </option>
                    <option value="hover">Hover</option>
                  </select>
                </div>
                <div className="theme-option">
                  <span>Sidebar Style </span>
                  <select className="sidebar-style-option form-control input-sm">
                    <option value="default" selected="selected">
                      Default
                    </option>
                    <option value="light">Light</option>
                  </select>
                </div>
                <div className="theme-option">
                  <span>Sidebar Position </span>
                  <select className="sidebar-pos-option form-control input-sm">
                    <option value="left" selected="selected">
                      Left
                    </option>
                    <option value="right">Right</option>
                  </select>
                </div>
                <div className="theme-option">
                  <span>Footer </span>
                  <select className="page-footer-option form-control input-sm">
                    <option value="fixed">Fixed</option>
                    <option value="default" selected="selected">
                      Default
                    </option>
                  </select>
                </div>
              </div>
            </div>
            {/* END STYLE CUSTOMIZER */}
            {/* BEGIN PAGE HEADER*/}
            <h3 className="page-title">
              Blank Page <small>blank page</small>
            </h3>
            <div className="page-bar">
              <ul className="page-breadcrumb">
                <li>
                  <i className="fa fa-home" />
                  <a href="index.html">Home</a>
                  <i className="fa fa-angle-right" />
                </li>
                <li>
                  <a href="#">Page Layouts</a>
                  <i className="fa fa-angle-right" />
                </li>
                <li>
                  <a href="#">Blank Page</a>
                </li>
              </ul>
              <div className="page-toolbar">
                <div className="btn-group pull-right">
                  <button
                    type="button"
                    className="btn btn-fit-height grey-salt dropdown-toggle"
                    data-toggle="dropdown"
                    data-hover="dropdown"
                    data-delay={1000}
                    data-close-others="true"
                  >
                    Actions <i className="fa fa-angle-down" />
                  </button>
                  <ul className="dropdown-menu pull-right" role="menu">
                    <li>
                      <a href="#">Action</a>
                    </li>
                    <li>
                      <a href="#">Another action</a>
                    </li>
                    <li>
                      <a href="#">Something else here</a>
                    </li>
                    <li className="divider"></li>
                    <li>
                      <a href="#">Separated link</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {/* END PAGE HEADER*/}
            {/* BEGIN PAGE CONTENT*/}
            <div className="row">
              <div className="col-md-12">Page content goes here</div>
            </div>
            {/* END PAGE CONTENT*/}
          </div>
        </div>
        {/* END CONTENT */}
        {/* BEGIN QUICK SIDEBAR */}
        <a href="javascript:;" className="page-quick-sidebar-toggler">
          <i className="icon-close" />
        </a>
        <div className="page-quick-sidebar-wrapper">
          <div className="page-quick-sidebar">
            <div className="nav-justified">
              <ul className="nav nav-tabs nav-justified">
                <li className="active">
                  <a href="#quick_sidebar_tab_1" data-toggle="tab">
                    Users <span className="badge badge-danger">2</span>
                  </a>
                </li>
                <li>
                  <a href="#quick_sidebar_tab_2" data-toggle="tab">
                    Alerts <span className="badge badge-success">7</span>
                  </a>
                </li>
                <li className="dropdown">
                  <a
                    href="javascript:;"
                    className="dropdown-toggle"
                    data-toggle="dropdown"
                  >
                    More
                    <i className="fa fa-angle-down" />
                  </a>
                  <ul className="dropdown-menu pull-right" role="menu">
                    <li>
                      <a href="#quick_sidebar_tab_3" data-toggle="tab">
                        <i className="icon-bell" /> Alerts{" "}
                      </a>
                    </li>
                    <li>
                      <a href="#quick_sidebar_tab_3" data-toggle="tab">
                        <i className="icon-info" /> Notifications{" "}
                      </a>
                    </li>
                    <li>
                      <a href="#quick_sidebar_tab_3" data-toggle="tab">
                        <i className="icon-speech" /> Activities{" "}
                      </a>
                    </li>
                    <li className="divider"></li>
                    <li>
                      <a href="#quick_sidebar_tab_3" data-toggle="tab">
                        <i className="icon-settings" /> Settings{" "}
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
              <div className="tab-content">
                <div
                  className="tab-pane active page-quick-sidebar-chat"
                  id="quick_sidebar_tab_1"
                >
                  <div
                    className="page-quick-sidebar-chat-users"
                    data-rail-color="#ddd"
                    data-wrapper-class="page-quick-sidebar-list"
                  >
                    <h3 className="list-heading">Staff</h3>
                    <ul className="media-list list-items">
                      <li className="media">
                        <div className="media-status">
                          <span className="badge badge-success">8</span>
                        </div>
                        <img
                          className="media-object"
                          src="/assets/admin/layout/img/avatar3.jpg"
                          alt="..."
                        />
                        <div className="media-body">
                          <h4 className="media-heading">Bob Nilson</h4>
                          <div className="media-heading-sub">
                            Project Manager
                          </div>
                        </div>
                      </li>
                      <li className="media">
                        <img
                          className="media-object"
                          src="/assets/admin/layout/img/avatar1.jpg"
                          alt="..."
                        />
                        <div className="media-body">
                          <h4 className="media-heading">Nick Larson</h4>
                          <div className="media-heading-sub">Art Director</div>
                        </div>
                      </li>
                      <li className="media">
                        <div className="media-status">
                          <span className="badge badge-danger">3</span>
                        </div>
                        <img
                          className="media-object"
                          src="/assets/admin/layout/img/avatar4.jpg"
                          alt="..."
                        />
                        <div className="media-body">
                          <h4 className="media-heading">Deon Hubert</h4>
                          <div className="media-heading-sub">CTO</div>
                        </div>
                      </li>
                      <li className="media">
                        <img
                          className="media-object"
                          src="/assets/admin/layout/img/avatar2.jpg"
                          alt="..."
                        />
                        <div className="media-body">
                          <h4 className="media-heading">Ella Wong</h4>
                          <div className="media-heading-sub">CEO</div>
                        </div>
                      </li>
                    </ul>
                    <h3 className="list-heading">Customers</h3>
                    <ul className="media-list list-items">
                      <li className="media">
                        <div className="media-status">
                          <span className="badge badge-warning">2</span>
                        </div>
                        <img
                          className="media-object"
                          src="/assets/admin/layout/img/avatar6.jpg"
                          alt="..."
                        />
                        <div className="media-body">
                          <h4 className="media-heading">Lara Kunis</h4>
                          <div className="media-heading-sub">CEO, Loop Inc</div>
                          <div className="media-heading-small">
                            Last seen 03:10 AM
                          </div>
                        </div>
                      </li>
                      <li className="media">
                        <div className="media-status">
                          <span className="label label-sm label-success">
                            new
                          </span>
                        </div>
                        <img
                          className="media-object"
                          src="/assets/admin/layout/img/avatar7.jpg"
                          alt="..."
                        />
                        <div className="media-body">
                          <h4 className="media-heading">Ernie Kyllonen</h4>
                          <div className="media-heading-sub">
                            Project Manager,
                            <br />
                            SmartBizz PTL
                          </div>
                        </div>
                      </li>
                      <li className="media">
                        <img
                          className="media-object"
                          src="/assets/admin/layout/img/avatar8.jpg"
                          alt="..."
                        />
                        <div className="media-body">
                          <h4 className="media-heading">Lisa Stone</h4>
                          <div className="media-heading-sub">
                            CTO, Keort Inc
                          </div>
                          <div className="media-heading-small">
                            Last seen 13:10 PM
                          </div>
                        </div>
                      </li>
                      <li className="media">
                        <div className="media-status">
                          <span className="badge badge-success">7</span>
                        </div>
                        <img
                          className="media-object"
                          src="/assets/admin/layout/img/avatar9.jpg"
                          alt="..."
                        />
                        <div className="media-body">
                          <h4 className="media-heading">Deon Portalatin</h4>
                          <div className="media-heading-sub">
                            CFO, H&amp;D LTD
                          </div>
                        </div>
                      </li>
                      <li className="media">
                        <img
                          className="media-object"
                          src="/assets/admin/layout/img/avatar10.jpg"
                          alt="..."
                        />
                        <div className="media-body">
                          <h4 className="media-heading">Irina Savikova</h4>
                          <div className="media-heading-sub">
                            CEO, Tizda Motors Inc
                          </div>
                        </div>
                      </li>
                      <li className="media">
                        <div className="media-status">
                          <span className="badge badge-danger">4</span>
                        </div>
                        <img
                          className="media-object"
                          src="/assets/admin/layout/img/avatar11.jpg"
                          alt="..."
                        />
                        <div className="media-body">
                          <h4 className="media-heading">Maria Gomez</h4>
                          <div className="media-heading-sub">
                            Manager, Infomatic Inc
                          </div>
                          <div className="media-heading-small">
                            Last seen 03:10 AM
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div className="page-quick-sidebar-item">
                    <div className="page-quick-sidebar-chat-user">
                      <div className="page-quick-sidebar-nav">
                        <a
                          href="javascript:;"
                          className="page-quick-sidebar-back-to-list"
                        >
                          <i className="icon-arrow-left" />
                          Back
                        </a>
                      </div>
                      <div className="page-quick-sidebar-chat-user-messages">
                        <div className="post out">
                          <img
                            className="avatar"                            
                            src="/assets/admin/layout/img/avatar3.jpg"
                          />
                          <div className="message">
                            <span className="arrow" />
                            <a href="javascript:;" className="name">
                              Bob Nilson
                            </a>
                            <span className="datetime">20:15</span>
                            <span className="body">
                              When could you send me the report ?{" "}
                            </span>
                          </div>
                        </div>
                        <div className="post in">
                          <img
                            className="avatar"                      
                            src="/assets/admin/layout/img/avatar2.jpg"
                          />
                          <div className="message">
                            <span className="arrow" />
                            <a href="javascript:;" className="name">
                              Ella Wong
                            </a>
                            <span className="datetime">20:15</span>
                            <span className="body">
                              Its almost done. I will be sending it shortly{" "}
                            </span>
                          </div>
                        </div>
                        <div className="post out">
                          <img
                            className="avatar"                            
                            src="/assets/admin/layout/img/avatar3.jpg"
                          />
                          <div className="message">
                            <span className="arrow" />
                            <a href="javascript:;" className="name">
                              Bob Nilson
                            </a>
                            <span className="datetime">20:15</span>
                            <span className="body">Alright. Thanks! :) </span>
                          </div>
                        </div>
                        <div className="post in">
                          <img
                            className="avatar"                            
                            src="/assets/admin/layout/img/avatar2.jpg"
                          />
                          <div className="message">
                            <span className="arrow" />
                            <a href="javascript:;" className="name">
                              Ella Wong
                            </a>
                            <span className="datetime">20:16</span>
                            <span className="body">
                              You are most welcome. Sorry for the delay.{" "}
                            </span>
                          </div>
                        </div>
                        <div className="post out">
                          <img
                            className="avatar"                            
                            src="/assets/admin/layout/img/avatar3.jpg"
                          />
                          <div className="message">
                            <span className="arrow" />
                            <a href="javascript:;" className="name">
                              Bob Nilson
                            </a>
                            <span className="datetime">20:17</span>
                            <span className="body">
                              No probs. Just take your time :){" "}
                            </span>
                          </div>
                        </div>
                        <div className="post in">
                          <img
                            className="avatar"                          
                            src="/assets/admin/layout/img/avatar2.jpg"
                          />
                          <div className="message">
                            <span className="arrow" />
                            <a href="javascript:;" className="name">
                              Ella Wong
                            </a>
                            <span className="datetime">20:40</span>
                            <span className="body">
                              Alright. I just emailed it to you.{" "}
                            </span>
                          </div>
                        </div>
                        <div className="post out">
                          <img
                            className="avatar"                            
                            src="/assets/admin/layout/img/avatar3.jpg"
                          />
                          <div className="message">
                            <span className="arrow" />
                            <a href="javascript:;" className="name">
                              Bob Nilson
                            </a>
                            <span className="datetime">20:17</span>
                            <span className="body">
                              Great! Thanks. Will check it right away.{" "}
                            </span>
                          </div>
                        </div>
                        <div className="post in">
                          <img
                            className="avatar"                            
                            src="/assets/admin/layout/img/avatar2.jpg"
                          />
                          <div className="message">
                            <span className="arrow" />
                            <a href="javascript:;" className="name">
                              Ella Wong
                            </a>
                            <span className="datetime">20:40</span>
                            <span className="body">
                              Please let me know if you have any comment.{" "}
                            </span>
                          </div>
                        </div>
                        <div className="post out">
                          <img
                            className="avatar"                            
                            src="/assets/admin/layout/img/avatar3.jpg"
                          />
                          <div className="message">
                            <span className="arrow" />
                            <a href="javascript:;" className="name">
                              Bob Nilson
                            </a>
                            <span className="datetime">20:17</span>
                            <span className="body">
                              Sure. I will check and buzz you if anything needs
                              to be corrected.
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="page-quick-sidebar-chat-user-form">
                        <div className="input-group">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Type a message here..."
                          />
                          <div className="input-group-btn">
                            <button type="button" className="btn blue">
                              <i className="icon-paper-clip" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane page-quick-sidebar-alerts"
                  id="quick_sidebar_tab_2"
                >
                  <div className="page-quick-sidebar-alerts-list">
                    <h3 className="list-heading">General</h3>
                    <ul className="feeds list-items">
                      <li>
                        <div className="col1">
                          <div className="cont">
                            <div className="cont-col1">
                              <div className="label label-sm label-info">
                                <i className="fa fa-check" />
                              </div>
                            </div>
                            <div className="cont-col2">
                              <div className="desc">
                                You have 4 pending tasks.{" "}
                                <span className="label label-sm label-warning ">
                                  Take action <i className="fa fa-share" />
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col2">
                          <div className="date">Just now</div>
                        </div>
                      </li>
                      <li>
                        <a href="javascript:;">
                          <div className="col1">
                            <div className="cont">
                              <div className="cont-col1">
                                <div className="label label-sm label-success">
                                  <i className="fa fa-bar-chart-o" />
                                </div>
                              </div>
                              <div className="cont-col2">
                                <div className="desc">
                                  Finance Report for year 2013 has been
                                  released.
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col2">
                            <div className="date">20 mins</div>
                          </div>
                        </a>
                      </li>
                      <li>
                        <div className="col1">
                          <div className="cont">
                            <div className="cont-col1">
                              <div className="label label-sm label-danger">
                                <i className="fa fa-user" />
                              </div>
                            </div>
                            <div className="cont-col2">
                              <div className="desc">
                                You have 5 pending membership that requires a
                                quick review.
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col2">
                          <div className="date">24 mins</div>
                        </div>
                      </li>
                      <li>
                        <div className="col1">
                          <div className="cont">
                            <div className="cont-col1">
                              <div className="label label-sm label-info">
                                <i className="fa fa-shopping-cart" />
                              </div>
                            </div>
                            <div className="cont-col2">
                              <div className="desc">
                                New order received with{" "}
                                <span className="label label-sm label-success">
                                  Reference Number: DR23923{" "}
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col2">
                          <div className="date">30 mins</div>
                        </div>
                      </li>
                      <li>
                        <div className="col1">
                          <div className="cont">
                            <div className="cont-col1">
                              <div className="label label-sm label-success">
                                <i className="fa fa-user" />
                              </div>
                            </div>
                            <div className="cont-col2">
                              <div className="desc">
                                You have 5 pending membership that requires a
                                quick review.
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col2">
                          <div className="date">24 mins</div>
                        </div>
                      </li>
                      <li>
                        <div className="col1">
                          <div className="cont">
                            <div className="cont-col1">
                              <div className="label label-sm label-info">
                                <i className="fa fa-bell-o" />
                              </div>
                            </div>
                            <div className="cont-col2">
                              <div className="desc">
                                Web server hardware needs to be upgraded.{" "}
                                <span className="label label-sm label-warning">
                                  Overdue{" "}
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col2">
                          <div className="date">2 hours</div>
                        </div>
                      </li>
                      <li>
                        <a href="javascript:;">
                          <div className="col1">
                            <div className="cont">
                              <div className="cont-col1">
                                <div className="label label-sm label-default">
                                  <i className="fa fa-briefcase" />
                                </div>
                              </div>
                              <div className="cont-col2">
                                <div className="desc">
                                  IPO Report for year 2013 has been released.
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col2">
                            <div className="date">20 mins</div>
                          </div>
                        </a>
                      </li>
                    </ul>
                    <h3 className="list-heading">System</h3>
                    <ul className="feeds list-items">
                      <li>
                        <div className="col1">
                          <div className="cont">
                            <div className="cont-col1">
                              <div className="label label-sm label-info">
                                <i className="fa fa-check" />
                              </div>
                            </div>
                            <div className="cont-col2">
                              <div className="desc">
                                You have 4 pending tasks.{" "}
                                <span className="label label-sm label-warning ">
                                  Take action <i className="fa fa-share" />
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col2">
                          <div className="date">Just now</div>
                        </div>
                      </li>
                      <li>
                        <a href="javascript:;">
                          <div className="col1">
                            <div className="cont">
                              <div className="cont-col1">
                                <div className="label label-sm label-danger">
                                  <i className="fa fa-bar-chart-o" />
                                </div>
                              </div>
                              <div className="cont-col2">
                                <div className="desc">
                                  Finance Report for year 2013 has been
                                  released.
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col2">
                            <div className="date">20 mins</div>
                          </div>
                        </a>
                      </li>
                      <li>
                        <div className="col1">
                          <div className="cont">
                            <div className="cont-col1">
                              <div className="label label-sm label-default">
                                <i className="fa fa-user" />
                              </div>
                            </div>
                            <div className="cont-col2">
                              <div className="desc">
                                You have 5 pending membership that requires a
                                quick review.
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col2">
                          <div className="date">24 mins</div>
                        </div>
                      </li>
                      <li>
                        <div className="col1">
                          <div className="cont">
                            <div className="cont-col1">
                              <div className="label label-sm label-info">
                                <i className="fa fa-shopping-cart" />
                              </div>
                            </div>
                            <div className="cont-col2">
                              <div className="desc">
                                New order received with{" "}
                                <span className="label label-sm label-success">
                                  Reference Number: DR23923{" "}
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col2">
                          <div className="date">30 mins</div>
                        </div>
                      </li>
                      <li>
                        <div className="col1">
                          <div className="cont">
                            <div className="cont-col1">
                              <div className="label label-sm label-success">
                                <i className="fa fa-user" />
                              </div>
                            </div>
                            <div className="cont-col2">
                              <div className="desc">
                                You have 5 pending membership that requires a
                                quick review.
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col2">
                          <div className="date">24 mins</div>
                        </div>
                      </li>
                      <li>
                        <div className="col1">
                          <div className="cont">
                            <div className="cont-col1">
                              <div className="label label-sm label-warning">
                                <i className="fa fa-bell-o" />
                              </div>
                            </div>
                            <div className="cont-col2">
                              <div className="desc">
                                Web server hardware needs to be upgraded.{" "}
                                <span className="label label-sm label-default ">
                                  Overdue{" "}
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col2">
                          <div className="date">2 hours</div>
                        </div>
                      </li>
                      <li>
                        <a href="javascript:;">
                          <div className="col1">
                            <div className="cont">
                              <div className="cont-col1">
                                <div className="label label-sm label-info">
                                  <i className="fa fa-briefcase" />
                                </div>
                              </div>
                              <div className="cont-col2">
                                <div className="desc">
                                  IPO Report for year 2013 has been released.
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col2">
                            <div className="date">20 mins</div>
                          </div>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div
                  className="tab-pane page-quick-sidebar-settings"
                  id="quick_sidebar_tab_3"
                >
                  <div className="page-quick-sidebar-settings-list">
                    <h3 className="list-heading">General Settings</h3>
                    <ul className="list-items borderless">
                      <li>
                        Enable Notifications{" "}
                        <input
                          type="checkbox"
                          className="make-switch"
                          defaultChecked
                          data-size="small"
                          data-on-color="success"
                          data-on-text="ON"
                          data-off-color="default"
                          data-off-text="OFF"
                        />
                      </li>
                      <li>
                        Allow Tracking{" "}
                        <input
                          type="checkbox"
                          className="make-switch"
                          data-size="small"
                          data-on-color="info"
                          data-on-text="ON"
                          data-off-color="default"
                          data-off-text="OFF"
                        />
                      </li>
                      <li>
                        Log Errors{" "}
                        <input
                          type="checkbox"
                          className="make-switch"
                          defaultChecked
                          data-size="small"
                          data-on-color="danger"
                          data-on-text="ON"
                          data-off-color="default"
                          data-off-text="OFF"
                        />
                      </li>
                      <li>
                        Auto Sumbit Issues{" "}
                        <input
                          type="checkbox"
                          className="make-switch"
                          data-size="small"
                          data-on-color="warning"
                          data-on-text="ON"
                          data-off-color="default"
                          data-off-text="OFF"
                        />
                      </li>
                      <li>
                        Enable SMS Alerts{" "}
                        <input
                          type="checkbox"
                          className="make-switch"
                          defaultChecked
                          data-size="small"
                          data-on-color="success"
                          data-on-text="ON"
                          data-off-color="default"
                          data-off-text="OFF"
                        />
                      </li>
                    </ul>
                    <h3 className="list-heading">System Settings</h3>
                    <ul className="list-items borderless">
                      <li>
                        Security Level
                        <select className="form-control input-inline input-sm input-small">
                          <option value={1}>Normal</option>
                          <option value={2} selected>
                            Medium
                          </option>
                          <option value="e">High</option>
                        </select>
                      </li>
                      <li>
                        Failed Email Attempts{" "}
                        <input
                          className="form-control input-inline input-sm input-small"
                          defaultValue={5}
                        />
                      </li>
                      <li>
                        Secondary SMTP Port{" "}
                        <input
                          className="form-control input-inline input-sm input-small"
                          defaultValue={3560}
                        />
                      </li>
                      <li>
                        Notify On System Error{" "}
                        <input
                          type="checkbox"
                          className="make-switch"
                          defaultChecked
                          data-size="small"
                          data-on-color="danger"
                          data-on-text="ON"
                          data-off-color="default"
                          data-off-text="OFF"
                        />
                      </li>
                      <li>
                        Notify On SMTP Error{" "}
                        <input
                          type="checkbox"
                          className="make-switch"
                          defaultChecked
                          data-size="small"
                          data-on-color="warning"
                          data-on-text="ON"
                          data-off-color="default"
                          data-off-text="OFF"
                        />
                      </li>
                    </ul>
                    <div className="inner-content">
                      <button className="btn btn-success">
                        <i className="icon-settings" /> Save Changes
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* END QUICK SIDEBAR */}
      </div>
    );
  }
}

PageContainerComponent.propTypes = {
  // bla: PropTypes.string,
};

PageContainerComponent.defaultProps = {
  // bla: 'test',
};

export default PageContainerComponent;
