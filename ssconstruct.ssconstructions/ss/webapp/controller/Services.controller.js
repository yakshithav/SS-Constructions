sap.ui.define(
  ["sap/ui/core/mvc/Controller", "sap/m/MessageToast"],
  function (Controller, MessageToast) {
    "use strict";

    return Controller.extend("ss.controller.Services", {
      onInit: function () {
        // Any setup logic when the Services view loads
      },

      onKnowMore: function () {
        MessageToast.show("Know More clicked!");
      },

      onViewProjects: function () {
        // Navigate to Projects route
        this.getOwnerComponent().getRouter().navTo("RouteProjects");
      },
    });
  }
);
