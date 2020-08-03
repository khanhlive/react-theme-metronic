import AppConsts from './appconst';

var abp = window.abp;

export function L(key, sourceName) {
  let localizationSourceName = AppConsts.localization.defaultLocalizationSourceName;
  return abp.localization.localize(key, sourceName ? sourceName : localizationSourceName);
}

export function isGranted(permissionName) {
  return abp.auth.isGranted(permissionName);
}
