var { ExtensionCommon } = ChromeUtils.import("resource://gre/modules/ExtensionCommon.jsm");
var Services = globalThis.Services || ChromeUtils.import("resource://gre/modules/Services.jsm");
var { MailUtils } = ChromeUtils.import("resource:///modules/MailUtils.jsm");

var restartButtonApi = class extends ExtensionCommon.ExtensionAPI {
  getAPI(context) {
    return {
      restartButtonApi: {
        async restartButton() {
          MailUtils.restartApplication();
        },
      },
    };
  }
};
