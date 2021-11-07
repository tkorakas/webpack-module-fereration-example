import { registerApplication, start } from "single-spa";

registerApplication({
  name: "@tkorakas/nav",
  app: () => System.import("@tkorakas/nav"),
  activeWhen: ["/"],
});

registerApplication({
  name: "@tkorakas/home",
  app: () => System.import("@tkorakas/home"),
  activeWhen: ["/"],
});

start({
  urlRerouteOnly: true,
});
