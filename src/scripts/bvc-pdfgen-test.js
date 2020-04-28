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
                        <span name="widget-title">`+ widget["name"] + `</span>
                    </h2>
                    <div class="date">
                        from <span>`+ widget["beginEndDates"][0] + `</span> to <span>` + widget["beginEndDates"][1] + `</span>
                    </div>
                </div>
                <div class="widget-wrapper">
                </div>
                <div class="no-data-in-chart" style="display:none">
                    <div>
                        <p>not enough data</p>
                    </div>
                </div>
            </div>`);

            if (widget["datePeriod"] !== -1 && widget["datePeriod"] !== undefined) {
                $("#cd-content #" + widget["uniqueID"] + " .widget-header .date").css('display', 'inline-block');
                $("#cd-content #" + widget["uniqueID"] + " .widget-header .date").show();

            }
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
                case 10:
                    initialiseRepartitionZeroToTenScore(widget);
                    break;
                case 11:
                    initialiseEvolutionNpsScoreWidget(widget);
                    break;
                case 12:
                    initialiseEvolutionCesScoreWidget(widget);
                    break;
                case 13:
                    initialiseEvolutionCsatScoreWidget(widget);
                    break;
                case 14:
                    initialiseEvolutionZeroToTenScoreWidget(widget);
                    break;
                case 15:
                    initialiseIsaacPieChart(widget);
                    break;
                case 16:
                    initialiseIsaacLineChart(widget);
                    break;
                case 17:
                    initialiseDepartmentRankingWidget(widget);
                    break;
                case 18:
                    initialiseYesNoResultsWidget(widget);
                    break;
                case 19:
                    initialiseRecentAnswersWidget(widget);
                    break;
                case 20:
                    initialiseMostMentionedPerCategory(widget);
                    break;
                case 21:
                    initialiseSentimentSpread(widget);
                    break;
                case 22:
                    initialiseTopPositiveCategories(widget);
                    break;
                case 23:
                    initialiseTopNegativeCategories(widget);
                    break;
                case 24:
                    initialiseSentimentByCategory(widget);
                    break;
                case 99:
                    initialiseCoolPieChart(widget);
                    break;
            }
        }
    }

    // WIDGET ID 1 NPS SCORE
    function initialiseNPSBar(widget) {
        if (widget["data"]["nps"] === undefined || (widget["data"]["detractors"] === 0 && widget["data"]["passive"] === 0 && widget["data"]["promoters"] === 0)) {
            displayNoData(widget);
            return;
        }

        $("#" + widget["uniqueID"] + " .widget-wrapper").append(`<div class="nps-score-content">
                        <div class="nps-result">
                            <p>`+ widget["data"]["nps"] + `</p>
                            <p>NPS</p>
                        </div>
                        <div class="nps-bar">
                            <div class="nps-detractors" style="width:`+ widget["data"]["detractors"] + `%">
                                <p>`+ widget["data"]["detractors"] + `%</p>
                                <p>detractors</p>
                            </div>
                            <div class="nps-passives" style="width:`+ widget["data"]["passive"] + `%">
                                <p>`+ widget["data"]["passive"] + `%</p>
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
            $("#" + widgetId + " .nps-detractors").css('padding-left', '0');
            $("#" + widgetId + " .nps-detractors p").hide();
        }
        if (widget["data"]["passive"] <= 10) {
            $("#" + widgetId + " .nps-passives").css('padding-left', '0');
            $("#" + widgetId + " .nps-passives p").hide();
        }
        if (widget["data"]["promoters"] <= 10) {
            $("#" + widgetId + " .nps-promoters").css('padding-left', '0');
            $("#" + widgetId + " .nps-promoters p").hide();
        }
    }

    // WIDGET ID 2 CES SCORE
    function initialiseCESBar(widget) {
        if (widget["data"]["ces"] === undefined || (widget["data"]["disagree"] === 0 && widget["data"]["agree"] === 0)) {
            displayNoData(widget);
            return;
        }

        $("#" + widget["uniqueID"] + " .widget-wrapper").append(`<div class="ces-score-content">
                        <div class="ces-graph">
                            <div class="ces20-gauge"></div>
                            <span class="ces-gauge-score">`+ widget["data"]["ces"].toFixed(2) + `</span>
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
        let cesScore = widget["data"]["ces"];
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
        if (widget["data"]["csat"] === undefined || (widget["data"]["unsatisfied"] === 0 && widget["data"]["passive"] === 0 && widget["data"]["satisfied"] === 0)) {
            displayNoData(widget);
            return;
        }

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
        let csatScore = widget["data"]["csat"];
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
        if (widget["data"]["respondents"] === 0 && widget["data"]["answers"] === 0 && widget["data"]["unsubscribed"] === 0) {
            displayNoData(widget);
            return;
        }

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
        let percentage = 0;
        if (widget["data"]["answers"] > 0) {
            percentage = calculatePercentage(widget["data"]["text"], widget["data"]["answers"]);
        }
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
        let percentage = 0;
        if (widget["data"]["answers"] > 0) {
            percentage = calculatePercentage(widget["data"]["lastweek"], widget["data"]["answers"]);
        }
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
        let repartition = prepareRepartitionData(widget["data"], "nps");

        if (notEnoughRepartition(repartition)) {
            displayNoData(widget);
            return;
        }

        let options = getRepartitionChartOptions(chartId, "nps");

        let myChart = new Highcharts.chart(options);

        myChart.setSize(760, 290);
        myChart.series[0].setData(repartition, true);
    }

    // WIDGET ID 8 REPARTITION CES SCORE
    function initialiseRepartitionCesScore(widget) {
        $("#" + widget["uniqueID"] + " .widget-wrapper").append(`<div class="repartition-ces-score-content">
                            <div id="chart"></div>
                        </div>`);

        let widgetId = widget["uniqueID"];
        let chartId = "chart_" + widgetId;
        $("#" + widgetId + " .repartition-ces-score-content div").attr("id", chartId);
        let repartition = prepareRepartitionData(widget["data"], "ces");

        if (notEnoughRepartition(repartition)) {
            displayNoData(widget);
            return;
        }

        let options = getRepartitionChartOptions(chartId, "ces");

        let myChart = new Highcharts.chart(options);

        myChart.setSize(760, 290);
        myChart.series[0].setData(repartition, true);
    }

    // WIDGET ID 9 REPARTITION CSAT SCORE
    function initialiseRepartitionCsatScore(widget) {
        $("#" + widget["uniqueID"] + " .widget-wrapper").append(`<div class="repartition-csat-score-content">
                            <div id="chart"></div>
                        </div>`);

        let widgetId = widget["uniqueID"];
        let chartId = "chart_" + widgetId;
        $("#" + widgetId + " .repartition-csat-score-content div").attr("id", chartId);
        let repartition = prepareRepartitionData(widget["data"], "csat");

        if (notEnoughRepartition(repartition)) {
            displayNoData(widget);
            return;
        }

        let options = getRepartitionChartOptions(chartId, "csat");

        let myChart = new Highcharts.chart(options);

        myChart.setSize(760, 290);
        myChart.series[0].setData(repartition, true);
    }

    // WIDGET ID 10 REPARTITION 0-10 SCORE
    function initialiseRepartitionZeroToTenScore(widget) {
        $("#" + widget["uniqueID"] + " .widget-wrapper").append(`<div class="repartition-zero-to-ten-score-content">
                            <div id="chart"></div>
                        </div>`);

        let widgetId = widget["uniqueID"];
        let chartId = "chart_" + widgetId;
        $("#" + widgetId + " .repartition-zero-to-ten-score-content div").attr("id", chartId);
        let repartition = prepareRepartitionData(widget["data"], "0to10");

        if (notEnoughRepartition(repartition)) {
            displayNoData(widget);
            return;
        }

        let options = getRepartitionChartOptions(chartId, "0to10");

        let myChart = new Highcharts.chart(options);

        myChart.setSize(760, 290);
        myChart.series[0].setData(repartition, true);
    }

    // WIDGET ID 11 EVOLUTION SCORE NPS
    function initialiseEvolutionNpsScoreWidget(widget) {
        $("#" + widget["uniqueID"] + " .widget-wrapper").append(`<div class="evolution-nps-score-content">
                            <div id="chart"></div>
                            <div class="highchart-info" style="height:40px">
                                <div class="highchart-info-1">
                                    <p class="p1"></p>
                                    <p class="p2"></p>
                                </div>
                            </div>
                        </div>`);

        let widgetId = widget["uniqueID"];
        let chartId = "chart_" + widgetId;
        $("#" + widgetId + " .evolution-nps-score-content div").attr("id", chartId);
        let chartData = prepareEvolutionChartData(widget["data"], "nps");

        if (chartData.length < 2) {
            displayNoData(widget);
            return;
        }

        setEvolutionChartInfos(widgetId, chartData[0][1], chartData[0][0], chartData[chartData.length - 1][1], chartData[chartData.length - 1][0]);
        let options = getEvolutionChartOptions(chartId, "nps");

        let myChart = new Highcharts.chart(options);
        myChart.setSize(760, 275);
        myChart.series[0].setData(chartData, true);
    }

    // WIDGET ID 12 EVOLUTION SCORE CES
    function initialiseEvolutionCesScoreWidget(widget) {
        $("#" + widget["uniqueID"] + " .widget-wrapper").append(`<div class="evolution-ces-score-content">
                            <div id="chart"></div>
                            <div class="highchart-info" style="height:40px">
                                <div class="highchart-info-1">
                                    <p class="p1"></p>
                                    <p class="p2"></p>
                                </div>
                            </div>
                        </div>`);

        let widgetId = widget["uniqueID"];
        let chartId = "chart_" + widgetId;
        $("#" + widgetId + " .evolution-ces-score-content div").attr("id", chartId);
        let chartData = prepareEvolutionChartData(widget["data"], "ces");

        if (chartData.length < 2) {
            displayNoData(widget);
            return;
        }

        setEvolutionChartInfos(widgetId, chartData[0][1], chartData[0][0], chartData[chartData.length - 1][1], chartData[chartData.length - 1][0]);
        let options = getEvolutionChartOptions(chartId, "ces");

        let myChart = new Highcharts.chart(options);
        myChart.setSize(760, 275);
        myChart.series[0].setData(chartData, true);
    }

    // WIDGET ID 13 EVOLUTION SCORE CSAT
    function initialiseEvolutionCsatScoreWidget(widget) {
        $("#" + widget["uniqueID"] + " .widget-wrapper").append(`<div class="evolution-csat-score-content">
                            <div id="chart"></div>
                            <div class="highchart-info" style="height:40px">
                                <div class="highchart-info-1">
                                    <p class="p1"></p>
                                    <p class="p2"></p>
                                </div>
                            </div>
                        </div>`);

        let widgetId = widget["uniqueID"];
        let chartId = "chart_" + widgetId;
        $("#" + widgetId + " .evolution-csat-score-content div").attr("id", chartId);
        let chartData = prepareEvolutionChartData(widget["data"], "csat");

        if (chartData.length < 2) {
            displayNoData(widget);
            return;
        }

        setEvolutionChartInfos(widgetId, chartData[0][1], chartData[0][0], chartData[chartData.length - 1][1], chartData[chartData.length - 1][0]);
        let options = getEvolutionChartOptions(chartId, "csat");

        let myChart = new Highcharts.chart(options);
        myChart.setSize(760, 275);
        myChart.series[0].setData(chartData, true);
    }

    // WIDGET ID 14 EVOLUTION SCORE 0-10
    function initialiseEvolutionZeroToTenScoreWidget(widget) {
        $("#" + widget["uniqueID"] + " .widget-wrapper").append(`<div class="evolution-zero-to-ten-score-content">
                            <div id="chart"></div>
                            <div class="highchart-info" style="height:40px">
                                <div class="highchart-info-1">
                                    <p class="p1"></p>
                                    <p class="p2"></p>
                                </div>
                            </div>
                        </div>`);

        let widgetId = widget["uniqueID"];
        let chartId = "chart_" + widgetId;
        $("#" + widgetId + " .evolution-zero-to-ten-score-content div").attr("id", chartId);
        let chartData = prepareEvolutionChartData(widget["data"], "0to10");

        if (chartData.length < 2) {
            displayNoData(widget);
            return;
        }

        setEvolutionChartInfos(widgetId, chartData[0][1], chartData[0][0], chartData[chartData.length - 1][1], chartData[chartData.length - 1][0]);
        let options = getEvolutionChartOptions(chartId, "0to10");

        let myChart = new Highcharts.chart(options);
        myChart.setSize(760, 275);
        myChart.series[0].setData(chartData, true);
    }

    // WIDGET ID 15 ISAAC PIE CHART
    function initialiseIsaacPieChart(widget) {
        $("#" + widget["uniqueID"] + " .widget-wrapper").append(`<div class="isaac-pie-chart-content">
                        <div class="pie-breakdown">
                            <div class="mentioned">
                                <p>mentioned</p>
                                <p></p>
                            </div>
                            <div class="positive">
                                <p>positive</p>
                                <p></p>
                            </div>
                            <div class="neutral">
                                <p>neutral</p>
                                <p></p>
                            </div>
                            <div class="negative">
                                <p>negative</p>
                                <p></p>
                            </div>
                        </div>
                        <div class="pie">
                            <div id="chart"></div>
                            <div class="pie-sub-categories">
                                <ul class="pie-list">

                                </ul>
                            </div>
                        </div>
                    </div>`);


        let dataCol = [];
        let isaacSelectedCategory = widget["data"].find(item => item.uniqueID === widget["mainCategoryUniqueID"]);

        if (isaacSelectedCategory === undefined) {
            displayNoData(widget);
            return;
        }

        isaacSelectedCategory.items = isaacSelectedCategory.items.sort((n1, n2) => n2.total - n1.total);
        for (let item of isaacSelectedCategory.items) {
            item.percentagePos = calculatePercentage(item.positive, item.total);
            item.percentageNeg = calculatePercentage(item.negative, item.total);
            let total = item.percentageNeg + item.percentagePos;
            if (total > 100) {
                total = 100;
            }
            item.percentageNeut = parseFloat((100 - total).toFixed(2));

            // FOR DATACOL
            let percentage = (item.total / isaacSelectedCategory.total * 100).toFixed(2);
            dataCol.push({
                name: item.name,
                y: parseFloat(percentage),
                color: item.color,
                dataLabels: {
                    enabled: false
                }
            });
        }

        let widgetId = widget["uniqueID"];
        let chartId = "chart_" + widgetId;

        $("#" + widgetId + " .widget-header h2").append("<span>&ldquo;" + isaacSelectedCategory.name + "&ldquo;</span>");
        $("#" + widgetId + " .pie-breakdown .mentioned p:nth-child(2)").text(isaacSelectedCategory.total);
        if (widget["polarityEnabled"]) {
            $("#" + widgetId + " .pie-breakdown .positive p:nth-child(2)").text(calculatePercentage(isaacSelectedCategory.positive, isaacSelectedCategory.total) + "%");
            $("#" + widgetId + " .pie-breakdown .neutral p:nth-child(2)").text(calculatePercentage(isaacSelectedCategory.neutral, isaacSelectedCategory.total) + "%");
            $("#" + widgetId + " .pie-breakdown .negative p:nth-child(2)").text(calculatePercentage(isaacSelectedCategory.negative, isaacSelectedCategory.total) + "%");
        } else {
            $("#" + widgetId + " .pie-breakdown .positive").hide();
            $("#" + widgetId + " .pie-breakdown .neutral").hide();
            $("#" + widgetId + " .pie-breakdown .negative").hide();
        }

        let $elements = buildSubCategoryListForPieChart(isaacSelectedCategory.items, widget["polarityEnabled"]);
        $("#" + widgetId + " .pie-list").append($elements);

        $("#" + widgetId + " .isaac-pie-chart-content .pie div:first-child").attr("id", chartId);

        let options = getIsaacPieChartOptions(chartId);
        let myChart = new Highcharts.chart(options);

        myChart.setSize(760, 230);
        myChart.series[0].setData(dataCol, true);

    }

    // WIDGET ID 16 ISAAC LINE CHART
    function initialiseIsaacLineChart(widget) {
        $("#" + widget["uniqueID"] + " .widget-wrapper").append(`<div class="isaac-line-chart-content">
            <div class="line-sub-categories">
                <div class="list-title">subcategories</div>
                <ul class="sub-cat-list"></ul>
            </div>
            <div class="chart-viewport">
                <div id="chart"></div>
            </div>
        </div>`);

        let series = [];
        let isaacSelectedCategoryEvolution = widget["data"];

        if (isaacSelectedCategoryEvolution.length < 2) {
            displayNoData(widget);
            return;
        }

        let subCategoryCollection = mapSubCategories(isaacSelectedCategoryEvolution);
        for (let i = 0; i < subCategoryCollection.length; i++) {
            if (i < 6) {
                let subCategory = subCategoryCollection[i];
                subCategory.isInactive = false;
                let serie = initialiseIsaacLineChartData(subCategory, isaacSelectedCategoryEvolution);
                series.push(serie);
            }
        }

        let widgetId = widget["uniqueID"];
        let chartId = "chart_" + widgetId;

        $("#" + widgetId + " .widget-header h2").append("<span>&ldquo;" + isaacSelectedCategoryEvolution[0].mostMentioned[0].name + "&ldquo;</span>");
        let $elements = buildSubCategoryListForLineChart(subCategoryCollection, series);
        $("#" + widgetId + " .sub-cat-list").append($elements);

        $("#" + widgetId + " .isaac-line-chart-content .chart-viewport #chart").attr("id", chartId);
        let options = getIsaacLineChartOptions(chartId, series);
        let myChart = new Highcharts.chart(options);

        myChart.setSize(1480, 290);

    }

    // WIDGET ID 17 DEPARTMENT RANKING
    function initialiseDepartmentRankingWidget(widget) {
        $("#" + widget["uniqueID"] + " .widget-wrapper").append(`<div class="department-ranking-content">
            <table class="department-ranking-table">
                <thead>
                    <tr>
                        <td>rank</td>
                        <td>units</td>
                        <td></td>
                        <td>respondents</td>
                        <td>answers</td>
                    </tr>
                </thead>
                <tbody></tbody>
            </table>
        </div>`);

        let widgetId = widget["uniqueID"];

        if (widget["data"]["list"].length === 0) {
            displayNoData(widget);
            return;
        }

        $("#" + widgetId + " .department-ranking-table thead tr td:nth-child(3)").text(getType(widget["data"]["list"][0]));

        let relevantDepartments = filterRelevantDepartments(widget["data"]["list"]);
        let $elements = [];
        for (var i = 0; i < relevantDepartments.length; i++) {
            let item = relevantDepartments[i];
            let element = "<tr class='" + departmentIsRoot(item) + "'>" +
                "<td>" + i + "</td>" +
                "<td>" +
                "<span class='name'>" + item.name + "</span>" +
                buildAliasSpan(item) +
                "</td>" +
                buildScoreTD(item) +
                "<td>" + item.recipients + "</td>" +
                buildTotalSubmittedTD(item) +
                "</tr>";

            $elements.push(element);
        }
        $("#" + widgetId + " .department-ranking-table tbody").append($elements);
    }

    function getType(department) {
        if (department.nps) {
            return "nps";
        }
        if (department.ces) {
            return "ces";
        }
        if (department.csat) {
            return "csat";
        }
    }

    function filterRelevantDepartments(departments) {
        let collection = [];

        for (let department of departments) {
            if (department.type === "bu" && department.parent_UniqueID === undefined) {
                collection.push(department);
                continue;
            }
            if (department.nps !== undefined && department.type !== "bu") {
                collection.push(department);
                continue;
            }
            if (department.ces !== undefined && department.type !== "bu") {
                collection.push(department);
                continue;
            }
            if (department.csat !== undefined && department.type !== "bu") {
                collection.push(department);
                continue;
            }
        }

        return collection;
    }

    function departmentIsRoot(department) {
        if (department.type === "bu" && department.parent_UniqueID === undefined) {
            return "first";
        } else {
            return "";
        }
    }

    function buildAliasSpan(department) {
        if (department.parent_UniqueID !== undefined && department.alias !== undefined) {
            return "<span class='alias'>" + department.alias + "</span>";
        } else {
            return "";
        }
    }

    function buildScoreTD(department) {
        let type;
        let score;

        if (department.nps !== undefined) {
            type = "nps";
            score = department.nps.nps;
        }
        if (department.ces !== undefined) {
            type = "ces";
            score = department.ces.ces;
        }
        if (department.csat !== undefined) {
            type = "csat";
            score = department.csat.csat;
        }

        return "<td class='" + type + "'>" + score + "</td>";
    }

    function buildTotalSubmittedTD(department) {
        let totalSubmitted;
        if (department.nps) {
            totalSubmitted = department.nps.totalSubmitted;
        }
        if (department.ces) {
            totalSubmitted = department.ces.totalSubmitted;
        }
        if (department.csat) {
            totalSubmitted = department.csat.totalSubmitted;
        }

        return "<td>" + totalSubmitted + "</td>";
    }

    // WIDGET ID 18 YES NO RESULT
    function initialiseYesNoResultsWidget(widget) {

        if (isNaN(widget["data"]["yes"]) || isNaN(widget["data"]["no"])) {
            displayNoData(widgtet);
            return;
        }

        $("#" + widget["uniqueID"] + " .widget-wrapper").append(`<div class="yes-no-results-content">
            <ul>
                <li>
                    <p class="title">yes</p>
                    <div class="graph">
                        <div class="progress">
                            <span class="meter"></span>
                            <p class="value"></p>
                        </div>
                    </div>
                    <p class="responses"><span></span></p>
                </li>
                <li>
                    <p class="title">no</p>
                    <div class="graph">
                        <div class="progress">
                            <span class="meter"></span>
                            <p class="value"></p>
                        </div>
                    </div>
                    <p class="responses"><span></span></p>
                </li>
            </ul>
        </div>`);

        let widgetId = widget["uniqueID"];

        $("#" + widgetId + " .yes-no-results-content ul li:first-child .progress").width(calculatePercentageAlt(widget["data"]["yes"], widget["data"]["yes"], widget["data"]["no"]) + "%");
        $("#" + widgetId + " .yes-no-results-content ul li:first-child p.value").text(calculatePercentageAlt(widget["data"]["yes"], widget["data"]["yes"], widget["data"]["no"]) + "%");
        $("#" + widgetId + " .yes-no-results-content ul li:first-child p.responses").text(widget["data"]["yes"]);
        $("#" + widgetId + " .yes-no-results-content ul li:nth-child(2) .progress").width(calculatePercentageAlt(widget["data"]["no"], widget["data"]["yes"], widget["data"]["no"]) + "%");
        $("#" + widgetId + " .yes-no-results-content ul li:nth-child(2) p.value").text(calculatePercentageAlt(widget["data"]["no"], widget["data"]["yes"], widget["data"]["no"]) + "%");
        $("#" + widgetId + " .yes-no-results-content ul li:nth-child(2) p.responses").text(widget["data"]["no"]);
    }

    // WIDGET ID 19 RECENT ANSWERS
    function initialiseRecentAnswersWidget(widget) {
        $("#" + widget["uniqueID"] + " .widget-wrapper").append(`<div class="recent-answers-content">
            <ul class="score-list"></ul>
        </div>`);

        let widgetId = widget["uniqueID"];
        let recentAnswers = prepareRecentAnswers(widget["data"]["items"]);
        if (recentAnswers.length === 0) {
            displayNoData(widget);
            return;
        }

        let $elements = [];
        for (let item of recentAnswers) {
            let color = determineScoreColor(item.score, item.type);

            let element = "<li><span>" + item.respondentParsedName + "</span><span class='score " + color + "'>" + item.score + "</span></li>";
            $elements.push(element);
        }
        $("#" + widgetId + " .score-list").append($elements);
    }

    function prepareRecentAnswers(entries) {
        for (let entry of entries) {

            // GET SCORE VALUE AND TYPE
            for (let answerQuestion of entry.answerQuestions) {
                if (answerQuestion.question_HasNpsValueAnswer) {
                    entry.score = answerQuestion.answer_Value;
                    entry.type = "nps";
                    break;
                }
                if (answerQuestion.question_HasCesScoreAnswer) {
                    entry.score = answerQuestion.answer_Value;
                    entry.type = "ces";
                    break;
                }
                if (answerQuestion.question_HasCsatScoreAnswer) {
                    entry.score = answerQuestion.answer_Value;
                    entry.type = "csat";
                    break;
                }
            }

            // GET IDENTIFICATION OF RESPONDENT
            entry.respondentParsedName = getRespondentName(entry);
        }
        return entries;
    }

    function getRespondentName(entry) {
        if (entry === undefined) {
            return "anonymous";
        }
        if ((entry.firstName === undefined || entry.firstName === "") && (entry.lastName === undefined || entry.lastName === "")) {
            if (entry.email === undefined || entry.email === "") {
                return "anonymous";
            } else {
                return entry.email;
            }
        } else {
            if (entry.firstName === undefined || entry.firstName === "") {
                return entry.lastName;
            } else if (entry.lastName === undefined || entry.lastName === "") {
                return entry.firstName;
            } else {
                return entry.firstName + " " + entry.lastName;
            }
        }
    }

    function determineScoreColor(score, type) {
        let color = "";

        if (type === "nps") {
            if (score <= 6) {
                return "red";
            }
            if (score >= 7 && score <= 8) {
                return "gray";
            }
            if (score >= 9) {
                return "green";
            }
        }

        if (type === "ces") {
            if (score <= 4) {
                return "red";
            }
            if (score >= 5) {
                return "green";
            }
        }

        if (type === "csat") {
            if (score < 3) {
                return "red";
            }
            if (score === 3) {
                return "gray";
            }
            if (score > 3) {
                return "green";
            }
        }

        return color;
    }

    // ID 20 MENTIONS PER MAIN CATEGORY
    function initialiseMostMentionedPerCategory(widget) {
        $("#" + widget["uniqueID"] + " .widget-wrapper").append(`<div class="most-mentioned-categories-content">
            <table>
                <tbody>
                </tbody>
            </table>
        </div>`);

        let widgetId = widget["uniqueID"];
        let dataMentionedMainCategories = filterUnspecified(widget["data"].sort((a, b) => b.total - a.total));
        let totalMentionsAllCategories = widget["data"][0]["totalMentionsAllCategories"];

        let $elements = [];
        for (var i = 0; i < dataMentionedMainCategories.length; i++) {
            let item = dataMentionedMainCategories[i];
            let element = "<tr>" +
                "<td>" +
                "<span class='grey'>" + item.total + "</span>" +
                "</td>" +
                "<td>" +
                "<span>" + item.name + "</span>" +
                "</td>" +
                "<td>" +
                "<div class='bar'>" +
                "<div class='fill' style='width:" + calculatePercentage(item.total, totalMentionsAllCategories) + "%'></div>" +
                "</div>" +
                "</td>" +
                "</tr>";

            $elements.push(element);
        }
        $("#" + widgetId + " .most-mentioned-categories-content table tbody").append($elements);
    }

    function filterUnspecified(array) {
        let filterArray = array.slice().filter(item => !item.name.includes("Unspecified & Misc"));
        return filterArray;
    }
    // ID 21 SENTIMENT SPREAD
    function initialiseSentimentSpread(widget) {
        $("#" + widget["uniqueID"] + " .widget-wrapper").append(`<div class="sentiment-spread-content">
                        <div class="pie-breakdown">
                            <div class="data-item">
                                <p class='grey'>MENTIONS</p>
                                <p class='mentions'>`+ widget["data"]["totalMentions"] + `</p>
                            </div>
                            <div class="data-item">
                                <p class='grey'>POSITIVE</p>
                                <p class='positive'>`+ uiIsSmallerThanOne(calculatePercentage(widget["data"]["positiveMentions"], widget["data"]["totalMentions"])) + `</p>
                            </div>
                            <div class="data-item">
                                <p class='grey'>NEUTRAL</p>
                                <p class='neutral'>`+ uiIsSmallerThanOne(calculatePercentage(widget["data"]["neutralMentions"], widget["data"]["totalMentions"])) + `</p>
                            </div>
                            <div class="data-item">
                                <p class='grey'>NEGATIVE</p>
                                <p class='negative'>`+ uiIsSmallerThanOne(calculatePercentage(widget["data"]["negativeMentions"], widget["data"]["totalMentions"])) + `</p>
                            </div>
                        </div>
                        <div class='pie'>
                            <div class='chart'></div>
                        </div>
        </div>`);

        let dataCol = [];
        dataCol.push({
            name: 'positive',
            y: calculatePercentage(widget["data"]["positiveMentions"], widget["data"]["totalMentions"]),
            color: '#25ce7d',
            tooltipColor: '#25ce7d',
            dataLabels: {
                enabled: false
            }
        });

        dataCol.push({
            name: 'neutral',
            y: calculatePercentage(widget["data"]["neutralMentions"], widget["data"]["totalMentions"]),
            color: '#eaecee',
            tooltipColor: '#595959',
            dataLabels: {
                enabled: false
            }
        });

        dataCol.push({
            name: 'negative',
            y: calculatePercentage(widget["data"]["negativeMentions"], widget["data"]["totalMentions"]),
            color: '#ff4d4d',
            tooltipColor: '#ff4d4d',
            dataLabels: {
                enabled: false
            }
        });

        let widgetId = widget["uniqueID"];
        let chartId = "chart_" + widgetId;
        $("#" + widgetId + " .sentiment-spread-content .pie div:first-child").attr("id", chartId);
        let options = getSentimentSpreadOptions(chartId);
        let myChart = new Highcharts.chart(options);

        myChart.setSize(760, 230);
        myChart.series[0].setData(dataCol, true);
    }

    // ID 22 TOP POSITIVE CATEGORIES
    function initialiseTopPositiveCategories(widget) {
        let firstCategoryBaseAmount;
        let widgetId = widget["uniqueID"];
        let categorySubcategoryList = flattenList(widget["data"]["mentionedMainCategories"]);
        let top10Refined = categorySubcategoryList.sort((a, b) => b.positive - a.positive).slice(0, 10);
        let categoriesCol = findCorresponding(top10Refined, [], "positive");
        if (categoriesCol.length > 0) {
            let flatCountList = [];
            categoriesCol.forEach(category => {
                category.items.forEach(item => {
                    flatCountList.push(item.countMentions);
                });
            });
            firstCategoryBaseAmount = Math.max(...flatCountList);
        }

        $("#" + widget["uniqueID"] + " .widget-wrapper").append(`<div class="top-positive-content">
                    <div class="summary-container">
                        <div class="summary">
                            <div class="summary-numbers">
                                <div class="number-total">
                                    <span class="amount">`+ getSum(categoriesCol) + `</span>
                                    <span>mentions</span>
                                </div>
                                <div class="line"></div>
                                <div class="numbers-percentages">
                                    <span class="grey total">is `+ calculatePercentage(getSum(categoriesCol), widget["data"]["sentimentSpread"]["totalMentions"]) + `% of ` + widget["data"]["sentimentSpread"]["totalMentions"] + ` total mentions</span>
                                    <span class="share">is `+ calculatePercentage(getSum(categoriesCol), widget["data"]["sentimentSpread"]["positiveMentions"]) + `% of ` + widget["data"]["sentimentSpread"]["positiveMentions"] + ` total positive</span>
                                    <div class="bar">
                                        <div class="fill" style="width:`+ calculatePercentage(getSum(categoriesCol), widget["data"]["sentimentSpread"]["positiveMentions"]) + `%"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <ul class="chart">
                    </ul>
                </div>`);

        let $elements = [];
        for (let i = 0; i < categoriesCol.length; i++) {
            let item = categoriesCol[i];
            let element = "<li>" +
                "<div class='bars'>" +
                "<div class='bar-chart'>" +
                "<div class='fill transparent' style='width:" + (100 - item.items[0].countMentions * 80 / 100 / firstCategoryBaseAmount * 100) + "%'>" +
                "<span class='grey'>" + item.items[0].countMentions + "</span>" +
                "</div>" +
                "<div class='fill green' style='width:" + item.items[0].countMentions * 80 / 100 / firstCategoryBaseAmount * 100 + "%'></div>" +
                "</div>" +
                "</div>" +
                "<div class='name'>" +
                "<span class='category'>" + item.mainCategoryName + "/" + item.subCategoryName + "</span>" +
                "</div>" +
                "</li>";

            $elements.push(element);
        }

        $("#" + widgetId + " .top-positive-content .chart").append($elements);
    }

    // ID 23 TOP NEGATIVE CATEGORIES
    function initialiseTopNegativeCategories(widget) {
        let firstCategoryBaseAmount;
        let widgetId = widget["uniqueID"];
        let categorySubcategoryList = flattenList(widget["data"]["mentionedMainCategories"]);
        let top10Refined = categorySubcategoryList.sort((a, b) => b.negative - a.negative).slice(0, 10);
        let categoriesCol = findCorresponding(top10Refined, [], "negative");
        if (categoriesCol.length > 0) {
            let flatCountList = [];
            categoriesCol.forEach(category => {
                category.items.forEach(item => {
                    flatCountList.push(item.countMentions);
                });
            });
            firstCategoryBaseAmount = Math.max(...flatCountList);
        }

        $("#" + widget["uniqueID"] + " .widget-wrapper").append(`<div class="top-negative-content">
                    <div class="summary-container">
                        <div class="summary">
                            <div class="summary-numbers">
                                <div class="number-total">
                                    <span class="amount">`+ getSum(categoriesCol) + `</span>
                                    <span>mentions</span>
                                </div>
                                <div class="line"></div>
                                <div class="numbers-percentages">
                                    <span class="grey total">is `+ calculatePercentage(getSum(categoriesCol), widget["data"]["sentimentSpread"]["totalMentions"]) + `% of ` + widget["data"]["sentimentSpread"]["totalMentions"] + ` total mentions</span>
                                    <span class="share">is `+ calculatePercentage(getSum(categoriesCol), widget["data"]["sentimentSpread"]["negativeMentions"]) + `% of ` + widget["data"]["sentimentSpread"]["negativeMentions"] + ` total negative</span>
                                    <div class="bar">
                                        <div class="fill" style="width:`+ calculatePercentage(getSum(categoriesCol), widget["data"]["sentimentSpread"]["negativeMentions"]) + `%"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <ul class="chart">
                    </ul>
                </div>`);

        let $elements = [];
        for (let i = 0; i < categoriesCol.length; i++) {
            let item = categoriesCol[i];
            let element = "<li>" +
                "<div class='bars'>" +
                "<div class='bar-chart'>" +
                "<div class='fill transparent' style='width:" + (100 - item.items[0].countMentions * 80 / 100 / firstCategoryBaseAmount * 100) + "%'>" +
                "<span class='grey'>" + item.items[0].countMentions + "</span>" +
                "</div>" +
                "<div class='fill red' style='width:" + item.items[0].countMentions * 80 / 100 / firstCategoryBaseAmount * 100 + "%'></div>" +
                "</div>" +
                "</div>" +
                "<div class='name'>" +
                "<span class='category'>" + item.mainCategoryName + "/" + item.subCategoryName + "</span>" +
                "</div>" +
                "</li>";

            $elements.push(element);
        }

        $("#" + widgetId + " .top-negative-content .chart").append($elements);
    }

    // ID 24 SENTIMENT BY CATEGORY
    function initialiseSentimentByCategory(widget) {
        $("#" + widget["uniqueID"] + " .widget-wrapper").append(`<div class="sentiment-by-category-content">
                            <div class="rows">                                
                            </div>
                        </div>`);

        let widgetId = widget["uniqueID"];
        let dataMentionedMainCategories = sortOnPolarity(widget["data"]);
        let $elements = [];
        for (let i = 0; i < dataMentionedMainCategories.length; i++) {
            let item = dataMentionedMainCategories[i];
            let element = `<div class="row row-wrapper">
                                    <div class="main-category">
                                        <span class="amount">`+ item.total + `</span>
                                        <div class="name tooltip">
                                            <div class="btn">
                                                <span>`+ item.name + `</span>
                                            </div>
                                            <div class="bar">
                                                <div class="fill" style="width:`+ calculatePercentage(item.total, item.totalMentionsAllCategories) + `%"></div>
                                            </div>
                                        </div>
                                        <div class="sentiment-bar">
                                            <div class="fill-container green" style="width:`+ calculatePercentage(item.positive, item.total) + `%">
                                                <span>`+ percentageDisplay(calculatePercentage(item.positive, item.total)) + `</span>
                                                <div class="fill"></div>
                                            </div>
                                            <div class="fill-container grey" style="width:`+ calculatePercentage(item.neutral, item.total) + `%">
                                                <span>`+ percentageDisplay(calculatePercentage(item.neutral, item.total)) + `</span>
                                                <div class="fill"></div>
                                            </div>
                                            <div class="fill-container red" style="width:`+ calculatePercentage(item.negative, item.total) + `%">
                                                <span>`+ percentageDisplay(calculatePercentage(item.negative, item.total)) + `</span>
                                                <div class="fill"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>`;


            $elements.push(element);
        }
        $("#" + widgetId + " .sentiment-by-category-content .rows").append($elements);
    }

    function percentageDisplay(percentage) {
        return percentage >= 5 ? percentage + "%" : "";
    }

    function sortOnPolarity(dataRefine, selectedSort) {
        let array = dataRefine.slice();

        switch (selectedSort) {
            case -1:
                array.sort((a, b) => b.total - a.total);
                array.forEach(category => {
                    category.items = category.items.sort((a, b) => b.total - a.total);
                });
                return array;
            case 3:
                array.sort((a, b) => b.negative - a.negative);
                array.forEach(category => {
                    category.items = category.items.sort((a, b) => b.negative - a.negative);
                });
                return array;
            case 7:
                array.sort((a, b) => b.positive - a.positive);
                array.forEach(category => {
                    category.items = category.items.sort((a, b) => b.positive - a.positive);
                });
                return array;
            default:
                return array;
        }
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
    function displayNoData(widget) {
        $("#cd-content #" + widget["uniqueID"] + " .widget-wrapper").hide();
        $("#cd-content #" + widget["uniqueID"] + " .no-data-in-chart").show();
    }

    function notEnoughRepartition(repartition) {
        let notEnough = true;
        for (let i = 0; i < repartition.length; i++) {
            if (repartition[i].y > 0) {
                notEnough = false;
            }
        }
        return notEnough;
    }

    function calculatePercentage(numerator, denominator) {
        let result = 0;
        result = parseFloat((numerator / denominator * 100).toFixed(2));

        if (result > 100) {
            result = 100.00;
        }
        return result;
    }

    function calculatePercentageAlt(numerator, denominator1, denominator2) {
        if (denominator1 === 0 && denominator2 === 0) {
            return "0";
        } else {
            return (numerator * 100 / (denominator1 + denominator2)).toFixed(1);
        }
    }

    function uiIsSmallerThanOne(amount) {
        if (amount < 1 && amount > 0) {
            return "< 1";
        } else {
            return amount.toString();
        }
    }

    function getSum(array) {
        let sum = 0;
        array.forEach(subCategory => {
            sum = sum + subCategory.items[0].countMentions;
        });
        return sum;
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
                    enabled: false
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
                    pointPadding: 0.0
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
                        fontWeight: 700
                    }
                }
            };
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
                        fontWeight: 700
                    }
                }
            };
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
                        fontWeight: 700
                    }
                }
            };
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
                        fontWeight: 700
                    }
                }
            };
        }

        return options;
    }

    function prepareEvolutionChartData(data, type) {
        let chartData = [];
        let date;

        for (let item of data) {
            let value;

            if (type === "nps") {
                if (item.nps) {
                    value = item.nps;
                }
                if (item.nps === 0) {
                    value = 0;
                }
            }
            if (type === "ces") {
                if (item.ces) {
                    value = item.ces;
                }
                if (item.ces === 0) {
                    value = 0;
                }
            }
            if (type === "csat") {
                if (item.csat) {
                    value = item.csat;
                }
                if (item.csat === 0) {
                    value = 0;
                }
            }
            if (type === "0to10") {
                if (item.count) {
                    value = item.count;
                }
                if (item.count === 0) {
                    value = 0;
                }
            }

            date = moment.utc(item.date).valueOf();
            chartData.push([date, value]);

        }

        return chartData;
    }

    function setEvolutionChartInfos(widgetId, value1, date1, value2, date2) {
        let $elementOne = "<span>" + value1 + "</span><span>" + moment(date1).format("DD MMM YYYY") + "</span>";
        $("#" + widgetId + " .highchart-info-1 .p1").append($elementOne);
        let $elementTwo = "<span>" + value2 + "</span><span>" + moment(date2).format("DD MMM YYYY") + "</span>";
        $("#" + widgetId + " .highchart-info-1 .p2").append($elementTwo);
    }

    function getEvolutionChartOptions(chartId, type) {
        let options = {
            tooltip: {
                useHTML: true,
                formatter: function () {
                    let tooltip = "<span style='background: " + this.series.color + ";' class='line-chart-tooltip'>" +
                        "<span class='text score'>" + this.y + "</span>" +
                        "<span class='text'>" + moment(this.x).format("D MMM") + "</span>" +
                        "</span>";
                    return tooltip;
                },
                borderWidth: 0,
                backgroundColor: 0,
                borderRadius: 100
            },
            chart: {
                renderTo: chartId,
                plotBackgroundColor: undefined,
                plotBorderWidth: undefined,
                plotShadow: false,
                type: "spline",
                spacing: [0, 0, 0, 0],
                style: {
                    fontFamily: "Arial"
                },
                height: 275
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
            plotOptions: {
                series: {
                    animation: false,
                    dataLabels: {
                        enabled: false
                    }
                }
            },
            xAxis: {
                labels: {
                    enabled: false
                },
                minorTickLength: 0,
                tickLength: 0,
                lineWidth: 0
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
                gridLineColor: "#f6f7f8",
                tickLength: 0,
                labels: {
                    style: {
                        fontFamily: "Arial",
                        fontSize: "10px",
                        color: "#aab2bc",
                        fontWeight: 600
                    }
                }
            },
            series: [{
                showInLegend: false,
                color: "#1ca9e6",
                dataLabels: {
                    enabled: false,
                    rotation: 0,
                    color: "#222222",
                    align: "center",
                    y: -5,
                    style: {
                        fontSize: "12px",
                        fontFamily: "Arial"
                    }
                }
            }
            ]
        };

        return options;
    }

    function getIsaacPieChartOptions(chartId) {
        let options = {
            chart: {
                renderTo: chartId,
                plotBackgroundColor: undefined,
                plotBorderWidth: undefined,
                plotShadow: false,
                type: "pie",
                height: 230
            },
            title: {
                text: ""
            },
            credits: {
                enabled: false
            },
            exporting: {
                enabled: false
            },
            tooltip: {
                useHTML: true,
                followPointer: false,
                borderWidth: 0,
                backgroundColor: 0,
                borderRadius: 100,
                formatter: function () {
                    return "<span style='background: " + this.point.color + ";opacity:0.9;' class='tooltip-circle'>" +
                        "<span class='tooltip-nps'>" + this.y + "%</span>" +
                        "<small>" + this.key + "</small></span>";

                }
            },
            plotOptions: {
                pie: {
                    dataLabels: {
                        enabled: false
                    },
                    allowPointSelect: false
                }
            },
            series: [{
                name: "Most Mentioned",
                animation: true,
                colorByPoint: true,
                borderWidth: 0,
                innerSize: "50%",
                data: []
            }]
        };

        return options;
    }

    function buildSubCategoryListForPieChart(subCategories, polarityEnabled) {
        let $elements = [];

        for (let item of subCategories) {
            let total;

            if (polarityEnabled) {
                total = "<span class='count'>" + item.total + "</span>";
            } else {
                total = "<span class='count no-polarity'>" + item.total + "</span>";
            }


            let element = "<li class='pie-list-item'>" +
                "<span class='name'>" +
                "<i class='color-dot' style='background-color:" + item.color + "' title='" + item.name + "'></i> <span class='content'>" + item.name +
                "</span></span>" +
                buildTotalSpan(item, polarityEnabled) +
                buildSubBreakdown(item, polarityEnabled) +
                "</li>";

            $elements.push(element);
        }

        return $elements;
    }

    function buildTotalSpan(subCategory, polarityEnabled) {
        if (polarityEnabled) {
            return "<span class='count'>" + subCategory.total + "</span>";
        } else {
            return "<span class='count no-polarity'>" + subCategory.total + "</span>";
        }
    }

    function buildSubBreakdown(subCategory, polarityEnabled) {
        let posShow = "";
        let negShow = "";
        let neutShow = "";
        if (subCategory.percentagePos < 10) {
            posShow = "white";
        }
        if (subCategory.percentageNeg < 10) {
            negShow = "white";
        }
        if (subCategory.percentageNeut < 10) {
            neutShow = "white";
        }

        return "<span class='sub-breakdown'>" +
            "<span class='bar'>" +
            "<span class='bar-pos' style='width:" + subCategory.percentagePos + "%'></span>" +
            "<span class='bar-neg' style='width:" + subCategory.percentageNeg + "%'></span>" +
            "</span>" +
            "<span class='percentages'>" +
            "<span class='pos " + posShow + "' style='width:" + subCategory.percentagePos + "%;' title='" + subCategory.percentagePos + "%'>" + subCategory.percentagePos + "%</span>" +
            "<span class='neut " + neutShow + "' style='width:" + subCategory.percentageNeut + "%;' title='" + subCategory.percentageNeut + "%'>" + subCategory.percentageNeut + "%</span>" +
            "<span class='neg " + negShow + "' style='width:" + subCategory.percentageNeg + "%;' title='" + subCategory.percentageNeg + "%'>" + subCategory.percentageNeg + "%</span>" +
            "</span>" +
            "</span>";
    }

    function mapSubCategories(data) {
        let collection = [];

        for (let dataPoint of data) {
            for (let mention of dataPoint.mostMentioned) {
                for (let subCat of mention.items) {
                    let filter = collection.filter(item => item.id === subCat.uniqueID);
                    if (filter.length === 0) {
                        let newSubCat = {};
                        newSubCat.id = subCat.uniqueID;
                        newSubCat.name = subCat.name;
                        newSubCat.color = subCat.color;
                        newSubCat.isInactive = true;

                        collection.push(newSubCat);
                    }
                }
            }
        }

        return collection;
    }

    function initialiseIsaacLineChartData(subCategory, data) {
        let newSerie = {
            id: "",
            name: "",
            data: [],
            marker: {
                symbol: "circle"
            },
            color: "",
            connectNulls: true
        };

        // SET SERIES NAME & COLOR
        newSerie.id = subCategory.id;
        newSerie.name = subCategory.name;
        newSerie.color = subCategory.color;
        let startTime = data[0].date.toString();
        newSerie["pointStart"] = new Date(startTime).getTime();

        // ITERATE OVER DATA
        for (let dataPoint of data) {
            let mostMentioned = dataPoint.mostMentioned[0];
            // GET SUBCATEGORY
            let filter = mostMentioned.items.filter(item => item.uniqueID === subCategory.id);
            if (filter.length === 1) {
                // SET DATE AND Y, BASED ON POLARITYENUM
                //if (this.polarity === PolarityDDLEnum.Mentioned) {
                    newSerie.data.push({
                        x: new Date(dataPoint.date.toString()).getTime(),
                        y: filter[0].percentage,
                        pos: filter[0].positive,
                        neg: filter[0].negative,
                        neut: filter[0].neutral,
                        total: filter[0].total,
                        polarity: this.polarity
                    });
                /*} else if (this.polarity === PolarityDDLEnum.SentimentNeg) {
                    newSeries.data.push({
                        x: new Date(dataPoint.date.toString()).getTime(),
                        y: this.calculatePercentage(filter[0].total, filter[0].negative),
                        pos: this.calculatePercentage(filter[0].total, filter[0].positive),
                        neut: this.calculatePercentage(filter[0].total, filter[0].neutral),
                        total: filter[0].total,
                        polarity: this.polarity
                    });
                } else if (this.polarity === PolarityDDLEnum.SentimentPos) {
                    newSeries.data.push({
                        x: new Date(dataPoint.date.toString()).getTime(),
                        y: this.calculatePercentage(filter[0].total, filter[0].positive),
                        neg: this.calculatePercentage(filter[0].total, filter[0].negative),
                        neut: this.calculatePercentage(filter[0].total, filter[0].neutral),
                        total: filter[0].total,
                        polarity: this.polarity
                    });
                }*/



                //if (this.polarity === PolarityDDLEnum.Mentioned) {
                /*newSerie.data.push({
                    x: new Date(dataPoint.date.toString()).getTime(),
                    y: filter[0].total, pos: filter[0].positive,
                    neg: filter[0].negative, neut: filter[0].neutral,
                    polarity: -1
                });
                } else if (this.polarity === PolarityDDLEnum.SentimentNeg) {
                        newSeries.data.push({
                            x: new Date(dataPoint.date.toString()).getTime(),
                            y: this.calculatePercentage(filter[0].total, filter[0].negative),
                            pos: this.calculatePercentage(filter[0].total, filter[0].positive),
                            neut: this.calculatePercentage(filter[0].total, filter[0].neutral),
                            polarity: this.polarity
                        });
                } else if (this.polarity === PolarityDDLEnum.SentimentPos) {
                        newSeries.data.push({
                            x: new Date(dataPoint.date.toString()).getTime(),
                            y: this.calculatePercentage(filter[0].total, filter[0].positive),
                            neg: this.calculatePercentage(filter[0].total, filter[0].negative),
                            neut: this.calculatePercentage(filter[0].total, filter[0].neutral),
                            polarity: this.polarity
                        });
                }*/
            } else if (filter.length === 0) {
                newSerie.data.push([new Date(dataPoint.date.toString()).getTime(), null]);
            }
        }

        return newSerie;
    }

    function buildSubCategoryListForLineChart(subCategories, series) {
        let $elements = [];

        for (let item of subCategories) {
            // IS THIS INACTIVE?
            let className = "isInactive";
            let result = series.find(serie => serie.id === item.id);
            if (result !== undefined) {
                className = "";
            }

            let element = "<li>" +
                "<div class='cbx-wrapper'>" +
                "<div class='cbx'>" +
                "<div id='" + item.id + "' class='cbx-inner " + className + "' style='background-color:" + item.color + "' data-item='" + JSON.stringify(item) + "'></div>" +
                "</div>" +
                "<span class='name'>" + item.name + "</span>" +
                "</div>" +
                "</li>";

            $elements.push(element);
        }

        return $elements;
    }

    function getIsaacLineChartOptions(chartId, series) {
        let options = {
            chart: {
                renderTo: chartId,
                type: "spline",
                height: 290
            },
            credits: {
                enabled: false
            },
            title: {
                text: ""
            },
            yAxis: {
                min: 0,
                floor: 0,
                ceiling: null,
                title: {
                    text: "",
                    style: {
                        color: "black"
                    }
                }
            },
            xAxis: {
                type: "datetime",
                labels: {
                    useHTML: true,
                    formatter: function () {
                        return "<span class='evolution-label'>" + Highcharts.dateFormat("%e %b \'%y", this.value) + "</span>";
                    }
                }
            },
            legend: {
                enabled: false
            },
            plotOptions: {
                series: {}
            },
            tooltip: {
                useHTML: true,
                formatter: function () {
                    let tooltip = "<span style='background: " + this.series.color + ";' class='line-chart-tooltip'>";
                    //if (this.point.polarity === PolarityDDLEnum.Mentioned) {
                    tooltip = tooltip + "<span class='text'>POS: " + (this.point.pos / this.y * 100).toFixed(1) + "%</span>";
                    tooltip = tooltip + "<span class='text'>NEU: " + (this.point.neut / this.y * 100).toFixed(1) + "%</span>";
                    tooltip = tooltip + "<span class='text'>NEG: " + (this.point.neg / this.y * 100).toFixed(1) + "%</span>";
                    //}
                    //if (this.point.polarity === PolarityDDLEnum.SentimentNeg) {
                    //	tooltip = tooltip + "<span class='text'>POS: " + this.point.pos + "%</span>";
                    //	tooltip = tooltip + "<span class='text'>NEU: " + this.point.neut + "%</span>";
                    //	tooltip = tooltip + "<span class='text'>NEG: " + this.point.y + "%</span>";
                    //}
                    //if (this.point.polarity === PolarityDDLEnum.SentimentPos) {
                    //	tooltip = tooltip + "<span class='text'>POS: " + this.y + "%</span>";
                    //	tooltip = tooltip + "<span class='text'>NEU: " + this.point.neut + "%</span>";
                    //	tooltip = tooltip + "<span class='text'>NEG: " + this.point.neg + "%</span>";
                    //}

                    tooltip = tooltip + "</span>";

                    return tooltip;
                },
                borderWidth: 0,
                backgroundColor: 0,
                borderRadius: 100
            },
            series: series
        };

        return options;
    }

    function getSentimentSpreadOptions(chartId) {
        let options = {
            chart: {
                renderTo: chartId,
                plotBackgroundColor: undefined,
                plotBorderWidth: undefined,
                plotShadow: false,
                type: "pie",
                style: {
                    width: '100%',
                    height: '100%'
                }
            },
            title: {
                text: ""
            },
            credits: {
                enabled: false
            },
            exporting: {
                enabled: false
            },
            /*tooltip: {
                useHTML: true,
                followPointer: false,
                borderWidth: 0,
                backgroundColor: 0,
                borderRadius: 100,
                formatter: function () {
                    return "<span style='background: " + this.point.tooltipColor + ";opacity:0.9;' class='tooltip-circle'>" +
                        "<span class='tooltip-nps'>" + this.y + "%</span>" +
                        "<small>" + this.key + "</small></span>";

                }
            },*/
            plotOptions: {
                pie: {
                    dataLabels: {
                        enabled: false
                    },
                    allowPointSelect: false
                }
            },
            series: [{
                name: "Most Mentioned",
                animation: true,
                colorByPoint: true,
                borderWidth: 0,
                innerSize: "50%",
                data: []
            }]
        };

        return options;
    }

    // TOP POSITIVE/NEGATIVE CATEGORIES FUNCTIONS
    function flattenList(array) {
        let flatList = [];

        array.forEach(mainCategory => {
            mainCategory.items.forEach(subCategory => {
                flatList.push({
                    ...subCategory,
                    subCategoryName: subCategory.name,
                    subCategoryId: subCategory.uniqueID,
                    mainCategoryName: mainCategory.name,
                    mainCategoryId: mainCategory.uniqueID
                });
            });
        });

        return flatList;
    }

    function findCorresponding(top10List, correspondingList, type) {
        let mergedList = [];

        top10List.forEach(top10Item => {
            let index = -1;
            index = correspondingList.findIndex(correspondingItem => (correspondingItem.subCategoryId === top10Item.subCategoryId) && (correspondingItem.mainCategoryId === top10Item.mainCategoryId));
            let mergeItem;
            //if (index > -1) {
            mergeItem = mergeCorrespondingItems(top10Item, type);
            //} else {
            //    mergeItem = mergeCorrespondingItems(top10Item);
            //}
            if (mergeItem) {
                mergedList.push(mergeItem);
            }
        });

        return mergedList;
    }

    function mergeCorrespondingItems(item1, type) {
        let mergedItem = new Object();
        mergedItem.mainCategoryName = item1.mainCategoryName;
        mergedItem.mainCategoryId = item1.mainCategoryId;
        mergedItem.subCategoryName = item1.subCategoryName;
        mergedItem.subCategoryId = item1.subCategoryId;
        let items = [];

        if (type === "positive") {
            items.push({
                countMentions: item1.positive
            });
        } else {
            items.push({
                countMentions: item1.negative
            });
        }

        mergedItem.items = items;

        return mergedItem;
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
