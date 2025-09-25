sap.ui.define(["sap/ui/core/mvc/Controller"], function (Controller) {
  "use strict";

  return Controller.extend("ss.controller.Home", {
    onInit: function () {
      var oCarousel = this.byId("homeCarousel");
      var iIndex = 0;
      setInterval(function () {
        if (oCarousel) {
          var aPages = oCarousel.getPages();
          iIndex = (iIndex + 1) % aPages.length;
          oCarousel.setActivePage(aPages[iIndex]);
        }
      }, 5000);
    },
    onKnowMore: function () {
      window.location.href = "tel:+918867506736";
      window.location.href = "https://wa.me/918867506736";
      window.location.href = "mailto:sidducivil07@gmail.com";
    },
  });
});
