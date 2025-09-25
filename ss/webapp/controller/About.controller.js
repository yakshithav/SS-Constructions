sap.ui.define(["sap/ui/core/mvc/Controller"], function (Controller) {
  "use strict";

  return Controller.extend("ss.controller.About", {
    onInit: function () {
      // Optional: Put About page initialization logic here
    },
    onKnowMore: function () {
      window.location.href = "tel:+918867506736";
      window.location.href = "https://wa.me/918867506736";
      window.location.href = "mailto:sidducivil07@gmail.com";
    },
  });
});
