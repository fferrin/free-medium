const freediumUrl = "https://freedium.cfd/";
const regex = /(https:\/\/(?:\w+\.)?medium\.com\/@[^\/]+\/*)/g;

window.onclick = function (event) {
  if (event.target instanceof HTMLAnchorElement && !event.target.href.startsWith(freediumUrl)) {
    event.target.href = event.target.href.replace(regex, freediumUrl);
  }
};
