$(function () {
    var customDashboardData = testObj;

    function setPDFTitle() {
        $("#pdf-title").text(customDashboardData["dashboardName"]);
    }

    function initialisewidgetContainers() {
        for (let i = 0; i < customDashboardData["widgets"].length; i++) {
            let widget = customDashboardData["widgets"][i];
            $("#cd-content").append(`<div id='` + widget["uniqueID"] + `' class="widget-container">
                <div class="widget-header">
                    <h2>
                        <span name="widget-title">`+ widget["title"] + `</span>
                    </h2>
                </div>
                <div class="widget-wrapper">
                </div>
                <div class="no-data-in-chart" style="display:none">
                    <div>
                        <p>not enough data</p>
                    </div>
                </div>
            </div>`);
        }
    }

    function selectWidgetType() {
        for (let i = 0; i < customDashboardData["widgets"].length; i++) {
            let widget = customDashboardData["widgets"][i];

            switch (widget["id"]) {
                case 1:
                    initialiseNPSBar(widget);
                    break;
                case 2:
                    initialiseCESBar(widget);
                    break;
                case 3:
                    initialiseCSATBar(widget);
                    break;
                case 4:
                    initialiseGeneralResponseRate(widget);
                    break;
                case 5:
                    initialiseTextResponseRate(widget);
                    break;
                case 6:
                    initialiseLastResponses(widget);
                    break;
                case 7:
                    initialiseRepartitionNpsScore(widget);
                    break;
                case 8:
                    initialiseRepartitionCesScore(widget);
                    break;
                case 9:
                    initialiseRepartitionCsatScore(widget);
                    break;
                case 99:
                    initialiseCoolPieChart(widget);
                    break;
            }
        }
    }

    // WIDGET ID 1 NPS SCORE
    function initialiseNPSBar(widget) {
        $("#" + widget["uniqueID"] + " .widget-wrapper").append(`<div class="nps-score-content">
                        <div class="nps-result">
                            <p>`+ widget["data"]["npsScore"] + `</p>
                            <p>NPS</p>
                        </div>
                        <div class="nps-bar">
                            <div class="nps-detractors" style="width:`+ widget["data"]["detractors"] + `%">
                                <p>`+ widget["data"]["detractors"] + `%</p>
                                <p>detractors</p>
                            </div>
                            <div class="nps-passives" style="width:`+ widget["data"]["passives"] + `%">
                                <p>`+ widget["data"]["passives"] + `%</p>
                                <p>passives</p>
                            </div>
                            <div class="nps-promoters" style="width:`+ widget["data"]["promoters"] + `%">
                                <p>`+ widget["data"]["promoters"] + `%</p>
                                <p>promoters</p>
                            </div>
                        </div>
                    </div>`);

        let widgetId = widget["uniqueID"];
        if (widget["data"]["detractors"] <= 10) {
            $("#" + widgetId + " .nps-detractors p").hide();
        }
        if (widget["data"]["passives"] <= 10) {
            $("#" + widgetId + " .nps-passives p").hide();
        }
        if (widget["data"]["promoters"] <= 10) {
            $("#" + widgetId + " .nps-promoters p").hide();
        }
    }

    // WIDGET ID 2 CES SCORE
    function initialiseCESBar(widget) {
        $("#" + widget["uniqueID"] + " .widget-wrapper").append(`<div class="ces-score-content">
                        <div class="ces-graph">
                            <div class="ces20-gauge"></div>
                            <span class="ces-gauge-score">`+ widget["data"]["cesScore"] + `</span>
                        </div>
                        <div class="ces-bars">
                            <div class="first-ces-bar">
                                <div class="text">
                                    <span>`+ widget["data"]["disagree"] + `%</span>
                                    <span>disagree</span>
                                </div>
                                <div class="bar">
                                    <div class="empty"></div>
                                    <div class="full disagree" style="width:`+ widget["data"]["disagree"] + `%"></div>
                                </div>
                            </div>
                            <div class="second-ces-bar">
                                <div class="text">
                                    <span>`+ widget["data"]["agree"] + `%</span>
                                    <span>agree</span>
                                </div>
                                <div class="bar">
                                    <div class="empty"></div>
                                    <div class="full agree" style="width:`+ widget["data"]["agree"] + `%"></div>
                                </div>
                            </div>
                        </div>
                    </div>`);

        let widgetId = widget["uniqueID"];
        let cesScore = widget["data"]["cesScore"];
        if (cesScore < 1) {
            $("#" + widgetId + " .ces20-gauge").addClass("state-none");
        } else if (cesScore >= 1 && cesScore < 2) {
            $("#" + widgetId + " .ces20-gauge").addClass("state-one");
        } else if (cesScore >= 2 && cesScore < 3) {
            $("#" + widgetId + " .ces20-gauge").addClass("state-two");
        } else if (cesScore >= 3 && cesScore < 4) {
            $("#" + widgetId + " .ces20-gauge").addClass("state-three");
        } else if (cesScore >= 4 && cesScore < 5) {
            $("#" + widgetId + " .ces20-gauge").addClass("state-four");
        } else if (cesScore >= 5 && cesScore < 6) {
            $("#" + widgetId + " .ces20-gauge").addClass("state-five");
        } else if (cesScore >= 6 && cesScore < 7) {
            $("#" + widgetId + " .ces20-gauge").addClass("state-six");
        } else if (cesScore === 7) {
            $("#" + widgetId + " .ces20-gauge").addClass("state-seven");
        }
    }

    // WIDGET ID 3 CSAT SCORE
    function initialiseCSATBar(widget) {
        $("#" + widget["uniqueID"] + " .widget-wrapper").append(`<div class="csat-score-content">
                        <div class="csat-graph">
                            <span class="score"></span>
                            <div class="csat-gauge"></div>
                            <div class="needle"></div>
                        </div>
                        <div class="csat-bars">
                            <div class="first-csat-bar">
                                <div class="text">
                                    <span>`+ widget["data"]["unsatisfied"] + `%</span>
                                    <span>unsatisfied</span>
                                </div>
                                <div class="bar">
                                    <div class="empty"></div>
                                    <div class="full disagree" style="width:`+ widget["data"]["unsatisfied"] + `%"></div>
                                </div>
                            </div>
                            <div class="second-csat-bar">
                                <div class="text">
                                    <span>`+ widget["data"]["passive"] + `%</span>
                                    <span>neutrals</span>
                                </div>
                                <div class="bar">
                                    <div class="empty"></div>
                                    <div class="full passive" style="width:`+ widget["data"]["passive"] + `%"></div>
                                </div>
                            </div>
                            <div class="third-csat-bar">
                                <div class="text">
                                    <span>`+ widget["data"]["satisfied"] + `%</span>
                                    <span>satisfied</span>
                                </div>
                                <div class="bar">
                                    <div class="empty"></div>
                                    <div class="full agree" style="width:`+ widget["data"]["satisfied"] + `%"></div>
                                </div>
                            </div>
                        </div>
                    </div>`);

        let widgetId = widget["uniqueID"];
        let csatScore = widget["data"]["csatScore"];
        if (csatScore === 0) {
            $("#" + widgetId + " .score").text("?");
            $("#" + widgetId + " .score").addClass("none");
        } else {
            $("#" + widgetId + " .score").text(csatScore);
            $("#" + widgetId + " .score").removeClass("none");
        }
        let degrees = setCsatNeedle(csatScore);
        $("#" + widgetId + " .needle").css("transform", "rotate(" + degrees + "deg)");
    }

    function setCsatNeedle(score) {
        let degrees = 0;
        degrees = 1.8 * score - 90;
        return degrees;
    }

    // WIDGET ID 4 GENERAL RESPONSE RATE
    function initialiseGeneralResponseRate(widget) {
        $("#" + widget["uniqueID"] + " .widget-wrapper").append(`<div class="general-response-rate-content">
                        <table>
                            <tbody>
                                <tr>
                                    <td>
                                        <p>` + widget["data"]["respondents"] + `</p>
                                        <p>Respondents</p>        
                                    </td>
                                    <td>
                                        <p>`+ widget["data"]["answers"] + `</p>
                                        <p>Answers</p>
                                        <div class="progress">
                                            <span class="meter"></span>
                                        </div>
                                        <p class="percentage"></p>
                                    </td>
                                    <td>
                                        <p>` + widget["data"]["unsubscribed"] + `</p>
                                        <p>Unsubscribed</p>
                                        <div class="progress">
                                            <span class="meter"></span>
                                        </div>
                                        <p class="percentage"></p>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>`);

        let widgetId = widget["uniqueID"];
        $("#" + widgetId + " .widget-wrapper").css("padding-top", "0px");
        $("#" + widgetId + " .widget-wrapper").css("padding-bottom", "0px");
        $("#" + widgetId + " td:nth-child(2) .meter").css("width", calculatePercentage(widget["data"]["answers"], widget["data"]["respondents"]) + "%");
        $("#" + widgetId + " td:nth-child(2) .percentage").text(calculatePercentage(widget["data"]["answers"], widget["data"]["respondents"]) + "%");
        $("#" + widgetId + " td:nth-child(3) .meter").css("width", calculatePercentage(widget["data"]["unsubscribed"], widget["data"]["respondents"]) + "%");
        $("#" + widgetId + " td:nth-child(3) .percentage").text(calculatePercentage(widget["data"]["unsubscribed"], widget["data"]["respondents"]) + "%");
    }

    // WIDGET ID 5 TEXT RESPONSE RATE
    function initialiseTextResponseRate(widget) {
        $("#" + widget["uniqueID"] + " .widget-wrapper").append(`<div class="text-response-rate-content">
                        <div class="trr-chart">
                            <div class="trr-donut donut">
                                <div class="percent"></div>
                                <div class="slice">
                                    <div class="pie"></div>
                                    <div class="pie fill"></div>
                                </div>
                            </div>
                        </div>
                        <ul class="result">
                            <li>
                                <span></span> completed
                            </li>
                            <li>
                                <span></span> texts completed
                            </li>
                        </ul>
                    </div>`);

        let widgetId = widget["uniqueID"];
        let percentage = calculatePercentage(widget["data"]["text"], widget["data"]["answers"]);
        let degrees = 360 / 100 * percentage;
        $("#" + widgetId + " .percent").text(percentage + "%");
        $("#" + widgetId + " .slice div:first-child").css("transform", "rotate(" + degrees + "deg)");
        if (degrees <= 180) {
            $("#" + widgetId + " .trr-donut").removeClass("big");
            $("#" + widgetId + " .trr-donut").addClass("small");
        }
        else {
            $("#" + widgetId + " .trr-donut").removeClass("small");
            $("#" + widgetId + " .trr-donut").addClass("big");
        }
        $("#" + widgetId + " .result li:first-child span:first-child").text(widget["data"]["answers"]);
        $("#" + widgetId + " .result li:nth-child(2) span:first-child").text(widget["data"]["text"]);
    }

    // WIDGET ID 6 LAST RESPONSES
    function initialiseLastResponses(widget) {
        $("#" + widget["uniqueID"] + " .widget-wrapper").append(`<div class="last-responses-content">
                        <div class="lr-chart">
                            <div class="lr-donut donut">
                                <div class="percent"></div>
                                <div class="slice">
                                    <div class="pie"></div>
                                    <div class="pie fill"></div>
                                </div>
                            </div>
                        </div>
                        <ul class="result">
                            <li>
                                <span></span> last week
                            </li>
                            <li>
                                <span></span> yesterday
                            </li>
                        </ul>
                    </div>`);

        let widgetId = widget["uniqueID"];
        let percentage = calculatePercentage(widget["data"]["lastweek"], widget["data"]["answers"]);
        let degrees = 360 / 100 * percentage;
        $("#" + widgetId + " .percent").text(percentage + "%");
        $("#" + widgetId + " .slice div:first-child").css("transform", "rotate(" + degrees + "deg)");
        if (degrees <= 180) {
            $("#" + widgetId + " .lr-donut").removeClass("big");
            $("#" + widgetId + " .lr-donut").addClass("small");
        } else {
            $("#" + widgetId + " .lr-donut").removeClass("small");
            $("#" + widgetId + " .lr-donut").addClass("big");
        }

        $("#" + widgetId + " .result li:first-child span:first-child").text(widget["data"]["lastweek"]);
        $("#" + widgetId + " .result li:nth-child(2) span:first-child").text(widget["data"]["yesterday"]);
    }

    // WIDGET ID 7 REPARTITION NPS SCORE
    function initialiseRepartitionNpsScore(widget) {
        $("#" + widget["uniqueID"] + " .widget-wrapper").append(`<div class="repartition-nps-score-content">
                            <div id="chart"></div>
                        </div>`);

        let widgetId = widget["uniqueID"];
        let chartId = "chart_" + widgetId;
        $("#" + widgetId + " .repartition-nps-score-content div").attr("id", chartId);
        let npsRepartition = prepareRepartitionData(widget["data"], "nps");
        let options = getRepartitionChartOptions(chartId, "nps");

        let myChart = new Highcharts.chart(options);

        myChart.setSize(760, 290);
        myChart.series[0].setData(npsRepartition, true);
    }

    // WIDGET ID 8 REPARTITION CES SCORE
    function initialiseRepartitionCesScore(widget) {
        $("#" + widget["uniqueID"] + " .widget-wrapper").append(`<div class="repartition-ces-score-content">
                            <div id="chart"></div>
                        </div>`);

        let widgetId = widget["uniqueID"];
        let chartId = "chart_" + widgetId;
        $("#" + widgetId + " .repartition-ces-score-content div").attr("id", chartId);
        let npsRepartition = prepareRepartitionData(widget["data"], "ces");
        let options = getRepartitionChartOptions(chartId, "ces");

        let myChart = new Highcharts.chart(options);

        myChart.setSize(760, 290);
        myChart.series[0].setData(npsRepartition, true);
    }

    // WIDGET ID 9 REPARTITION CSAT SCORE
    function initialiseRepartitionCsatScore(widget) {
        $("#" + widget["uniqueID"] + " .widget-wrapper").append(`<div class="repartition-csat-score-content">
                            <div id="chart"></div>
                        </div>`);

        let widgetId = widget["uniqueID"];
        let chartId = "chart_" + widgetId;
        $("#" + widgetId + " .repartition-csat-score-content div").attr("id", chartId);
        let npsRepartition = prepareRepartitionData(widget["data"], "csat");
        let options = getRepartitionChartOptions(chartId, "csat");

        let myChart = new Highcharts.chart(options);

        myChart.setSize(760, 290);
        myChart.series[0].setData(npsRepartition, true);
    }

    // ID 99 JUST A TEST
    function initialiseCoolPieChart(widget) {
        $("#" + widget["uniqueID"] + " .widget-wrapper").append("<div id='piechartholder'></div");

        Highcharts.chart("piechartholder", {
            chart: {
                plotBackgroundColor: null,
                plotBorderWidth: null,
                plotShadow: false,
                type: 'pie'
            },
            title: {
                text: 'Browser market shares in January, 2018'
            },
            tooltip: {
                pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
            },
            plotOptions: {
                pie: {
                    allowPointSelect: true,
                    cursor: 'pointer',
                    dataLabels: {
                        enabled: true,
                        format: '<b>{point.name}</b>: {point.percentage:.1f} %'
                    }
                },
                series: {
                    animation: false
                }
            },
            responsive: {
                rules: [{
                    condition: {
                        maxWidth: 500
                    },
                    chartOptions: {
                        legend: {
                            layout: 'vertical',
                            align: 'right',
                            verticalAlign: 'bottom'
                        }
                    }
                }]
            },
            series: [{
                name: 'Brands',
                colorByPoint: true,
                data: [{
                    name: 'Chrome',
                    y: 61.41,
                    sliced: true,
                    selected: true
                }, {
                    name: 'Internet Explorer',
                    y: 11.84
                }, {
                    name: 'Firefox',
                    y: 10.85
                }, {
                    name: 'Edge',
                    y: 4.67
                }, {
                    name: 'Safari',
                    y: 4.18
                }, {
                    name: 'Sogou Explorer',
                    y: 1.64
                }, {
                    name: 'Opera',
                    y: 1.6
                }, {
                    name: 'QQ',
                    y: 1.2
                }, {
                    name: 'Other',
                    y: 2.61
                }]
            }]
        });
    }

    // GENERAL FUNCTIONS
    function calculatePercentage(numerator, denominator) {
        let result = 0;
        result = parseFloat((numerator / denominator * 100).toFixed(2));

        if (result > 100) {
            result = 100.00;
        }
        return result;
    }

    // CHART SPECIFIC FUNCTIONS
    function prepareRepartitionData(data, type) {
        let collection = [];

        let colorPromoters = "#25ce7d";
        let colorPassive = " #ecedee";
        let colorDetractors = "#ff4d4d";
        let blue = "#0999d8";

        if (type === "nps") {
            collection.push({ y: data.score0, color: colorDetractors });
            collection.push({ y: data.score1, color: colorDetractors });
            collection.push({ y: data.score2, color: colorDetractors });
            collection.push({ y: data.score3, color: colorDetractors });
            collection.push({ y: data.score4, color: colorDetractors });
            collection.push({ y: data.score5, color: colorDetractors });
            collection.push({ y: data.score6, color: colorDetractors });
            collection.push({ y: data.score7, color: colorPassive });
            collection.push({ y: data.score8, color: colorPassive });
            collection.push({ y: data.score9, color: colorPromoters });
            collection.push({ y: data.score10, color: colorPromoters });
        }

        if (type === "ces") {
            collection.push({ y: data.score1, color: colorDetractors });
            collection.push({ y: data.score2, color: colorDetractors });
            collection.push({ y: data.score3, color: colorDetractors });
            collection.push({ y: data.score4, color: colorDetractors });
            collection.push({ y: data.score5, color: colorPromoters });
            collection.push({ y: data.score6, color: colorPromoters });
            collection.push({ y: data.score7, color: colorPromoters });
        }

        if (type === "csat") {
            collection.push({ y: data.score1, color: colorDetractors });
            collection.push({ y: data.score2, color: colorDetractors });
            collection.push({ y: data.score3, color: colorPassive });
            collection.push({ y: data.score4, color: colorPromoters });
            collection.push({ y: data.score5, color: colorPromoters });
        }

        if (type === "0to10") {
            collection.push({ y: data.score0, color: blue });
            collection.push({ y: data.score1, color: blue });
            collection.push({ y: data.score2, color: blue });
            collection.push({ y: data.score3, color: blue });
            collection.push({ y: data.score4, color: blue });
            collection.push({ y: data.score5, color: blue });
            collection.push({ y: data.score6, color: blue });
            collection.push({ y: data.score7, color: blue });
            collection.push({ y: data.score8, color: blue });
            collection.push({ y: data.score9, color: blue });
            collection.push({ y: data.score10, color: blue });
        }

        return collection;
    }

    function getRepartitionChartOptions(chartId, type) {
        let options = {
            chart: {
                renderTo: chartId,
                plotBackgroundColor: undefined,
                plotBorderWidth: undefined,
                plotShadow: false,
                spacing: [0, 0, 0, 0],
                style: {
                    fontFamily: "Arial",
                    fontWeight: 400
                },
                height: 290,
                type: "column"
            },
            credits: {
                enabled: false
            },
            title: {
                text: "",
                style: {
                    display: "none"
                }
            },
            subtitle: {
                text: "",
                style: {
                    display: "none"
                }
            },
            exporting: {
                enabled: false
            },
            yAxis: {
                title: {
                    text: "",
                    style: {
                        display: "none"
                    }
                },
                labels: {
                    enabled: false,
                },
                gridLineWidth: 0,
                maxPadding: 0.4
            },
            tooltip: {
                enabled: false
            },
            plotOptions: {
                series: {
                    groupPadding: 0.2,
                    pointPadding: 0.0,
                }
            },
            series: [
                {
                    showInLegend: false,
                    dataLabels: {
                        rotation: 0,
                        enabled: true,
                        color: "#222222",
                        align: "center",
                        y: 0,
                        format: "{y:.1f}%",
                        style: {
                            fontFamily: "Arial",
                            fontWeight: 700,
                            fontSize: "11px"
                        }
                    }
                }
            ]
        };

        if (type === "nps") {
            options["xAxis"] = {
                categories: ["0", "1", "2", "3", "4", "5",
                    "6", "7", "8", "9", "10"],
                tickLength: 0,
                lineColor: "#e0e0e0",
                lineWidth: 3,
                offset: 5,
                labels: {
                    style: {
                        fontFamily: "Arial",
                        fontSize: "12px",
                        color: "#2c3846",
                        fontWeight: 700,
                    }
                },
            }
        }
        if (type === "ces") {
            options["xAxis"] = {
                categories: ["1", "2", "3", "4", "5",
                    "6", "7"],
                tickLength: 0,
                lineColor: "#e0e0e0",
                lineWidth: 3,
                offset: 5,
                labels: {
                    style: {
                        fontFamily: "Arial",
                        fontSize: "12px",
                        color: "#2c3846",
                        fontWeight: 700,
                    }
                }
            }
        }
        if (type === "csat") {
            options["xAxis"] = {
                categories: ["1", "2", "3", "4", "5"],
                tickLength: 0,
                lineColor: "#e0e0e0",
                lineWidth: 3,
                offset: 5,
                labels: {
                    style: {
                        fontFamily: "Arial",
                        fontSize: "12px",
                        color: "#2c3846",
                        fontWeight: 700,
                    }
                }
            }
        }
        if (type === "0to10") {
            options["xAxis"] = {
                categories: ["0", "1", "2", "3", "4", "5",
                    "6", "7", "8", "9", "10"],
                tickLength: 0,
                lineColor: "#e0e0e0",
                lineWidth: 3,
                offset: 5,
                labels: {
                    style: {
                        fontFamily: "Arial",
                        fontSize: "12px",
                        color: "#2c3846",
                        fontWeight: 700,
                    }
                },
            }
        }

        return options;
    }

    //----- INIT -----//
    setPDFTitle();
    initialisewidgetContainers();
    selectWidgetType();
});

//(function () {
//    //$("cd-content").append("<div>protaotsfsdfjsiosfkljsdskjfd</div>");

//    //Highcharts.chart('container', {

//    //    title: {
//    //        text: 'Solar Employment Growth by Sector, 2010-2016'
//    //    },

//    //    subtitle: {
//    //        text: 'Source: thesolarfoundation.com'
//    //    },

//    //    yAxis: {
//    //        title: {
//    //            text: 'Number of Employees'
//    //        }
//    //    },
//    //    legend: {
//    //        layout: 'vertical',
//    //        align: 'right',
//    //        verticalAlign: 'middle'
//    //    },

//    //    plotOptions: {
//    //        series: {
//    //            label: {
//    //                connectorAllowed: false
//    //            },
//    //            pointStart: 2010,
//    //            animation: false
//    //        }
//    //    },

//    //    series: [{
//    //        name: 'Installation',
//    //        data: [43934, 52503, 57177, 69658, 97031, 119931, 137133, 154175]
//    //    }, {
//    //        name: 'Manufacturing',
//    //        data: [24916, 24064, 29742, 29851, 32490, 30282, 38121, 40434]
//    //    }, {
//    //        name: 'Sales & Distribution',
//    //        data: [11744, 17722, 16005, 19771, 20185, 24377, 32147, 39387]
//    //    }, {
//    //        name: 'Project Development',
//    //        data: [null, null, 7988, 12169, 15112, 22452, 34400, 34227]
//    //    }, {
//    //        name: 'Other',
//    //        data: [12908, 5948, 8105, 11248, 8989, 11816, 18274, 18111]
//    //    }],

//    //    responsive: {
//    //        rules: [{
//    //            condition: {
//    //                maxWidth: 500
//    //            },
//    //            chartOptions: {
//    //                legend: {
//    //                    layout: 'vertical',
//    //                    align: 'right',
//    //                    verticalAlign: 'bottom'
//    //                }
//    //            }
//    //        }]
//    //    },
//    //    exporting: {
//    //        enabled: false
//    //    }

//    //});

//    //document.getElementById("testje").innerHTML = testObj["alpha"];
//}());
