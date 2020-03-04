import { Component, OnInit } from '@angular/core';
import * as Highcharts from "highcharts/highcharts";

@Component({
    selector: 'app-my-page',
    templateUrl: './my-page.component.html',
    styleUrls: ['./my-page.component.scss']
})
export class MyPageComponent implements OnInit {

    myHtml: string = "";

    aJsonString;

    constructor() { }

    ngOnInit() {
        this.aJsonString = {
            dashboardName: "My Dashboard",
            widgets: [
                //{
                //    title: "NPS Score",
                //    id: 1,
                //    uniqueID: "c10ab8d1-84d8-4b73-9948-666b4a1024c4",
                //    data: {
                //        npsScore: 60,
                //        detractors: 10,
                //        passives: 50,
                //        promoters: 40
                //    }
                //},
                //{
                //    title: "NPS Second Score",
                //    id: 1,
                //    uniqueID: "f80ab8d1-84d8-4b73-9948-666b4a1024c4",
                //    data: {
                //        npsScore: 23,
                //        detractors: 8,
                //        passives: 72,
                //        promoters: 20
                //    }
                //},
                //{
                //    title: "My CES Score",
                //    id: 2,
                //    uniqueID: "6669f8bd-0096-4b6f-b48f-e29a03955bb5",
                //    data: {
                //        cesScore: 3.81,
                //        agree: 42.45,
                //        disagree: 56.55
                //    }
                //},
                //{
                //    title: "CSAT Score",
                //    id: 3,
                //    uniqueID: "29f8b5da-170d-4c64-928e-457bc8a337b2",
                //    data: {
                //        csatScore: 42.86,
                //        satisfied: 42.86,
                //        unsatisfied: 28.57,
                //        passive: 28.57
                //    }
                //},
                {
                    title: "My Cool Piechart",
                    id: 99,
                    uniqueID: "piechart",
                    data:[]
                }
            ]
        }
    }

    uiOnGenerateHtmlClicked() {
        this.myHtml = "";

        this.myHtml = `<html>
<head>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
    <script src="https://code.highcharts.com/highcharts.js"></script>
    <link rel="stylesheet" href="https://cdn2.hubspot.net/hubfs/2050789/app-pdfgen/bvc-pdfgen-test-1.css">

    <script>var testObj = `
            + JSON.stringify(this.aJsonString) +
    `
</script>
</head>
    <body>
        <div id="pdf-start">
            <div class="header"></div>
            <div class="title">
                <h2>Custom Dashboard PDF for<br /> <span id="pdf-title"></span></h2>
            </div>
        </div>
        <div id="cd-content"></div>
        <div class="footer"></div>
        <script src="https://cdn2.hubspot.net/hubfs/2050789/app-pdfgen/bvc-pdfgen-test.js"></script>
    </body>
</html>`;
    }
}
