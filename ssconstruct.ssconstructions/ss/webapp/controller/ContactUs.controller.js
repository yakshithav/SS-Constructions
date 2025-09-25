sap.ui.define([
  "sap/ui/core/mvc/Controller",
  "sap/ui/core/routing/History",
  "sap/m/MessageToast"
], function (Controller, History, MessageToast) {
  "use strict";

  return Controller.extend("ss.controller.ContactUs", {
    onInit: function () {
      // Optional init logic
    },

    onNavBack: function () {
      var oHistory = History.getInstance();
      var sPreviousHash = oHistory.getPreviousHash();

      if (sPreviousHash !== undefined) {
        window.history.go(-1);
      } else {
        this.getOwnerComponent().getRouter().navTo("About", {}, true);
      }
    },

    onPhonePress: function () {
      // Show a popup message saying dialing
      MessageToast.show("Dialing +91 8867506736...");
      window.open("tel:+918867506736");
    },

    onWhatsappPress: function () {
      // Open WhatsApp chat
      var phoneNumber = "+917019089330";
      var url = "https://wa.me/" + phoneNumber.replace(/\D/g, "");
      window.open(url, "_blank");
    },

    onEmailPress: function () {
      // Open default email client
      var email = "sidducivil07@gmail.com";
      var subject = "Inquiry";
      var body = "Hello, I would like to contact you regarding...";
      var mailto = "mailto:" + email + "?subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(body);
      window.location.href = mailto;
    }
  });
});
