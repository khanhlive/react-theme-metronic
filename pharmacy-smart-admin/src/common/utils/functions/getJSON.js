import request from "then-request";

export default function(url) {
  return request("GET", url, { json: true }).then(res => {
    return JSON.parse(res.getBody());
  });
}
