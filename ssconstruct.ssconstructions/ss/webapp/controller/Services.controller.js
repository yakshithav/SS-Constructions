sap.ui.define(
  ["sap/ui/core/mvc/Controller", "sap/m/MessageToast"],
  function (Controller, MessageToast) {
    "use strict";

    return Controller.extend("ss.controller.Services", {
      // Navigation methods
      onNavHome: function () {
        this.getOwnerComponent().getRouter().navTo("RouteHome");
      },

      onNavAbout: function () {
        this.getOwnerComponent().getRouter().navTo("RouteAbout");
      },

      onNavPortfolio: function () {
        this.getOwnerComponent().getRouter().navTo("RoutePortfolio");
      },

      onNavProjects: function () {
        this.getOwnerComponent().getRouter().navTo("RouteProjects");
      },

      onNavContact: function () {
        this.getOwnerComponent().getRouter().navTo("RouteContactUs");
      },

      // Contact methods
      onCallPress: function () {
        window.open("tel:+918867506736", "_self");
      },

      onWhatsAppPress: function () {
        window.open("https://wa.me/+917019089330", "_blank");
      },

      onEmailPress: function () {
        window.open("mailto:sidducivil07@gmail.com", "_self");
      },

      // Services button handler
      onKnowMore: function () {
        MessageToast.show("More information about this service");
      },
      // ADDED: Mobile menu popover handler
      onMobileMenuPress: function (oEvent) {
        var oButton = oEvent.getSource();
        var oPopover = this.byId("mobileNavPopover");

        if (oPopover) {
          oPopover.openBy(oButton);
        } else {
          MessageToast.show("Navigation menu not available");
        }
      },

      // ADDED: Social media handlers
      onFacebookPress: function () {
        window.open("https://facebook.com/yourpage", "_blank");
      },

      onInstagramPress: function () {
        window.open("https://instagram.com/yourprofile", "_blank");
      },

      onYouTubePress: function () {
        window.open("https://youtube.com/yourchannel", "_blank");
      },
    });
  }
);
