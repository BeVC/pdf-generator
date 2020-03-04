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
