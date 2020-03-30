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
                /*{
                     title: "NPS Score",
                     id: 1,
                     uniqueID: "c10ab8d1-84d8-4b73-9948-666b4a1024c4",
                     data: {
                         npsScore: 60,
                         detractors: 10,
                         passives: 50,
                         promoters: 40
                     }
                 },*/
                /*{
                    title: "NPS Second Score",
                    id: 1,
                    uniqueID: "f80ab8d1-84d8-4b73-9948-666b4a1024c4",
                    data: {
                        npsScore: 23,
                        detractors: 8,
                        passives: 72,
                        promoters: 20
                    }
                },*/
                /*{
                    title: "My CES Score",
                    id: 2,
                    uniqueID: "6669f8bd-0096-4b6f-b48f-e29a03955bb5",
                    data: {
                        cesScore: 3.81,
                        agree: 42.45,
                        disagree: 56.55
                    }
                },*/
                /*{
                    title: "CSAT Score",
                    id: 3,
                    uniqueID: "29f8b5da-170d-4c64-928e-457bc8a337b2",
                    data: {
                        csatScore: 42.86,
                        satisfied: 42.86,
                        unsatisfied: 28.57,
                        passive: 28.57
                    }
                },*/
                {
                    title: "General Response Rate",
                    id: 4,
                    uniqueID: "66250e4e-7ccb-4e7f-bb28-a48698de1ff3",
                    data: {
                        answers: 1501,
                        respondents: 7566,
                        unsubscribed: 0
                    }
                },
                {
                    title: "Text Response Rate",
                    id: 5,
                    uniqueID: "e0f33724-311c-445d-9864-9419144a4473",
                    data: {
                        answers: 1501,
                        text: 982
                    }
                },
                {
                    title: "Last Responses",
                    id: 6,
                    uniqueID: "e0529b62-89a9-48ea-879b-63de560174a3",
                    data: {
                        answers: 1,
                        yesterday: 0,
                        lastweek: 0
                    }
                },
                /*{
                title: "My Cool Piechart",
                id: 99,
                uniqueID: "piechart",
                data:[]
                }*/
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
