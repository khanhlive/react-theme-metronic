import $ from "jquery";

import "smartadmin-plugins/es6/SmartNotification.es6";

export function smallBox(data, cb) {
  $.smallBox(data, cb);
}

export function bigBox(data, cb) {
  $.bigBox(data, cb);
}

export function SmartMessageBox(data, cb) {
  $.SmartMessageBox(data, cb);
}
