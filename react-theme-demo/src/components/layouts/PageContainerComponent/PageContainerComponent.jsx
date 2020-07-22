import React, { PureComponent } from "react";
import PropTypes from "prop-types";
//import { Test } from './PageContainerComponent.styles';

class PageContainerComponent extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
    };
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
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }
    return (
      <React.Fragment>
        {/* Page container */}
        <div className="page-container">
          {/* Page content */}
          <div className="page-content">
            {/* Main sidebar */}
            <div className="sidebar sidebar-main sidebar-fixed">
              <div className="sidebar-content">
                {/* User menu */}
                <div className="sidebar-user">
                  <div className="category-content">
                    <div className="media">
                      <a href="#" className="media-left">
                        <img
                          src="/images/placeholder.jpg"
                          className="img-circle img-sm"
                        />
                      </a>
                      <div className="media-body">
                        <span className="media-heading text-semibold">
                          Victoria Baker
                        </span>
                        <div className="text-size-mini text-muted">
                          <i className="icon-pin text-size-small" /> &nbsp;Santa
                          Ana, CA
                        </div>
                      </div>
                      <div className="media-right media-middle">
                        <ul className="icons-list">
                          <li>
                            <a href="#">
                              <i className="icon-cog3" />
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                {/* /user menu */}
                {/* Main navigation */}
                <div className="sidebar-category sidebar-category-visible">
                  <div className="category-content no-padding">
                    <ul className="navigation navigation-main navigation-accordion">
                      {/* Main */}
                      <li className="navigation-header">
                        <span>Main</span>
                        <i className="icon-menu" title="Main pages" />
                      </li>
                      <li>
                        <a href="index.html">
                          <i className="icon-home4" /> <span>Dashboard</span>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="icon-stack2" />
                          <span>Page layouts</span>
                        </a>
                        <ul>
                          <li>
                            <a href="layout_navbar_fixed.html">Fixed navbar</a>
                          </li>
                          <li className="active">
                            <a href="layout_navbar_sidebar_fixed.html">
                              Fixed navbar &amp; sidebar
                            </a>
                          </li>
                          <li>
                            <a href="layout_sidebar_fixed_native.html">
                              Fixed sidebar native scroll
                            </a>
                          </li>
                          <li>
                            <a href="layout_navbar_hideable.html">
                              Hideable navbar
                            </a>
                          </li>
                          <li>
                            <a href="layout_navbar_hideable_sidebar.html">
                              Hideable &amp; fixed sidebar
                            </a>
                          </li>
                          <li>
                            <a href="layout_footer_fixed.html">Fixed footer</a>
                          </li>
                          <li className="navigation-divider" />
                          <li>
                            <a href="boxed_default.html">
                              Boxed with default sidebar
                            </a>
                          </li>
                          <li>
                            <a href="boxed_mini.html">
                              Boxed with mini sidebar
                            </a>
                          </li>
                          <li>
                            <a href="boxed_full.html">Boxed full width</a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="#">
                          <i className="icon-copy" /> <span>Layouts</span>
                        </a>
                        <ul>
                          <li>
                            <a
                              href="../../../layout_1/LTR/index.html"
                              id="layout1"
                            >
                              Layout 1
                            </a>
                          </li>
                          <li>
                            <a href="index.html" id="layout2">
                              Layout 2
                              <span className="label bg-warning-400">
                                Current
                              </span>
                            </a>
                          </li>
                          <li>
                            <a
                              href="../../../layout_3/LTR/index.html"
                              id="layout3"
                            >
                              Layout 3
                            </a>
                          </li>
                          <li>
                            <a
                              href="../../../layout_4/LTR/index.html"
                              id="layout4"
                            >
                              Layout 4
                            </a>
                          </li>
                          <li>
                            <a
                              href="../../../layout_5/LTR/index.html"
                              id="layout5"
                            >
                              Layout 5
                            </a>
                          </li>
                          <li className="disabled">
                            <a
                              href="../../../layout_6/LTR/index.html"
                              id="layout6"
                            >
                              Layout 6
                              <span className="label label-transparent">
                                Coming soon
                              </span>
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="#">
                          <i className="icon-droplet2" />
                          <span>Color system</span>
                        </a>
                        <ul>
                          <li>
                            <a href="colors_primary.html">Primary palette</a>
                          </li>
                          <li>
                            <a href="colors_danger.html">Danger palette</a>
                          </li>
                          <li>
                            <a href="colors_success.html">Success palette</a>
                          </li>
                          <li>
                            <a href="colors_warning.html">Warning palette</a>
                          </li>
                          <li>
                            <a href="colors_info.html">Info palette</a>
                          </li>
                          <li className="navigation-divider" />
                          <li>
                            <a href="colors_pink.html">Pink palette</a>
                          </li>
                          <li>
                            <a href="colors_violet.html">Violet palette</a>
                          </li>
                          <li>
                            <a href="colors_purple.html">Purple palette</a>
                          </li>
                          <li>
                            <a href="colors_indigo.html">Indigo palette</a>
                          </li>
                          <li>
                            <a href="colors_blue.html">Blue palette</a>
                          </li>
                          <li>
                            <a href="colors_teal.html">Teal palette</a>
                          </li>
                          <li>
                            <a href="colors_green.html">Green palette</a>
                          </li>
                          <li>
                            <a href="colors_orange.html">Orange palette</a>
                          </li>
                          <li>
                            <a href="colors_brown.html">Brown palette</a>
                          </li>
                          <li>
                            <a href="colors_grey.html">Grey palette</a>
                          </li>
                          <li>
                            <a href="colors_slate.html">Slate palette</a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="#">
                          <i className="icon-stack" /> <span>Starter kit</span>
                        </a>
                        <ul>
                          <li>
                            <a href="starters/horizontal_nav.html">
                              Horizontal navigation
                            </a>
                          </li>
                          <li>
                            <a href="starters/1_col.html">1 column</a>
                          </li>
                          <li>
                            <a href="starters/2_col.html">2 columns</a>
                          </li>
                          <li>
                            <a href="#">3 columns</a>
                            <ul>
                              <li>
                                <a href="starters/3_col_dual.html">
                                  Dual sidebars
                                </a>
                              </li>
                              <li>
                                <a href="starters/3_col_double.html">
                                  Double sidebars
                                </a>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <a href="starters/4_col.html">4 columns</a>
                          </li>
                          <li>
                            <a href="#">Detached layout</a>
                            <ul>
                              <li>
                                <a href="starters/detached_left.html">
                                  Left sidebar
                                </a>
                              </li>
                              <li>
                                <a href="starters/detached_right.html">
                                  Right sidebar
                                </a>
                              </li>
                              <li>
                                <a href="starters/detached_sticky.html">
                                  Sticky sidebar
                                </a>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <a href="starters/layout_boxed.html">
                              Boxed layout
                            </a>
                          </li>
                          <li className="navigation-divider" />
                          <li>
                            <a href="starters/layout_navbar_fixed_main.html">
                              Fixed main navbar
                            </a>
                          </li>
                          <li>
                            <a href="starters/layout_navbar_fixed_secondary.html">
                              Fixed secondary navbar
                            </a>
                          </li>
                          <li>
                            <a href="starters/layout_navbar_fixed_both.html">
                              Both navbars fixed
                            </a>
                          </li>
                          <li>
                            <a href="starters/layout_fixed.html">
                              Fixed layout
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="changelog.html">
                          <i className="icon-list-unordered" />
                          <span>
                            Changelog
                            <span className="label bg-blue-400">1.4</span>
                          </span>
                        </a>
                      </li>
                      <li>
                        <a href="../../RTL/index.html">
                          <i className="icon-width" /> <span>RTL version</span>
                        </a>
                      </li>
                      {/* /main */}
                      {/* Forms */}
                      <li className="navigation-header">
                        <span>Forms</span>
                        <i className="icon-menu" title="Forms" />
                      </li>
                      <li>
                        <a href="#">
                          <i className="icon-pencil3" />
                          <span>Form components</span>
                        </a>
                        <ul>
                          <li>
                            <a href="form_inputs_basic.html">Basic inputs</a>
                          </li>
                          <li>
                            <a href="form_checkboxes_radios.html">
                              Checkboxes &amp; radios
                            </a>
                          </li>
                          <li>
                            <a href="form_input_groups.html">Input groups</a>
                          </li>
                          <li>
                            <a href="form_controls_extended.html">
                              Extended controls
                            </a>
                          </li>
                          <li>
                            <a href="form_floating_labels.html">
                              Floating labels
                            </a>
                          </li>
                          <li>
                            <a href="#">Selects</a>
                            <ul>
                              <li>
                                <a href="form_select2.html">Select2 selects</a>
                              </li>
                              <li>
                                <a href="form_multiselect.html">
                                  Bootstrap multiselect
                                </a>
                              </li>
                              <li>
                                <a href="form_select_box_it.html">
                                  SelectBoxIt selects
                                </a>
                              </li>
                              <li>
                                <a href="form_bootstrap_select.html">
                                  Bootstrap selects
                                </a>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <a href="form_tag_inputs.html">Tag inputs</a>
                          </li>
                          <li>
                            <a href="form_dual_listboxes.html">
                              Dual Listboxes
                            </a>
                          </li>
                          <li>
                            <a href="form_editable.html">Editable forms</a>
                          </li>
                          <li>
                            <a href="form_validation.html">Validation</a>
                          </li>
                          <li>
                            <a href="form_inputs_grid.html">Inputs grid</a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="#">
                          <i className="icon-file-css" />
                          <span>JSON forms</span>
                        </a>
                        <ul>
                          <li>
                            <a href="alpaca_basic.html">Basic inputs</a>
                          </li>
                          <li>
                            <a href="alpaca_advanced.html">Advanced inputs</a>
                          </li>
                          <li>
                            <a href="alpaca_controls.html">Controls</a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="#">
                          <i className="icon-footprint" /> <span>Wizards</span>
                        </a>
                        <ul>
                          <li>
                            <a href="wizard_steps.html">Steps wizard</a>
                          </li>
                          <li>
                            <a href="wizard_form.html">Form wizard</a>
                          </li>
                          <li>
                            <a href="wizard_stepy.html">Stepy wizard</a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="#">
                          <i className="icon-spell-check" />
                          <span>Editors</span>
                        </a>
                        <ul>
                          <li>
                            <a href="editor_summernote.html">
                              Summernote editor
                            </a>
                          </li>
                          <li>
                            <a href="editor_ckeditor.html">CKEditor</a>
                          </li>
                          <li>
                            <a href="editor_wysihtml5.html">WYSIHTML5 editor</a>
                          </li>
                          <li>
                            <a href="editor_code.html">Code editor</a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="#">
                          <i className="icon-select2" /> <span>Pickers</span>
                        </a>
                        <ul>
                          <li>
                            <a href="picker_date.html">
                              Date &amp; time pickers
                            </a>
                          </li>
                          <li>
                            <a href="picker_color.html">Color pickers</a>
                          </li>
                          <li>
                            <a href="picker_location.html">Location pickers</a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="#">
                          <i className="icon-insert-template" />
                          <span>Form layouts</span>
                        </a>
                        <ul>
                          <li>
                            <a href="form_layout_vertical.html">
                              Vertical form
                            </a>
                          </li>
                          <li>
                            <a href="form_layout_horizontal.html">
                              Horizontal form
                            </a>
                          </li>
                        </ul>
                      </li>
                      {/* /forms */}
                      {/* Appearance */}
                      <li className="navigation-header">
                        <span>Appearance</span>
                        <i className="icon-menu" title="Appearance" />
                      </li>
                      <li>
                        <a href="#">
                          <i className="icon-grid" /> <span>Components</span>
                        </a>
                        <ul>
                          <li>
                            <a href="components_modals.html">Modals</a>
                          </li>
                          <li>
                            <a href="components_dropdowns.html">
                              Dropdown menus
                            </a>
                          </li>
                          <li>
                            <a href="components_tabs.html">Tabs component</a>
                          </li>
                          <li>
                            <a href="components_pills.html">Pills component</a>
                          </li>
                          <li>
                            <a href="components_navs.html">
                              Accordion and navs
                            </a>
                          </li>
                          <li>
                            <a href="components_buttons.html">Buttons</a>
                          </li>
                          <li>
                            <a href="components_notifications_pnotify.html">
                              PNotify notifications
                            </a>
                          </li>
                          <li>
                            <a href="components_notifications_others.html">
                              Other notifications
                            </a>
                          </li>
                          <li>
                            <a href="components_popups.html">
                              Tooltips and popovers
                            </a>
                          </li>
                          <li>
                            <a href="components_alerts.html">Alerts</a>
                          </li>
                          <li>
                            <a href="components_pagination.html">Pagination</a>
                          </li>
                          <li>
                            <a href="components_labels.html">
                              Labels and badges
                            </a>
                          </li>
                          <li>
                            <a href="components_loaders.html">
                              Loaders and bars
                            </a>
                          </li>
                          <li>
                            <a href="components_thumbnails.html">Thumbnails</a>
                          </li>
                          <li>
                            <a href="components_page_header.html">
                              Page header
                            </a>
                          </li>
                          <li>
                            <a href="components_breadcrumbs.html">
                              Breadcrumbs
                            </a>
                          </li>
                          <li>
                            <a href="components_media.html">Media objects</a>
                          </li>
                          <li>
                            <a href="components_affix.html">
                              Affix and Scrollspy
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="#">
                          <i className="icon-puzzle2" />
                          <span>Content appearance</span>
                        </a>
                        <ul>
                          <li>
                            <a href="appearance_content_panels.html">
                              Content panels
                            </a>
                          </li>
                          <li>
                            <a href="appearance_panel_heading.html">
                              Panel heading elements
                            </a>
                          </li>
                          <li>
                            <a href="appearance_panel_footer.html">
                              Panel footer elements
                            </a>
                          </li>
                          <li>
                            <a href="appearance_draggable_panels.html">
                              Draggable panels
                            </a>
                          </li>
                          <li>
                            <a href="appearance_text_styling.html">
                              Text styling
                            </a>
                          </li>
                          <li>
                            <a href="appearance_typography.html">Typography</a>
                          </li>
                          <li>
                            <a href="appearance_helpers.html">Helper classes</a>
                          </li>
                          <li>
                            <a href="appearance_syntax_highlighter.html">
                              Syntax highlighter
                            </a>
                          </li>
                          <li>
                            <a href="appearance_content_grid.html">
                              Grid system
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="#">
                          <i className="icon-gift" />
                          <span>Extra components</span>
                        </a>
                        <ul>
                          <li>
                            <a href="extra_sliders_noui.html">NoUI sliders</a>
                          </li>
                          <li>
                            <a href="extra_sliders_ion.html">
                              Ion range sliders
                            </a>
                          </li>
                          <li>
                            <a href="extra_session_timeout.html">
                              Session timeout
                            </a>
                          </li>
                          <li>
                            <a href="extra_idle_timeout.html">Idle timeout</a>
                          </li>
                          <li>
                            <a href="extra_trees.html">Dynamic tree views</a>
                          </li>
                          <li>
                            <a href="extra_context_menu.html">Context menu</a>
                          </li>
                          <li>
                            <a href="extra_fab.html">Floating action buttons</a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="#">
                          <i className="icon-spinner2 spinner" />
                          <span>Animations</span>
                        </a>
                        <ul>
                          <li>
                            <a href="animations_css3.html">CSS3 animations</a>
                          </li>
                          <li>
                            <a href="#">Velocity animations</a>
                            <ul>
                              <li>
                                <a href="animations_velocity_basic.html">
                                  Basic usage
                                </a>
                              </li>
                              <li>
                                <a href="animations_velocity_ui.html">
                                  UI pack effects
                                </a>
                              </li>
                              <li>
                                <a href="animations_velocity_examples.html">
                                  Advanced examples
                                </a>
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="#">
                          <i className="icon-thumbs-up2" /> <span>Icons</span>
                        </a>
                        <ul>
                          <li>
                            <a href="icons_glyphicons.html">Glyphicons</a>
                          </li>
                          <li>
                            <a href="icons_icomoon.html">Icomoon</a>
                          </li>
                          <li>
                            <a href="icons_fontawesome.html">Font awesome</a>
                          </li>
                        </ul>
                      </li>
                      {/* /appearance */}
                      {/* Layout */}
                      <li className="navigation-header">
                        <span>Layout</span>
                        <i className="icon-menu" title="Layout options" />
                      </li>
                      <li>
                        <a href="#">
                          <i className="icon-indent-decrease2" />
                          <span>Sidebars</span>
                        </a>
                        <ul>
                          <li>
                            <a href="sidebar_default_collapse.html">
                              Default collapsible
                            </a>
                          </li>
                          <li>
                            <a href="sidebar_default_hide.html">
                              Default hideable
                            </a>
                          </li>
                          <li>
                            <a href="sidebar_mini_collapse.html">
                              Mini collapsible
                            </a>
                          </li>
                          <li>
                            <a href="sidebar_mini_hide.html">Mini hideable</a>
                          </li>
                          <li>
                            <a href="#">Dual sidebar</a>
                            <ul>
                              <li>
                                <a href="sidebar_dual.html">Dual sidebar</a>
                              </li>
                              <li>
                                <a href="sidebar_dual_double_collapse.html">
                                  Dual double collapse
                                </a>
                              </li>
                              <li>
                                <a href="sidebar_dual_double_hide.html">
                                  Dual double hide
                                </a>
                              </li>
                              <li>
                                <a href="sidebar_dual_swap.html">
                                  Swap sidebars
                                </a>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <a href="#">Double sidebar</a>
                            <ul>
                              <li>
                                <a href="sidebar_double_collapse.html">
                                  Collapse main sidebar
                                </a>
                              </li>
                              <li>
                                <a href="sidebar_double_hide.html">
                                  Hide main sidebar
                                </a>
                              </li>
                              <li>
                                <a href="sidebar_double_fix_default.html">
                                  Fix default width
                                </a>
                              </li>
                              <li>
                                <a href="sidebar_double_fix_mini.html">
                                  Fix mini width
                                </a>
                              </li>
                              <li>
                                <a href="sidebar_double_visible.html">
                                  Opposite sidebar visible
                                </a>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <a href="#">Detached sidebar</a>
                            <ul>
                              <li>
                                <a href="sidebar_detached_left.html">
                                  Left position
                                </a>
                              </li>
                              <li>
                                <a href="sidebar_detached_right.html">
                                  Right position
                                </a>
                              </li>
                              <li>
                                <a href="sidebar_detached_sticky_custom.html">
                                  Sticky (custom scroll)
                                </a>
                              </li>
                              <li>
                                <a href="sidebar_detached_sticky_native.html">
                                  Sticky (native scroll)
                                </a>
                              </li>
                              <li>
                                <a href="sidebar_detached_separate.html">
                                  Separate categories
                                </a>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <a href="sidebar_hidden.html">Hidden sidebar</a>
                          </li>
                          <li>
                            <a href="sidebar_light.html">Light sidebar</a>
                          </li>
                          <li>
                            <a href="sidebar_components.html">
                              Sidebar components
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="#">
                          <i className="icon-sort" />
                          <span>Vertical navigation</span>
                        </a>
                        <ul>
                          <li>
                            <a href="navigation_vertical_collapsible.html">
                              Collapsible menu
                            </a>
                          </li>
                          <li>
                            <a href="navigation_vertical_accordion.html">
                              Accordion menu
                            </a>
                          </li>
                          <li>
                            <a href="navigation_vertical_sizing.html">
                              Navigation sizing
                            </a>
                          </li>
                          <li>
                            <a href="navigation_vertical_bordered.html">
                              Bordered navigation
                            </a>
                          </li>
                          <li>
                            <a href="navigation_vertical_right_icons.html">
                              Right icons
                            </a>
                          </li>
                          <li>
                            <a href="navigation_vertical_labels_badges.html">
                              Labels and badges
                            </a>
                          </li>
                          <li>
                            <a href="navigation_vertical_disabled.html">
                              Disabled navigation links
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="#">
                          <i className="icon-transmission" />
                          <span>Horizontal navigation</span>
                        </a>
                        <ul>
                          <li>
                            <a href="navigation_horizontal_click.html">
                              Submenu on click
                            </a>
                          </li>
                          <li>
                            <a href="navigation_horizontal_hover.html">
                              Submenu on hover
                            </a>
                          </li>
                          <li>
                            <a href="navigation_horizontal_elements.html">
                              With custom elements
                            </a>
                          </li>
                          <li>
                            <a href="navigation_horizontal_tabs.html">
                              Tabbed navigation
                            </a>
                          </li>
                          <li>
                            <a href="navigation_horizontal_disabled.html">
                              Disabled navigation links
                            </a>
                          </li>
                          <li>
                            <a href="navigation_horizontal_mega.html">
                              Horizontal mega menu
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="#">
                          <i className="icon-menu3" /> <span>Navbars</span>
                        </a>
                        <ul>
                          <li>
                            <a href="navbar_single.html">Single navbar</a>
                          </li>
                          <li>
                            <a href="#">Multiple navbars</a>
                            <ul>
                              <li>
                                <a href="navbar_multiple_navbar_navbar.html">
                                  Navbar + navbar
                                </a>
                              </li>
                              <li>
                                <a href="navbar_multiple_navbar_header.html">
                                  Navbar + header
                                </a>
                              </li>
                              <li>
                                <a href="navbar_multiple_header_navbar.html">
                                  Header + navbar
                                </a>
                              </li>
                              <li>
                                <a href="navbar_multiple_top_bottom.html">
                                  Top + bottom
                                </a>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <a href="navbar_colors.html">Color options</a>
                          </li>
                          <li>
                            <a href="navbar_sizes.html">Sizing options</a>
                          </li>
                          <li>
                            <a href="navbar_hideable.html">Hide on scroll</a>
                          </li>
                          <li>
                            <a href="navbar_components.html">
                              Navbar components
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="#">
                          <i className="icon-tree5" /> <span>Menu levels</span>
                        </a>
                        <ul>
                          <li>
                            <a href="#">
                              <i className="icon-IE" /> Second level
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="icon-firefox" /> Second level with
                              child
                            </a>
                            <ul>
                              <li>
                                <a href="#">
                                  <i className="icon-android" /> Third level
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <i className="icon-apple2" /> Third level with
                                  child
                                </a>
                                <ul>
                                  <li>
                                    <a href="#">
                                      <i className="icon-html5" /> Fourth level
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#">
                                      <i className="icon-css3" /> Fourth level
                                    </a>
                                  </li>
                                </ul>
                              </li>
                              <li>
                                <a href="#">
                                  <i className="icon-windows" /> Third level
                                </a>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <a href="#">
                              <i className="icon-chrome" /> Second level
                            </a>
                          </li>
                        </ul>
                      </li>
                      {/* /layout */}
                      {/* Data visualization */}
                      <li className="navigation-header">
                        <span>Data visualization</span>
                        <i className="icon-menu" title="Data visualization" />
                      </li>
                      <li>
                        <a href="#">
                          <i className="icon-graph" />
                          <span>Echarts library</span>
                        </a>
                        <ul>
                          <li>
                            <a href="echarts_lines_areas.html">
                              Lines and areas
                            </a>
                          </li>
                          <li>
                            <a href="echarts_columns_waterfalls.html">
                              Columns and waterfalls
                            </a>
                          </li>
                          <li>
                            <a href="echarts_bars_tornados.html">
                              Bars and tornados
                            </a>
                          </li>
                          <li>
                            <a href="echarts_scatter.html">Scatter charts</a>
                          </li>
                          <li>
                            <a href="echarts_pies_donuts.html">
                              Pies and donuts
                            </a>
                          </li>
                          <li>
                            <a href="echarts_funnels_chords.html">
                              Funnels and chords
                            </a>
                          </li>
                          <li>
                            <a href="echarts_candlesticks_others.html">
                              Candlesticks and others
                            </a>
                          </li>
                          <li>
                            <a href="echarts_combinations.html">
                              Chart combinations
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="#">
                          <i className="icon-statistics" />
                          <span>D3 library</span>
                        </a>
                        <ul>
                          <li>
                            <a href="d3_lines_basic.html">Simple lines</a>
                          </li>
                          <li>
                            <a href="d3_lines_advanced.html">Advanced lines</a>
                          </li>
                          <li>
                            <a href="d3_bars_basic.html">Simple bars</a>
                          </li>
                          <li>
                            <a href="d3_bars_advanced.html">Advanced bars</a>
                          </li>
                          <li>
                            <a href="d3_pies.html">Pie charts</a>
                          </li>
                          <li>
                            <a href="d3_circle_diagrams.html">
                              Circle diagrams
                            </a>
                          </li>
                          <li>
                            <a href="d3_tree.html">Tree layout</a>
                          </li>
                          <li>
                            <a href="d3_other.html">Other charts</a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="#">
                          <i className="icon-stats-dots" />
                          <span>Dimple library</span>
                        </a>
                        <ul>
                          <li>
                            <a href="#">Line charts</a>
                            <ul>
                              <li>
                                <a href="dimple_lines_horizontal.html">
                                  Horizontal orientation
                                </a>
                              </li>
                              <li>
                                <a href="dimple_lines_vertical.html">
                                  Vertical orientation
                                </a>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <a href="#">Bar charts</a>
                            <ul>
                              <li>
                                <a href="dimple_bars_horizontal.html">
                                  Horizontal orientation
                                </a>
                              </li>
                              <li>
                                <a href="dimple_bars_vertical.html">
                                  Vertical orientation
                                </a>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <a href="#">Area charts</a>
                            <ul>
                              <li>
                                <a href="dimple_area_horizontal.html">
                                  Horizontal orientation
                                </a>
                              </li>
                              <li>
                                <a href="dimple_area_vertical.html">
                                  Vertical orientation
                                </a>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <a href="#">Step charts</a>
                            <ul>
                              <li>
                                <a href="dimple_step_horizontal.html">
                                  Horizontal orientation
                                </a>
                              </li>
                              <li>
                                <a href="dimple_step_vertical.html">
                                  Vertical orientation
                                </a>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <a href="dimple_pies.html">Pie charts</a>
                          </li>
                          <li>
                            <a href="dimple_rings.html">Ring charts</a>
                          </li>
                          <li>
                            <a href="dimple_scatter.html">Scatter charts</a>
                          </li>
                          <li>
                            <a href="dimple_bubble.html">Bubble charts</a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="#">
                          <i className="icon-stats-bars" />
                          <span>C3 library</span>
                        </a>
                        <ul>
                          <li>
                            <a href="c3_lines_areas.html">Lines and areas</a>
                          </li>
                          <li>
                            <a href="c3_bars_pies.html">Bars and pies</a>
                          </li>
                          <li>
                            <a href="c3_advanced.html">Advanced examples</a>
                          </li>
                          <li>
                            <a href="c3_axis.html">Chart axis</a>
                          </li>
                          <li>
                            <a href="c3_grid.html">Grid options</a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="#">
                          <i className="icon-google" />
                          <span>Google visualization</span>
                        </a>
                        <ul>
                          <li>
                            <a href="google_lines.html">Line charts</a>
                          </li>
                          <li>
                            <a href="google_bars.html">Bar charts</a>
                          </li>
                          <li>
                            <a href="google_pies.html">Pie charts</a>
                          </li>
                          <li>
                            <a href="google_scatter_bubble.html">
                              Bubble &amp; scatter charts
                            </a>
                          </li>
                          <li>
                            <a href="google_other.html">Other charts</a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="#">
                          <i className="icon-map5" />
                          <span>Maps integration</span>
                        </a>
                        <ul>
                          <li>
                            <a href="#">Google maps</a>
                            <ul>
                              <li>
                                <a href="maps_google_basic.html">Basics</a>
                              </li>
                              <li>
                                <a href="maps_google_controls.html">Controls</a>
                              </li>
                              <li>
                                <a href="maps_google_markers.html">Markers</a>
                              </li>
                              <li>
                                <a href="maps_google_drawings.html">
                                  Map drawings
                                </a>
                              </li>
                              <li>
                                <a href="maps_google_layers.html">Layers</a>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <a href="maps_vector.html">Vector maps</a>
                          </li>
                        </ul>
                      </li>
                      {/* /data visualization */}
                      {/* Extensions */}
                      <li className="navigation-header">
                        <span>Extensions</span>
                        <i className="icon-menu" title="Extensions" />
                      </li>
                      <li>
                        <a href="#">
                          <i className="icon-puzzle4" /> <span>Extensions</span>
                        </a>
                        <ul>
                          <li>
                            <a href="extension_image_cropper.html">
                              Image cropper
                            </a>
                          </li>
                          <li>
                            <a href="extension_blockui.html">Block UI</a>
                          </li>
                          <li>
                            <a href="extension_dnd.html">Drag and drop</a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="#">
                          <i className="icon-popout" /> <span>JQuery UI</span>
                        </a>
                        <ul>
                          <li>
                            <a href="jqueryui_interactions.html">
                              Interactions
                            </a>
                          </li>
                          <li>
                            <a href="jqueryui_forms.html">Forms</a>
                          </li>
                          <li>
                            <a href="jqueryui_components.html">Components</a>
                          </li>
                          <li>
                            <a href="jqueryui_sliders.html">Sliders</a>
                          </li>
                          <li>
                            <a href="jqueryui_navigation.html">Navigation</a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="#">
                          <i className="icon-upload" />
                          <span>File uploaders</span>
                        </a>
                        <ul>
                          <li>
                            <a href="uploader_plupload.html">Plupload</a>
                          </li>
                          <li>
                            <a href="uploader_bootstrap.html">
                              Bootstrap file uploader
                            </a>
                          </li>
                          <li>
                            <a href="uploader_dropzone.html">Dropzone</a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="#">
                          <i className="icon-calendar3" />
                          <span>Event calendars</span>
                        </a>
                        <ul>
                          <li>
                            <a href="extension_fullcalendar_views.html">
                              Basic views
                            </a>
                          </li>
                          <li>
                            <a href="extension_fullcalendar_styling.html">
                              Event styling
                            </a>
                          </li>
                          <li>
                            <a href="extension_fullcalendar_formats.html">
                              Language and time
                            </a>
                          </li>
                          <li>
                            <a href="extension_fullcalendar_advanced.html">
                              Advanced usage
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="#">
                          <i className="icon-sphere" />
                          <span>Internationalization</span>
                        </a>
                        <ul>
                          <li>
                            <a href="internationalization_switch_direct.html">
                              Direct translation
                            </a>
                          </li>
                          <li>
                            <a href="internationalization_switch_query.html">
                              Querystring parameter
                            </a>
                          </li>
                          <li>
                            <a href="internationalization_on_init.html">
                              Set language on init
                            </a>
                          </li>
                          <li>
                            <a href="internationalization_after_init.html">
                              Set language after init
                            </a>
                          </li>
                          <li>
                            <a href="internationalization_fallback.html">
                              Language fallback
                            </a>
                          </li>
                          <li>
                            <a href="internationalization_callbacks.html">
                              Callbacks
                            </a>
                          </li>
                        </ul>
                      </li>
                      {/* /extensions */}
                      {/* Tables */}
                      <li className="navigation-header">
                        <span>Tables</span>
                        <i className="icon-menu" title="Tables" />
                      </li>
                      <li>
                        <a href="#">
                          <i className="icon-table2" />
                          <span>Basic tables</span>
                        </a>
                        <ul>
                          <li>
                            <a href="table_basic.html">Basic examples</a>
                          </li>
                          <li>
                            <a href="table_sizing.html">Table sizing</a>
                          </li>
                          <li>
                            <a href="table_borders.html">Table borders</a>
                          </li>
                          <li>
                            <a href="table_styling.html">Table styling</a>
                          </li>
                          <li>
                            <a href="table_elements.html">Table elements</a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="#">
                          <i className="icon-grid7" /> <span>Data tables</span>
                        </a>
                        <ul>
                          <li>
                            <a href="datatable_basic.html">
                              Basic initialization
                            </a>
                          </li>
                          <li>
                            <a href="datatable_styling.html">Basic styling</a>
                          </li>
                          <li>
                            <a href="datatable_advanced.html">
                              Advanced examples
                            </a>
                          </li>
                          <li>
                            <a href="datatable_sorting.html">Sorting options</a>
                          </li>
                          <li>
                            <a href="datatable_api.html">Using API</a>
                          </li>
                          <li>
                            <a href="datatable_data_sources.html">
                              Data sources
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="#">
                          <i className="icon-alignment-unalign" />
                          <span>Data tables extensions</span>
                        </a>
                        <ul>
                          <li>
                            <a href="datatable_extension_reorder.html">
                              Columns reorder
                            </a>
                          </li>
                          <li>
                            <a href="datatable_extension_row_reorder.html">
                              Row reorder
                            </a>
                          </li>
                          <li>
                            <a href="datatable_extension_fixed_columns.html">
                              Fixed columns
                            </a>
                          </li>
                          <li>
                            <a href="datatable_extension_fixed_header.html">
                              Fixed header
                            </a>
                          </li>
                          <li>
                            <a href="datatable_extension_autofill.html">
                              Auto fill
                            </a>
                          </li>
                          <li>
                            <a href="datatable_extension_key_table.html">
                              Key table
                            </a>
                          </li>
                          <li>
                            <a href="datatable_extension_scroller.html">
                              Scroller
                            </a>
                          </li>
                          <li>
                            <a href="datatable_extension_select.html">Select</a>
                          </li>
                          <li>
                            <a href="#">Buttons</a>
                            <ul>
                              <li>
                                <a href="datatable_extension_buttons_init.html">
                                  Initialization
                                </a>
                              </li>
                              <li>
                                <a href="datatable_extension_buttons_flash.html">
                                  Flash buttons
                                </a>
                              </li>
                              <li>
                                <a href="datatable_extension_buttons_print.html">
                                  Print buttons
                                </a>
                              </li>
                              <li>
                                <a href="datatable_extension_buttons_html5.html">
                                  HTML5 buttons
                                </a>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <a href="datatable_extension_colvis.html">
                              Columns visibility
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="#">
                          <i className="icon-file-spreadsheet" />
                          <span>Handsontable</span>
                        </a>
                        <ul>
                          <li>
                            <a href="handsontable_basic.html">
                              Basic configuration
                            </a>
                          </li>
                          <li>
                            <a href="handsontable_advanced.html">
                              Advanced setup
                            </a>
                          </li>
                          <li>
                            <a href="handsontable_cols.html">Column features</a>
                          </li>
                          <li>
                            <a href="handsontable_cells.html">Cell features</a>
                          </li>
                          <li>
                            <a href="handsontable_types.html">
                              Basic cell types
                            </a>
                          </li>
                          <li>
                            <a href="handsontable_custom_checks.html">
                              Custom &amp; checkboxes
                            </a>
                          </li>
                          <li>
                            <a href="handsontable_ac_password.html">
                              Autocomplete &amp; password
                            </a>
                          </li>
                          <li>
                            <a href="handsontable_search.html">Search</a>
                          </li>
                          <li>
                            <a href="handsontable_context.html">Context menu</a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="#">
                          <i className="icon-versions" />
                          <span>Responsive options</span>
                        </a>
                        <ul>
                          <li>
                            <a href="table_responsive.html">
                              Responsive basic tables
                            </a>
                          </li>
                          <li>
                            <a href="datatable_responsive.html">
                              Responsive data tables
                            </a>
                          </li>
                        </ul>
                      </li>
                      {/* /tables */}
                      {/* Page kits */}
                      <li className="navigation-header">
                        <span>Page kits</span>
                        <i className="icon-menu" title="Page kits" />
                      </li>
                      <li>
                        <a href="#">
                          <i className="icon-task" /> <span>Task manager</span>
                        </a>
                        <ul>
                          <li>
                            <a href="task_manager_grid.html">Task grid</a>
                          </li>
                          <li>
                            <a href="task_manager_list.html">Task list</a>
                          </li>
                          <li>
                            <a href="task_manager_detailed.html">
                              Task detailed
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="#">
                          <i className="icon-cash3" /> <span>Invoicing</span>
                        </a>
                        <ul>
                          <li>
                            <a href="invoice_template.html">Invoice template</a>
                          </li>
                          <li>
                            <a href="invoice_grid.html">Invoice grid</a>
                          </li>
                          <li>
                            <a href="invoice_archive.html">Invoice archive</a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="#">
                          <i className="icon-people" /> <span>User pages</span>
                        </a>
                        <ul>
                          <li>
                            <a href="user_pages_cards.html">User cards</a>
                          </li>
                          <li>
                            <a href="user_pages_list.html">User list</a>
                          </li>
                          <li>
                            <a href="user_pages_profile.html">Simple profile</a>
                          </li>
                          <li>
                            <a href="user_pages_profile_cover.html">
                              Profile with cover
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="#">
                          <i className="icon-user-plus" />
                          <span>Login &amp; registration</span>
                        </a>
                        <ul>
                          <li>
                            <a href="login_simple.html">Simple login</a>
                          </li>
                          <li>
                            <a href="login_advanced.html">More login info</a>
                          </li>
                          <li>
                            <a href="login_registration.html">
                              Simple registration
                            </a>
                          </li>
                          <li>
                            <a href="login_registration_advanced.html">
                              More registration info
                            </a>
                          </li>
                          <li>
                            <a href="login_unlock.html">Unlock user</a>
                          </li>
                          <li>
                            <a href="login_password_recover.html">
                              Reset password
                            </a>
                          </li>
                          <li>
                            <a href="login_hide_navbar.html">Hide navbar</a>
                          </li>
                          <li>
                            <a href="login_transparent.html">Transparent box</a>
                          </li>
                          <li>
                            <a href="login_background.html">
                              Background option
                            </a>
                          </li>
                          <li>
                            <a href="login_validation.html">With validation</a>
                          </li>
                          <li>
                            <a href="login_tabbed.html">Tabbed form</a>
                          </li>
                          <li>
                            <a href="login_modals.html">Inside modals</a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="#">
                          <i className="icon-magazine" /> <span>Timelines</span>
                        </a>
                        <ul>
                          <li>
                            <a href="timelines_left.html">Left timeline</a>
                          </li>
                          <li>
                            <a href="timelines_right.html">Right timeline</a>
                          </li>
                          <li>
                            <a href="timelines_center.html">
                              Centered timeline
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="#">
                          <i className="icon-lifebuoy" /> <span>Support</span>
                        </a>
                        <ul>
                          <li>
                            <a href="support_conversation_layouts.html">
                              Conversation layouts
                            </a>
                          </li>
                          <li>
                            <a href="support_conversation_options.html">
                              Conversation options
                            </a>
                          </li>
                          <li>
                            <a href="support_knowledgebase.html">
                              Knowledgebase
                            </a>
                          </li>
                          <li>
                            <a href="support_faq.html">FAQ page</a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="#">
                          <i className="icon-search4" /> <span>Search</span>
                        </a>
                        <ul>
                          <li>
                            <a href="search_basic.html">Basic search results</a>
                          </li>
                          <li>
                            <a href="search_users.html">User search results</a>
                          </li>
                          <li>
                            <a href="search_images.html">
                              Image search results
                            </a>
                          </li>
                          <li>
                            <a href="search_videos.html">
                              Video search results
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="#">
                          <i className="icon-images2" /> <span>Gallery</span>
                        </a>
                        <ul>
                          <li>
                            <a href="gallery_grid.html">Media grid</a>
                          </li>
                          <li>
                            <a href="gallery_titles.html">Media with titles</a>
                          </li>
                          <li>
                            <a href="gallery_description.html">
                              Media with description
                            </a>
                          </li>
                          <li>
                            <a href="gallery_library.html">Media library</a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="#">
                          <i className="icon-warning" />
                          <span>Error pages</span>
                        </a>
                        <ul>
                          <li>
                            <a href="error_403.html">Error 403</a>
                          </li>
                          <li>
                            <a href="error_404.html">Error 404</a>
                          </li>
                          <li>
                            <a href="error_405.html">Error 405</a>
                          </li>
                          <li>
                            <a href="error_500.html">Error 500</a>
                          </li>
                          <li>
                            <a href="error_503.html">Error 503</a>
                          </li>
                          <li>
                            <a href="error_offline.html">Offline page</a>
                          </li>
                        </ul>
                      </li>
                      {/* /page kits */}
                    </ul>
                  </div>
                </div>
                {/* /main navigation */}
              </div>
            </div>
            {/* /main sidebar */}
            {/* Main content */}
            <div className="content-wrapper">
              {/* Content area */}
              <div className="content">
                {/* Main charts */}
                <div className="row">
                  <div className="col-lg-7">
                    {/* Traffic sources */}
                    <div className="panel panel-flat">
                      <div className="panel-heading">
                        <h6 className="panel-title">Traffic sources</h6>
                        <div className="heading-elements">
                          <form className="heading-form" action="#">
                            <div className="form-group">
                              <label className="checkbox-inline checkbox-switchery checkbox-right switchery-xs">
                                <input
                                  type="checkbox"
                                  className="switch"
                                  defaultChecked="checked"
                                />
                                Live update:
                              </label>
                            </div>
                          </form>
                        </div>
                      </div>
                      <div className="container-fluid">
                        <div className="row">
                          <div className="col-lg-4">
                            <ul className="list-inline text-center">
                              <li>
                                <a
                                  href="#"
                                  className="btn border-teal text-teal btn-flat btn-rounded btn-icon btn-xs valign-text-bottom"
                                >
                                  <i className="icon-plus3" />
                                </a>
                              </li>
                              <li className="text-left">
                                <div className="text-semibold">
                                  New visitors
                                </div>
                                <div className="text-muted">2,349 avg</div>
                              </li>
                            </ul>
                            <div className="col-lg-10 col-lg-offset-1">
                              <div
                                className="content-group"
                                id="new-visitors"
                              />
                            </div>
                          </div>
                          <div className="col-lg-4">
                            <ul className="list-inline text-center">
                              <li>
                                <a
                                  href="#"
                                  className="btn border-warning-400 text-warning-400 btn-flat btn-rounded btn-icon btn-xs valign-text-bottom"
                                >
                                  <i className="icon-watch2" />
                                </a>
                              </li>
                              <li className="text-left">
                                <div className="text-semibold">
                                  New sessions
                                </div>
                                <div className="text-muted">08:20 avg</div>
                              </li>
                            </ul>
                            <div className="col-lg-10 col-lg-offset-1">
                              <div
                                className="content-group"
                                id="new-sessions"
                              />
                            </div>
                          </div>
                          <div className="col-lg-4">
                            <ul className="list-inline text-center">
                              <li>
                                <a
                                  href="#"
                                  className="btn border-indigo-400 text-indigo-400 btn-flat btn-rounded btn-icon btn-xs valign-text-bottom"
                                >
                                  <i className="icon-people" />
                                </a>
                              </li>
                              <li className="text-left">
                                <div className="text-semibold">
                                  Total online
                                </div>
                                <div className="text-muted">
                                  <span className="status-mark border-success position-left" />
                                  5,378 avg
                                </div>
                              </li>
                            </ul>
                            <div className="col-lg-10 col-lg-offset-1">
                              <div
                                className="content-group"
                                id="total-online"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="position-relative" id="traffic-sources" />
                    </div>
                    {/* /traffic sources */}
                  </div>
                  <div className="col-lg-5">
                    {/* Sales stats */}
                    <div className="panel panel-flat">
                      <div className="panel-heading">
                        <h6 className="panel-title">Sales statistics</h6>
                        <div className="heading-elements">
                          <form className="heading-form" action="#">
                            <div className="form-group">
                              <select
                                className="change-date select-sm"
                                id="select_date"
                              >
                                <optgroup label="<i class='icon-watch pull-right'></i> Time period">
                                  <option value="val1">
                                    June, 29 - July, 5
                                  </option>
                                  <option value="val2">
                                    June, 22 - June 28
                                  </option>
                                  <option value="val3">
                                    June, 15 - June, 21
                                  </option>
                                  <option value="val4">
                                    June, 8 - June, 14
                                  </option>
                                </optgroup>
                              </select>
                            </div>
                          </form>
                        </div>
                      </div>
                      <div className="container-fluid">
                        <div className="row text-center">
                          <div className="col-md-4">
                            <div className="content-group">
                              <h5 className="text-semibold no-margin">
                                <i className="icon-calendar5 position-left text-slate" />
                                5,689
                              </h5>
                              <span className="text-muted text-size-small">
                                orders weekly
                              </span>
                            </div>
                          </div>
                          <div className="col-md-4">
                            <div className="content-group">
                              <h5 className="text-semibold no-margin">
                                <i className="icon-calendar52 position-left text-slate" />
                                32,568
                              </h5>
                              <span className="text-muted text-size-small">
                                orders monthly
                              </span>
                            </div>
                          </div>
                          <div className="col-md-4">
                            <div className="content-group">
                              <h5 className="text-semibold no-margin">
                                <i className="icon-cash3 position-left text-slate" />
                                $23,464
                              </h5>
                              <span className="text-muted text-size-small">
                                average revenue
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="content-group-sm" id="app_sales" />
                      <div id="monthly-sales-stats" />
                    </div>
                    {/* /sales stats */}
                  </div>
                </div>
                {/* /main charts */}
                {/* Dashboard content */}
                <div className="row">
                  <div className="col-lg-8">
                    {/* Marketing campaigns */}
                    <div className="panel panel-flat">
                      <div className="panel-heading">
                        <h6 className="panel-title">Marketing campaigns</h6>
                        <div className="heading-elements">
                          <span className="label bg-success heading-text">
                            28 active
                          </span>
                          <ul className="icons-list">
                            <li className="dropdown">
                              <a
                                href="#"
                                className="dropdown-toggle"
                                data-toggle="dropdown"
                              >
                                <i className="icon-menu7" />
                                <span className="caret" />
                              </a>
                              <ul className="dropdown-menu dropdown-menu-right">
                                <li>
                                  <a href="#">
                                    <i className="icon-sync" /> Update data
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <i className="icon-list-unordered" />
                                    Detailed log
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <i className="icon-pie5" /> Statistics
                                  </a>
                                </li>
                                <li className="divider" />
                                <li>
                                  <a href="#">
                                    <i className="icon-cross3" /> Clear list
                                  </a>
                                </li>
                              </ul>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="table-responsive">
                        <table className="table table-lg text-nowrap">
                          <tbody>
                            <tr>
                              <td className="col-md-5">
                                <div className="media-left">
                                  <div id="campaigns-donut" />
                                </div>
                                <div className="media-left">
                                  <h5 className="text-semibold no-margin">
                                    38,289
                                    <small className="text-success text-size-base">
                                      <i className="icon-arrow-up12" /> (+16.2%)
                                    </small>
                                  </h5>
                                  <ul className="list-inline list-inline-condensed no-margin">
                                    <li>
                                      <span className="status-mark border-success" />
                                    </li>
                                    <li>
                                      <span className="text-muted">
                                        May 12, 12:30 am
                                      </span>
                                    </li>
                                  </ul>
                                </div>
                              </td>
                              <td className="col-md-5">
                                <div className="media-left">
                                  <div id="campaign-status-pie" />
                                </div>
                                <div className="media-left">
                                  <h5 className="text-semibold no-margin">
                                    2,458
                                    <small className="text-danger text-size-base">
                                      <i className="icon-arrow-down12" /> (-
                                      4.9%)
                                    </small>
                                  </h5>
                                  <ul className="list-inline list-inline-condensed no-margin">
                                    <li>
                                      <span className="status-mark border-danger" />
                                    </li>
                                    <li>
                                      <span className="text-muted">
                                        Jun 4, 4:00 am
                                      </span>
                                    </li>
                                  </ul>
                                </div>
                              </td>
                              <td className="text-right col-md-2">
                                <a href="#" className="btn bg-indigo-300">
                                  <i className="icon-statistics position-left" />
                                  View report
                                </a>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      <div className="table-responsive">
                        <table className="table text-nowrap">
                          <thead>
                            <tr>
                              <th>Campaign</th>
                              <th className="col-md-2">Client</th>
                              <th className="col-md-2">Changes</th>
                              <th className="col-md-2">Budget</th>
                              <th className="col-md-2">Status</th>
                              <th className="text-center" style={{ width: 20 }}>
                                <i className="icon-arrow-down12" />
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr className="active border-double">
                              <td colSpan={5}>Today</td>
                              <td className="text-right">
                                <span
                                  className="progress-meter"
                                  id="today-progress"
                                  data-progress={30}
                                />
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <div className="media-left media-middle">
                                  <a href="#">
                                    <img
                                      src="/images/brands/facebook.png"
                                      className="img-circle img-xs"
                                      
                                    />
                                  </a>
                                </div>
                                <div className="media-left">
                                  <div >
                                    <a
                                      href="#"
                                      className="text-default text-semibold"
                                    >
                                      Facebook
                                    </a>
                                  </div>
                                  <div className="text-muted text-size-small">
                                    <span className="status-mark border-blue position-left" />
                                    02:00 - 03:00
                                  </div>
                                </div>
                              </td>
                              <td>
                                <span className="text-muted">Mintlime</span>
                              </td>
                              <td>
                                <span className="text-success-600">
                                  <i className="icon-stats-growth2 position-left" />
                                  2.43%
                                </span>
                              </td>
                              <td>
                                <h6 className="text-semibold">$5,489</h6>
                              </td>
                              <td>
                                <span className="label bg-blue">Active</span>
                              </td>
                              <td className="text-center">
                                <ul className="icons-list">
                                  <li className="dropdown">
                                    <a
                                      href="#"
                                      className="dropdown-toggle"
                                      data-toggle="dropdown"
                                    >
                                      <i className="icon-menu7" />
                                    </a>
                                    <ul className="dropdown-menu dropdown-menu-right">
                                      <li>
                                        <a href="#">
                                          <i className="icon-file-stats" /> View
                                          statement
                                        </a>
                                      </li>
                                      <li>
                                        <a href="#">
                                          <i className="icon-file-text2" /> Edit
                                          campaign
                                        </a>
                                      </li>
                                      <li>
                                        <a href="#">
                                          <i className="icon-file-locked" />
                                          Disable campaign
                                        </a>
                                      </li>
                                      <li className="divider" />
                                      <li>
                                        <a href="#">
                                          <i className="icon-gear" /> Settings
                                        </a>
                                      </li>
                                    </ul>
                                  </li>
                                </ul>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <div className="media-left media-middle">
                                  <a href="#">
                                    <img
                                      src="/images/brands/youtube.png"
                                      className="img-circle img-xs"
                                      
                                    />
                                  </a>
                                </div>
                                <div className="media-left">
                                  <div className>
                                    <a
                                      href="#"
                                      className="text-default text-semibold"
                                    >
                                      Youtube videos
                                    </a>
                                  </div>
                                  <div className="text-muted text-size-small">
                                    <span className="status-mark border-danger position-left" />
                                    13:00 - 14:00
                                  </div>
                                </div>
                              </td>
                              <td>
                                <span className="text-muted">CDsoft</span>
                              </td>
                              <td>
                                <span className="text-success-600">
                                  <i className="icon-stats-growth2 position-left" />
                                  3.12%
                                </span>
                              </td>
                              <td>
                                <h6 className="text-semibold">$2,592</h6>
                              </td>
                              <td>
                                <span className="label bg-danger">Closed</span>
                              </td>
                              <td className="text-center">
                                <ul className="icons-list">
                                  <li className="dropdown">
                                    <a
                                      href="#"
                                      className="dropdown-toggle"
                                      data-toggle="dropdown"
                                    >
                                      <i className="icon-menu7" />
                                    </a>
                                    <ul className="dropdown-menu dropdown-menu-right">
                                      <li>
                                        <a href="#">
                                          <i className="icon-file-stats" /> View
                                          statement
                                        </a>
                                      </li>
                                      <li>
                                        <a href="#">
                                          <i className="icon-file-text2" /> Edit
                                          campaign
                                        </a>
                                      </li>
                                      <li>
                                        <a href="#">
                                          <i className="icon-file-locked" />
                                          Disable campaign
                                        </a>
                                      </li>
                                      <li className="divider" />
                                      <li>
                                        <a href="#">
                                          <i className="icon-gear" /> Settings
                                        </a>
                                      </li>
                                    </ul>
                                  </li>
                                </ul>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <div className="media-left media-middle">
                                  <a href="#">
                                    <img
                                      src="/images/brands/spotify.png"
                                      className="img-circle img-xs"
                                      
                                    />
                                  </a>
                                </div>
                                <div className="media-left">
                                  <div className>
                                    <a
                                      href="#"
                                      className="text-default text-semibold"
                                    >
                                      Spotify ads
                                    </a>
                                  </div>
                                  <div className="text-muted text-size-small">
                                    <span className="status-mark border-grey-400 position-left" />
                                    10:00 - 11:00
                                  </div>
                                </div>
                              </td>
                              <td>
                                <span className="text-muted">Diligence</span>
                              </td>
                              <td>
                                <span className="text-danger">
                                  <i className="icon-stats-decline2 position-left" />
                                  - 8.02%
                                </span>
                              </td>
                              <td>
                                <h6 className="text-semibold">$1,268</h6>
                              </td>
                              <td>
                                <span className="label bg-grey-400">Hold</span>
                              </td>
                              <td className="text-center">
                                <ul className="icons-list">
                                  <li className="dropdown">
                                    <a
                                      href="#"
                                      className="dropdown-toggle"
                                      data-toggle="dropdown"
                                    >
                                      <i className="icon-menu7" />
                                    </a>
                                    <ul className="dropdown-menu dropdown-menu-right">
                                      <li>
                                        <a href="#">
                                          <i className="icon-file-stats" /> View
                                          statement
                                        </a>
                                      </li>
                                      <li>
                                        <a href="#">
                                          <i className="icon-file-text2" /> Edit
                                          campaign
                                        </a>
                                      </li>
                                      <li>
                                        <a href="#">
                                          <i className="icon-file-locked" />
                                          Disable campaign
                                        </a>
                                      </li>
                                      <li className="divider" />
                                      <li>
                                        <a href="#">
                                          <i className="icon-gear" /> Settings
                                        </a>
                                      </li>
                                    </ul>
                                  </li>
                                </ul>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <div className="media-left media-middle">
                                  <a href="#">
                                    <img
                                      src="/images/brands/twitter.png"
                                      className="img-circle img-xs"
                                      
                                    />
                                  </a>
                                </div>
                                <div className="media-left">
                                  <div className>
                                    <a
                                      href="#"
                                      className="text-default text-semibold"
                                    >
                                      Twitter ads
                                    </a>
                                  </div>
                                  <div className="text-muted text-size-small">
                                    <span className="status-mark border-grey-400 position-left" />
                                    04:00 - 05:00
                                  </div>
                                </div>
                              </td>
                              <td>
                                <span className="text-muted">Deluxe</span>
                              </td>
                              <td>
                                <span className="text-success-600">
                                  <i className="icon-stats-growth2 position-left" />
                                  2.78%
                                </span>
                              </td>
                              <td>
                                <h6 className="text-semibold">$7,467</h6>
                              </td>
                              <td>
                                <span className="label bg-grey-400">Hold</span>
                              </td>
                              <td className="text-center">
                                <ul className="icons-list">
                                  <li className="dropdown">
                                    <a
                                      href="#"
                                      className="dropdown-toggle"
                                      data-toggle="dropdown"
                                    >
                                      <i className="icon-menu7" />
                                    </a>
                                    <ul className="dropdown-menu dropdown-menu-right">
                                      <li>
                                        <a href="#">
                                          <i className="icon-file-stats" /> View
                                          statement
                                        </a>
                                      </li>
                                      <li>
                                        <a href="#">
                                          <i className="icon-file-text2" /> Edit
                                          campaign
                                        </a>
                                      </li>
                                      <li>
                                        <a href="#">
                                          <i className="icon-file-locked" />
                                          Disable campaign
                                        </a>
                                      </li>
                                      <li className="divider" />
                                      <li>
                                        <a href="#">
                                          <i className="icon-gear" /> Settings
                                        </a>
                                      </li>
                                    </ul>
                                  </li>
                                </ul>
                              </td>
                            </tr>
                            <tr className="active border-double">
                              <td colSpan={5}>Yesterday</td>
                              <td className="text-right">
                                <span
                                  className="progress-meter"
                                  id="yesterday-progress"
                                  data-progress={65}
                                />
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <div className="media-left media-middle">
                                  <a href="#">
                                    <img
                                      src="/images/brands/bing.png"
                                      className="img-circle img-xs"
                                      
                                    />
                                  </a>
                                </div>
                                <div className="media-left">
                                  <div className>
                                    <a
                                      href="#"
                                      className="text-default text-semibold"
                                    >
                                      Bing campaign
                                    </a>
                                  </div>
                                  <div className="text-muted text-size-small">
                                    <span className="status-mark border-success position-left" />
                                    15:00 - 16:00
                                  </div>
                                </div>
                              </td>
                              <td>
                                <span className="text-muted">Metrics</span>
                              </td>
                              <td>
                                <span className="text-danger">
                                  <i className="icon-stats-decline2 position-left" />
                                  - 5.78%
                                </span>
                              </td>
                              <td>
                                <h6 className="text-semibold">$970</h6>
                              </td>
                              <td>
                                <span className="label bg-success-400">
                                  Pending
                                </span>
                              </td>
                              <td className="text-center">
                                <ul className="icons-list">
                                  <li className="dropup">
                                    <a
                                      href="#"
                                      className="dropdown-toggle"
                                      data-toggle="dropdown"
                                    >
                                      <i className="icon-menu7" />
                                    </a>
                                    <ul className="dropdown-menu dropdown-menu-right">
                                      <li>
                                        <a href="#">
                                          <i className="icon-file-stats" /> View
                                          statement
                                        </a>
                                      </li>
                                      <li>
                                        <a href="#">
                                          <i className="icon-file-text2" /> Edit
                                          campaign
                                        </a>
                                      </li>
                                      <li>
                                        <a href="#">
                                          <i className="icon-file-locked" />
                                          Disable campaign
                                        </a>
                                      </li>
                                      <li className="divider" />
                                      <li>
                                        <a href="#">
                                          <i className="icon-gear" /> Settings
                                        </a>
                                      </li>
                                    </ul>
                                  </li>
                                </ul>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <div className="media-left media-middle">
                                  <a href="#">
                                    <img
                                      src="/images/brands/amazon.png"
                                      className="img-circle img-xs"
                                      
                                    />
                                  </a>
                                </div>
                                <div className="media-left">
                                  <div className>
                                    <a
                                      href="#"
                                      className="text-default text-semibold"
                                    >
                                      Amazon ads
                                    </a>
                                  </div>
                                  <div className="text-muted text-size-small">
                                    <span className="status-mark border-danger position-left" />
                                    18:00 - 19:00
                                  </div>
                                </div>
                              </td>
                              <td>
                                <span className="text-muted">Blueish</span>
                              </td>
                              <td>
                                <span className="text-success-600">
                                  <i className="icon-stats-growth2 position-left" />
                                  6.79%
                                </span>
                              </td>
                              <td>
                                <h6 className="text-semibold">$1,540</h6>
                              </td>
                              <td>
                                <span className="label bg-blue">Active</span>
                              </td>
                              <td className="text-center">
                                <ul className="icons-list">
                                  <li className="dropup">
                                    <a
                                      href="#"
                                      className="dropdown-toggle"
                                      data-toggle="dropdown"
                                    >
                                      <i className="icon-menu7" />
                                    </a>
                                    <ul className="dropdown-menu dropdown-menu-right">
                                      <li>
                                        <a href="#">
                                          <i className="icon-file-stats" /> View
                                          statement
                                        </a>
                                      </li>
                                      <li>
                                        <a href="#">
                                          <i className="icon-file-text2" /> Edit
                                          campaign
                                        </a>
                                      </li>
                                      <li>
                                        <a href="#">
                                          <i className="icon-file-locked" />
                                          Disable campaign
                                        </a>
                                      </li>
                                      <li className="divider" />
                                      <li>
                                        <a href="#">
                                          <i className="icon-gear" /> Settings
                                        </a>
                                      </li>
                                    </ul>
                                  </li>
                                </ul>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <div className="media-left media-middle">
                                  <a href="#">
                                    <img
                                      src="/images/brands/dribbble.png"
                                      className="img-circle img-xs"
                                      
                                    />
                                  </a>
                                </div>
                                <div className="media-left">
                                  <div className>
                                    <a
                                      href="#"
                                      className="text-default text-semibold"
                                    >
                                      Dribbble ads
                                    </a>
                                  </div>
                                  <div className="text-muted text-size-small">
                                    <span className="status-mark border-blue position-left" />
                                    20:00 - 21:00
                                  </div>
                                </div>
                              </td>
                              <td>
                                <span className="text-muted">Teamable</span>
                              </td>
                              <td>
                                <span className="text-danger">
                                  <i className="icon-stats-decline2 position-left" />
                                  9.83%
                                </span>
                              </td>
                              <td>
                                <h6 className="text-semibold">$8,350</h6>
                              </td>
                              <td>
                                <span className="label bg-danger">Closed</span>
                              </td>
                              <td className="text-center">
                                <ul className="icons-list">
                                  <li className="dropup">
                                    <a
                                      href="#"
                                      className="dropdown-toggle"
                                      data-toggle="dropdown"
                                    >
                                      <i className="icon-menu7" />
                                    </a>
                                    <ul className="dropdown-menu dropdown-menu-right">
                                      <li>
                                        <a href="#">
                                          <i className="icon-file-stats" /> View
                                          statement
                                        </a>
                                      </li>
                                      <li>
                                        <a href="#">
                                          <i className="icon-file-text2" /> Edit
                                          campaign
                                        </a>
                                      </li>
                                      <li>
                                        <a href="#">
                                          <i className="icon-file-locked" />
                                          Disable campaign
                                        </a>
                                      </li>
                                      <li className="divider" />
                                      <li>
                                        <a href="#">
                                          <i className="icon-gear" /> Settings
                                        </a>
                                      </li>
                                    </ul>
                                  </li>
                                </ul>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                    {/* /marketing campaigns */}
                    {/* Quick stats boxes */}
                    <div className="row">
                      <div className="col-lg-4">
                        {/* Members online */}
                        <div className="panel bg-teal-400">
                          <div className="panel-body">
                            <div className="heading-elements">
                              <span className="heading-text badge bg-teal-800">
                                +53,6%
                              </span>
                            </div>
                            <h3 className="no-margin">3,450</h3>
                            Members online
                            <div className="text-muted text-size-small">
                              489 avg
                            </div>
                          </div>
                          <div className="container-fluid">
                            <div id="members-online" />
                          </div>
                        </div>
                        {/* /members online */}
                      </div>
                      <div className="col-lg-4">
                        {/* Current server load */}
                        <div className="panel bg-pink-400">
                          <div className="panel-body">
                            <div className="heading-elements">
                              <ul className="icons-list">
                                <li className="dropdown">
                                  <a
                                    href="#"
                                    className="dropdown-toggle"
                                    data-toggle="dropdown"
                                  >
                                    <i className="icon-cog3" />
                                    <span className="caret" />
                                  </a>
                                  <ul className="dropdown-menu dropdown-menu-right">
                                    <li>
                                      <a href="#">
                                        <i className="icon-sync" /> Update data
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#">
                                        <i className="icon-list-unordered" />
                                        Detailed log
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#">
                                        <i className="icon-pie5" /> Statistics
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#">
                                        <i className="icon-cross3" /> Clear list
                                      </a>
                                    </li>
                                  </ul>
                                </li>
                              </ul>
                            </div>
                            <h3 className="no-margin">49.4%</h3>
                            Current server load
                            <div className="text-muted text-size-small">
                              34.6% avg
                            </div>
                          </div>
                          <div id="server-load" />
                        </div>
                        {/* /current server load */}
                      </div>
                      <div className="col-lg-4">
                        {/* Today's revenue */}
                        <div className="panel bg-blue-400">
                          <div className="panel-body">
                            <div className="heading-elements">
                              <ul className="icons-list">
                                <li>
                                  <a data-action="reload" />
                                </li>
                              </ul>
                            </div>
                            <h3 className="no-margin">$18,390</h3>
                            Today's revenue
                            <div className="text-muted text-size-small">
                              $37,578 avg
                            </div>
                          </div>
                          <div id="today-revenue" />
                        </div>
                        {/* /today's revenue */}
                      </div>
                    </div>
                    {/* /quick stats boxes */}
                    {/* Support tickets */}
                    <div className="panel panel-flat">
                      <div className="panel-heading">
                        <h6 className="panel-title">Support tickets</h6>
                        <div className="heading-elements">
                          <button
                            type="button"
                            className="btn btn-link daterange-ranges heading-btn text-semibold"
                          >
                            <i className="icon-calendar3 position-left" />
                            <span /> <b className="caret" />
                          </button>
                        </div>
                      </div>
                      <div className="table-responsive">
                        <table className="table table-xlg text-nowrap">
                          <tbody>
                            <tr>
                              <td className="col-md-4">
                                <div className="media-left media-middle">
                                  <div id="tickets-status" />
                                </div>
                                <div className="media-left">
                                  <h5 className="text-semibold no-margin">
                                    14,327
                                    <small className="text-success text-size-base">
                                      <i className="icon-arrow-up12" /> (+2.9%)
                                    </small>
                                  </h5>
                                  <span className="text-muted">
                                    <span className="status-mark border-success position-left" />
                                    Jun 16, 10:00 am
                                  </span>
                                </div>
                              </td>
                              <td className="col-md-3">
                                <div className="media-left media-middle">
                                  <a
                                    href="#"
                                    className="btn border-indigo-400 text-indigo-400 btn-flat btn-rounded btn-xs btn-icon"
                                  >
                                    <i className="icon-alarm-add" />
                                  </a>
                                </div>
                                <div className="media-left">
                                  <h5 className="text-semibold no-margin">
                                    1,132
                                    <small className="display-block no-margin">
                                      total tickets
                                    </small>
                                  </h5>
                                </div>
                              </td>
                              <td className="col-md-3">
                                <div className="media-left media-middle">
                                  <a
                                    href="#"
                                    className="btn border-indigo-400 text-indigo-400 btn-flat btn-rounded btn-xs btn-icon"
                                  >
                                    <i className="icon-spinner11" />
                                  </a>
                                </div>
                                <div className="media-left">
                                  <h5 className="text-semibold no-margin">
                                    06:25:00
                                    <small className="display-block no-margin">
                                      response time
                                    </small>
                                  </h5>
                                </div>
                              </td>
                              <td className="text-right col-md-2">
                                <a href="#" className="btn bg-teal-400">
                                  <i className="icon-statistics position-left" />
                                  Report
                                </a>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      <div className="table-responsive">
                        <table className="table text-nowrap">
                          <thead>
                            <tr>
                              <th style={{ width: 50 }}>Due</th>
                              <th style={{ width: 300 }}>User</th>
                              <th>Description</th>
                              <th className="text-center" style={{ width: 20 }}>
                                <i className="icon-arrow-down12" />
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr className="active border-double">
                              <td colSpan={3}>Active tickets</td>
                              <td className="text-right">
                                <span className="badge bg-blue">24</span>
                              </td>
                            </tr>
                            <tr>
                              <td className="text-center">
                                <h6 className="no-margin">
                                  12
                                  <small className="display-block text-size-small no-margin">
                                    hours
                                  </small>
                                </h6>
                              </td>
                              <td>
                                <div className="media-left media-middle">
                                  <a
                                    href="#"
                                    className="btn bg-teal-400 btn-rounded btn-icon btn-xs"
                                  >
                                    <span className="letter-icon" />
                                  </a>
                                </div>
                                <div className="media-body">
                                  <a
                                    href="#"
                                    className="display-inline-block text-default text-semibold letter-icon-title"
                                  >
                                    Annabelle Doney
                                  </a>
                                  <div className="text-muted text-size-small">
                                    <span className="status-mark border-blue position-left" />
                                    Active
                                  </div>
                                </div>
                              </td>
                              <td>
                                <a
                                  href="#"
                                  className="text-default display-inline-block"
                                >
                                  <span className="text-semibold">
                                    [#1183] Workaround for OS X selects printing
                                    bug
                                  </span>
                                  <span className="display-block text-muted">
                                    Chrome fixed the bug several versions ago,
                                    thus rendering this...
                                  </span>
                                </a>
                              </td>
                              <td className="text-center">
                                <ul className="icons-list">
                                  <li className="dropdown">
                                    <a
                                      href="#"
                                      className="dropdown-toggle"
                                      data-toggle="dropdown"
                                    >
                                      <i className="icon-menu7" />
                                    </a>
                                    <ul className="dropdown-menu dropdown-menu-right">
                                      <li>
                                        <a href="#">
                                          <i className="icon-undo" /> Quick
                                          reply
                                        </a>
                                      </li>
                                      <li>
                                        <a href="#">
                                          <i className="icon-history" /> Full
                                          history
                                        </a>
                                      </li>
                                      <li className="divider" />
                                      <li>
                                        <a href="#">
                                          <i className="icon-checkmark3 text-success" />
                                          Resolve issue
                                        </a>
                                      </li>
                                      <li>
                                        <a href="#">
                                          <i className="icon-cross2 text-danger" />
                                          Close issue
                                        </a>
                                      </li>
                                    </ul>
                                  </li>
                                </ul>
                              </td>
                            </tr>
                            <tr>
                              <td className="text-center">
                                <h6 className="no-margin">
                                  16
                                  <small className="display-block text-size-small no-margin">
                                    hours
                                  </small>
                                </h6>
                              </td>
                              <td>
                                <div className="media-left media-middle">
                                  <a href="#">
                                    <img
                                      src="/images/placeholder.jpg"
                                      className="img-circle img-xs"
                                      
                                    />
                                  </a>
                                </div>
                                <div className="media-body">
                                  <a
                                    href="#"
                                    className="display-inline-block text-default text-semibold letter-icon-title"
                                  >
                                    Chris Macintyre
                                  </a>
                                  <div className="text-muted text-size-small">
                                    <span className="status-mark border-blue position-left" />
                                    Active
                                  </div>
                                </div>
                              </td>
                              <td>
                                <a
                                  href="#"
                                  className="text-default display-inline-block"
                                >
                                  <span className="text-semibold">
                                    [#1249] Vertically center carousel controls
                                  </span>
                                  <span className="display-block text-muted">
                                    Try any carousel control and reduce the
                                    screen width below...
                                  </span>
                                </a>
                              </td>
                              <td className="text-center">
                                <ul className="icons-list">
                                  <li className="dropdown">
                                    <a
                                      href="#"
                                      className="dropdown-toggle"
                                      data-toggle="dropdown"
                                    >
                                      <i className="icon-menu7" />
                                    </a>
                                    <ul className="dropdown-menu dropdown-menu-right">
                                      <li>
                                        <a href="#">
                                          <i className="icon-undo" /> Quick
                                          reply
                                        </a>
                                      </li>
                                      <li>
                                        <a href="#">
                                          <i className="icon-history" /> Full
                                          history
                                        </a>
                                      </li>
                                      <li className="divider" />
                                      <li>
                                        <a href="#">
                                          <i className="icon-checkmark3 text-success" />
                                          Resolve issue
                                        </a>
                                      </li>
                                      <li>
                                        <a href="#">
                                          <i className="icon-cross2 text-danger" />
                                          Close issue
                                        </a>
                                      </li>
                                    </ul>
                                  </li>
                                </ul>
                              </td>
                            </tr>
                            <tr>
                              <td className="text-center">
                                <h6 className="no-margin">
                                  20
                                  <small className="display-block text-size-small no-margin">
                                    hours
                                  </small>
                                </h6>
                              </td>
                              <td>
                                <div className="media-left media-middle">
                                  <a
                                    href="#"
                                    className="btn bg-blue btn-rounded btn-icon btn-xs"
                                  >
                                    <span className="letter-icon" />
                                  </a>
                                </div>
                                <div className="media-body">
                                  <a
                                    href="#"
                                    className="display-inline-block text-default text-semibold letter-icon-title"
                                  >
                                    Robert Hauber
                                  </a>
                                  <div className="text-muted text-size-small">
                                    <span className="status-mark border-blue position-left" />
                                    Active
                                  </div>
                                </div>
                              </td>
                              <td>
                                <a
                                  href="#"
                                  className="text-default display-inline-block"
                                >
                                  <span className="text-semibold">
                                    [#1254] Inaccurate small pagination height
                                  </span>
                                  <span className="display-block text-muted">
                                    The height of pagination elements is not
                                    consistent with...
                                  </span>
                                </a>
                              </td>
                              <td className="text-center">
                                <ul className="icons-list">
                                  <li className="dropdown">
                                    <a
                                      href="#"
                                      className="dropdown-toggle"
                                      data-toggle="dropdown"
                                    >
                                      <i className="icon-menu7" />
                                    </a>
                                    <ul className="dropdown-menu dropdown-menu-right">
                                      <li>
                                        <a href="#">
                                          <i className="icon-undo" /> Quick
                                          reply
                                        </a>
                                      </li>
                                      <li>
                                        <a href="#">
                                          <i className="icon-history" /> Full
                                          history
                                        </a>
                                      </li>
                                      <li className="divider" />
                                      <li>
                                        <a href="#">
                                          <i className="icon-checkmark3 text-success" />
                                          Resolve issue
                                        </a>
                                      </li>
                                      <li>
                                        <a href="#">
                                          <i className="icon-cross2 text-danger" />
                                          Close issue
                                        </a>
                                      </li>
                                    </ul>
                                  </li>
                                </ul>
                              </td>
                            </tr>
                            <tr>
                              <td className="text-center">
                                <h6 className="no-margin">
                                  40
                                  <small className="display-block text-size-small no-margin">
                                    hours
                                  </small>
                                </h6>
                              </td>
                              <td>
                                <div className="media-left media-middle">
                                  <a
                                    href="#"
                                    className="btn bg-warning-400 btn-rounded btn-icon btn-xs"
                                  >
                                    <span className="letter-icon" />
                                  </a>
                                </div>
                                <div className="media-body">
                                  <a
                                    href="#"
                                    className="display-inline-block text-default text-semibold letter-icon-title"
                                  >
                                    Dex Sponheim
                                  </a>
                                  <div className="text-muted text-size-small">
                                    <span className="status-mark border-blue position-left" />
                                    Active
                                  </div>
                                </div>
                              </td>
                              <td>
                                <a
                                  href="#"
                                  className="text-default display-inline-block"
                                >
                                  <span className="text-semibold">
                                    [#1184] Round grid column gutter operations
                                  </span>
                                  <span className="display-block text-muted">
                                    Left rounds up, right rounds down. should
                                    keep everything...
                                  </span>
                                </a>
                              </td>
                              <td className="text-center">
                                <ul className="icons-list">
                                  <li className="dropdown">
                                    <a
                                      href="#"
                                      className="dropdown-toggle"
                                      data-toggle="dropdown"
                                    >
                                      <i className="icon-menu7" />
                                    </a>
                                    <ul className="dropdown-menu dropdown-menu-right">
                                      <li>
                                        <a href="#">
                                          <i className="icon-undo" /> Quick
                                          reply
                                        </a>
                                      </li>
                                      <li>
                                        <a href="#">
                                          <i className="icon-history" /> Full
                                          history
                                        </a>
                                      </li>
                                      <li className="divider" />
                                      <li>
                                        <a href="#">
                                          <i className="icon-checkmark3 text-success" />
                                          Resolve issue
                                        </a>
                                      </li>
                                      <li>
                                        <a href="#">
                                          <i className="icon-cross2 text-danger" />
                                          Close issue
                                        </a>
                                      </li>
                                    </ul>
                                  </li>
                                </ul>
                              </td>
                            </tr>
                            <tr className="active border-double">
                              <td colSpan={3}>Resolved tickets</td>
                              <td className="text-right">
                                <span className="badge bg-success">42</span>
                              </td>
                            </tr>
                            <tr>
                              <td className="text-center">
                                <i className="icon-checkmark3 text-success" />
                              </td>
                              <td>
                                <div className="media-left media-middle">
                                  <a
                                    href="#"
                                    className="btn bg-success-400 btn-rounded btn-icon btn-xs"
                                  >
                                    <span className="letter-icon" />
                                  </a>
                                </div>
                                <div className="media-body">
                                  <a
                                    href="#"
                                    className="display-inline-block text-default letter-icon-title"
                                  >
                                    Alan Macedo
                                  </a>
                                  <div className="text-muted text-size-small">
                                    <span className="status-mark border-success position-left" />
                                    Resolved
                                  </div>
                                </div>
                              </td>
                              <td>
                                <a
                                  href="#"
                                  className="text-default display-inline-block"
                                >
                                  [#1046] Avoid some unnecessary HTML string
                                  <span className="display-block text-muted">
                                    Rather than building a string of HTML and
                                    then parsing it...
                                  </span>
                                </a>
                              </td>
                              <td className="text-center">
                                <ul className="icons-list">
                                  <li className="dropdown">
                                    <a
                                      href="#"
                                      className="dropdown-toggle"
                                      data-toggle="dropdown"
                                    >
                                      <i className="icon-menu7" />
                                    </a>
                                    <ul className="dropdown-menu dropdown-menu-right">
                                      <li>
                                        <a href="#">
                                          <i className="icon-undo" /> Quick
                                          reply
                                        </a>
                                      </li>
                                      <li>
                                        <a href="#">
                                          <i className="icon-history" /> Full
                                          history
                                        </a>
                                      </li>
                                      <li className="divider" />
                                      <li>
                                        <a href="#">
                                          <i className="icon-plus3 text-blue" />
                                          Unresolve issue
                                        </a>
                                      </li>
                                      <li>
                                        <a href="#">
                                          <i className="icon-cross2 text-danger" />
                                          Close issue
                                        </a>
                                      </li>
                                    </ul>
                                  </li>
                                </ul>
                              </td>
                            </tr>
                            <tr>
                              <td className="text-center">
                                <i className="icon-checkmark3 text-success" />
                              </td>
                              <td>
                                <div className="media-left media-middle">
                                  <a
                                    href="#"
                                    className="btn bg-pink-400 btn-rounded btn-icon btn-xs"
                                  >
                                    <span className="letter-icon" />
                                  </a>
                                </div>
                                <div className="media-body">
                                  <a
                                    href="#"
                                    className="display-inline-block text-default letter-icon-title"
                                  >
                                    Brett Castellano
                                  </a>
                                  <div className="text-muted text-size-small">
                                    <span className="status-mark border-success position-left" />
                                    Resolved
                                  </div>
                                </div>
                              </td>
                              <td>
                                <a
                                  href="#"
                                  className="text-default display-inline-block"
                                >
                                  [#1038] Update json configuration
                                  <span className="display-block text-muted">
                                    The <code>files</code> property is necessary
                                    to override the files property...
                                  </span>
                                </a>
                              </td>
                              <td className="text-center">
                                <ul className="icons-list">
                                  <li className="dropdown">
                                    <a
                                      href="#"
                                      className="dropdown-toggle"
                                      data-toggle="dropdown"
                                    >
                                      <i className="icon-menu7" />
                                    </a>
                                    <ul className="dropdown-menu dropdown-menu-right">
                                      <li>
                                        <a href="#">
                                          <i className="icon-undo" /> Quick
                                          reply
                                        </a>
                                      </li>
                                      <li>
                                        <a href="#">
                                          <i className="icon-history" /> Full
                                          history
                                        </a>
                                      </li>
                                      <li className="divider" />
                                      <li>
                                        <a href="#">
                                          <i className="icon-plus3 text-blue" />
                                          Unresolve issue
                                        </a>
                                      </li>
                                      <li>
                                        <a href="#">
                                          <i className="icon-cross2 text-danger" />
                                          Close issue
                                        </a>
                                      </li>
                                    </ul>
                                  </li>
                                </ul>
                              </td>
                            </tr>
                            <tr>
                              <td className="text-center">
                                <i className="icon-checkmark3 text-success" />
                              </td>
                              <td>
                                <div className="media-left media-middle">
                                  <a href="#">
                                    <img
                                      src="/images/placeholder.jpg"
                                      className="img-circle img-xs"
                                      
                                    />
                                  </a>
                                </div>
                                <div className="media-body">
                                  <a
                                    href="#"
                                    className="display-inline-block text-default"
                                  >
                                    Roxanne Forbes
                                  </a>
                                  <div className="text-muted text-size-small">
                                    <span className="status-mark border-success position-left" />
                                    Resolved
                                  </div>
                                </div>
                              </td>
                              <td>
                                <a
                                  href="#"
                                  className="text-default display-inline-block"
                                >
                                  [#1034] Tooltip multiple event
                                  <span className="display-block text-muted">
                                    Fix behavior when using tooltips and
                                    popovers that are...
                                  </span>
                                </a>
                              </td>
                              <td className="text-center">
                                <ul className="icons-list">
                                  <li className="dropdown">
                                    <a
                                      href="#"
                                      className="dropdown-toggle"
                                      data-toggle="dropdown"
                                    >
                                      <i className="icon-menu7" />
                                    </a>
                                    <ul className="dropdown-menu dropdown-menu-right">
                                      <li>
                                        <a href="#">
                                          <i className="icon-undo" /> Quick
                                          reply
                                        </a>
                                      </li>
                                      <li>
                                        <a href="#">
                                          <i className="icon-history" /> Full
                                          history
                                        </a>
                                      </li>
                                      <li className="divider" />
                                      <li>
                                        <a href="#">
                                          <i className="icon-plus3 text-blue" />
                                          Unresolve issue
                                        </a>
                                      </li>
                                      <li>
                                        <a href="#">
                                          <i className="icon-cross2 text-danger" />
                                          Close issue
                                        </a>
                                      </li>
                                    </ul>
                                  </li>
                                </ul>
                              </td>
                            </tr>
                            <tr className="active border-double">
                              <td colSpan={3}>Closed tickets</td>
                              <td className="text-right">
                                <span className="badge bg-danger">37</span>
                              </td>
                            </tr>
                            <tr>
                              <td className="text-center">
                                <i className="icon-cross2 text-danger-400" />
                              </td>
                              <td>
                                <div className="media-left media-middle">
                                  <a href="#">
                                    <img
                                      src="/images/placeholder.jpg"
                                      className="img-circle img-xs"
                                      
                                    />
                                  </a>
                                </div>
                                <div className="media-body">
                                  <a
                                    href="#"
                                    className="display-inline-block text-default"
                                  >
                                    Mitchell Sitkin
                                  </a>
                                  <div className="text-muted text-size-small">
                                    <span className="status-mark border-danger position-left" />
                                    Closed
                                  </div>
                                </div>
                              </td>
                              <td>
                                <a
                                  href="#"
                                  className="text-default display-inline-block"
                                >
                                  [#1040] Account for static form controls in
                                  form group
                                  <span className="display-block text-muted">
                                    Resizes control label's font-size and
                                    account for the standard...
                                  </span>
                                </a>
                              </td>
                              <td className="text-center">
                                <ul className="icons-list">
                                  <li className="dropup">
                                    <a
                                      href="#"
                                      className="dropdown-toggle"
                                      data-toggle="dropdown"
                                    >
                                      <i className="icon-menu7" />
                                    </a>
                                    <ul className="dropdown-menu dropdown-menu-right">
                                      <li>
                                        <a href="#">
                                          <i className="icon-undo" /> Quick
                                          reply
                                        </a>
                                      </li>
                                      <li>
                                        <a href="#">
                                          <i className="icon-history" /> Full
                                          history
                                        </a>
                                      </li>
                                      <li className="divider" />
                                      <li>
                                        <a href="#">
                                          <i className="icon-reload- text-blue" />
                                          Reopen issue
                                        </a>
                                      </li>
                                      <li>
                                        <a href="#">
                                          <i className="icon-cross2 text-danger" />
                                          Close issue
                                        </a>
                                      </li>
                                    </ul>
                                  </li>
                                </ul>
                              </td>
                            </tr>
                            <tr>
                              <td className="text-center">
                                <i className="icon-cross2 text-danger" />
                              </td>
                              <td>
                                <div className="media-left media-middle">
                                  <a
                                    href="#"
                                    className="btn bg-brown-400 btn-rounded btn-icon btn-xs"
                                  >
                                    <span className="letter-icon" />
                                  </a>
                                </div>
                                <div className="media-body">
                                  <a
                                    href="#"
                                    className="display-inline-block text-default letter-icon-title"
                                  >
                                    Katleen Jensen
                                  </a>
                                  <div className="text-muted text-size-small">
                                    <span className="status-mark border-danger position-left" />
                                    Closed
                                  </div>
                                </div>
                              </td>
                              <td>
                                <a
                                  href="#"
                                  className="text-default display-inline-block"
                                >
                                  [#1038] Proper sizing of form control feedback
                                  <span className="display-block text-muted">
                                    Feedback icon sizing inside a larger/smaller
                                    form-group...
                                  </span>
                                </a>
                              </td>
                              <td className="text-center">
                                <ul className="icons-list">
                                  <li className="dropup">
                                    <a
                                      href="#"
                                      className="dropdown-toggle"
                                      data-toggle="dropdown"
                                    >
                                      <i className="icon-menu7" />
                                    </a>
                                    <ul className="dropdown-menu dropdown-menu-right">
                                      <li>
                                        <a href="#">
                                          <i className="icon-undo" /> Quick
                                          reply
                                        </a>
                                      </li>
                                      <li>
                                        <a href="#">
                                          <i className="icon-history" /> Full
                                          history
                                        </a>
                                      </li>
                                      <li className="divider" />
                                      <li>
                                        <a href="#">
                                          <i className="icon-plus3 text-blue" />
                                          Unresolve issue
                                        </a>
                                      </li>
                                      <li>
                                        <a href="#">
                                          <i className="icon-cross2 text-danger" />
                                          Close issue
                                        </a>
                                      </li>
                                    </ul>
                                  </li>
                                </ul>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                    {/* /support tickets */}
                    {/* Latest posts */}
                    <div className="panel panel-flat">
                      <div className="panel-heading">
                        <h6 className="panel-title">Latest posts</h6>
                        <div className="heading-elements">
                          <ul className="icons-list">
                            <li>
                              <a data-action="collapse" />
                            </li>
                            <li>
                              <a data-action="reload" />
                            </li>
                            <li>
                              <a data-action="close" />
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="panel-body">
                        <div className="row">
                          <div className="col-lg-6">
                            <ul className="media-list content-group">
                              <li className="media stack-media-on-mobile">
                                <div className="media-left">
                                  <div className="thumb">
                                    <a href="#">
                                      <img
                                        src="/images/placeholder.jpg"
                                        className="img-responsive img-rounded media-preview"
                                        
                                      />
                                      <span className="zoom-image">
                                        <i className="icon-play3" />
                                      </span>
                                    </a>
                                  </div>
                                </div>
                                <div className="media-body">
                                  <h6 className="media-heading">
                                    <a href="#">Up unpacked friendly</a>
                                  </h6>
                                  <ul className="list-inline list-inline-separate text-muted mb-5">
                                    <li>
                                      <i className="icon-book-play position-left" />
                                      Video tutorials
                                    </li>
                                    <li>14 minutes ago</li>
                                  </ul>
                                  The him father parish looked has sooner.
                                  Attachment frequently gay terminated son...
                                </div>
                              </li>
                              <li className="media stack-media-on-mobile">
                                <div className="media-left">
                                  <div className="thumb">
                                    <a href="#">
                                      <img
                                        src="/images/placeholder.jpg"
                                        className="img-responsive img-rounded media-preview"
                                        
                                      />
                                      <span className="zoom-image">
                                        <i className="icon-play3" />
                                      </span>
                                    </a>
                                  </div>
                                </div>
                                <div className="media-body">
                                  <h6 className="media-heading">
                                    <a href="#">It allowance prevailed</a>
                                  </h6>
                                  <ul className="list-inline list-inline-separate text-muted mb-5">
                                    <li>
                                      <i className="icon-book-play position-left" />
                                      Video tutorials
                                    </li>
                                    <li>12 days ago</li>
                                  </ul>
                                  eration literature to or an sympathize mr
                                  imprudence. Of is ferrars subject as
                                  enjoyed...
                                </div>
                              </li>
                            </ul>
                          </div>
                          <div className="col-lg-6">
                            <ul className="media-list content-group">
                              <li className="media stack-media-on-mobile">
                                <div className="media-left">
                                  <div className="thumb">
                                    <a href="#">
                                      <img
                                        src="/images/placeholder.jpg"
                                        className="img-responsive img-rounded media-preview"
                                        
                                      />
                                      <span className="zoom-image">
                                        <i className="icon-play3" />
                                      </span>
                                    </a>
                                  </div>
                                </div>
                                <div className="media-body">
                                  <h6 className="media-heading">
                                    <a href="#">Case read they must</a>
                                  </h6>
                                  <ul className="list-inline list-inline-separate text-muted mb-5">
                                    <li>
                                      <i className="icon-book-play position-left" />
                                      Video tutorials
                                    </li>
                                    <li>20 hours ago</li>
                                  </ul>
                                  On it differed repeated wandered required in.
                                  Then girl neat why yet knew rose spot...
                                </div>
                              </li>
                              <li className="media stack-media-on-mobile">
                                <div className="media-left">
                                  <div className="thumb">
                                    <a href="#">
                                      <img
                                        src="/images/placeholder.jpg"
                                        className="img-responsive img-rounded media-preview"
                                        
                                      />
                                      <span className="zoom-image">
                                        <i className="icon-play3" />
                                      </span>
                                    </a>
                                  </div>
                                </div>
                                <div className="media-body">
                                  <h6 className="media-heading">
                                    <a href="#">Too carriage attended</a>
                                  </h6>
                                  <ul className="list-inline list-inline-separate text-muted mb-5">
                                    <li>
                                      <i className="icon-book-play position-left" />
                                      FAQ section
                                    </li>
                                    <li>2 days ago</li>
                                  </ul>
                                  Marianne or husbands if at stronger ye.
                                  Considered is as middletons uncommonly...
                                </div>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* /latest posts */}
                  </div>
                  <div className="col-lg-4">
                    {/* Progress counters */}
                    <div className="row">
                      <div className="col-md-6">
                        {/* Available hours */}
                        <div className="panel text-center">
                          <div className="panel-body">
                            <div className="heading-elements">
                              <ul className="icons-list">
                                <li className="dropdown text-muted">
                                  <a
                                    href="#"
                                    className="dropdown-toggle"
                                    data-toggle="dropdown"
                                  >
                                    <i className="icon-cog3" />
                                    <span className="caret" />
                                  </a>
                                  <ul className="dropdown-menu dropdown-menu-right">
                                    <li>
                                      <a href="#">
                                        <i className="icon-sync" /> Update data
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#">
                                        <i className="icon-list-unordered" />
                                        Detailed log
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#">
                                        <i className="icon-pie5" /> Statistics
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#">
                                        <i className="icon-cross3" /> Clear list
                                      </a>
                                    </li>
                                  </ul>
                                </li>
                              </ul>
                            </div>
                            {/* Progress counter */}
                            <div
                              className="content-group-sm svg-center position-relative"
                              id="hours-available-progress"
                            />
                            {/* /progress counter */}
                            {/* Bars */}
                            <div id="hours-available-bars" />
                            {/* /bars */}
                          </div>
                        </div>
                        {/* /available hours */}
                      </div>
                      <div className="col-md-6">
                        {/* Productivity goal */}
                        <div className="panel text-center">
                          <div className="panel-body">
                            <div className="heading-elements">
                              <ul className="icons-list">
                                <li className="dropdown text-muted">
                                  <a
                                    href="#"
                                    className="dropdown-toggle"
                                    data-toggle="dropdown"
                                  >
                                    <i className="icon-cog3" />
                                    <span className="caret" />
                                  </a>
                                  <ul className="dropdown-menu dropdown-menu-right">
                                    <li>
                                      <a href="#">
                                        <i className="icon-sync" /> Update data
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#">
                                        <i className="icon-list-unordered" />
                                        Detailed log
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#">
                                        <i className="icon-pie5" /> Statistics
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#">
                                        <i className="icon-cross3" /> Clear list
                                      </a>
                                    </li>
                                  </ul>
                                </li>
                              </ul>
                            </div>
                            {/* Progress counter */}
                            <div
                              className="content-group-sm svg-center position-relative"
                              id="goal-progress"
                            />
                            {/* /progress counter */}
                            {/* Bars */}
                            <div id="goal-bars" />
                            {/* /bars */}
                          </div>
                        </div>
                        {/* /productivity goal */}
                      </div>
                    </div>
                    {/* /progress counters */}
                    {/* Daily sales */}
                    <div className="panel panel-flat">
                      <div className="panel-heading">
                        <h6 className="panel-title">Daily sales stats</h6>
                        <div className="heading-elements">
                          <span className="heading-text">
                            Balance:
                            <span className="text-bold text-danger-600 position-right">
                              $4,378
                            </span>
                          </span>
                          <ul className="icons-list">
                            <li className="dropdown text-muted">
                              <a
                                href="#"
                                className="dropdown-toggle"
                                data-toggle="dropdown"
                              >
                                <i className="icon-cog3" />
                                <span className="caret" />
                              </a>
                              <ul className="dropdown-menu dropdown-menu-right">
                                <li>
                                  <a href="#">
                                    <i className="icon-sync" /> Update data
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <i className="icon-list-unordered" />
                                    Detailed log
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <i className="icon-pie5" /> Statistics
                                  </a>
                                </li>
                                <li className="divider" />
                                <li>
                                  <a href="#">
                                    <i className="icon-cross3" /> Clear list
                                  </a>
                                </li>
                              </ul>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="panel-body">
                        <div id="sales-heatmap" />
                      </div>
                      <div className="table-responsive">
                        <table className="table text-nowrap">
                          <thead>
                            <tr>
                              <th>Application</th>
                              <th>Time</th>
                              <th>Price</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>
                                <div className="media-left media-middle">
                                  <a
                                    href="#"
                                    className="btn bg-primary-400 btn-rounded btn-icon btn-xs"
                                  >
                                    <span className="letter-icon" />
                                  </a>
                                </div>
                                <div className="media-body">
                                  <div className="media-heading">
                                    <a href="#" className="letter-icon-title">
                                      Sigma application
                                    </a>
                                  </div>
                                  <div className="text-muted text-size-small">
                                    <i className="icon-checkmark3 text-size-mini position-left" />
                                    New order
                                  </div>
                                </div>
                              </td>
                              <td>
                                <span className="text-muted text-size-small">
                                  06:28 pm
                                </span>
                              </td>
                              <td>
                                <h6 className="text-semibold no-margin">
                                  $49.90
                                </h6>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <div className="media-left media-middle">
                                  <a
                                    href="#"
                                    className="btn bg-danger-400 btn-rounded btn-icon btn-xs"
                                  >
                                    <span className="letter-icon" />
                                  </a>
                                </div>
                                <div className="media-body">
                                  <div className="media-heading">
                                    <a href="#" className="letter-icon-title">
                                      Alpha application
                                    </a>
                                  </div>
                                  <div className="text-muted text-size-small">
                                    <i className="icon-spinner11 text-size-mini position-left" />
                                    Renewal
                                  </div>
                                </div>
                              </td>
                              <td>
                                <span className="text-muted text-size-small">
                                  04:52 pm
                                </span>
                              </td>
                              <td>
                                <h6 className="text-semibold no-margin">
                                  $90.50
                                </h6>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <div className="media-left media-middle">
                                  <a
                                    href="#"
                                    className="btn bg-indigo-400 btn-rounded btn-icon btn-xs"
                                  >
                                    <span className="letter-icon" />
                                  </a>
                                </div>
                                <div className="media-body">
                                  <div className="media-heading">
                                    <a href="#" className="letter-icon-title">
                                      Delta application
                                    </a>
                                  </div>
                                  <div className="text-muted text-size-small">
                                    <i className="icon-lifebuoy text-size-mini position-left" />
                                    Support
                                  </div>
                                </div>
                              </td>
                              <td>
                                <span className="text-muted text-size-small">
                                  01:26 pm
                                </span>
                              </td>
                              <td>
                                <h6 className="text-semibold no-margin">
                                  $60.00
                                </h6>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <div className="media-left media-middle">
                                  <a
                                    href="#"
                                    className="btn bg-success-400 btn-rounded btn-icon btn-xs"
                                  >
                                    <span className="letter-icon" />
                                  </a>
                                </div>
                                <div className="media-body">
                                  <div className="media-heading">
                                    <a href="#" className="letter-icon-title">
                                      Omega application
                                    </a>
                                  </div>
                                  <div className="text-muted text-size-small">
                                    <i className="icon-lifebuoy text-size-mini position-left" />
                                    Support
                                  </div>
                                </div>
                              </td>
                              <td>
                                <span className="text-muted text-size-small">
                                  11:46 am
                                </span>
                              </td>
                              <td>
                                <h6 className="text-semibold no-margin">
                                  $55.00
                                </h6>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <div className="media-left media-middle">
                                  <a
                                    href="#"
                                    className="btn bg-danger-400 btn-rounded btn-icon btn-xs"
                                  >
                                    <span className="letter-icon" />
                                  </a>
                                </div>
                                <div className="media-body">
                                  <div className="media-heading">
                                    <a href="#" className="letter-icon-title">
                                      Alpha application
                                    </a>
                                  </div>
                                  <div className="text-muted text-size-small">
                                    <i className="icon-spinner11 text-size-mini position-left" />
                                    Renewal
                                  </div>
                                </div>
                              </td>
                              <td>
                                <span className="text-muted text-size-small">
                                  10:29 am
                                </span>
                              </td>
                              <td>
                                <h6 className="text-semibold no-margin">
                                  $90.50
                                </h6>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                    {/* /daily sales */}
                    {/* My messages */}
                    <div className="panel panel-flat">
                      <div className="panel-heading">
                        <h6 className="panel-title">My messages</h6>
                        <div className="heading-elements">
                          <span className="heading-text">
                            <i className="icon-history text-warning position-left" />
                            Jul 7, 10:30
                          </span>
                          <span className="label bg-success heading-text">
                            Online
                          </span>
                        </div>
                      </div>
                      {/* Numbers */}
                      <div className="container-fluid">
                        <div className="row text-center">
                          <div className="col-md-4">
                            <div className="content-group">
                              <h6 className="text-semibold no-margin">
                                <i className="icon-clipboard3 position-left text-slate" />
                                2,345
                              </h6>
                              <span className="text-muted text-size-small">
                                this week
                              </span>
                            </div>
                          </div>
                          <div className="col-md-4">
                            <div className="content-group">
                              <h6 className="text-semibold no-margin">
                                <i className="icon-calendar3 position-left text-slate" />
                                3,568
                              </h6>
                              <span className="text-muted text-size-small">
                                this month
                              </span>
                            </div>
                          </div>
                          <div className="col-md-4">
                            <div className="content-group">
                              <h6 className="text-semibold no-margin">
                                <i className="icon-comments position-left text-slate" />
                                32,693
                              </h6>
                              <span className="text-muted text-size-small">
                                all messages
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* /numbers */}
                      {/* Area chart */}
                      <div id="messages-stats" />
                      {/* /area chart */}
                      {/* Tabs */}
                      <ul className="nav nav-lg nav-tabs nav-justified no-margin no-border-radius bg-indigo-400 border-top border-top-indigo-300">
                        <li className="active">
                          <a
                            href="#messages-tue"
                            className="text-size-small text-uppercase"
                            data-toggle="tab"
                          >
                            Tuesday
                          </a>
                        </li>
                        <li>
                          <a
                            href="#messages-mon"
                            className="text-size-small text-uppercase"
                            data-toggle="tab"
                          >
                            Monday
                          </a>
                        </li>
                        <li>
                          <a
                            href="#messages-fri"
                            className="text-size-small text-uppercase"
                            data-toggle="tab"
                          >
                            Friday
                          </a>
                        </li>
                      </ul>
                      {/* /tabs */}
                      {/* Tabs content */}
                      <div className="tab-content">
                        <div
                          className="tab-pane active fade in has-padding"
                          id="messages-tue"
                        >
                          <ul className="media-list">
                            <li className="media">
                              <div className="media-left">
                                <img
                                  src="/images/placeholder.jpg"
                                  className="img-circle img-xs"
                                  
                                />
                                <span className="badge bg-danger-400 media-badge">
                                  8
                                </span>
                              </div>
                              <div className="media-body">
                                <a href="#">
                                  James Alexander
                                  <span className="media-annotation pull-right">
                                    14:58
                                  </span>
                                </a>
                                <span className="display-block text-muted">
                                  The constitutionally inventoried
                                  precariously...
                                </span>
                              </div>
                            </li>
                            <li className="media">
                              <div className="media-left">
                                <img
                                  src="/images/placeholder.jpg"
                                  className="img-circle img-xs"
                                  
                                />
                                <span className="badge bg-danger-400 media-badge">
                                  6
                                </span>
                              </div>
                              <div className="media-body">
                                <a href="#">
                                  Margo Baker
                                  <span className="media-annotation pull-right">
                                    12:16
                                  </span>
                                </a>
                                <span className="display-block text-muted">
                                  Pinched a well more moral chose goodness...
                                </span>
                              </div>
                            </li>
                            <li className="media">
                              <div className="media-left">
                                <img
                                  src="/images/placeholder.jpg"
                                  className="img-circle img-xs"
                                  
                                />
                              </div>
                              <div className="media-body">
                                <a href="#">
                                  Jeremy Victorino
                                  <span className="media-annotation pull-right">
                                    09:48
                                  </span>
                                </a>
                                <span className="display-block text-muted">
                                  Pert thickly mischievous clung frowned well...
                                </span>
                              </div>
                            </li>
                            <li className="media">
                              <div className="media-left">
                                <img
                                  src="/images/placeholder.jpg"
                                  className="img-circle img-xs"
                                  
                                />
                              </div>
                              <div className="media-body">
                                <a href="#">
                                  Beatrix Diaz
                                  <span className="media-annotation pull-right">
                                    05:54
                                  </span>
                                </a>
                                <span className="display-block text-muted">
                                  Nightingale taped hello bucolic fussily
                                  cardinal...
                                </span>
                              </div>
                            </li>
                            <li className="media">
                              <div className="media-left">
                                <img
                                  src="/images/placeholder.jpg"
                                  className="img-circle img-xs"
                                  
                                />
                              </div>
                              <div className="media-body">
                                <a href="#">
                                  Richard Vango
                                  <span className="media-annotation pull-right">
                                    01:43
                                  </span>
                                </a>
                                <span className="display-block text-muted">
                                  Amidst roadrunner distantly pompously where...
                                </span>
                              </div>
                            </li>
                          </ul>
                        </div>
                        <div
                          className="tab-pane fade has-padding"
                          id="messages-mon"
                        >
                          <ul className="media-list">
                            <li className="media">
                              <div className="media-left">
                                <img
                                  src="/images/placeholder.jpg"
                                  className="img-circle img-sm"
                                  
                                />
                              </div>
                              <div className="media-body">
                                <a href="#">
                                  Isak Temes
                                  <span className="media-annotation pull-right">
                                    Tue, 19:58
                                  </span>
                                </a>
                                <span className="display-block text-muted">
                                  Reasonable palpably rankly expressly grimy...
                                </span>
                              </div>
                            </li>
                            <li className="media">
                              <div className="media-left">
                                <img
                                  src="/images/placeholder.jpg"
                                  className="img-circle img-sm"
                                  
                                />
                              </div>
                              <div className="media-body">
                                <a href="#">
                                  Vittorio Cosgrove
                                  <span className="media-annotation pull-right">
                                    Tue, 16:35
                                  </span>
                                </a>
                                <span className="display-block text-muted">
                                  Arguably therefore more unexplainable fumed...
                                </span>
                              </div>
                            </li>
                            <li className="media">
                              <div className="media-left">
                                <img
                                  src="/images/placeholder.jpg"
                                  className="img-circle img-sm"
                                  
                                />
                              </div>
                              <div className="media-body">
                                <a href="#">
                                  Hilary Talaugon
                                  <span className="media-annotation pull-right">
                                    Tue, 12:16
                                  </span>
                                </a>
                                <span className="display-block text-muted">
                                  Nicely unlike porpoise a kookaburra past
                                  more...
                                </span>
                              </div>
                            </li>
                            <li className="media">
                              <div className="media-left">
                                <img
                                  src="/images/placeholder.jpg"
                                  className="img-circle img-sm"
                                  
                                />
                              </div>
                              <div className="media-body">
                                <a href="#">
                                  Bobbie Seber
                                  <span className="media-annotation pull-right">
                                    Tue, 09:20
                                  </span>
                                </a>
                                <span className="display-block text-muted">
                                  Before visual vigilantly fortuitous
                                  tortoise...
                                </span>
                              </div>
                            </li>
                            <li className="media">
                              <div className="media-left">
                                <img
                                  src="/images/placeholder.jpg"
                                  className="img-circle img-sm"
                                  
                                />
                              </div>
                              <div className="media-body">
                                <a href="#">
                                  Wher Laws
                                  <span className="media-annotation pull-right">
                                    Tue, 03:29
                                  </span>
                                </a>
                                <span className="display-block text-muted">
                                  Far affecting more leered unerringly
                                  dishonest...
                                </span>
                              </div>
                            </li>
                          </ul>
                        </div>
                        <div
                          className="tab-pane fade has-padding"
                          id="messages-fri"
                        >
                          <ul className="media-list">
                            <li className="media">
                              <div className="media-left">
                                <img
                                  src="/images/placeholder.jpg"
                                  className="img-circle img-sm"
                                  
                                />
                              </div>
                              <div className="media-body">
                                <a href="#">
                                  Owen Stretch
                                  <span className="media-annotation pull-right">
                                    Mon, 18:12
                                  </span>
                                </a>
                                <span className="display-block text-muted">
                                  Tardy rattlesnake seal raptly earthworm...
                                </span>
                              </div>
                            </li>
                            <li className="media">
                              <div className="media-left">
                                <img
                                  src="/images/placeholder.jpg"
                                  className="img-circle img-sm"
                                  
                                />
                              </div>
                              <div className="media-body">
                                <a href="#">
                                  Jenilee Mcnair
                                  <span className="media-annotation pull-right">
                                    Mon, 14:03
                                  </span>
                                </a>
                                <span className="display-block text-muted">
                                  Since hello dear pushed amid darn trite...
                                </span>
                              </div>
                            </li>
                            <li className="media">
                              <div className="media-left">
                                <img
                                  src="/images/placeholder.jpg"
                                  className="img-circle img-sm"
                                  
                                />
                              </div>
                              <div className="media-body">
                                <a href="#">
                                  Alaster Jain
                                  <span className="media-annotation pull-right">
                                    Mon, 13:59
                                  </span>
                                </a>
                                <span className="display-block text-muted">
                                  Dachshund cardinal dear next jeepers well...
                                </span>
                              </div>
                            </li>
                            <li className="media">
                              <div className="media-left">
                                <img
                                  src="/images/placeholder.jpg"
                                  className="img-circle img-sm"
                                  
                                />
                              </div>
                              <div className="media-body">
                                <a href="#">
                                  Sigfrid Thisted
                                  <span className="media-annotation pull-right">
                                    Mon, 09:26
                                  </span>
                                </a>
                                <span className="display-block text-muted">
                                  Lighted wolf yikes less lemur crud grunted...
                                </span>
                              </div>
                            </li>
                            <li className="media">
                              <div className="media-left">
                                <img
                                  src="/images/placeholder.jpg"
                                  className="img-circle img-sm"
                                  
                                />
                              </div>
                              <div className="media-body">
                                <a href="#">
                                  Sherilyn Mckee
                                  <span className="media-annotation pull-right">
                                    Mon, 06:38
                                  </span>
                                </a>
                                <span className="display-block text-muted">
                                  Less unicorn a however careless husky...
                                </span>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                      {/* /tabs content */}
                    </div>
                    {/* /my messages */}
                    {/* Daily financials */}
                    <div className="panel panel-flat">
                      <div className="panel-heading">
                        <h6 className="panel-title">Daily financials</h6>
                        <div className="heading-elements">
                          <form className="heading-form" action="#">
                            <div className="form-group">
                              <label className="checkbox checkbox-inline checkbox-switchery checkbox-right switchery-xs">
                                <input
                                  type="checkbox"
                                  className="switcher"
                                  id="reime"
                                  defaultChecked="checked"
                                />
                                Reime
                              </label>
                            </div>
                          </form>
                          <span className="badge bg-danger-400 heading-text">
                            +86
                          </span>
                        </div>
                      </div>
                      <div className="panel-body">
                        <div className="content-group-xs" id="bullets" />
                        <ul className="media-list">
                          <li className="media">
                            <div className="media-left">
                              <a
                                href="#"
                                className="btn border-pink text-pink btn-flat btn-rounded btn-icon btn-xs"
                              >
                                <i className="icon-statistics" />
                              </a>
                            </div>
                            <div className="media-body">
                              Stats for July, 6: 1938 orders, $4220 revenue
                              <div className="media-annotation">
                                2 hours ago
                              </div>
                            </div>
                            <div className="media-right media-middle">
                              <ul className="icons-list">
                                <li>
                                  <a href="#">
                                    <i className="icon-arrow-right13" />
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </li>
                          <li className="media">
                            <div className="media-left">
                              <a
                                href="#"
                                className="btn border-success text-success btn-flat btn-rounded btn-icon btn-xs"
                              >
                                <i className="icon-checkmark3" />
                              </a>
                            </div>
                            <div className="media-body">
                              Invoices <a href="#">#4732</a> and
                              <a href="#">#4734</a> have been paid
                              <div className="media-annotation">
                                Dec 18, 18:36
                              </div>
                            </div>
                            <div className="media-right media-middle">
                              <ul className="icons-list">
                                <li>
                                  <a href="#">
                                    <i className="icon-arrow-right13" />
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </li>
                          <li className="media">
                            <div className="media-left">
                              <a
                                href="#"
                                className="btn border-primary text-primary btn-flat btn-rounded btn-icon btn-xs"
                              >
                                <i className="icon-alignment-unalign" />
                              </a>
                            </div>
                            <div className="media-body">
                              Affiliate commission for June has been paid
                              <div className="media-annotation">
                                36 minutes ago
                              </div>
                            </div>
                            <div className="media-right media-middle">
                              <ul className="icons-list">
                                <li>
                                  <a href="#">
                                    <i className="icon-arrow-right13" />
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </li>
                          <li className="media">
                            <div className="media-left">
                              <a
                                href="#"
                                className="btn border-warning-400 text-warning-400 btn-flat btn-rounded btn-icon btn-xs"
                              >
                                <i className="icon-spinner11" />
                              </a>
                            </div>
                            <div className="media-body">
                              Order <a href="#">#37745</a> from July, 1st has
                              been refunded
                              <div className="media-annotation">
                                4 minutes ago
                              </div>
                            </div>
                            <div className="media-right media-middle">
                              <ul className="icons-list">
                                <li>
                                  <a href="#">
                                    <i className="icon-arrow-right13" />
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </li>
                          <li className="media">
                            <div className="media-left">
                              <a
                                href="#"
                                className="btn border-teal-400 text-teal btn-flat btn-rounded btn-icon btn-xs"
                              >
                                <i className="icon-redo2" />
                              </a>
                            </div>
                            <div className="media-body">
                              Invoice <a href="#">#4769</a> has been sent to
                              <a href="#">Robert Smith</a>
                              <div className="media-annotation">
                                Dec 12, 05:46
                              </div>
                            </div>
                            <div className="media-right media-middle">
                              <ul className="icons-list">
                                <li>
                                  <a href="#">
                                    <i className="icon-arrow-right13" />
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                    {/* /daily financials */}
                  </div>
                </div>
                {/* /dashboard content */}
                {/* Footer */}
                <div className="footer text-muted">
                  © 2015. <a href="#">Limitless Web App Kit</a> by
                  <a href="http://themeforest.net/user/Kopyov" target="_blank">
                    Eugene Kopyov
                  </a>
                </div>
                {/* /footer */}
              </div>
              {/* /content area */}
            </div>
            {/* /main content */}
          </div>
          {/* /page content */}
        </div>
        {/* /page container */}
      </React.Fragment>
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
