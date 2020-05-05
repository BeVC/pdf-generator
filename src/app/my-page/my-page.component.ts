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
                {
                     title: "NPS Score",
                     id: 1,
                     uniqueID: "c10ab8d1-84d8-4b73-9948-666b4a1024c4",
                     data: {
                         npsScore: 60,
                         detractors: 10,
                         passives: 50,
                         promoters: 40
                     }
                 },
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
                {
                    title: "My CES Score",
                    id: 2,
                    uniqueID: "6669f8bd-0096-4b6f-b48f-e29a03955bb5",
                    data: {
                        cesScore: 3.81,
                        agree: 42.45,
                        disagree: 56.55
                    }
                },
                {
                    title: "CSAT Score",
                    id: 3,
                    uniqueID: "29f8b5da-170d-4c64-928e-457bc8a337b2",
                    data: {
                        csatScore: 42.86,
                        satisfied: 42.86,
                        unsatisfied: 28.57,
                        passive: 28.57
                    }
                },
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
                /*{
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
                },*/
                /*{
                    title: "Isaac Line Chart",
                    id: 16,
                    uniqueID: "fc0ecb57-c044-4fd0-8444-b071c347f4c3",
                    data: [
                        {
                            date: "2016-10-17T00:00:00",
                            mostMentioned: [
                                {
                                    name: "App",
                                    total: 1,
                                    positive: 0,
                                    neutral: 0,
                                    negative: 1,
                                    color: "#057004",
                                    items: [
                                        {
                                            name: "General",
                                            total: 1,
                                            positive: 0,
                                            neutral: 0,
                                            negative: 1,
                                            color: "#57a908",
                                            percentage: 100.0,
                                            uniqueID: "e753a1cd-07b5-4992-be2f-11e52b0e0bcf"
                                        }
                                    ],
                                    totalMentionsAllCategories: 109,
                                    uniqueID: "9160649d-5f3d-40a7-90be-8224667d867a"
                                }]
                        },
                        {
                            date: "2016-10-24T00:00:00",
                            mostMentioned: [
                                {
                                    name: "App",
                                    total: 4,
                                    positive: 0,
                                    neutral: 2,
                                    negative: 2,
                                    color: "#057004",
                                    items: [
                                        {
                                            name: "General",
                                            total: 4,
                                            positive: 0,
                                            neutral: 2,
                                            negative: 2,
                                            color: "#57a908",
                                            percentage: 100.0,
                                            uniqueID: "e753a1cd-07b5-4992-be2f-11e52b0e0bcf"
                                        }
                                    ],
                                    totalMentionsAllCategories: 109,
                                    uniqueID: "9160649d-5f3d-40a7-90be-8224667d867a"
                                }]
                        },
                        {
                            date: "2016-10-31T00:00:00",
                            mostMentioned: [
                                {
                                    name: "App",
                                    total: 11,
                                    positive: 8,
                                    neutral: 1,
                                    negative: 2,
                                    color: "#057004",
                                    items: [
                                        {
                                            name: "General",
                                            total: 9,
                                            positive: 7,
                                            neutral: 0,
                                            negative: 2,
                                            color: "#57a908",
                                            percentage: 81.82,
                                            uniqueID: "e753a1cd-07b5-4992-be2f-11e52b0e0bcf"
                                        },
                                        {
                                            name: "Information",
                                            total: 2,
                                            positive: 1,
                                            neutral: 1,
                                            negative: 0,
                                            color: "#f5d142",
                                            percentage: 18.18,
                                            uniqueID: "de275faf-d685-4333-9563-6e4d439303ad"
                                        }
                                    ],
                                    totalMentionsAllCategories: 109,
                                    uniqueID: "9160649d-5f3d-40a7-90be-8224667d867a"
                                }]
                        },
                        {
                            date: "2016-11-07T00:00:00",
                            mostMentioned: [
                                {
                                    name: "App",
                                    total: 7,
                                    positive: 4,
                                    neutral: 1,
                                    negative: 2,
                                    color: "#057004",
                                    items: [
                                        {
                                            name: "General",
                                            total: 7,
                                            positive: 4,
                                            neutral: 1,
                                            negative: 2,
                                            color: "#57a908",
                                            percentage: 100.0,
                                            uniqueID: "e753a1cd-07b5-4992-be2f-11e52b0e0bcf"
                                        }
                                    ],
                                    totalMentionsAllCategories: 109,
                                    uniqueID: "9160649d-5f3d-40a7-90be-8224667d867a"
                                }]
                        },
                        {
                            date: "2016-11-14T00:00:00",
                            mostMentioned: [
                                {
                                    name: "App",
                                    total: 25,
                                    positive: 13,
                                    neutral: 3,
                                    negative: 9,
                                    color: "#057004",
                                    items: [
                                        {
                                            name: "General",
                                            total: 20,
                                            positive: 10,
                                            neutral: 3,
                                            negative: 7,
                                            color: "#57a908",
                                            percentage: 80.0,
                                            uniqueID: "e753a1cd-07b5-4992-be2f-11e52b0e0bcf"
                                        },
                                        {
                                            name: "Speed",
                                            total: 3,
                                            positive: 1,
                                            neutral: 0,
                                            negative: 2,
                                            color: "#74ff00",
                                            percentage: 12.00,
                                            uniqueID: "a5aa4d78-5b11-469a-8fc1-880705dfab25"
                                        },
                                        {
                                            name: "Information",
                                            total: 1,
                                            positive: 1,
                                            neutral: 0,
                                            negative: 0,
                                            color: "#f5d142",
                                            percentage: 4.00,
                                            uniqueID: "de275faf-d685-4333-9563-6e4d439303ad"
                                        },
                                        {
                                            name: "User-friendliness",
                                            total: 1,
                                            positive: 1,
                                            neutral: 0,
                                            negative: 0,
                                            color: "#9F8EE8",
                                            percentage: 4.00,
                                            uniqueID: "1b1c0ac2-080a-4257-908a-3bc3dfb2707e"
                                        }
                                    ],
                                    totalMentionsAllCategories: 109,
                                    uniqueID: "9160649d-5f3d-40a7-90be-8224667d867a"
                                }]
                        },
                        {
                            date: "2016-11-21T00:00:00",
                            mostMentioned: [
                                {
                                    name: "App",
                                    total: 41,
                                    positive: 20,
                                    neutral: 4,
                                    negative: 17,
                                    color: "#057004",
                                    items: [
                                        {
                                            name: "General",
                                            total: 34,
                                            positive: 19,
                                            neutral: 3,
                                            negative: 12,
                                            color: "#57a908",
                                            percentage: 82.93,
                                            uniqueID: "e753a1cd-07b5-4992-be2f-11e52b0e0bcf"
                                        },
                                        {
                                            name: "User-friendliness",
                                            total: 1,
                                            positive: 1,
                                            neutral: 0,
                                            negative: 0,
                                            color: "#9F8EE8",
                                            percentage: 2.44,
                                            uniqueID: "1b1c0ac2-080a-4257-908a-3bc3dfb2707e"
                                        },
                                        {
                                            name: "Information",
                                            total: 4,
                                            positive: 0,
                                            neutral: 1,
                                            negative: 3,
                                            color: "#f5d142",
                                            percentage: 9.76,
                                            uniqueID: "de275faf-d685-4333-9563-6e4d439303ad"
                                        },
                                        {
                                            name: "Speed",
                                            total: 2,
                                            positive: 0,
                                            neutral: 0,
                                            negative: 2,
                                            color: "#74ff00",
                                            percentage: 4.88,
                                            uniqueID: "a5aa4d78-5b11-469a-8fc1-880705dfab25"
                                        }
                                    ],
                                    totalMentionsAllCategories: 109,
                                    uniqueID: "9160649d-5f3d-40a7-90be-8224667d867a"
                                }]
                        },
                        {
                            date: "2016-11-28T00:00:00",
                            mostMentioned: [
                                {
                                    name: "App",
                                    total: 20,
                                    positive: 13,
                                    neutral: 3,
                                    negative: 4,
                                    color: "#057004",
                                    items: [
                                        {
                                            name: "General",
                                            total: 18,
                                            positive: 11,
                                            neutral: 3,
                                            negative: 4,
                                            color: "#57a908",
                                            percentage: 90.0,
                                            uniqueID: "e753a1cd-07b5-4992-be2f-11e52b0e0bcf"
                                        },
                                        {
                                            name: "Information",
                                            total: 2,
                                            positive: 2,
                                            neutral: 0,
                                            negative: 0,
                                            color: "#f5d142",
                                            percentage: 10.0,
                                            uniqueID: "de275faf-d685-4333-9563-6e4d439303ad"
                                        }
                                    ],
                                    totalMentionsAllCategories: 109,
                                    uniqueID: "9160649d-5f3d-40a7-90be-8224667d867a"
                                }]
                        }]
                },*/
                /*{
                    title: "Department Ranking",
                    id: 17,
                    uniqueID: "fc0ecb99-c044-4fd0-8444-b071c347f4c3",
                    data: {
                        list: [
                            {
                                name: "Company Level",
                                nps: {
                                    nps: 28,
                                    totalSubmitted: 1500
                                },
                                recipients: 8121,
                                textCompleted: 1299,
                                type: "bu",
                                uniqueID: "a81bf6c7-5a79-464e-b307-4e111e0dde08",
                                unsubscribed: 128
                            },
                            {
                                name: "Bernard Van Landschoot",
                                nps: {
                                    nps: 62,
                                    totalSubmitted: 500
                                },
                                recipients: 18,
                                textCompleted: 11,
                                type: "bu",
                                uniqueID: "304db98d-996d-42e4-92c2-1cee11c55c30",
                                parent_UniqueID: "6aa8a850-5eb1-4e30-a9c3-b0aa4102bafd",
                                unsubscribed: 0
                            },
                            {
                                name: "Leentje De Vreese",
                                alias: "patatje",
                                nps: {
                                    nps: 48,
                                    totalSubmitted: 480
                                },
                                recipients: 8121,
                                textCompleted: 1299,
                                type: "pos",
                                parent_UniqueID: "6aa8a850-5eb1-4e30-a9c3-b0aa4102bafd",
                                uniqueID: "4203214a-6b17-4db0-86b2-bb64e3503509",
                                unsubscribed: 128
                            },
                            {
                                name: "Michel Tilquin",
                                alias: "petoetje",
                                nps: {
                                    nps: 47,
                                    totalSubmitted: 280
                                },
                                recipients: 206,
                                textCompleted: 35,
                                type: "pos",
                                parent_UniqueID: "6aa8a850-5eb1-4e30-a9c3-b0aa4102bafd",
                                uniqueID: "ce4e5e6c-cb85-4a62-9a07-83fd74b8d7a4",
                                unsubscribed: 4
                            },
                            {
                                name: "Jan Vuylsteke",
                                nps: {
                                    nps: 45,
                                    totalSubmitted: 137
                                },
                                recipients: 751,
                                textCompleted: 105,
                                type: "pos",
                                parent_UniqueID: "6aa8a850-5eb1-4e30-a9c3-b0aa4102bafd",
                                uniqueID: "b7c8a561-bbdb-44d7-9f01-b02d46a2b7bb",
                                unsubscribed: 12
                            },
                            {
                                name: "Hans Theys",
                                nps: {
                                    nps: 42,
                                    totalSubmitted: 38
                                },
                                recipients: 164,
                                textCompleted: 26,
                                type: "pos",
                                parent_UniqueID: "6aa8a850-5eb1-4e30-a9c3-b0aa4102bafd",
                                uniqueID: "0db86f2e-ff5e-4282-a510-970db01915cb",
                                unsubscribed: 2
                            }
                        ]
                    }
                },*/
                /*{
                    title: "Yes No Results",
                    id: 18,
                    uniqueID: "fc0ecb95-c044-4fd0-8444-b071c347f4c3",
                    data: {
                        yes: 58,
                        no: 66
                    }
                },*/
                /*{
                    title: "Recent Answers",
                    id: 19,
                    uniqueID: "fc0ecb90-c044-4fd0-8444-b071c347f4c3",
                    data: {
                        items: [
                            {
                                email: "bernard@hellocustomer.com",
                                firstName: "Bernard",
                                lastName: "Van Couwenberghe",
                                answerQuestions: [
                                    {
                                        answer_Value: 9,
                                        question_HasCesScoreAnswer: false,
                                        question_HasCsatScoreAnswer: false,
                                        question_HasNpsValueAnswer: true
                                    }
                                ]
                            },
                            {
                                email: "wendy@hellocustomer.com",
                                firstName: "Wendy",
                                lastName: "Devos",
                                answerQuestions: [
                                    {
                                        answer_Value: 7,
                                        question_HasCesScoreAnswer: false,
                                        question_HasCsatScoreAnswer: false,
                                        question_HasNpsValueAnswer: true
                                    }
                                ]
                            },
                            {
                                email: "robin@hellocustomer.com",
                                firstName: "Robin",
                                lastName: "Berthier",
                                answerQuestions: [
                                    {
                                        answer_Value: 5,
                                        question_HasCesScoreAnswer: false,
                                        question_HasCsatScoreAnswer: false,
                                        question_HasNpsValueAnswer: true
                                    }
                                ]
                            },
                            {
                                email: "Karl@hellocustomer.com",
                                firstName: "Karl",
                                lastName: "Theeten",
                                answerQuestions: [
                                    {
                                        answer_Value: 1,
                                        question_HasCesScoreAnswer: false,
                                        question_HasCsatScoreAnswer: false,
                                        question_HasNpsValueAnswer: true
                                    }
                                ]
                            }
                        ]
                    }
                },*/
                /*{
                    title: "Mentions per Main Category",
                    id: 20,
                    uniqueID: "fc0ecb90-c044-4fd0-8444-b071c347f4c3",
                    data: [
                        {
                            name: "Personnel",
                            total: 8967,
                            positive: 8669,
                            neutral: 232,
                            negative: 66,
                            color: "#a9b72f",
                            items: [],
                            totalMentionsAllCategories: 14251,
                            uniqueID: "068e1ca7-5ee1-499d-bbf2-c081c97afb80"
                        },
                        {
                            name: "Company",
                            total: 1485,
                            positive: 1349,
                            neutral: 81,
                            negative: 55,
                            color: "#41DBCA",
                            items: [],
                            totalMentionsAllCategories: 14251,
                            uniqueID: "f79caca7-eb35-4ab4-a30b-3d6b37be3f5a"
                        },
                        {
                            name: "Branch",
                            total: 1273,
                            positive: 1161,
                            neutral: 82,
                            negative: 30,
                            color: "#6F09FC",
                            items: [],
                            totalMentionsAllCategories: 14251,
                            uniqueID: "95dd5f09-00dc-4021-9ca4-432475b68a3e"
                        },
                        {
                            name: "Unspecified & Misc12345",
                            total: 1048,
                            positive: 1012,
                            neutral: 0,
                            negative: 36,
                            color: "#413504",
                            items: [],
                            totalMentionsAllCategories: 14251,
                            uniqueID: "9a7d1ddb-588a-4161-a231-cb49b6db5c9f"
                        },
                        {
                            name: "Product",
                            total: 873,
                            positive: 758,
                            neutral: 62,
                            negative: 53,
                            color: "#926EE9",
                            items: [],
                            totalMentionsAllCategories: 14251,
                            uniqueID: "f5aa6d75-ab0a-434f-be5c-9efe63d29c5d"
                        },
                        {
                            name: "Price",
                            total: 188,
                            positive: 149,
                            neutral: 11,
                            negative: 28,
                            color: "#1A53DA",
                            items: [],
                            totalMentionsAllCategories: 14251,
                            uniqueID: "e31148ce-5385-416d-9d39-674dc89d55f9",
                        },
                        {
                            name: "Webshop",
                            total: 148,
                            positive: 140,
                            neutral: 5,
                            negative: 3,
                            color: "#C590A5",
                            items: [],
                            totalMentionsAllCategories: 14251,
                            uniqueID: "def10516-ac63-4844-ac59-b0bc771a99ac"
                        },
                        {
                            name: "App",
                            total: 144,
                            positive: 134,
                            neutral: 6,
                            negative: 4,
                            color: "#057004",
                            items: [],
                            totalMentionsAllCategories: 14251,
                            uniqueID: "9160649d-5f3d-40a7-90be-8224667d867a"
                        },
                        {
                            name: "Website",
                            total: 90,
                            positive: 79,
                            neutral: 5,
                            negative: 6,
                            color: "#074CC7",
                            items: [],
                            totalMentionsAllCategories: 14251,
                            uniqueID: "70b38395-73c2-4ed3-a996-e2285709c363"
                        },
                        {
                            name: "Promo",
                            total: 20,
                            positive: 18,
                            neutral: 2,
                            negative: 0,
                            color: "#42971B",
                            items: [],
                            totalMentionsAllCategories: 14251,
                            uniqueID: "28e4f11a-6295-4fe0-823b-82a55f1e6871"
                        },
                        {
                            name: "Order/Delivery",
                            total: 11,
                            positive: 8,
                            neutral: 0,
                            negative: 3,
                            color: "#C68F0D",
                            items: [],
                            totalMentionsAllCategories: 14251,
                            uniqueID: "11f2c317-1629-4a82-9714-77014d233d02"
                        },
                        {
                            name: "Disbursement",
                            total: 2,
                            positive: 0,
                            neutral: 1,
                            negative: 1,
                            color: "#B9A772",
                            items: [],
                            totalMentionsAllCategories: 14251,
                            uniqueID: "87933ae3-7650-42f6-ad04-c24bfabdb104"
                        },
                        {
                            name: "Training",
                            total: 2,
                            positive: 2,
                            neutral: 0,
                            negative: 0,
                            color: "#C1B96D",
                            items: [],
                            totalMentionsAllCategories: 14251,
                            uniqueID: "98fd3fab-302f-41f7-b308-06e6d0f67472"
                        }
                    ]
                },*/
                /*{
                    title: "Sentiment Spread",
                    id: 21,
                    uniqueID: "fc0ecb90-c044-4fd0-8444-b071c347f4c5",
                    data: {
                        positiveMentions: 24421,
                        neutralMentions: 2158,
                        negativeMentions: 6519,
                        totalMentions: 33098,
                        uniqueID: "00000000-0000-0000-0000-000000000000"
                    }
                },*/
                /*{
                    title: "Top Positive Categories",
                    id: 22,
                    uniqueID: "fc0ecb90-c044-4fd0-8444-b071c347f4c7",
                    data: {
                        sentimentSpread: {
                            negativeMentions: 166,
                            neutralMentions: 35,
                            positiveMentions: 473,
                            totalMentions: 674,
                            uniqueID: "00000000-0000-0000-0000-000000000000"
                        },
                        mentionedMainCategories: [
                            {
                                name: 'Personnel',
                                total: 350,
                                positive: 291,
                                neutral: 13,
                                negative: 46,
                                color: '#a9b72f',
                                items: [
                                    {
                                        name: 'Service',
                                        total: 123,
                                        positive: 110,
                                        neutral: 5,
                                        negative: 8,
                                        color: '#0071ff',
                                        percentage: 0,
                                        uniqueID: '3c2c92c5-606a-4732-9f28-64adacca0307'
                                    },
                                    {
                                        name: 'Friendliness',
                                        total: 53,
                                        positive: 49,
                                        neutral: 0,
                                        negative: 4,
                                        color: '#F047B2',
                                        percentage: 0,
                                        uniqueID: 'a47f1817-15e2-415e-9b0c-1013fec756f8'
                                    },
                                    {
                                        name: 'Information',
                                        total: 56,
                                        positive: 45,
                                        neutral: 3,
                                        negative: 8,
                                        color: '#f5d142',
                                        percentage: 0,
                                        uniqueID: 'de275faf-d685-4333-9563-6e4d439303ad'
                                    },
                                    {
                                        name: 'Availability',
                                        total: 15,
                                        positive: 14,
                                        neutral: 0,
                                        negative: 1,
                                        color: '#28594a',
                                        percentage: 0,
                                        uniqueID: '015df90b-ae83-4229-8cf3-6d2546887c53'
                                    },
                                    {
                                        name: 'Proactivity',
                                        total: 1,
                                        positive: 1,
                                        neutral: 0,
                                        negative: 0,
                                        color: '#265A25',
                                        percentage: 0,
                                        uniqueID: '50ea60e1-8f75-499b-bf16-e0b02b2fff02'
                                    },
                                    {
                                        name: 'General',
                                        total: 38,
                                        positive: 22,
                                        neutral: 3,
                                        negative: 13,
                                        color: '#57a908',
                                        percentage: 0,
                                        uniqueID: 'e753a1cd-07b5-4992-be2f-11e52b0e0bcf'
                                    },
                                    {
                                        name: 'Reception',
                                        total: 17,
                                        positive: 13,
                                        neutral: 2,
                                        negative: 2,
                                        color: '#C75BF4',
                                        percentage: 0,
                                        uniqueID: '18a8037e-6bdb-42e9-a1db-7dc8437d6817'
                                    },
                                    {
                                        name: 'Flexibility',
                                        total: 3,
                                        positive: 3,
                                        neutral: 0,
                                        negative: 0,
                                        color: '#1F19A9',
                                        percentage: 0,
                                        uniqueID: 'd343cca4-176c-4a53-ab8e-832ff3994a19'
                                    },
                                    {
                                        name: 'Speed',
                                        total: 12,
                                        positive: 8,
                                        neutral: 0,
                                        negative: 4,
                                        color: '#74ff00',
                                        percentage: 0,
                                        uniqueID: 'a5aa4d78-5b11-469a-8fc1-880705dfab25'
                                    },
                                    {
                                        name: 'Unintrusiveness',
                                        total: 2,
                                        positive: 2,
                                        neutral: 0,
                                        negative: 0,
                                        color: '#6B8CBC',
                                        percentage: 0,
                                        uniqueID: '911fecd2-7f6d-460d-8c20-8fe61849c08a'
                                    },
                                    {
                                        name: 'Reliability',
                                        total: 10,
                                        positive: 10,
                                        neutral: 0,
                                        negative: 0,
                                        color: '#905778',
                                        percentage: 0,
                                        uniqueID: '3d4a15fd-022e-4d0f-bc71-b7f88ed2b863'
                                    },
                                    {
                                        name: 'punctuality',
                                        total: 1,
                                        positive: 1,
                                        neutral: 0,
                                        negative: 0,
                                        color: '#7389B6',
                                        percentage: 0,
                                        uniqueID: 'bf36b34c-0fef-4e20-be60-1573107451b7'
                                    },
                                    {
                                        name: 'Familiarity',
                                        total: 1,
                                        positive: 1,
                                        neutral: 0,
                                        negative: 0,
                                        color: '#8C4D64',
                                        percentage: 0,
                                        uniqueID: '67e8797d-2311-44e7-8599-446001151891'
                                    },
                                    {
                                        name: 'Effort',
                                        total: 4,
                                        positive: 4,
                                        neutral: 0,
                                        negative: 0,
                                        color: '#43F977',
                                        percentage: 0,
                                        uniqueID: 'b511a06e-3feb-4df5-b06f-95e1071e8b75'
                                    },
                                    {
                                        name: 'Follow-up',
                                        total: 3,
                                        positive: 1,
                                        neutral: 0,
                                        negative: 2,
                                        color: '#A55E29',
                                        percentage: 0,
                                        uniqueID: 'db2e139a-46f4-4cdd-911c-bbc2294acd0c'
                                    },
                                    {
                                        name: 'Comprehension',
                                        total: 8,
                                        positive: 6,
                                        neutral: 0,
                                        negative: 2,
                                        color: '#E32B61',
                                        percentage: 0,
                                        uniqueID: 'd6aa6e0f-e49c-471d-b085-9f19d03272ad'
                                    },
                                    {
                                        name: 'Inclusion',
                                        total: 2,
                                        positive: 0,
                                        neutral: 0,
                                        negative: 2,
                                        color: '#9C1AFA',
                                        percentage: 0,
                                        uniqueID: '7fef2c02-986b-4e97-a95a-a4fc480a996b'
                                    },
                                    {
                                        name: 'customer service and support',
                                        total: 1,
                                        positive: 1,
                                        neutral: 0,
                                        negative: 0,
                                        color: '#0E31EF',
                                        percentage: 0,
                                        uniqueID: '4c2ad6bd-580a-4228-8116-f6aa61531a9c'
                                    }
                                ],
                                totalMentionsAllCategories: 674,
                                uniqueID: '068e1ca7-5ee1-499d-bbf2-c081c97afb80'
                            },
                            {
                                name: 'Company',
                                total: 100,
                                positive: 60,
                                neutral: 12,
                                negative: 28,
                                color: '#41DBCA',
                                items: [
                                    {
                                        name: 'General',
                                        total: 92,
                                        positive: 58,
                                        neutral: 11,
                                        negative: 23,
                                        color: '#57a908',
                                        percentage: 0,
                                        uniqueID: 'e753a1cd-07b5-4992-be2f-11e52b0e0bcf'
                                    },
                                    {
                                        name: 'Reliability',
                                        total: 7,
                                        positive: 2,
                                        neutral: 1,
                                        negative: 4,
                                        color: '#905778',
                                        percentage: 0,
                                        uniqueID: '3d4a15fd-022e-4d0f-bc71-b7f88ed2b863'
                                    },
                                    {
                                        name: 'Policy',
                                        total: 1,
                                        positive: 0,
                                        neutral: 0,
                                        negative: 1,
                                        color: '#695FB1',
                                        percentage: 0,
                                        uniqueID: '5849932b-2756-45e3-9910-3d66f01e003c'
                                    }
                                ],
                                totalMentionsAllCategories: 674,
                                uniqueID: 'f79caca7-eb35-4ab4-a30b-3d6b37be3f5a'
                            },
                            {
                                name: 'Product',
                                total: 99,
                                positive: 42,
                                neutral: 4,
                                negative: 53,
                                color: '#926EE9',
                                items: [
                                    {
                                        name: 'Accounts',
                                        total: 16,
                                        positive: 7,
                                        neutral: 1,
                                        negative: 8,
                                        color: '#1CF525',
                                        percentage: 0,
                                        uniqueID: 'a17c2c34-fa8c-4705-b732-3cf87e47038f'
                                    },
                                    {
                                        name: 'Insurance',
                                        total: 15,
                                        positive: 6,
                                        neutral: 2,
                                        negative: 7,
                                        color: '#DC31C3',
                                        percentage: 0,
                                        uniqueID: '1651f65d-0b23-46d3-8662-0aa2a3662950'
                                    },
                                    {
                                        name: 'General',
                                        total: 9,
                                        positive: 7,
                                        neutral: 0,
                                        negative: 2,
                                        color: '#57a908',
                                        percentage: 0,
                                        uniqueID: 'e753a1cd-07b5-4992-be2f-11e52b0e0bcf'
                                    },
                                    {
                                        name: 'Foreign Currency',
                                        total: 1,
                                        positive: 0,
                                        neutral: 0,
                                        negative: 1,
                                        color: '#5E7BE9',
                                        percentage: 0,
                                        uniqueID: 'b971a166-6db0-48dd-b036-f3adc4614f49'
                                    },
                                    {
                                        name: 'Housing Loan',
                                        total: 5,
                                        positive: 3,
                                        neutral: 0,
                                        negative: 2,
                                        color: '#17AD4B',
                                        percentage: 0,
                                        uniqueID: '6a756dbd-00b6-4042-9582-13e2afd0d7fc'
                                    },
                                    {
                                        name: 'Investments',
                                        total: 9,
                                        positive: 4,
                                        neutral: 0,
                                        negative: 5,
                                        color: '#B84514',
                                        percentage: 0,
                                        uniqueID: 'ca63adf8-b874-46cb-8f72-2daf23cce78f'
                                    },
                                    {
                                        name: 'Language Use',
                                        total: 1,
                                        positive: 1,
                                        neutral: 0,
                                        negative: 0,
                                        color: '#C11533',
                                        percentage: 0,
                                        uniqueID: 'f37c0128-05c1-431c-9f69-a95eca6bcd08'
                                    },
                                    {
                                        name: 'Conditions',
                                        total: 3,
                                        positive: 2,
                                        neutral: 0,
                                        negative: 1,
                                        color: '#D94AD5',
                                        percentage: 0,
                                        uniqueID: '0aed6c67-5dfc-4268-be35-ebdd2ad20988'
                                    },
                                    {
                                        name: 'bank cards',
                                        total: 2,
                                        positive: 1,
                                        neutral: 0,
                                        negative: 1,
                                        color: '#28A23F',
                                        percentage: 0,
                                        uniqueID: 'c164009c-2f28-4818-9298-2678a2e4e5f4'
                                    },
                                    {
                                        name: 'Interest Rates',
                                        total: 12,
                                        positive: 2,
                                        neutral: 1,
                                        negative: 9,
                                        color: '#D42900',
                                        percentage: 0,
                                        uniqueID: 'c2703165-2b19-4bd1-98d0-be4ce67fca16'
                                    },
                                    {
                                        name: 'Administration',
                                        total: 7,
                                        positive: 2,
                                        neutral: 0,
                                        negative: 5,
                                        color: '#4E170C',
                                        percentage: 0,
                                        uniqueID: '683d4ac7-a425-411e-8dc8-db1a8ee3fc90'
                                    },
                                    {
                                        name: 'Kids',
                                        total: 2,
                                        positive: 1,
                                        neutral: 0,
                                        negative: 1,
                                        color: '#70A121',
                                        percentage: 0,
                                        uniqueID: 'b0c5e5b8-f894-48e7-be8f-c1122b851393'
                                    },
                                    {
                                        name: 'Variety',
                                        total: 3,
                                        positive: 0,
                                        neutral: 0,
                                        negative: 3,
                                        color: '#D06E51',
                                        percentage: 0,
                                        uniqueID: '1a3788fa-9c8b-4fbd-9814-031c0abe0982'
                                    },
                                    {
                                        name: 'animal welfare',
                                        total: 3,
                                        positive: 1,
                                        neutral: 0,
                                        negative: 2,
                                        color: '#D683AA',
                                        percentage: 0,
                                        uniqueID: 'a4a3ab39-d12a-4c18-993e-a2abaa3eeec0'
                                    },
                                    {
                                        name: 'Brands',
                                        total: 1,
                                        positive: 1,
                                        neutral: 0,
                                        negative: 0,
                                        color: '#4B616F',
                                        percentage: 0,
                                        uniqueID: 'a714231e-b184-4449-856a-a8faabacd3a5'
                                    },
                                    {
                                        name: 'Loans',
                                        total: 7,
                                        positive: 2,
                                        neutral: 0,
                                        negative: 5,
                                        color: '#AD5725',
                                        percentage: 0,
                                        uniqueID: '738966ad-b773-4fdb-81ea-1ff6d012b645'
                                    },
                                    {
                                        name: 'Clothing Sizes',
                                        total: 1,
                                        positive: 1,
                                        neutral: 0,
                                        negative: 0,
                                        color: '#2A4E59',
                                        percentage: 0,
                                        uniqueID: '9bd05b33-8ced-4890-ab82-f4a2b409c598'
                                    },
                                    {
                                        name: 'Women',
                                        total: 1,
                                        positive: 0,
                                        neutral: 0,
                                        negative: 1,
                                        color: '#CBF2FC',
                                        percentage: 0,
                                        uniqueID: '49472f67-7304-4746-b48f-0c0c2f636266'
                                    },
                                    {
                                        name: 'Quality',
                                        total: 1,
                                        positive: 1,
                                        neutral: 0,
                                        negative: 0,
                                        color: '#74EDBB',
                                        percentage: 0,
                                        uniqueID: 'e4f3d954-91dd-4c7f-b655-f182409e8a64'
                                    }
                                ],
                                totalMentionsAllCategories: 674,
                                uniqueID: 'f5aa6d75-ab0a-434f-be5c-9efe63d29c5d'
                            },
                            {
                                name: 'Branch',
                                total: 61,
                                positive: 40,
                                neutral: 4,
                                negative: 17,
                                color: '#6F09FC',
                                items: [
                                    {
                                        name: 'General',
                                        total: 52,
                                        positive: 38,
                                        neutral: 4,
                                        negative: 10,
                                        color: '#57a908',
                                        percentage: 0,
                                        uniqueID: 'e753a1cd-07b5-4992-be2f-11e52b0e0bcf'
                                    },
                                    {
                                        name: 'Opening Hours',
                                        total: 3,
                                        positive: 0,
                                        neutral: 0,
                                        negative: 3,
                                        color: '#F8D0BA',
                                        percentage: 0,
                                        uniqueID: '7f1113bd-3621-4701-804d-c91d138dba65'
                                    },
                                    {
                                        name: 'Location',
                                        total: 2,
                                        positive: 1,
                                        neutral: 0,
                                        negative: 1,
                                        color: '#04B7E6',
                                        percentage: 0,
                                        uniqueID: '58e52eea-0056-4964-b504-63490c310351'
                                    },
                                    {
                                        name: 'Machines',
                                        total: 3,
                                        positive: 0,
                                        neutral: 0,
                                        negative: 3,
                                        color: '#754017',
                                        percentage: 0,
                                        uniqueID: 'eef9bad2-9f79-4b2a-bfc4-d3dbbe23d37e'
                                    },
                                    {
                                        name: 'Atmosphere',
                                        total: 1,
                                        positive: 1,
                                        neutral: 0,
                                        negative: 0,
                                        color: '#DA197B',
                                        percentage: 0,
                                        uniqueID: 'ae6f191a-e0a4-42ac-9ee1-3b0a15fbc146'
                                    }
                                ],
                                totalMentionsAllCategories: 674,
                                uniqueID: '95dd5f09-00dc-4021-9ca4-432475b68a3e'
                            },
                            {
                                name: 'Unspecified & Misc12345',
                                total: 29,
                                positive: 24,
                                neutral: 0,
                                negative: 5,
                                color: '#413504',
                                items: [
                                    {
                                        name: 'General',
                                        total: 29,
                                        positive: 24,
                                        neutral: 0,
                                        negative: 5,
                                        color: '#57a908',
                                        percentage: 0,
                                        uniqueID: 'e753a1cd-07b5-4992-be2f-11e52b0e0bcf'
                                    }
                                ],
                                totalMentionsAllCategories: 674,
                                uniqueID: '9a7d1ddb-588a-4161-a231-cb49b6db5c9f'
                            },
                            {
                                name: 'Price',
                                total: 15,
                                positive: 5,
                                neutral: 0,
                                negative: 10,
                                color: '#1A53DA',
                                items: [
                                    {
                                        name: 'General',
                                        total: 15,
                                        positive: 5,
                                        neutral: 0,
                                        negative: 10,
                                        color: '#57a908',
                                        percentage: 0,
                                        uniqueID: 'e753a1cd-07b5-4992-be2f-11e52b0e0bcf'
                                    }
                                ],
                                totalMentionsAllCategories: 674,
                                uniqueID: 'e31148ce-5385-416d-9d39-674dc89d55f9'
                            },
                            {
                                name: 'Webshop',
                                total: 9,
                                positive: 8,
                                neutral: 0,
                                negative: 1,
                                color: '#C590A5',
                                items: [
                                    {
                                        name: 'General',
                                        total: 4,
                                        positive: 3,
                                        neutral: 0,
                                        negative: 1,
                                        color: '#57a908',
                                        percentage: 0,
                                        uniqueID: 'e753a1cd-07b5-4992-be2f-11e52b0e0bcf'
                                    },
                                    {
                                        name: 'Layout',
                                        total: 3,
                                        positive: 3,
                                        neutral: 0,
                                        negative: 0,
                                        color: '#2B9AFA',
                                        percentage: 0,
                                        uniqueID: 'a2a4f815-0864-4d11-a516-eaefeb9976fc'
                                    },
                                    {
                                        name: 'Information',
                                        total: 2,
                                        positive: 2,
                                        neutral: 0,
                                        negative: 0,
                                        color: '#f5d142',
                                        percentage: 0,
                                        uniqueID: 'de275faf-d685-4333-9563-6e4d439303ad'
                                    }
                                ],
                                totalMentionsAllCategories: 674,
                                uniqueID: 'def10516-ac63-4844-ac59-b0bc771a99ac'
                            },
                            {
                                name: 'App',
                                total: 6,
                                positive: 0,
                                neutral: 2,
                                negative: 4,
                                color: '#057004',
                                items: [
                                    {
                                        name: 'General',
                                        total: 6,
                                        positive: 0,
                                        neutral: 2,
                                        negative: 4,
                                        color: '#57a908',
                                        percentage: 0,
                                        uniqueID: 'e753a1cd-07b5-4992-be2f-11e52b0e0bcf'
                                    }
                                ],
                                totalMentionsAllCategories: 674,
                                uniqueID: '9160649d-5f3d-40a7-90be-8224667d867a'
                            },
                            {
                                name: 'Website',
                                total: 4,
                                positive: 3,
                                neutral: 0,
                                negative: 1,
                                color: '#074CC7',
                                items: [
                                    {
                                        name: 'General',
                                        total: 4,
                                        positive: 3,
                                        neutral: 0,
                                        negative: 1,
                                        color: '#57a908',
                                        percentage: 0,
                                        uniqueID: 'e753a1cd-07b5-4992-be2f-11e52b0e0bcf'
                                    }
                                ],
                                totalMentionsAllCategories: 674,
                                uniqueID: '70b38395-73c2-4ed3-a996-e2285709c363'
                            },
                            {
                                name: 'Order/Delivery',
                                total: 1,
                                positive: 0,
                                neutral: 0,
                                negative: 1,
                                color: '#C68F0D',
                                items: [
                                    {
                                        name: 'General',
                                        total: 1,
                                        positive: 0,
                                        neutral: 0,
                                        negative: 1,
                                        color: '#57a908',
                                        percentage: 0,
                                        uniqueID: 'e753a1cd-07b5-4992-be2f-11e52b0e0bcf'
                                    }
                                ],
                                totalMentionsAllCategories: 674,
                                uniqueID: '11f2c317-1629-4a82-9714-77014d233d02'
                            }
                        ]
                    }
                },*/
                /*{
                    title: "Top Negative Categories",
                    id: 23,
                    uniqueID: "fc0ecb90-c044-4fd0-8444-b071c347f4c9",
                    data: {
                        sentimentSpread: {
                            negativeMentions: 166,
                            neutralMentions: 35,
                            positiveMentions: 473,
                            totalMentions: 674,
                            uniqueID: "00000000-0000-0000-0000-000000000000"
                        },
                        mentionedMainCategories: [
                            {
                                name: 'Personnel',
                                total: 350,
                                positive: 291,
                                neutral: 13,
                                negative: 46,
                                color: '#a9b72f',
                                items: [
                                    {
                                        name: 'Service',
                                        total: 123,
                                        positive: 110,
                                        neutral: 5,
                                        negative: 8,
                                        color: '#0071ff',
                                        percentage: 0,
                                        uniqueID: '3c2c92c5-606a-4732-9f28-64adacca0307'
                                    },
                                    {
                                        name: 'Friendliness',
                                        total: 53,
                                        positive: 49,
                                        neutral: 0,
                                        negative: 4,
                                        color: '#F047B2',
                                        percentage: 0,
                                        uniqueID: 'a47f1817-15e2-415e-9b0c-1013fec756f8'
                                    },
                                    {
                                        name: 'Information',
                                        total: 56,
                                        positive: 45,
                                        neutral: 3,
                                        negative: 8,
                                        color: '#f5d142',
                                        percentage: 0,
                                        uniqueID: 'de275faf-d685-4333-9563-6e4d439303ad'
                                    },
                                    {
                                        name: 'Availability',
                                        total: 15,
                                        positive: 14,
                                        neutral: 0,
                                        negative: 1,
                                        color: '#28594a',
                                        percentage: 0,
                                        uniqueID: '015df90b-ae83-4229-8cf3-6d2546887c53'
                                    },
                                    {
                                        name: 'Proactivity',
                                        total: 1,
                                        positive: 1,
                                        neutral: 0,
                                        negative: 0,
                                        color: '#265A25',
                                        percentage: 0,
                                        uniqueID: '50ea60e1-8f75-499b-bf16-e0b02b2fff02'
                                    },
                                    {
                                        name: 'General',
                                        total: 38,
                                        positive: 22,
                                        neutral: 3,
                                        negative: 13,
                                        color: '#57a908',
                                        percentage: 0,
                                        uniqueID: 'e753a1cd-07b5-4992-be2f-11e52b0e0bcf'
                                    },
                                    {
                                        name: 'Reception',
                                        total: 17,
                                        positive: 13,
                                        neutral: 2,
                                        negative: 2,
                                        color: '#C75BF4',
                                        percentage: 0,
                                        uniqueID: '18a8037e-6bdb-42e9-a1db-7dc8437d6817'
                                    },
                                    {
                                        name: 'Flexibility',
                                        total: 3,
                                        positive: 3,
                                        neutral: 0,
                                        negative: 0,
                                        color: '#1F19A9',
                                        percentage: 0,
                                        uniqueID: 'd343cca4-176c-4a53-ab8e-832ff3994a19'
                                    },
                                    {
                                        name: 'Speed',
                                        total: 12,
                                        positive: 8,
                                        neutral: 0,
                                        negative: 4,
                                        color: '#74ff00',
                                        percentage: 0,
                                        uniqueID: 'a5aa4d78-5b11-469a-8fc1-880705dfab25'
                                    },
                                    {
                                        name: 'Unintrusiveness',
                                        total: 2,
                                        positive: 2,
                                        neutral: 0,
                                        negative: 0,
                                        color: '#6B8CBC',
                                        percentage: 0,
                                        uniqueID: '911fecd2-7f6d-460d-8c20-8fe61849c08a'
                                    },
                                    {
                                        name: 'Reliability',
                                        total: 10,
                                        positive: 10,
                                        neutral: 0,
                                        negative: 0,
                                        color: '#905778',
                                        percentage: 0,
                                        uniqueID: '3d4a15fd-022e-4d0f-bc71-b7f88ed2b863'
                                    },
                                    {
                                        name: 'punctuality',
                                        total: 1,
                                        positive: 1,
                                        neutral: 0,
                                        negative: 0,
                                        color: '#7389B6',
                                        percentage: 0,
                                        uniqueID: 'bf36b34c-0fef-4e20-be60-1573107451b7'
                                    },
                                    {
                                        name: 'Familiarity',
                                        total: 1,
                                        positive: 1,
                                        neutral: 0,
                                        negative: 0,
                                        color: '#8C4D64',
                                        percentage: 0,
                                        uniqueID: '67e8797d-2311-44e7-8599-446001151891'
                                    },
                                    {
                                        name: 'Effort',
                                        total: 4,
                                        positive: 4,
                                        neutral: 0,
                                        negative: 0,
                                        color: '#43F977',
                                        percentage: 0,
                                        uniqueID: 'b511a06e-3feb-4df5-b06f-95e1071e8b75'
                                    },
                                    {
                                        name: 'Follow-up',
                                        total: 3,
                                        positive: 1,
                                        neutral: 0,
                                        negative: 2,
                                        color: '#A55E29',
                                        percentage: 0,
                                        uniqueID: 'db2e139a-46f4-4cdd-911c-bbc2294acd0c'
                                    },
                                    {
                                        name: 'Comprehension',
                                        total: 8,
                                        positive: 6,
                                        neutral: 0,
                                        negative: 2,
                                        color: '#E32B61',
                                        percentage: 0,
                                        uniqueID: 'd6aa6e0f-e49c-471d-b085-9f19d03272ad'
                                    },
                                    {
                                        name: 'Inclusion',
                                        total: 2,
                                        positive: 0,
                                        neutral: 0,
                                        negative: 2,
                                        color: '#9C1AFA',
                                        percentage: 0,
                                        uniqueID: '7fef2c02-986b-4e97-a95a-a4fc480a996b'
                                    },
                                    {
                                        name: 'customer service and support',
                                        total: 1,
                                        positive: 1,
                                        neutral: 0,
                                        negative: 0,
                                        color: '#0E31EF',
                                        percentage: 0,
                                        uniqueID: '4c2ad6bd-580a-4228-8116-f6aa61531a9c'
                                    }
                                ],
                                totalMentionsAllCategories: 674,
                                uniqueID: '068e1ca7-5ee1-499d-bbf2-c081c97afb80'
                            },
                            {
                                name: 'Company',
                                total: 100,
                                positive: 60,
                                neutral: 12,
                                negative: 28,
                                color: '#41DBCA',
                                items: [
                                    {
                                        name: 'General',
                                        total: 92,
                                        positive: 58,
                                        neutral: 11,
                                        negative: 23,
                                        color: '#57a908',
                                        percentage: 0,
                                        uniqueID: 'e753a1cd-07b5-4992-be2f-11e52b0e0bcf'
                                    },
                                    {
                                        name: 'Reliability',
                                        total: 7,
                                        positive: 2,
                                        neutral: 1,
                                        negative: 4,
                                        color: '#905778',
                                        percentage: 0,
                                        uniqueID: '3d4a15fd-022e-4d0f-bc71-b7f88ed2b863'
                                    },
                                    {
                                        name: 'Policy',
                                        total: 1,
                                        positive: 0,
                                        neutral: 0,
                                        negative: 1,
                                        color: '#695FB1',
                                        percentage: 0,
                                        uniqueID: '5849932b-2756-45e3-9910-3d66f01e003c'
                                    }
                                ],
                                totalMentionsAllCategories: 674,
                                uniqueID: 'f79caca7-eb35-4ab4-a30b-3d6b37be3f5a'
                            },
                            {
                                name: 'Product',
                                total: 99,
                                positive: 42,
                                neutral: 4,
                                negative: 53,
                                color: '#926EE9',
                                items: [
                                    {
                                        name: 'Accounts',
                                        total: 16,
                                        positive: 7,
                                        neutral: 1,
                                        negative: 8,
                                        color: '#1CF525',
                                        percentage: 0,
                                        uniqueID: 'a17c2c34-fa8c-4705-b732-3cf87e47038f'
                                    },
                                    {
                                        name: 'Insurance',
                                        total: 15,
                                        positive: 6,
                                        neutral: 2,
                                        negative: 7,
                                        color: '#DC31C3',
                                        percentage: 0,
                                        uniqueID: '1651f65d-0b23-46d3-8662-0aa2a3662950'
                                    },
                                    {
                                        name: 'General',
                                        total: 9,
                                        positive: 7,
                                        neutral: 0,
                                        negative: 2,
                                        color: '#57a908',
                                        percentage: 0,
                                        uniqueID: 'e753a1cd-07b5-4992-be2f-11e52b0e0bcf'
                                    },
                                    {
                                        name: 'Foreign Currency',
                                        total: 1,
                                        positive: 0,
                                        neutral: 0,
                                        negative: 1,
                                        color: '#5E7BE9',
                                        percentage: 0,
                                        uniqueID: 'b971a166-6db0-48dd-b036-f3adc4614f49'
                                    },
                                    {
                                        name: 'Housing Loan',
                                        total: 5,
                                        positive: 3,
                                        neutral: 0,
                                        negative: 2,
                                        color: '#17AD4B',
                                        percentage: 0,
                                        uniqueID: '6a756dbd-00b6-4042-9582-13e2afd0d7fc'
                                    },
                                    {
                                        name: 'Investments',
                                        total: 9,
                                        positive: 4,
                                        neutral: 0,
                                        negative: 5,
                                        color: '#B84514',
                                        percentage: 0,
                                        uniqueID: 'ca63adf8-b874-46cb-8f72-2daf23cce78f'
                                    },
                                    {
                                        name: 'Language Use',
                                        total: 1,
                                        positive: 1,
                                        neutral: 0,
                                        negative: 0,
                                        color: '#C11533',
                                        percentage: 0,
                                        uniqueID: 'f37c0128-05c1-431c-9f69-a95eca6bcd08'
                                    },
                                    {
                                        name: 'Conditions',
                                        total: 3,
                                        positive: 2,
                                        neutral: 0,
                                        negative: 1,
                                        color: '#D94AD5',
                                        percentage: 0,
                                        uniqueID: '0aed6c67-5dfc-4268-be35-ebdd2ad20988'
                                    },
                                    {
                                        name: 'bank cards',
                                        total: 2,
                                        positive: 1,
                                        neutral: 0,
                                        negative: 1,
                                        color: '#28A23F',
                                        percentage: 0,
                                        uniqueID: 'c164009c-2f28-4818-9298-2678a2e4e5f4'
                                    },
                                    {
                                        name: 'Interest Rates',
                                        total: 12,
                                        positive: 2,
                                        neutral: 1,
                                        negative: 9,
                                        color: '#D42900',
                                        percentage: 0,
                                        uniqueID: 'c2703165-2b19-4bd1-98d0-be4ce67fca16'
                                    },
                                    {
                                        name: 'Administration',
                                        total: 7,
                                        positive: 2,
                                        neutral: 0,
                                        negative: 5,
                                        color: '#4E170C',
                                        percentage: 0,
                                        uniqueID: '683d4ac7-a425-411e-8dc8-db1a8ee3fc90'
                                    },
                                    {
                                        name: 'Kids',
                                        total: 2,
                                        positive: 1,
                                        neutral: 0,
                                        negative: 1,
                                        color: '#70A121',
                                        percentage: 0,
                                        uniqueID: 'b0c5e5b8-f894-48e7-be8f-c1122b851393'
                                    },
                                    {
                                        name: 'Variety',
                                        total: 3,
                                        positive: 0,
                                        neutral: 0,
                                        negative: 3,
                                        color: '#D06E51',
                                        percentage: 0,
                                        uniqueID: '1a3788fa-9c8b-4fbd-9814-031c0abe0982'
                                    },
                                    {
                                        name: 'animal welfare',
                                        total: 3,
                                        positive: 1,
                                        neutral: 0,
                                        negative: 2,
                                        color: '#D683AA',
                                        percentage: 0,
                                        uniqueID: 'a4a3ab39-d12a-4c18-993e-a2abaa3eeec0'
                                    },
                                    {
                                        name: 'Brands',
                                        total: 1,
                                        positive: 1,
                                        neutral: 0,
                                        negative: 0,
                                        color: '#4B616F',
                                        percentage: 0,
                                        uniqueID: 'a714231e-b184-4449-856a-a8faabacd3a5'
                                    },
                                    {
                                        name: 'Loans',
                                        total: 7,
                                        positive: 2,
                                        neutral: 0,
                                        negative: 5,
                                        color: '#AD5725',
                                        percentage: 0,
                                        uniqueID: '738966ad-b773-4fdb-81ea-1ff6d012b645'
                                    },
                                    {
                                        name: 'Clothing Sizes',
                                        total: 1,
                                        positive: 1,
                                        neutral: 0,
                                        negative: 0,
                                        color: '#2A4E59',
                                        percentage: 0,
                                        uniqueID: '9bd05b33-8ced-4890-ab82-f4a2b409c598'
                                    },
                                    {
                                        name: 'Women',
                                        total: 1,
                                        positive: 0,
                                        neutral: 0,
                                        negative: 1,
                                        color: '#CBF2FC',
                                        percentage: 0,
                                        uniqueID: '49472f67-7304-4746-b48f-0c0c2f636266'
                                    },
                                    {
                                        name: 'Quality',
                                        total: 1,
                                        positive: 1,
                                        neutral: 0,
                                        negative: 0,
                                        color: '#74EDBB',
                                        percentage: 0,
                                        uniqueID: 'e4f3d954-91dd-4c7f-b655-f182409e8a64'
                                    }
                                ],
                                totalMentionsAllCategories: 674,
                                uniqueID: 'f5aa6d75-ab0a-434f-be5c-9efe63d29c5d'
                            },
                            {
                                name: 'Branch',
                                total: 61,
                                positive: 40,
                                neutral: 4,
                                negative: 17,
                                color: '#6F09FC',
                                items: [
                                    {
                                        name: 'General',
                                        total: 52,
                                        positive: 38,
                                        neutral: 4,
                                        negative: 10,
                                        color: '#57a908',
                                        percentage: 0,
                                        uniqueID: 'e753a1cd-07b5-4992-be2f-11e52b0e0bcf'
                                    },
                                    {
                                        name: 'Opening Hours',
                                        total: 3,
                                        positive: 0,
                                        neutral: 0,
                                        negative: 3,
                                        color: '#F8D0BA',
                                        percentage: 0,
                                        uniqueID: '7f1113bd-3621-4701-804d-c91d138dba65'
                                    },
                                    {
                                        name: 'Location',
                                        total: 2,
                                        positive: 1,
                                        neutral: 0,
                                        negative: 1,
                                        color: '#04B7E6',
                                        percentage: 0,
                                        uniqueID: '58e52eea-0056-4964-b504-63490c310351'
                                    },
                                    {
                                        name: 'Machines',
                                        total: 3,
                                        positive: 0,
                                        neutral: 0,
                                        negative: 3,
                                        color: '#754017',
                                        percentage: 0,
                                        uniqueID: 'eef9bad2-9f79-4b2a-bfc4-d3dbbe23d37e'
                                    },
                                    {
                                        name: 'Atmosphere',
                                        total: 1,
                                        positive: 1,
                                        neutral: 0,
                                        negative: 0,
                                        color: '#DA197B',
                                        percentage: 0,
                                        uniqueID: 'ae6f191a-e0a4-42ac-9ee1-3b0a15fbc146'
                                    }
                                ],
                                totalMentionsAllCategories: 674,
                                uniqueID: '95dd5f09-00dc-4021-9ca4-432475b68a3e'
                            },
                            {
                                name: 'Unspecified & Misc12345',
                                total: 29,
                                positive: 24,
                                neutral: 0,
                                negative: 5,
                                color: '#413504',
                                items: [
                                    {
                                        name: 'General',
                                        total: 29,
                                        positive: 24,
                                        neutral: 0,
                                        negative: 5,
                                        color: '#57a908',
                                        percentage: 0,
                                        uniqueID: 'e753a1cd-07b5-4992-be2f-11e52b0e0bcf'
                                    }
                                ],
                                totalMentionsAllCategories: 674,
                                uniqueID: '9a7d1ddb-588a-4161-a231-cb49b6db5c9f'
                            },
                            {
                                name: 'Price',
                                total: 15,
                                positive: 5,
                                neutral: 0,
                                negative: 10,
                                color: '#1A53DA',
                                items: [
                                    {
                                        name: 'General',
                                        total: 15,
                                        positive: 5,
                                        neutral: 0,
                                        negative: 10,
                                        color: '#57a908',
                                        percentage: 0,
                                        uniqueID: 'e753a1cd-07b5-4992-be2f-11e52b0e0bcf'
                                    }
                                ],
                                totalMentionsAllCategories: 674,
                                uniqueID: 'e31148ce-5385-416d-9d39-674dc89d55f9'
                            },
                            {
                                name: 'Webshop',
                                total: 9,
                                positive: 8,
                                neutral: 0,
                                negative: 1,
                                color: '#C590A5',
                                items: [
                                    {
                                        name: 'General',
                                        total: 4,
                                        positive: 3,
                                        neutral: 0,
                                        negative: 1,
                                        color: '#57a908',
                                        percentage: 0,
                                        uniqueID: 'e753a1cd-07b5-4992-be2f-11e52b0e0bcf'
                                    },
                                    {
                                        name: 'Layout',
                                        total: 3,
                                        positive: 3,
                                        neutral: 0,
                                        negative: 0,
                                        color: '#2B9AFA',
                                        percentage: 0,
                                        uniqueID: 'a2a4f815-0864-4d11-a516-eaefeb9976fc'
                                    },
                                    {
                                        name: 'Information',
                                        total: 2,
                                        positive: 2,
                                        neutral: 0,
                                        negative: 0,
                                        color: '#f5d142',
                                        percentage: 0,
                                        uniqueID: 'de275faf-d685-4333-9563-6e4d439303ad'
                                    }
                                ],
                                totalMentionsAllCategories: 674,
                                uniqueID: 'def10516-ac63-4844-ac59-b0bc771a99ac'
                            },
                            {
                                name: 'App',
                                total: 6,
                                positive: 0,
                                neutral: 2,
                                negative: 4,
                                color: '#057004',
                                items: [
                                    {
                                        name: 'General',
                                        total: 6,
                                        positive: 0,
                                        neutral: 2,
                                        negative: 4,
                                        color: '#57a908',
                                        percentage: 0,
                                        uniqueID: 'e753a1cd-07b5-4992-be2f-11e52b0e0bcf'
                                    }
                                ],
                                totalMentionsAllCategories: 674,
                                uniqueID: '9160649d-5f3d-40a7-90be-8224667d867a'
                            },
                            {
                                name: 'Website',
                                total: 4,
                                positive: 3,
                                neutral: 0,
                                negative: 1,
                                color: '#074CC7',
                                items: [
                                    {
                                        name: 'General',
                                        total: 4,
                                        positive: 3,
                                        neutral: 0,
                                        negative: 1,
                                        color: '#57a908',
                                        percentage: 0,
                                        uniqueID: 'e753a1cd-07b5-4992-be2f-11e52b0e0bcf'
                                    }
                                ],
                                totalMentionsAllCategories: 674,
                                uniqueID: '70b38395-73c2-4ed3-a996-e2285709c363'
                            },
                            {
                                name: 'Order/Delivery',
                                total: 1,
                                positive: 0,
                                neutral: 0,
                                negative: 1,
                                color: '#C68F0D',
                                items: [
                                    {
                                        name: 'General',
                                        total: 1,
                                        positive: 0,
                                        neutral: 0,
                                        negative: 1,
                                        color: '#57a908',
                                        percentage: 0,
                                        uniqueID: 'e753a1cd-07b5-4992-be2f-11e52b0e0bcf'
                                    }
                                ],
                                totalMentionsAllCategories: 674,
                                uniqueID: '11f2c317-1629-4a82-9714-77014d233d02'
                            }
                        ]
                    }
                },*/
                /*{
                    title: "Sentiment by Category",
                    id: 24,
                    uniqueID: "fc0ecb90-c044-4fd0-8444-b071c347f4c1",
                    data: [
                        {
                            name: 'Personnel',
                            total: 350,
                            positive: 291,
                            neutral: 13,
                            negative: 46,
                            color: '#a9b72f',
                            items: [
                                {
                                    name: 'Service',
                                    total: 123,
                                    positive: 110,
                                    neutral: 5,
                                    negative: 8,
                                    color: '#0071ff',
                                    percentage: 0,
                                    uniqueID: '3c2c92c5-606a-4732-9f28-64adacca0307'
                                },
                                {
                                    name: 'Friendliness',
                                    total: 53,
                                    positive: 49,
                                    neutral: 0,
                                    negative: 4,
                                    color: '#F047B2',
                                    percentage: 0,
                                    uniqueID: 'a47f1817-15e2-415e-9b0c-1013fec756f8'
                                },
                                {
                                    name: 'Information',
                                    total: 56,
                                    positive: 45,
                                    neutral: 3,
                                    negative: 8,
                                    color: '#f5d142',
                                    percentage: 0,
                                    uniqueID: 'de275faf-d685-4333-9563-6e4d439303ad'
                                },
                                {
                                    name: 'Availability',
                                    total: 15,
                                    positive: 14,
                                    neutral: 0,
                                    negative: 1,
                                    color: '#28594a',
                                    percentage: 0,
                                    uniqueID: '015df90b-ae83-4229-8cf3-6d2546887c53'
                                },
                                {
                                    name: 'Proactivity',
                                    total: 1,
                                    positive: 1,
                                    neutral: 0,
                                    negative: 0,
                                    color: '#265A25',
                                    percentage: 0,
                                    uniqueID: '50ea60e1-8f75-499b-bf16-e0b02b2fff02'
                                },
                                {
                                    name: 'General',
                                    total: 38,
                                    positive: 22,
                                    neutral: 3,
                                    negative: 13,
                                    color: '#57a908',
                                    percentage: 0,
                                    uniqueID: 'e753a1cd-07b5-4992-be2f-11e52b0e0bcf'
                                },
                                {
                                    name: 'Reception',
                                    total: 17,
                                    positive: 13,
                                    neutral: 2,
                                    negative: 2,
                                    color: '#C75BF4',
                                    percentage: 0,
                                    uniqueID: '18a8037e-6bdb-42e9-a1db-7dc8437d6817'
                                },
                                {
                                    name: 'Flexibility',
                                    total: 3,
                                    positive: 3,
                                    neutral: 0,
                                    negative: 0,
                                    color: '#1F19A9',
                                    percentage: 0,
                                    uniqueID: 'd343cca4-176c-4a53-ab8e-832ff3994a19'
                                },
                                {
                                    name: 'Speed',
                                    total: 12,
                                    positive: 8,
                                    neutral: 0,
                                    negative: 4,
                                    color: '#74ff00',
                                    percentage: 0,
                                    uniqueID: 'a5aa4d78-5b11-469a-8fc1-880705dfab25'
                                },
                                {
                                    name: 'Unintrusiveness',
                                    total: 2,
                                    positive: 2,
                                    neutral: 0,
                                    negative: 0,
                                    color: '#6B8CBC',
                                    percentage: 0,
                                    uniqueID: '911fecd2-7f6d-460d-8c20-8fe61849c08a'
                                },
                                {
                                    name: 'Reliability',
                                    total: 10,
                                    positive: 10,
                                    neutral: 0,
                                    negative: 0,
                                    color: '#905778',
                                    percentage: 0,
                                    uniqueID: '3d4a15fd-022e-4d0f-bc71-b7f88ed2b863'
                                },
                                {
                                    name: 'punctuality',
                                    total: 1,
                                    positive: 1,
                                    neutral: 0,
                                    negative: 0,
                                    color: '#7389B6',
                                    percentage: 0,
                                    uniqueID: 'bf36b34c-0fef-4e20-be60-1573107451b7'
                                },
                                {
                                    name: 'Familiarity',
                                    total: 1,
                                    positive: 1,
                                    neutral: 0,
                                    negative: 0,
                                    color: '#8C4D64',
                                    percentage: 0,
                                    uniqueID: '67e8797d-2311-44e7-8599-446001151891'
                                },
                                {
                                    name: 'Effort',
                                    total: 4,
                                    positive: 4,
                                    neutral: 0,
                                    negative: 0,
                                    color: '#43F977',
                                    percentage: 0,
                                    uniqueID: 'b511a06e-3feb-4df5-b06f-95e1071e8b75'
                                },
                                {
                                    name: 'Follow-up',
                                    total: 3,
                                    positive: 1,
                                    neutral: 0,
                                    negative: 2,
                                    color: '#A55E29',
                                    percentage: 0,
                                    uniqueID: 'db2e139a-46f4-4cdd-911c-bbc2294acd0c'
                                },
                                {
                                    name: 'Comprehension',
                                    total: 8,
                                    positive: 6,
                                    neutral: 0,
                                    negative: 2,
                                    color: '#E32B61',
                                    percentage: 0,
                                    uniqueID: 'd6aa6e0f-e49c-471d-b085-9f19d03272ad'
                                },
                                {
                                    name: 'Inclusion',
                                    total: 2,
                                    positive: 0,
                                    neutral: 0,
                                    negative: 2,
                                    color: '#9C1AFA',
                                    percentage: 0,
                                    uniqueID: '7fef2c02-986b-4e97-a95a-a4fc480a996b'
                                },
                                {
                                    name: 'customer service and support',
                                    total: 1,
                                    positive: 1,
                                    neutral: 0,
                                    negative: 0,
                                    color: '#0E31EF',
                                    percentage: 0,
                                    uniqueID: '4c2ad6bd-580a-4228-8116-f6aa61531a9c'
                                }
                            ],
                            totalMentionsAllCategories: 674,
                            uniqueID: '068e1ca7-5ee1-499d-bbf2-c081c97afb80'
                        },
                        {
                            name: 'Company',
                            total: 100,
                            positive: 60,
                            neutral: 12,
                            negative: 28,
                            color: '#41DBCA',
                            items: [
                                {
                                    name: 'General',
                                    total: 92,
                                    positive: 58,
                                    neutral: 11,
                                    negative: 23,
                                    color: '#57a908',
                                    percentage: 0,
                                    uniqueID: 'e753a1cd-07b5-4992-be2f-11e52b0e0bcf'
                                },
                                {
                                    name: 'Reliability',
                                    total: 7,
                                    positive: 2,
                                    neutral: 1,
                                    negative: 4,
                                    color: '#905778',
                                    percentage: 0,
                                    uniqueID: '3d4a15fd-022e-4d0f-bc71-b7f88ed2b863'
                                },
                                {
                                    name: 'Policy',
                                    total: 1,
                                    positive: 0,
                                    neutral: 0,
                                    negative: 1,
                                    color: '#695FB1',
                                    percentage: 0,
                                    uniqueID: '5849932b-2756-45e3-9910-3d66f01e003c'
                                }
                            ],
                            totalMentionsAllCategories: 674,
                            uniqueID: 'f79caca7-eb35-4ab4-a30b-3d6b37be3f5a'
                        },
                        {
                            name: 'Product',
                            total: 99,
                            positive: 42,
                            neutral: 4,
                            negative: 53,
                            color: '#926EE9',
                            items: [
                                {
                                    name: 'Accounts',
                                    total: 16,
                                    positive: 7,
                                    neutral: 1,
                                    negative: 8,
                                    color: '#1CF525',
                                    percentage: 0,
                                    uniqueID: 'a17c2c34-fa8c-4705-b732-3cf87e47038f'
                                },
                                {
                                    name: 'Insurance',
                                    total: 15,
                                    positive: 6,
                                    neutral: 2,
                                    negative: 7,
                                    color: '#DC31C3',
                                    percentage: 0,
                                    uniqueID: '1651f65d-0b23-46d3-8662-0aa2a3662950'
                                },
                                {
                                    name: 'General',
                                    total: 9,
                                    positive: 7,
                                    neutral: 0,
                                    negative: 2,
                                    color: '#57a908',
                                    percentage: 0,
                                    uniqueID: 'e753a1cd-07b5-4992-be2f-11e52b0e0bcf'
                                },
                                {
                                    name: 'Foreign Currency',
                                    total: 1,
                                    positive: 0,
                                    neutral: 0,
                                    negative: 1,
                                    color: '#5E7BE9',
                                    percentage: 0,
                                    uniqueID: 'b971a166-6db0-48dd-b036-f3adc4614f49'
                                },
                                {
                                    name: 'Housing Loan',
                                    total: 5,
                                    positive: 3,
                                    neutral: 0,
                                    negative: 2,
                                    color: '#17AD4B',
                                    percentage: 0,
                                    uniqueID: '6a756dbd-00b6-4042-9582-13e2afd0d7fc'
                                },
                                {
                                    name: 'Investments',
                                    total: 9,
                                    positive: 4,
                                    neutral: 0,
                                    negative: 5,
                                    color: '#B84514',
                                    percentage: 0,
                                    uniqueID: 'ca63adf8-b874-46cb-8f72-2daf23cce78f'
                                },
                                {
                                    name: 'Language Use',
                                    total: 1,
                                    positive: 1,
                                    neutral: 0,
                                    negative: 0,
                                    color: '#C11533',
                                    percentage: 0,
                                    uniqueID: 'f37c0128-05c1-431c-9f69-a95eca6bcd08'
                                },
                                {
                                    name: 'Conditions',
                                    total: 3,
                                    positive: 2,
                                    neutral: 0,
                                    negative: 1,
                                    color: '#D94AD5',
                                    percentage: 0,
                                    uniqueID: '0aed6c67-5dfc-4268-be35-ebdd2ad20988'
                                },
                                {
                                    name: 'bank cards',
                                    total: 2,
                                    positive: 1,
                                    neutral: 0,
                                    negative: 1,
                                    color: '#28A23F',
                                    percentage: 0,
                                    uniqueID: 'c164009c-2f28-4818-9298-2678a2e4e5f4'
                                },
                                {
                                    name: 'Interest Rates',
                                    total: 12,
                                    positive: 2,
                                    neutral: 1,
                                    negative: 9,
                                    color: '#D42900',
                                    percentage: 0,
                                    uniqueID: 'c2703165-2b19-4bd1-98d0-be4ce67fca16'
                                },
                                {
                                    name: 'Administration',
                                    total: 7,
                                    positive: 2,
                                    neutral: 0,
                                    negative: 5,
                                    color: '#4E170C',
                                    percentage: 0,
                                    uniqueID: '683d4ac7-a425-411e-8dc8-db1a8ee3fc90'
                                },
                                {
                                    name: 'Kids',
                                    total: 2,
                                    positive: 1,
                                    neutral: 0,
                                    negative: 1,
                                    color: '#70A121',
                                    percentage: 0,
                                    uniqueID: 'b0c5e5b8-f894-48e7-be8f-c1122b851393'
                                },
                                {
                                    name: 'Variety',
                                    total: 3,
                                    positive: 0,
                                    neutral: 0,
                                    negative: 3,
                                    color: '#D06E51',
                                    percentage: 0,
                                    uniqueID: '1a3788fa-9c8b-4fbd-9814-031c0abe0982'
                                },
                                {
                                    name: 'animal welfare',
                                    total: 3,
                                    positive: 1,
                                    neutral: 0,
                                    negative: 2,
                                    color: '#D683AA',
                                    percentage: 0,
                                    uniqueID: 'a4a3ab39-d12a-4c18-993e-a2abaa3eeec0'
                                },
                                {
                                    name: 'Brands',
                                    total: 1,
                                    positive: 1,
                                    neutral: 0,
                                    negative: 0,
                                    color: '#4B616F',
                                    percentage: 0,
                                    uniqueID: 'a714231e-b184-4449-856a-a8faabacd3a5'
                                },
                                {
                                    name: 'Loans',
                                    total: 7,
                                    positive: 2,
                                    neutral: 0,
                                    negative: 5,
                                    color: '#AD5725',
                                    percentage: 0,
                                    uniqueID: '738966ad-b773-4fdb-81ea-1ff6d012b645'
                                },
                                {
                                    name: 'Clothing Sizes',
                                    total: 1,
                                    positive: 1,
                                    neutral: 0,
                                    negative: 0,
                                    color: '#2A4E59',
                                    percentage: 0,
                                    uniqueID: '9bd05b33-8ced-4890-ab82-f4a2b409c598'
                                },
                                {
                                    name: 'Women',
                                    total: 1,
                                    positive: 0,
                                    neutral: 0,
                                    negative: 1,
                                    color: '#CBF2FC',
                                    percentage: 0,
                                    uniqueID: '49472f67-7304-4746-b48f-0c0c2f636266'
                                },
                                {
                                    name: 'Quality',
                                    total: 1,
                                    positive: 1,
                                    neutral: 0,
                                    negative: 0,
                                    color: '#74EDBB',
                                    percentage: 0,
                                    uniqueID: 'e4f3d954-91dd-4c7f-b655-f182409e8a64'
                                }
                            ],
                            totalMentionsAllCategories: 674,
                            uniqueID: 'f5aa6d75-ab0a-434f-be5c-9efe63d29c5d'
                        },
                        {
                            name: 'Branch',
                            total: 61,
                            positive: 40,
                            neutral: 4,
                            negative: 17,
                            color: '#6F09FC',
                            items: [
                                {
                                    name: 'General',
                                    total: 52,
                                    positive: 38,
                                    neutral: 4,
                                    negative: 10,
                                    color: '#57a908',
                                    percentage: 0,
                                    uniqueID: 'e753a1cd-07b5-4992-be2f-11e52b0e0bcf'
                                },
                                {
                                    name: 'Opening Hours',
                                    total: 3,
                                    positive: 0,
                                    neutral: 0,
                                    negative: 3,
                                    color: '#F8D0BA',
                                    percentage: 0,
                                    uniqueID: '7f1113bd-3621-4701-804d-c91d138dba65'
                                },
                                {
                                    name: 'Location',
                                    total: 2,
                                    positive: 1,
                                    neutral: 0,
                                    negative: 1,
                                    color: '#04B7E6',
                                    percentage: 0,
                                    uniqueID: '58e52eea-0056-4964-b504-63490c310351'
                                },
                                {
                                    name: 'Machines',
                                    total: 3,
                                    positive: 0,
                                    neutral: 0,
                                    negative: 3,
                                    color: '#754017',
                                    percentage: 0,
                                    uniqueID: 'eef9bad2-9f79-4b2a-bfc4-d3dbbe23d37e'
                                },
                                {
                                    name: 'Atmosphere',
                                    total: 1,
                                    positive: 1,
                                    neutral: 0,
                                    negative: 0,
                                    color: '#DA197B',
                                    percentage: 0,
                                    uniqueID: 'ae6f191a-e0a4-42ac-9ee1-3b0a15fbc146'
                                }
                            ],
                            totalMentionsAllCategories: 674,
                            uniqueID: '95dd5f09-00dc-4021-9ca4-432475b68a3e'
                        },
                        {
                            name: 'Unspecified & Misc12345',
                            total: 29,
                            positive: 24,
                            neutral: 0,
                            negative: 5,
                            color: '#413504',
                            items: [
                                {
                                    name: 'General',
                                    total: 29,
                                    positive: 24,
                                    neutral: 0,
                                    negative: 5,
                                    color: '#57a908',
                                    percentage: 0,
                                    uniqueID: 'e753a1cd-07b5-4992-be2f-11e52b0e0bcf'
                                }
                            ],
                            totalMentionsAllCategories: 674,
                            uniqueID: '9a7d1ddb-588a-4161-a231-cb49b6db5c9f'
                        },
                        {
                            name: 'Price',
                            total: 15,
                            positive: 5,
                            neutral: 0,
                            negative: 10,
                            color: '#1A53DA',
                            items: [
                                {
                                    name: 'General',
                                    total: 15,
                                    positive: 5,
                                    neutral: 0,
                                    negative: 10,
                                    color: '#57a908',
                                    percentage: 0,
                                    uniqueID: 'e753a1cd-07b5-4992-be2f-11e52b0e0bcf'
                                }
                            ],
                            totalMentionsAllCategories: 674,
                            uniqueID: 'e31148ce-5385-416d-9d39-674dc89d55f9'
                        },
                        {
                            name: 'Webshop',
                            total: 9,
                            positive: 8,
                            neutral: 0,
                            negative: 1,
                            color: '#C590A5',
                            items: [
                                {
                                    name: 'General',
                                    total: 4,
                                    positive: 3,
                                    neutral: 0,
                                    negative: 1,
                                    color: '#57a908',
                                    percentage: 0,
                                    uniqueID: 'e753a1cd-07b5-4992-be2f-11e52b0e0bcf'
                                },
                                {
                                    name: 'Layout',
                                    total: 3,
                                    positive: 3,
                                    neutral: 0,
                                    negative: 0,
                                    color: '#2B9AFA',
                                    percentage: 0,
                                    uniqueID: 'a2a4f815-0864-4d11-a516-eaefeb9976fc'
                                },
                                {
                                    name: 'Information',
                                    total: 2,
                                    positive: 2,
                                    neutral: 0,
                                    negative: 0,
                                    color: '#f5d142',
                                    percentage: 0,
                                    uniqueID: 'de275faf-d685-4333-9563-6e4d439303ad'
                                }
                            ],
                            totalMentionsAllCategories: 674,
                            uniqueID: 'def10516-ac63-4844-ac59-b0bc771a99ac'
                        },
                        {
                            name: 'App',
                            total: 6,
                            positive: 0,
                            neutral: 2,
                            negative: 4,
                            color: '#057004',
                            items: [
                                {
                                    name: 'General',
                                    total: 6,
                                    positive: 0,
                                    neutral: 2,
                                    negative: 4,
                                    color: '#57a908',
                                    percentage: 0,
                                    uniqueID: 'e753a1cd-07b5-4992-be2f-11e52b0e0bcf'
                                }
                            ],
                            totalMentionsAllCategories: 674,
                            uniqueID: '9160649d-5f3d-40a7-90be-8224667d867a'
                        },
                        {
                            name: 'Website',
                            total: 4,
                            positive: 3,
                            neutral: 0,
                            negative: 1,
                            color: '#074CC7',
                            items: [
                                {
                                    name: 'General',
                                    total: 4,
                                    positive: 3,
                                    neutral: 0,
                                    negative: 1,
                                    color: '#57a908',
                                    percentage: 0,
                                    uniqueID: 'e753a1cd-07b5-4992-be2f-11e52b0e0bcf'
                                }
                            ],
                            totalMentionsAllCategories: 674,
                            uniqueID: '70b38395-73c2-4ed3-a996-e2285709c363'
                        },
                        {
                            name: 'Order/Delivery',
                            total: 1,
                            positive: 0,
                            neutral: 0,
                            negative: 1,
                            color: '#C68F0D',
                            items: [
                                {
                                    name: 'General',
                                    total: 1,
                                    positive: 0,
                                    neutral: 0,
                                    negative: 1,
                                    color: '#57a908',
                                    percentage: 0,
                                    uniqueID: 'e753a1cd-07b5-4992-be2f-11e52b0e0bcf'
                                }
                            ],
                            totalMentionsAllCategories: 674,
                            uniqueID: '11f2c317-1629-4a82-9714-77014d233d02'
                        }
                    ]
                }*/
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
