sap.ui.define(
  ["sap/ui/core/mvc/Controller", "sap/m/MessageToast"],
  function (Controller, MessageToast) {
    "use strict";

    return Controller.extend("ss.controller.ContactUs", {
      onInit: function () {
        this._router = this.getOwnerComponent().getRouter();
      },

      // Navigation
      onNavHome: function () {
        this._router.navTo("RouteHome");
      },

      onNavAbout: function () {
        this._router.navTo("RouteAbout");
      },

      onNavServices: function () {
        this._router.navTo("RouteServices");
      },

      onNavPortfolio: function () {
        this._router.navTo("RoutePortfolio");
      },

      onNavProjects: function () {
        this._router.navTo("RouteProjects");
      },

      // Contact methods
      onCallPress: function () {
        window.open("tel:+918867506736", "_self");
      },

      onWhatsAppPress: function () {
        window.open("https://wa.me/917019089330", "_blank");
      },

      onEmailPress: function () {
        window.open("mailto:sidducivil07@gmail.com", "_self");
      },

      // Form submission
      onSubmitForm: function () {
        MessageToast.show("Thank you! We'll contact you soon.");
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
