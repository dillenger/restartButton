var { ExtensionCommon } = ChromeUtils.importESModule("resource://gre/modules/ExtensionCommon.sys.mjs");
var { MailUtils } = ChromeUtils.importESModule("resource:///modules/MailUtils.sys.mjs");

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
