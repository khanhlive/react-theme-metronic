import AuthStore from "./AuthStore";
export default function InitStore() {
  return {
    storeapp: new AuthStore(),
  };
}
