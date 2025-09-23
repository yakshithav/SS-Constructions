sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "sap/m/MessageToast"
], function(Controller, JSONModel, MessageToast) {
    "use strict";

    return Controller.extend("myui5app.controller.Contact", {
        onInit: function () {
            var oData = {
                name: "",
                email: "",
                phone: "",
                message: ""
            };
            var oModel = new JSONModel(oData);
            this.getView().setModel(oModel, "contact");
        },

        onSubmit: function () {
            var oData = this.getView().getModel("contact").getData();
            MessageToast.show("Message submitted:\n" +
                              "Name: " + oData.name + "\n" +
                              "Email: " + oData.email + "\n" +
                              "Phone: " + oData.phone);
        },

        onCall: function () {
            MessageToast.show("Calling the company...");
        },

        onWhatsapp: function () {
            MessageToast.show("Opening WhatsApp...");
        },

        onEmail: function () {
            MessageToast.show("Opening Email...");
        }
    });
});
