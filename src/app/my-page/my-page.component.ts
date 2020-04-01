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
                /*{
                    title: "General Response Rate",
                    id: 4,
                    uniqueID: "66250e4e-7ccb-4e7f-bb28-a48698de1ff3",
                    data: {
                        answers: 1501,
                        respondents: 7566,
                        unsubscribed: 0
                    }
                },*/
                /*{
                    title: "Text Response Rate",
                    id: 5,
                    uniqueID: "e0f33724-311c-445d-9864-9419144a4473",
                    data: {
                        answers: 1501,
                        text: 982
                    }
                },*/
                /*{
                    title: "Last Responses",
                    id: 6,
                    uniqueID: "e0529b62-89a9-48ea-879b-63de560174a3",
                    data: {
                        answers: 1,
                        yesterday: 0,
                        lastweek: 0
                    }
                },*/
                /*{
                    title: "Repartition NPS Score",
                    id: 7,
                    uniqueID: "4ac80b68-219a-415b-b980-0c9fe31d6451",
                    data: {
                        totalAnswers: 0,
                        score0: 3.56,
                        score1: 1.13,
                        score2: 1.62,
                        score3: 1.46,
                        score4: 1.29,
                        score5: 2.75,
                        score6: 3.56,
                        score7: 13.59,
                        score8: 25.24,
                        score9: 18.77,
                        score10: 27.02
                    }
                },*/
                /*{
                    title: "Repartition CES Score",
                    id: 8,
                    uniqueID: "0571aa6e-16b2-48de-a2c6-262811dc188d",
                    data: {
                        score1: 20,
                        score2: 0,
                        score3: 20,
                        score4: 20,
                        score5: 20,
                        score6: 20,
                        score7: 0
                    }
                },*/
                /*{
                    title: "Repartition CSAT Score",
                    id: 9,
                    uniqueID: "3d2aae13-8949-4139-a2aa-132b7b8a65b2",
                    data: {
                        score1: 28.57,
                        score2: 0,
                        score3: 28.57,
                        score4: 0,
                        score5: 42.86
                    }
                },*/
                /*{
                    title: "Repartition 0-10 Score",
                    id: 10,
                    uniqueID: "ba69ba0f-07d0-42f5-a67a-92b5595b9fd4",
                    data: {
                        totalAnswers: 8,
                        score0: 0,
                        score1: 0,
                        score2: 0,
                        score3: 12.5,
                        score4: 12.5,
                        score5: 0,
                        score6: 12.5,
                        score7: 12.5,
                        score8: 25,
                        score9: 0,
                        score10: 25
                    }
                }*/
                /*{
                    title: "Evolution NPS Score",
                    id: 11,
                    uniqueID: "ba80ba0f-07d0-42f5-a67a-92b5595b9fd4",
                    data: [
                        { totalSubmitted: 140, nps: 32.0, detractors: 12.14, passive: 43.57, promoters: 44.29, date: "2016-08-07T00:00:00" },
                        { totalSubmitted: 140, nps: 28.0, detractors: 20.0, passive: 32.14, promoters: 47.86, date: "2016-08-14T00:00:00" },
                        { totalSubmitted: 140, nps: 31.0, detractors: 16.43, passive: 36.43, promoters: 47.14, date: "2016-08-21T00:00:00" },
                        { totalSubmitted: 140, nps: 33.0, detractors: 11.43, passive: 44.28, promoters: 44.29, date: "2016-08-28T00:00:00" },
                        { totalSubmitted: 57, nps: 28.0, detractors: 17.54, passive: 36.85, promoters: 45.61, date: "2016-09-04T00:00:00" },
                        { totalSubmitted: 5, nps: 0.0, detractors: 40.0, passive: 20.0, promoters: 40.0, date: "2017-09-17T00:00:00" },
                        { totalSubmitted: 1, nps: -100.0, detractors: 100.0, passive: 0.0, promoters: 0.0, date: "2017-09-24T00:00:00" },
                        { totalSubmitted: 1, nps: -100.0, detractors: 100.0, passive: 0.0, promoters: 0.0, date: "2019-12-15T00:00:00" }
                    ]
                },*/
                /*{
                    title: "Evolution CES Score",
                    id: 12,
                    uniqueID: "ba90ba0f-07d0-42f5-a67a-92b5595b9fd4",
                    data: [
                        {
                            "totalSubmitted": 5,
                            "ces": 4.8,
                            "disagree": 40.0,
                            "agree": 60.0,
                            "date": "2017-09-17T00:00:00"
                        },
                        {
                            "totalSubmitted": 1,
                            "ces": 5.0,
                            "disagree": 0.0,
                            "agree": 100.0,
                            "date": "2017-09-24T00:00:00"
                        },
                        {
                            "totalSubmitted": 15,
                            "ces": 4.6,
                            "disagree": 46.67,
                            "agree": 53.33,
                            "date": "2017-10-01T00:00:00"
                        }
                    ]
                },*/
                /*{
                    title: "Evolution CSAT Score",
                    id: 13,
                    uniqueID: "ba50ba0f-07d0-42f5-a67a-92b5595b9fd4",
                    data: [
                        {
                            "totalSubmitted": 19,
                            "csat": 42.11,
                            "satisfied": 42.11,
                            "unsatisfied": 36.84,
                            "passive": 21.05,
                            "date": "2017-10-15T00:00:00"
                        },
                        {
                            "totalSubmitted": 1,
                            "csat": 0.0,
                            "satisfied": 0.0,
                            "unsatisfied": 100.0,
                            "passive": 0.0,
                            "date": "2017-12-03T00:00:00"
                        },
                        {
                            "totalSubmitted": 1,
                            "csat": 100.0,
                            "satisfied": 100.0,
                            "unsatisfied": 0.0,
                            "passive": 0.0,
                            "date": "2018-02-04T00:00:00"
                        }
                    ]
                },*/
                /*{
                    title: "Evolution 0-10 Score",
                    id: 14,
                    uniqueID: "ba40ba0f-07d0-42f5-a67a-92b5595b9fd4",
                    data: [
                        {
                            count: 10,
                            date: "2018-12-09T00:00:00"
                        },
                        {
                            count: 8,
                            date: "2017-12-03T00:00:00"
                        },
                        {
                            count: 5,
                            date: "2017-09-17T00:00:00"
                        }
                    ]
                },*/
                {
                    title: "Isaac Pie Chart",
                    id: 15,
                    uniqueID: "068e1ca7-5ee1-499d-bbf2-c081c97afb80",
                    polarityEnabled: true,
                    data: [{
                        name: "Dinges",
                        total: 7,
                        positive: 3,
                        neutral: 0,
                        negative: 4,
                        color: "#855be9",
                        items: [
                            {
                                name: "Exclusiveness",
                                total: 1,
                                positive: 1,
                                neutral: 0,
                                negative: 0,
                                color: "#6bca9e",
                                percentage: 0,
                                uniqueID: "e3d60f22-c973-499a-b01d-18bf8262194e"
                            },
                            {
                                name: "Quality",
                                total: 5,
                                positive: 1,
                                neutral: 0,
                                negative: 4,
                                color: "#74EDBB",
                                percentage: 0,
                                uniqueID: "fc0ecb57-c044-4fd0-8444-b071c347f4c3"
                            },
                            {
                                name: "Variety",
                                total: 1,
                                positive: 1,
                                neutral: 0,
                                negative: 0,
                                color: "#D06E51",
                                percentage: 0,
                                uniqueID: "9f4aeecf-1cc4-4a3d-9a87-6bac6cc3d6f5"
                            },
                            {
                                name: "Exclusiveness",
                                total: 1,
                                positive: 1,
                                neutral: 0,
                                negative: 0,
                                color: "#6bca9e",
                                percentage: 0,
                                uniqueID: "e3d60f22-c973-499a-b01d-18bf8262194e"
                            },
                            {
                                name: "Quality",
                                total: 5,
                                positive: 1,
                                neutral: 0,
                                negative: 4,
                                color: "#74EDBB",
                                percentage: 0,
                                uniqueID: "fc0ecb57-c044-4fd0-8444-b071c347f4c3"
                            },
                            {
                                name: "Variety",
                                total: 1,
                                positive: 1,
                                neutral: 0,
                                negative: 0,
                                color: "#D06E51",
                                percentage: 0,
                                uniqueID: "9f4aeecf-1cc4-4a3d-9a87-6bac6cc3d6f5"
                            },
                            {
                                name: "Exclusiveness",
                                total: 1,
                                positive: 1,
                                neutral: 0,
                                negative: 0,
                                color: "#6bca9e",
                                percentage: 0,
                                uniqueID: "e3d60f22-c973-499a-b01d-18bf8262194e"
                            },
                            {
                                name: "Quality",
                                total: 5,
                                positive: 1,
                                neutral: 0,
                                negative: 4,
                                color: "#74EDBB",
                                percentage: 0,
                                uniqueID: "fc0ecb57-c044-4fd0-8444-b071c347f4c3"
                            }
                        ]
                    }]
                }
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
    <script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.24.0/moment.min.js"></script>
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
