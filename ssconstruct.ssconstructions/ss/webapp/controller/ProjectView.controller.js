sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"
], function(Controller, JSONModel) {
    "use strict";

    return Controller.extend("myui5app.controller.MainView", {
        onInit: function () {
            // Project data
            var oData = {
                recentProjects: [
                    {day:"04", month:"NOV", year:"2024", title:"Swetha S V Chalukya Nagar Itakal"},
                    {day:"10", month:"AUG", year:"2024", title:"Shivrudraswamy and Basavaraj Brother's Bangalore"},
                    {day:"12", month:"MAY", year:"2024", title:"Sajjala Shree Math Kandagal-Ilkal"},
                    {day:"04", month:"MAY", year:"2024", title:"Basraj S. & Shivarudra Swami Bellikeri"}
                ],
                completedProjects: [
                    {day:"14", month:"FEB", year:"2022", title:"Satish Sir and Mamatha Madam"},
                    {day:"12", month:"MAR", year:"2023", title:"Sri Hampi Virupaksha Nilaya"},
                    {day:"13", month:"JUN", year:"2023", title:"Sri Sherbhadreshware Nilaya"},
                    {day:"27", month:"JUN", year:"2021", title:"Ramesh - Patil"}
                ]
            };
            var oModel = new JSONModel(oData);
            this.getView().setModel(oModel, "projects");
        }
    });
});
