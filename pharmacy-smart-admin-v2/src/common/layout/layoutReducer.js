import { config } from "../../config/config";

import * as layout from "./LayoutActions";


const smartSkin = layout.getSmartSkin()
const initialState = {
  smartSkin: smartSkin,
  skin: config.skins.find(skin => skin.name === smartSkin),
  skins: config.skins,
  fixedHeader: localStorage.getItem("sm-fixed-header") === "true",
  fixedNavigation: localStorage.getItem("sm-fixed-navigation") === "true",
  fixedRibbon: localStorage.getItem("sm-fixed-ribbon") === "true",
  fixedPageFooter: localStorage.getItem("sm-fixed-page-footer") === "true",
  insideContainer: localStorage.getItem("sm-inside-container") === "true",
  rtl: localStorage.getItem("sm-rtl") === "true",
  menuOnTop: localStorage.getItem("sm-menu-on-top") === "true",
  colorblindFriendly: localStorage.getItem("sm-colorblind-friendly") === "true",

  shortcutOpen: false,
  isMobile: /iphone|ipad|ipod|android|blackberry|mini|windows\sce|palm/i.test(
    navigator.userAgent.toLowerCase()
  ),
  device: "",

  mobileViewActivated: false,
  menuCollapsed: false,
  menuMinified: false
};

export function layoutReducer(state = initialState, action) {
  const _state = { ...state };
  switch (action.type) {
    case layout.SMART_SKIN:
      return { ...state, skin: action.payload, smartSkin: action.payload.name };

    case layout.TOGGLE_FIXED_HEADER:
      _state.fixedHeader = !_state.fixedHeader;
      if (_state.fixedHeader === false) {
        _state.fixedRibbon = false;
        _state.fixedNavigation = false;
      }

      return _state;

    case layout.TOGGLE_FIXED_NAVIGATION:
      _state.fixedNavigation = !_state.fixedNavigation;

      if (_state.fixedNavigation) {
        _state.insideContainer = false;
        _state.fixedHeader = true;
      } else {
        _state.fixedRibbon = false;
      }

      return _state;

    case layout.TOGGLE_FIXED_RIBBON:
      _state.fixedRibbon = !_state.fixedRibbon;
      if (_state.fixedRibbon) {
        _state.fixedHeader = true;
        _state.fixedNavigation = true;
        _state.insideContainer = false;
      }

      return _state;

    case layout.TOGGLE_FIXED_PAGE_FOOTER:
      return {
        ...state,
        fixedPageFooter: !state.fixedPageFooter
      };

    case layout.TOGGLE_INSIDE_CONTAINER:
      _state.insideContainer = !_state.insideContainer;
      if (_state.insideContainer) {
        _state.fixedRibbon = false;
        _state.fixedNavigation = false;
      }

      return _state;

    case layout.TOGGLE_RTL:
      return { ...state, rtl: !state.rtl };

    case layout.TOGGLE_MENU_ON_TOP:
      return { ...state, menuOnTop: !state.menuOnTop };

    case layout.TOGGLE_COLORBLIND_FRIENDLY:
      return { ...state, colorblindFriendly: !state.colorblindFriendly };

    case layout.TOGGLE_COLLAPSE_MENU:
      return {
        ...state,
        menuCollapsed: !state.menuCollapsed
      };

    case layout.TOGGLE_MENU_MINIFIED:
      return {
        ...state,
        menuMinified: state.menuMinified
      };

    case layout.TOGGLE_SHORTCUT:
      return {
        ...state,
        shortcutOpen: state.shortcutOpen
      };

    default:
      return state;
  }
}
