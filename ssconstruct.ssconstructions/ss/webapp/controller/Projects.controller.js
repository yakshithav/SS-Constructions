sap.ui.define([
  "sap/ui/core/mvc/Controller",
  "sap/m/MessageToast"
], function (Controller, MessageToast) {
  "use strict";

  return Controller.extend("ss.controller.Projects", {

    onInit: function () {
      // Initialization logic if needed
    },

    onProjectPress: function (oEvent) {
      var oItem = oEvent.getSource(); // clicked StandardListItem
      var aCustomData = oItem.getCustomData();
      var sImageUrl = null;

      aCustomData.forEach(function (oData) {
        if (oData.getKey() === "image") {
          sImageUrl = oData.getValue();
        }
      });

      if (!sImageUrl) return; // no image found

      var oList = oItem.getParent();
      var oImage;

      if (oList.getId().includes("recentProjectList")) {
        oImage = this.byId("recentProjectImage");
      } else if (oList.getId().includes("completedProjectList")) {
        oImage = this.byId("completedProjectImage");
      }

      if (oImage) {
        oImage.setSrc(sImageUrl);
        oImage.setVisible(true);
      }
    },

    onCompletedPress: function () {
      MessageToast.show("Showing completed projects");
      this.byId("completedProjectsPanel").setVisible(true);
      this.byId("recentProjectsPanel").setVisible(false);
    },

    onOngoingPress: function () {
      MessageToast.show("Showing ongoing projects");
      this.byId("recentProjectsPanel").setVisible(true);
      this.byId("completedProjectsPanel").setVisible(false);
    }

  });
});
