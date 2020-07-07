$(function () {
    // important variables, mainly for calculating page-breaks    
    var customDashboardData = testObj;
    var A4PageHeightInPixels = 842;
    var printPageMarginsTopBottomInPixels = 28;
    var headerHeigthtInPixels;
    var titleHeightInPixels;

    // initialisation methods
    function setPDFTitle() {
        $("#pdf-title").text(customDashboardData["dashboardName"]);
    }

    function setMasterDates() {
        $("#pdf-start .title").append(`<div class='masterdates'>
            from <span>`+ customDashboardData["masterDateRange"][0] + `</span> to <span>` + customDashboardData["masterDateRange"][1] + `</span>
        </div>`);
    }

    function initialiseWidgetContainers() {
        for (let i = 0; i < customDashboardData["widgets"].length; i++) {
            let widget = customDashboardData["widgets"][i];
            $("#cd-content").append(`<div id='` + widget["uniqueID"] + `' class='widget-body'>
                <div class='widget-header'>
                    <h2>`+ widget["name"] + `</h2>
                    <div class='date'>
                        from <span>`+ widget["beginEndDates"][0] + `</span> tot <span>` + widget["beginEndDates"][1] + `</span>
                    </div>
                    <div class='filter-block'>
                        <span>PERIOD: `+ getPeriod(widget["period"]) + `</span>
                    </div>
                </div>
                <div class='wrapper'>

                </div>
                <div class="no-data-in-chart" style="display:none">
                    <div>
                        <p>not enough data</p>
                    </div>
                </div>
            </div>`);

            if (widget["datePeriod"] === -1 || widget["datePeriod"] === undefined) {
                $("#cd-content #" + widget["uniqueID"] + " .widget-header .date").hide();
            }

            if (widget["period"] === undefined) {
                $("#cd-content #" + widget["uniqueID"] + " .widget-header .filter-block span:first-of-type").hide();
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
                    initialiseRepartitionChartScore(widget);
                    break;
                case 8:
                    initialiseRepartitionChartScore(widget);
                    break;
                case 9:
                    initialiseRepartitionChartScore(widget);
                    break;
                case 10:
                    initialiseRepartitionChartScore(widget);
                    break;
                case 11:
                    initialiseEvolutionChartScore(widget);
                    break;
                case 12:
                    initialiseEvolutionChartScore(widget);
                    break;
                case 13:
                    initialiseEvolutionChartScore(widget);
                    break;
                case 14:
                    initialiseEvolutionChartScore(widget);
                    break;
                case 15:
                    //initialiseIsaacPieChart(widget);
                    break;
                case 16:
                    //initialiseIsaacLineChart(widget);
                    break;
                case 17:
                    initialiseTeamRanking(widget);
                    break;
                case 18:
                    initialiseYesNoResults(widget);
                    break;
                case 19:
                    initialiseRecentAnswers(widget);
                    break;
                case 20:
                    //initialiseMostMentionedPerCategory(widget);
                    break;
                case 21:
                    //initialiseSentimentSpread(widget);
                    break;
                case 22:
                    //initialiseTopPositiveCategories(widget);
                    break;
                case 23:
                    //initialiseTopNegativeCategories(widget);
                    break;
                case 24:
                    //initialiseSentimentByCategory(widget);
                    break;
                // ISAAC V2
                case 29:
                    initialiseMentionsPerArea(widget);
                    break;
                case 30:
                    initialiseSentimentSpreadV2(widget);
                    break;
                case 31:
                    initialiseTopCategoriesV2(widget, true);
                    break;
                case 32:
                    initialiseTopCategoriesV2(widget, false);
                    break;
                case 33:
                    initialiseSentimentMainCategoriesV2(widget);
                    break;
            }
        }
    }

    function calculatePageBreaks() {
        currentHeightUsed = 0;

        // get the header hight
        pdfStartHeightInPixels = 0;
        //console.log("header: " + pdfStartHeightInPixels);

        // get the title height with margins
        titleHeightInPixels = $(".title").outerHeight(true);
        //console.log("title " + titleHeightInPixels);

        let widgets = $(".widget-body");
        //console.log("widget-container count: " + widgets.length);

        currentHeightUsed = pdfStartHeightInPixels + titleHeightInPixels + printPageMarginsTopBottomInPixels;

        // iterating to calculate currentHeightUsed
        $(".widget-body").each(function (index) {
            let tempResult = currentHeightUsed + $(this).outerHeight(true);
            if (tempResult > A4PageHeightInPixels) {
                $(this).addClass("page-breaker");
                currentHeightUsed = 0;
                currentHeightUsed = printPageMarginsTopBottomInPixels + $(this).outerHeight(true);
            } else {
                currentHeightUsed = tempResult;
            }
        });

        let widgets2 = $(".page-breaker");
        //console.log(widgets2.length);
        //console.log("full current height test: " + currentHeightUsed);
    }

    // WIDGET ID 1 NPS SCORE
    function initialiseNPSBar(widget) {
        if (widget["data"]["nps"] === undefined || widget["data"]["detractors"] === 0 && widget["data"]["passive"] === 0 && widget["data"]["promoters"] === 0) {
            displayNoData(widget);
            return;
        }

        $("#" + getWidgetUniqueID(widget) + " .wrapper").append(`<div class='nps-score-bar'>
            <div class='nps-result'>
                <div class='metric'>
                    <h1>`+ widget["data"]["nps"] + `</h1>
                    <p>NPS</p>                    
                </div>
            </div>
            <div class='nps-bar'>
                <div class='item nps-detractors' style="width:`+ widget["data"]["detractors"] + `%">
                    <h4>
                        `+ widget["data"]["detractors"] + `%<span>Detractors</span>
                    </h4>
                </div>
                <div class='item nps-passives' style="width:`+ widget["data"]["passive"] + `%">
                    <h4>
                        `+ widget["data"]["passive"] + `%<span>Passives</span>
                    </h4>
                </div>
                <div class='item nps-promoters' style="width:`+ widget["data"]["promoters"] + `%">
                    <h4>
                        `+ widget["data"]["promoters"] + `%<span>Promoters</span>
                    </h4>
                </div>
            </div>
        </div>`);

        if (widget["data"]["nps"] <= -100) {
            $("#" + widget["uniqueID"] + " .wrapper .nps-score-bar .nps-result h1").addClass("minushundred");
        }

        let widgetId = widget["uniqueID"];
        if (widget["data"]["detractors"] <= 10) {
            $("#" + widgetId + " .nps-detractors h4").hide();
        }
        if (widget["data"]["passive"] <= 10) {
            $("#" + widgetId + " .nps-passives h4").hide();
        }
        if (widget["data"]["promoters"] <= 10) {
            $("#" + widgetId + " .nps-promoters h4").hide();
        }
    }

    // WIDGET ID 2 CES SCORE
    function initialiseCESBar(widget) {
        if (widget["data"]["ces"] === undefined || (widget["data"]["disagree"] === 0 && widget["data"]["agree"] === 0)) {
            displayNoData(widget);
            return;
        }

        let widgetId = getWidgetUniqueID(widget);

        $("#" + widgetId + " .wrapper").append(`<div class="cescsat-score-bar">
                <div class="cescsat-gauge">
                    <div id="cesContainer-`+ widgetId + `"></div>
                </div>
                <div class="ces-bars">
                    <table>
                        <tr>
                            <td>
                                <span>Disagree</span>
                            </td>
                            <td>
                                <span>`+ getVeryNegativeSVG() + `</span>
                            </td>
                            <td>
                                <div class="bar neg">
                                    <div class="fill" style="width: `+ widget["data"]["disagree"] + `%">
                                    </div>
                                    <span>`+ widget["data"]["disagree"] + `%</span>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <span>Agree</span>
                            </td>
                            <td>
                                <span>`+ getVeryPositiveSVG() + `</span>
                            </td>
                            <td>
                                <div class="bar pos">
                                    <div class="fill" style="width: `+ widget["data"]["agree"] + `%">
                                    </div>
                                    <span>`+ widget["data"]["agree"] + `%</span>
                                </div>
                            </td>
                        </tr>
                    </table>
                </div>
            </div>`);
        let data = getCesData(widget["data"]);
        let options = getSolidGaugeOptions("cesContainer-" + widgetId, data, widget["data"]["ces"].toFixed(2), "CES");
        options.yAxis[0].tickInterval = 14.3;
        options.yAxis[0].stops = [
            [0, '#fff'],
            [0.143, "#FF1E5D"],
            [0.286, "#FF775D"],
            [0.429, "#FFC468"],
            [0.572, "#FDFB7D"],
            [0.715, "#C8F167"],
            [0.858, "#87F167"],
            [1, "#15B700"]
        ];
        let myChart = Highcharts.chart(options);
    }

    function getCesData(cesData) {
        let data = [];

        let border = 14.3;
        let percentage = (cesData["ces"] / 7) * 100;
        let test = Math.round(percentage / border);
        data.push(percentage);
        for (let i = test; i > 0; i--) {
            if (i * border < percentage) {
                data.push({ y: (i * border) });
            }
        }
        return data;
    }

    // WIDGET ID 3 CSAT SCORE
    function initialiseCSATBar(widget) {
        if (widget["data"]["csat"] === undefined || (widget["data"]["unsatisfied"] === 0 && widget["data"]["passive"] === 0 && widget["data"]["satisfied"] === 0)) {
            displayNoData(widget);
            return;
        }

        let widgetId = getWidgetUniqueID(widget);

        $("#" + widgetId + " .wrapper").append(`<div class="cescsat-score-bar">
                <div class="cescsat-gauge">
                    <p class="left">Strongly disagree</p>
                    <div id="csatContainer-`+ widgetId + `"></div>
                    <p class="right">Strongly agree</p>
                </div>
                <div class="ces-bars">
                    <table>
                        <tr>
                            <td>
                                <span>Unsatisfied</span>
                            </td>
                            <td>
                                <span>`+ getVeryNegativeSVG() + `</span>
                            </td>
                            <td>
                                <div class="bar neg">
                                    <div class="fill" style="width: `+ widget["data"]["unsatisfied"] + `%">
                                    </div>
                                    <span>`+ widget["data"]["unsatisfied"] + `%</span>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <span>Neutrals</span>
                            </td>
                            <td>
                                <span>`+ getUnknownSVG() + `</span>
                            </td>
                            <td>
                                <div class="bar neut">
                                    <div class="fill" style="width: `+ widget["data"]["passive"] + `%">
                                    </div>
                                    <span>`+ widget["data"]["passive"] + `%</span>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <span>Satisfied</span>
                            </td>
                            <td>
                                <span>`+ getVeryPositiveSVG() + `</span>
                            </td>
                            <td>
                                <div class="bar pos">
                                    <div class="fill" style="width: `+ widget["data"]["satisfied"] + `%">
                                    </div>
                                    <span>`+ widget["data"]["satisfied"] + `%</span>
                                </div>
                            </td>
                        </tr>
                    </table>
                </div>
            </div>`);

        let data = getCsatData(widget["data"]);
        let options = getSolidGaugeOptions("csatContainer-" + widgetId, data, widget["data"]["csat"].toFixed(2), "CSAT");
        options.yAxis[0].tickInterval = 20;
        options.yAxis[0].stops = [
            [0, '#fff'],
            [0.2, "#FF1E5D"],
            [0.4, "#FFC468"],
            [0.6, "#FDFB7D"],
            [0.8, "#C8F167"],
            [1, "#15B700"]
        ];
        let myChart = Highcharts.chart(options);
    }

    function getCsatData(csatData) {
        let data = [];
        let border = 20;
        let test = Math.round(csatData["csat"] / border);
        data.push(csatData["csat"]);
        for (let i = test; i > 0; i--) {
            if (i * border < csatData["csat"]) {
                data.push({ y: (i * border) });
            }
        }
        return data;
    }

    // WIDGET ID 4 GENERAL RESPONSE RATE
    function initialiseGeneralResponseRate(widget) {
        if (widget["data"]["respondents"] === 0 && widget["data"]["answers"] === 0 && widget["data"]["unsubscribed"] === 0) {
            displayNoData(widget);
            return;
        }

        $("#" + getWidgetUniqueID(widget) + " .wrapper").append(`<div class='content'>
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
                </tbody
            </table>
        </div>`);

        let widgetId = getWidgetUniqueID(widget);
        $("#" + widgetId + " .widget-wrapper").css("padding-top", "0px");
        $("#" + widgetId + " .widget-wrapper").css("padding-bottom", "0px");
        $("#" + widgetId + " td:nth-child(2) .meter").css("width", calculatePercentage(widget["data"]["answers"], widget["data"]["respondents"]) + "%");
        $("#" + widgetId + " td:nth-child(2) .percentage").text(calculatePercentage(widget["data"]["answers"], widget["data"]["respondents"]) + "%");
        $("#" + widgetId + " td:nth-child(3) .meter").css("width", calculatePercentage(widget["data"]["unsubscribed"], widget["data"]["respondents"]) + "%");
        $("#" + widgetId + " td:nth-child(3) .percentage").text(calculatePercentage(widget["data"]["unsubscribed"], widget["data"]["respondents"]) + "%");
    }

    // WIDGET ID 5 TEXT RESPONSE RATE
    function initialiseTextResponseRate(widget) {
        $("#" + getWidgetUniqueID(widget) + " .wrapper").append(`<div class='content'>
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

        let widgetId = getWidgetUniqueID(widget);
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
        $("#" + getWidgetUniqueID(widget) + " .wrapper").append(`<div class="content">
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

        let widgetId = getWidgetUniqueID(widget);
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

    // WIDGET ID 7/8/9/10 REPARTITION SCORE NPS / CES / CSAT / 0-10
    function initialiseRepartitionChartScore(widget) {
        let type;
        switch (widget["id"]) {
            case 7:
                type = "nps";
                break;
            case 8:
                type = "ces";
                break;
            case 9:
                type = "csat";
                break;
            case 10:
                type = "0to10";
                break;
            default:
                type = "nps";
        }

        let widgetId = getWidgetUniqueID(widget);
        let data = prepareRepartitionData(widget["data"], type);

        if (notEnoughRepartition(data)) {
            displayNoData(widget);
            return;
        }

        $("#" + widgetId + " .wrapper").append(`<div class="repartition-container">
                <div id="repartition-`+ widgetId + `"></div>
            </div>`);

        let options = getRepartitionChartOptions("repartition-" + widgetId, data, type);
        let myChart = Highcharts.chart(options);
    }

    // WIDGET ID 11/12/13/14 EVOLUTION SCORE NPS / CES / CSAT / 0-10
    function initialiseEvolutionChartScore(widget) {
        let widgetId = getWidgetUniqueID(widget);
        let chartData = prepareEvolutionData(widget["data"]);

        if (chartData.length < 2) {
            displayNoData(widget);
            return;
        }

        $("#" + widgetId + " .wrapper").append(`<div class="evolution-container">
                <div id="evolution-`+ widgetId + `"></div>
                <div class="highchart-info" style="height:40px">
                    <div class="highchart-info-1">
                        <p class="p1"></p>
                        <p class="p2"></p>
                    </div>
                </div>
            </div>`);

        let options = getEvolutionChartOptions("evolution-" + widgetId, chartData);
        let myChart = Highcharts.chart(options);
        setEvolutionChartInfos(widgetId, chartData[0]["x"], chartData[chartData.length - 1]["x"]);
    }

    // WIDGET ID 15 ISAAC PIE CHART
    // old isaac, should not display on V2

    // WIDGET ID 16 ISAAC LINE CHART
    // old isaac, should not display on V2

    // WIDGET ID 17 DEPARTMENT RANKING
    function initialiseTeamRanking(widget) {
        let widgetId = widget["uniqueID"];

        if (widget["data"]["list"].length === 0) {
            displayNoData(widget);
            return;
        }

        $("#" + widget["uniqueID"] + " .wrapper").append(`<div class="team-ranking-content">
            <table class="team-ranking-table">
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

        $("#" + widgetId + " .team-ranking-table thead tr td:nth-child(3)").text(getType(widget["data"]["list"][0]));

        let relevantTeams = filterRelevantTeams(widget["data"]["list"]);
        let $elements = [];
        for (var i = 0; i < relevantTeams.length; i++) {
            let item = relevantTeams[i];
            let element = "<tr class='" + teamIsRoot(item) + "'>" +
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
        $("#" + widgetId + " .team-ranking-table tbody").append($elements);
    }

    function getType(team) {
        if (team.nps) {
            return "nps";
        }
        if (team.ces) {
            return "ces";
        }
        if (team.csat) {
            return "csat";
        }
    }

    function filterRelevantTeams(teams) {
        let collection = [];

        for (let team of teams) {
            if (team.type === "bu" && team.parent_UniqueID === undefined) {
                collection.push(team);
                continue;
            }
            if (team.nps !== undefined && team.type !== "bu") {
                collection.push(team);
                continue;
            }
            if (team.ces !== undefined && team.type !== "bu") {
                collection.push(team);
                continue;
            }
            if (team.csat !== undefined && team.type !== "bu") {
                collection.push(team);
                continue;
            }
        }

        return collection;
    }

    function teamIsRoot(team) {
        if (team.type === "bu" && team.parent_UniqueID === undefined) {
            return "first";
        } else {
            return "";
        }
    }

    function buildAliasSpan(team) {
        if (team.parent_UniqueID !== undefined && team.alias !== undefined) {
            return "<span class='alias'>" + team.alias + "</span>";
        } else {
            return "";
        }
    }

    function buildScoreTD(team) {
        let type;
        let score;

        if (team.nps !== undefined) {
            type = "nps";
            score = team.nps.nps;
        }
        if (team.ces !== undefined) {
            type = "ces";
            score = team.ces.ces;
        }
        if (team.csat !== undefined) {
            type = "csat";
            score = team.csat.csat;
        }

        return "<td class='" + type + "'>" + score + "</td>";
    }

    function buildTotalSubmittedTD(team) {
        let totalSubmitted;
        if (team.nps) {
            totalSubmitted = team.nps.totalSubmitted;
        }
        if (team.ces) {
            totalSubmitted = team.ces.totalSubmitted;
        }
        if (team.csat) {
            totalSubmitted = team.csat.totalSubmitted;
        }

        return "<td>" + totalSubmitted + "</td>";
    }

    // WIDGET ID 18 YES NO RESULT
    function initialiseYesNoResults(widget) {
        if (isNaN(widget["data"]["yes"]) || isNaN(widget["data"]["no"])) {
            displayNoData(widgtet);
            return;
        }

        $("#" + getWidgetUniqueID(widget) + " .wrapper").append(`<div class="yes-no-results-content">
            <ul class="chart">
                <li>
                    <div class="yesno">
                        <span>Yes</span>
                    </div>
                    <div class="bars">
                        <div class="bar">
                            <div class="fill blue" style="width:` + calculatePercentageAlt(widget["data"]["yes"], widget["data"]["yes"], widget["data"]["no"]) + `%"></div>
                            <div class="fill transparent">
                                <span class="percentage">` + calculatePercentageAlt(widget["data"]["yes"], widget["data"]["yes"], widget["data"]["no"]) + `%</span>
                                <span class="amount">(`+ widget["data"]["yes"] + `)</span>
                            </div>
                        </div>
                    </div>
                </li>
                <li>
                   <div class="yesno">
                        <span>No</span>
                    </div>
                    <div class="bars">
                        <div class="bar">
                            <div class="fill blue" style="width:`+ calculatePercentageAlt(widget["data"]["no"], widget["data"]["yes"], widget["data"]["no"]) + `%"></div>
                            <div class="fill transparent">
                                <span class="percentage">`+ calculatePercentageAlt(widget["data"]["no"], widget["data"]["yes"], widget["data"]["no"]) + `%</span>
                                <span class="amount">(`+ widget["data"]["no"] + `)</span>
                            </div>
                        </div>
                    </div>
                </li>
            </ul>
        </div>`);
    }

    // WIDGET ID 19 RECENT ANSWERS
    function initialiseRecentAnswers(widget) {
        $("#" + getWidgetUniqueID(widget) + " .wrapper").append(`<div class="recent-answers-content">
            <ul class="score-list"></ul>
        </div>`);

        let widgetId = getWidgetUniqueID(widget);
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

    // WIDGET ID 29 MENTIONS PER AREA
    function initialiseMentionsPerArea(widget) {
        let widgetId = getWidgetUniqueID(widget);

        if (widget["data"].length === 0) {
            displayNoData(widget);
            return;
        }

        $("#" + widgetId + " .wrapper").append(`<div class="mentions-area-content">
                <table>                    
                </table>
            </div>`);

        let totalMentions = getTotalMentions(widget["data"], "count");

        let $elements = [];
        for (let i = 0; i < widget["data"].length; i++) {
            let item = widget["data"][i];
            let element = `<tr>
                            <td>
                                <span class="grey">`+ item["count"] + `</span>
                            </td>
                            <td>
                                <span class="name">`+ item["area"]["name"] + `</span>
                            </td>
                            <td>
                                <div class="bar">
                                    <div class="fill" style="width: `+ calculatePercentage(item["count"], totalMentions) + `%"></div>
                                </div>
                            </td>
                        </tr>`;

            $elements.push(element);
        }

        $("#" + widgetId + " .mentions-area-content table").append($elements);
    }

    // WIDGET ID 30 SENTIMENT SPREAD V2
    function initialiseSentimentSpreadV2(widget) {
        let widgetId = getWidgetUniqueID(widget);
        let widgetData = widget["data"];

        if (getTotalMentions(widgetData, "amount") === 0) {
            displayNoData(widget);
            return;
        }

        $("#" + widgetId + " .wrapper").append(`<div class="sentiment-spread-content">
                <div class="chart">
                    <div id="sentiment-`+ widgetId + `"></div>
                </div>
                <div class="data">
                    <div class="row">
                        <div class="data-item">
                            <span class="grey">VERY POSITIVE</span>
                            <span class="veryPositive">`+ getSentiment("VeryPositive", widgetData) + `%</span>
                        </div>
                        <div class="data-item">
                            <span class="grey">POSITIVE</span>
                            <span class="positive">`+ getSentiment("Positive", widgetData) + `%</span>
                        </div>
                    </div>
                    <div class="row">
                        <div class="data-item">
                            <span class="grey">VERY NEGATIVE</span>
                            <span class="veryNegative">`+ getSentiment("VeryNegative", widgetData) + `%</span>
                        </div>
                        <div class="data-item">
                            <span class="grey">NEGATIVE</span>
                            <span class="negative">`+ getSentiment("Negative", widgetData) + `%</span>
                        </div>
                    </div>
                    <div class="row">
                        <div class="data-item">
                            <span class="grey">UNKNOWN</span>
                            <span class="neutral">`+ getSentiment("Neutral", widgetData) + `%</span>
                        </div>
                    </div>
                </div>
            </div>`);

        let data = prepareSentimentSpreadData(widgetData);
        let options = getSentimentSpreadOptions("sentiment-" + widgetId, getTotalMentions(widgetData, "amount"), data);
        let myChart = Highcharts.chart(options);
    }

    function getSentiment(polarity, data) {
        let result = data.find(sen => sen["polarity"] === polarity);
        if (result) {
            return result["percentage"];
        } else {
            return 0;
        }
    }

    function prepareSentimentSpreadData(data) {
        let dataCol = [];

        data.forEach(item => {
            dataCol.push({
                name: item["polarity"],
                y: item["percentage"],
                color: getPolarityColor(item["polarity"]),
                dataLabels: {
                    enabled: false
                }
            });
        });

        return dataCol;
    }

    function getPolarityColor(polarity) {
        switch (polarity) {
            case "VeryPositive": return '#28AF53';
            case "Positive": return '#94D52C';
            case "Neutral": return '#eaecee';
            case "Negative": return '#FF861E';
            case "VeryNegative": return '#FA1D5B';
        }
    }

    // WIDGET ID 31/32 TOP POSITIVE/NEGATIVE CATEGORIES V2
    function initialiseTopCategoriesV2(widget, isPositive) {
        let widgetId = getWidgetUniqueID(widget);
        let widgetData = widget["data"];
        let stretchMultiplier = determineStretchMultiplier(widgetData);


        if (widgetData.length === 0) {
            displayNoData(widget);
            return;
        }

        $("#" + widgetId + " .wrapper").append(`<div class="top-categories-content">
                <ul class="chart">
                    <li class="empty">
                        <div class="name">
                            <span class="path">category</span>
                        </div>
                        <div class="graph">
                            <div class="left side"></div>
                            <div class="right side"></div>
                        </div>
                    </li>
                    `+ buildListElements(widgetData, isPositive, stretchMultiplier).join("") + `
                    <li class="empty">
                        <div class="name">
                        </div>
                        <div class="graph">
                            <div class="left side"></div>
                            <div class="right side"></div>
                        </div>
                    </li>
                </ul>
            </div>`);
    }

    function buildListElements(widgetData, isPositive, stretchMultiplier) {
        let $elements = [];
        for (let item of widgetData) {
            let element = `<li>
                    <div class="name">
                        <span class="path">`+ parsePathToString(item["path"]) + `</span>  
                        <span class="amount">(`+ getAmount(item, isPositive) + `)</span>
                    </div>
                    <div class="graph">
                        <div class="left side">
                            <div class="bar">
                                <div class="fill transparent">
                                    <div class="percentage-block red" style="`+ getDisplayState(isPositive, "left") + `">
                                        <span>`+ (item["negativePercentage"] * 100).toFixed(2) + `%</span>
                                    </div>
                                </div>
                                <div class="fill `+ getClass(isPositive, "left") + `" style="width:` + item["negativePercentage"] * 100 * stretchMultiplier + `%">
                                </div>
                            </div>
                        </div>
                        <div class="right side">
                            <div class="bar">
                                <div class="fill `+ getClass(isPositive, "right") + `" style="width: ` + item["positivePercentage"] * 100 * stretchMultiplier + `%">
                                </div>
                                <div class="fill transparent">
                                    <div class="percentage-block green" style="`+ getDisplayState(isPositive, "right") + `">
                                        <span>`+ (item["positivePercentage"] * 100).toFixed(2) + `%</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </li>`;

            $elements.push(element);
        }

        return $elements;
    }

    function determineStretchMultiplier(data) {
        let negativeMax = Math.max.apply(Math, data.map(function (o) { return o.negativePercentage; }));
        let positiveMax = Math.max.apply(Math, data.map(function (o) { return o.positivePercentage; }));
        let maxPercentage = negativeMax > positiveMax ? negativeMax : positiveMax;
        let stretchMultiplier = 1 / maxPercentage;
        return stretchMultiplier;
    }

    function parsePathToString(paths) {
        let pathString = "";
        paths.forEach(element => {
            pathString += element.name + '';
            if (element !== paths[paths.length - 1]) {
                pathString += '/';
            }
        });
        return pathString;
    }

    function getAmount(data, isPositive) {
        return isPositive ? data["positiveAmount"] : data["negativeAmount"];
    }

    function getDisplayState(state, side) {
        if (state && side === "left") {
            return "display:none";
        }
        if (!state && side === "right") {
            return "display: none";
        }
    }

    function getClass(isPositive, side) {
        if (side === "left") {
            return isPositive ? "grey" : "red";
        }
        if (side === "right") {
            return !isPositive ? "grey" : "green";
        }
    }

    // WIDGET ID 33 SENTIMENT MAIN CATEGORIES V2
    function initialiseSentimentMainCategoriesV2(widget) {
        let widgetId = getWidgetUniqueID(widget);
        let widgetData = widget["data"];

        if (widgetData.length === 0) {
            displayNoData(widget);
            return;
        }

        $("#" + widgetId + " .wrapper").append(`<div class="sentiment-main-categories">
                `+ buildSentimentList(widgetData).join("") + `
            </div>`);
    }

    function buildSentimentList(widgetData) {
        let $elements = [];

        for (let item of widgetData) {
            let element = `<div class="row">
                                <div class="category">
                                    <span>`+ item["categoryName"] + `</span>
                                    <span>(`+ item["numberOfMentions"] + `)</span>
                                </div>
                                <div class="sentiment-bar">
                                    <span class="`+ getSLClass(item["sentiments"], "left") + `">` + getCorrectSentimentPercentage(item["sentiments"], "left") + `%</span>`

            if (isBarVisible(item["sentiments"], "vp")) {
                element += `<div class="fill-container very-pos" style="width:` + getPercentageByPolarity(item["sentiments"], 'vp') + `%">
                                        <div class="fill"></div>
                                    </div>`;
            }
            if (isBarVisible(item["sentiments"], "p")) {
                element += `<div class="fill-container pos" style="width:` + getPercentageByPolarity(item["sentiments"], 'p') + `%">
                                        <div class="fill"></div>
                                    </div>`;
            }
            if (isBarVisible(item["sentiments"], "u")) {
                element += `<div class="fill-container unknown" style="width:` + getPercentageByPolarity(item["sentiments"], 'u') + `%">
                                        <div class="fill"></div>
                                    </div>`;
            }
            if (isBarVisible(item["sentiments"], "n")) {
                element += `<div class="fill-container neg" style="width:` + getPercentageByPolarity(item["sentiments"], 'n') + `%">
                                        <div class="fill"></div>
                                    </div>`;
            }
            if (isBarVisible(item["sentiments"], "vn")) {
                element += `<div class="fill-container very-neg" style="width:` + getPercentageByPolarity(item["sentiments"], 'vn') + `%">
                                        <div class="fill"></div>
                                    </div>`;
            }

            element += `<span class="` + getSLClass(item["sentiments"], "right") + `">` + getCorrectSentimentPercentage(item["sentiments"], "right") + `%</span>
                            </div>
                        </div>`;

            $elements.push(element);
        }

        return $elements;
    }

    function getPercentageByPolarity(sentiments, polarity) {
        switch (polarity) {
            case "vp":
                return (sentiments.find(item => item.polarity === "VeryPositive").percentage*100).toFixed(2);
            case "p":
                return (sentiments.find(item => item.polarity === "Positive").percentage*100).toFixed(2);
            case "u":
                return (sentiments.find(item => item.polarity === "Neutral").percentage*100).toFixed(2);
            case "n":
                return (sentiments.find(item => item.polarity === "Negative").percentage*100).toFixed(2);
            case "vn":
                return (sentiments.find(item => item.polarity === "VeryNegative").percentage*100).toFixed(2);
            default:
                return "0";
        }
    }

    function getCorrectSentimentPercentage(sentiments, direction) {
        let percentage = 0;
        if (direction === 'left') {
            percentage = sentiments.find(item => item.polarity === "VeryPositive").percentage + sentiments.find(item => item.polarity === "Positive").percentage;
        } else {
            percentage = sentiments.find(item => item.polarity === "VeryNegative").percentage + sentiments.find(item => item.polarity === "Negative").percentage;
        }
        return percentage.toFixed(2);
    }

    function getSLClass(sentiments, direction) {
        let sentiment = determinePolarity(sentiments, direction);

        let result = "none";
        if (sentiment !== undefined && sentiments.length > 1) {
            switch (sentiment) {
                case "VeryPositive":
                    result = "very-pos";
                    break;
                case "Positive":
                    result = "pos";
                    break;
                case "Neutral":
                    result = "unknown";
                    break;
                case "Negative":
                    result = "neg";
                    break;
                case "VeryNegative":
                    result = "very-neg";
                    break;
                default:
                    result = "none";
            }
        }

        return result;
    }

    function determinePolarity(sentiments, direction) {
        let sentiment;
        if (direction === "left") {
            if (sentiments.find(item => item.polarity === "VeryPositive") !== undefined) {
                sentiment = "VeryPositive";
            } else if (sentiments.find(item => item.polarity === "Positive") !== undefined) {
                sentiment = "Positive";
            } else if (sentiments.find(item => item.polarity === "Neutral") !== undefined) {
                sentiment = "Neutral";
            } else if (sentiments.find(item => item.polarity === "Negative") !== undefined) {
                sentiment = "Negative";
            } else if (sentiments.find(item => item.polarity === "VeryNegative") !== undefined) {
                sentiment = "VeryNegative";
            }
        } else {
            if (sentiments.find(item => item.polarity === "VeryNegative") !== undefined) {
                sentiment = "VeryNegative";
            } else if (sentiments.find(item => item.polarity === "Negative") !== undefined) {
                sentiment = "Negative";
            } else if (sentiments.find(item => item.polarity === "Neutral") !== undefined) {
                sentiment = "Neutral";
            } else if (sentiments.find(item => item.polarity === "Positive") !== undefined) {
                sentiment = "Positive";
            } else if (sentiments.find(item => item.polarity === "VeryPositive") !== undefined) {
                sentiment = "VeryPositive";
            }
        }

        return sentiment;
    }

    function isBarVisible(sentiments, polarity) {
        let item;
        switch (polarity) {
            case "vp":
                item = sentiments.find(item => item.polarity === "VeryPositive");
                break;
            case "p":
                item = sentiments.find(item => item.polarity === "Positive");
                break;
            case "u":
                item = sentiments.find(item => item.polarity === "Neutral");
                break;
            case "n":
                item = sentiments.find(item => item.polarity === "Negative");
                break;
            case "vn":
                item = sentiments.find(item => item.polarity === "VeryNegative");
                break;
            default:
                return false;
        }

        if (item === undefined) {
            //return "display:none; ";
            return false;
        }
        if (item.percentage === 0) {
            //return "display:none; ";
            return false;
        }
        //return "";
        return true;
    }

    // GENERAL FUNCTIONS
    function getPeriod(period) {
        switch (period) {
            case 1:
                return "Weekly";
            case 2:
                return "Monthly";
            case 0:
                return "Daily";
            default:
                return "";
        }
    }

    function getWidgetUniqueID(widget) {
        return widget["uniqueID"];
    }

    function displayNoData(widget) {
        $("#cd-content #" + widget["uniqueID"] + " .wrapper").hide();
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
        if (denominator === 0) {
            return 0;
        } else {
            let result = parseFloat((numerator / denominator * 100).toFixed(2));
            if (result > 100) {
                result = 100.00;
            }
            return result;
        }
    }

    function calculatePercentageAlt(numerator, denominator1, denominator2) {
        if (denominator1 === 0 && denominator2 === 0) {
            return "0";
        } else {
            return (numerator * 100 / (denominator1 + denominator2)).toFixed(1);
        }
    }

    function prepareRepartitionData(data, metric) {
        let colorPromoters = "#15B700";
        let colorPassive = " #9E9E9E";
        let colorDetractors = "#FE215F";
        let blue = "#006CFF";
        let convertedData = [];

        for (let key in data) {
            if (key === 'score0'
                || key === 'score1'
                || key === 'score2'
                || key === 'score3'
                || key === 'score4'
                || key === 'score5'
                || key === 'score6'
                || key === 'score7'
                || key === 'score8'
                || key === 'score9'
                || key === 'score10'
            ) {
                let item = { y: data[key], color: blue };
                if (metric === "nps") {
                    switch (key) {
                        case 'score0': case 'score1': case 'score2': case 'score3': case 'score4': case 'score5': case 'score6': item.color = colorDetractors; break;
                        case 'score7': case 'score8': item.color = colorPassive; break;
                        case 'score9': case 'score10': item.color = colorPromoters; break;
                    }
                }

                if (metric === "ces") {
                    switch (key) {
                        case 'score1': case 'score2': case 'score3': item.color = colorDetractors; break;
                        case 'score4': item.color = colorPassive; break;
                        case 'score5': case 'score6': case 'score7': item.color = colorPromoters; break;
                    }
                }

                if (metric === "csat") {
                    switch (key) {
                        case 'score1': case 'score2': item.color = colorDetractors; break;
                        case 'score3': item.color = colorPassive; break;
                        case 'score4': case 'score5': item.color = colorPromoters; break;
                    }
                }
                convertedData.push(item);
            }
        }

        return convertedData;
    }

    function prepareEvolutionData(data, type) {
        let collection = [];
        for (let item of data) {
            let value = (item.count ? item.count : 0);

            collection.push({
                x: moment.utc(item.date).valueOf(),
                y: value
            });
        }
        return collection.sort((a, b) => a.x - b.x);
    }

    function setEvolutionChartInfos(widgetId, date1, date2) {
        let $elementOne = "<span>" + moment(date1).format("DD MMM YYYY") + "</span>";
        $("#" + widgetId + " .highchart-info-1 .p1").append($elementOne);
        let $elementTwo = "<span>" + moment(date2).format("DD MMM YYYY") + "</span>";
        $("#" + widgetId + " .highchart-info-1 .p2").append($elementTwo);
    }

    function getTotalMentions(data, property) {
        let total = 0;

        if (data) {
            data.forEach(sent => total += sent[property]);
        }

        return total;
    }
    // HIGHCHARTS CHART OPTIONS
    function getSolidGaugeOptions(chartId, data, score, type) {
        let options = {
            chart: {
                renderTo: chartId,
                type: 'solidgauge',
                height: "60%",
                width: 250,
                spacing: [-50, 0, -50, 0]
            },

            title: {
                text: ""
            },

            subtitle: {
            },
            credits: {
                enabled: false
            },
            tooltip: {
                enabled: false
            },
            pane: [{
                startAngle: -90,
                endAngle: 90,
                background: [{ // Track for Move
                    outerRadius: '100%',
                    innerRadius: '65%',
                    backgroundColor: "#DEDEDE",
                    borderWidth: 0,
                    shape: 'arc'
                }],
                size: '80%',
                center: ['50%', '65%']
            }, {
                startAngle: -90,
                endAngle: 90,
                size: '80%',
                center: ['50%', '65%'],
                background: []
            }],

            yAxis: [{
                min: 0,
                max: 100,
                lineWidth: 2,
                lineColor: 'white',
                labels: {
                    enabled: false,
                    distance: '105%',
                    y: 0
                },
                minorTickWidth: 0,
                tickLength: 70,
                tickWidth: 3,
                tickColor: 'white',
                zIndex: 6
            }, {
                linkedTo: 0,
                pane: 1,
                lineWidth: 5,
                lineColor: 'white',
                tickPositions: [],
                zIndex: 6
            }],
            series: [{
                animation: false,
                dataLabels: {
                    enabled: true,
                    useHTML: true,
                    formatter: function () {
                        return "<div class='solidgauge-score-wrapper'>" +
                            "<div class='solidgauge-score'>" +
                            "<p class='metric'>" + type + "</p>" +
                            "<p class='score'>" + score + "</p>" +
                            "</div>" +
                            "<div class='thingy'></div>" +
                            "</div>";
                    },
                    verticalAlign: "bottom",
                    borderWidth: 0,
                    y: 35
                },
                borderWidth: 0,
                color: Highcharts.getOptions().colors[0],
                radius: '100%',
                innerRadius: '65%',
                data: data
            }]
        };

        return options;
    }

    function getRepartitionChartOptions(chartId, data, type) {
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
                width: 1000,
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
                tickInterval: 10,
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
                    },
                    data: data
                }
            ]
        };

        if (type === "nps" || type === "0to10") {
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

        return options;
    }

    function getEvolutionChartOptions(chartId, data) {
        let options = {
            tooltip: {
                enabled: false
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
                height: 275,
                width: 900
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
                },
                data: data
            }]
        };

        return options;
    }

    function getSentimentSpreadOptions(chartId, totalMentions, data) {
        let options = {
            chart: {
                renderTo: chartId,
                plotBackgroundColor: null,
                plotBorderWidth: null,
                plotShadow: false,
                type: "pie",
                margin: 0,
                height: 230,
                width: 400,
                style: {
                    fontFamily: "Arial"
                }
            },
            title: {
                text: "<span class='grey'>MENTIONS</span>",
                align: 'center',

                verticalAlign: 'middle',
                y: 5,
                style: {
                    fontSize: 12
                }
            },
            subtitle: {
                text: "<span class='amount'>" + totalMentions + "</span>",
                align: 'center',
                verticalAlign: 'middle',
                y: 25,
                style: {
                    fontSize: 18,
                    color: '#003161'
                }
            },
            credits: {
                enabled: false
            },
            exporting: {
                enabled: false
            },
            marker: {
                enabled: false
            },
            tooltip: {
                enabled: false,
                style: {
                    display: "none"
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
                enableMouseTracking: false,
                animation: true,
                colorByPoint: true,
                borderWidth: 0,
                innerSize: "60%",
                data: data
            }]
        };

        return options;
    }

    // SVG
    function getVeryPositiveSVG() {
        return `<svg xmlns="http://www.w3.org/2000/svg" width="24.088" height="24.088" viewBox="0 0 24.088 24.088">
                    <defs>
                        <style>.apos{fill:none;}.bpos,.dpos{fill:#0FCE60;}.cpos,.dpos{stroke:none;}</style>
                    </defs>
                    <g class="apos" transform="translate(0 0)">
                        <path class="cpos" d="M12.044,0h0a12.044,12.044,0,0,1,0,24.088h0A12.044,12.044,0,0,1,12.044,0Z"/>
                        <path class="dpos" d="M 12.04394435882568 2.000003814697266 C 6.505695343017578 2.000003814697266 1.999994277954102 6.505693435668945 1.999994277954102 12.04394435882568 C 1.999994277954102 17.58219528198242 6.505695343017578 22.0878849029541 12.04410457611084 22.0878849029541 C 17.58235549926758 22.0878849029541 22.08804512023926 17.58219528198242 22.08804512023926 12.04394435882568 C 22.08804512023926 6.505693435668945 17.58235549926758 2.000003814697266 12.04410457611084 2.000003814697266 L 12.04394435882568 2.000003814697266 M 12.04394435882568 3.814697265625e-06 L 12.04410457611084 3.814697265625e-06 C 18.6957950592041 3.814697265625e-06 24.08804512023926 5.392253875732422 24.08804512023926 12.04394435882568 C 24.08804512023926 18.69563484191895 18.6957950592041 24.0878849029541 12.04410457611084 24.0878849029541 L 12.04394435882568 24.0878849029541 C 5.392253875732422 24.0878849029541 -5.7220458984375e-06 18.69563484191895 -5.7220458984375e-06 12.04394435882568 C -5.7220458984375e-06 5.392253875732422 5.392253875732422 3.814697265625e-06 12.04394435882568 3.814697265625e-06 Z"/>
                    </g>
                    <path class="bpos" d="M40.067,58.525a6.983,6.983,0,0,1-9.864,0,.568.568,0,0,0-.8.8,8.111,8.111,0,0,0,11.471,0,.568.568,0,1,0-.8-.8Z" transform="translate(-23.177 -43.403)"/>
                    <path class="bpos" d="M27.029,37.736a.114.114,0,0,0,.058-.022.38.38,0,0,0,.042-.035c.277-.261.557-.518.838-.775a8.3,8.3,0,0,0,.782-.73c.452-.444.994-.821,1.022-1.5a1.406,1.406,0,0,0-1.233-1.437,1.822,1.822,0,0,0-1.515.8,1.827,1.827,0,0,0-1.523-.814,1.406,1.406,0,0,0-1.233,1.437c.028.681.569,1.058,1.022,1.5.528.518,1.09,1,1.626,1.511A.171.171,0,0,0,27.029,37.736Z" transform="translate(-19.621 -26.252)"/>
                    <path class="bpos" d="M60.632,33.235a1.822,1.822,0,0,0-1.515.8,1.827,1.827,0,0,0-1.523-.814,1.406,1.406,0,0,0-1.233,1.437c.028.681.569,1.058,1.022,1.5.528.518,1.09,1,1.626,1.511a.169.169,0,0,0,.115.061.114.114,0,0,0,.058-.022.381.381,0,0,0,.042-.035c.277-.261.557-.518.838-.775a8.305,8.305,0,0,0,.782-.73c.452-.444.994-.821,1.022-1.5A1.405,1.405,0,0,0,60.632,33.235Z" transform="translate(-42.595 -26.252)"/>
                </svg>`;
    }

    function getUnknownSVG() {
        return `<svg xmlns="http://www.w3.org/2000/svg" width="24.088" height="24.088" viewBox="0 0 24.088 24.088">
                    <defs>
                        <style>.aneut{fill:none;}.bneut,.dneut{fill:#adadad;}.cneut,.dneut{stroke:none;}</style>
                    </defs>
                    <g class="aneut" transform="translate(0 0)">
                        <path class="cneut" d="M12.044,0h0a12.044,12.044,0,0,1,0,24.088h0A12.044,12.044,0,0,1,12.044,0Z"/>
                        <path class="dneut" d="M 12.04394435882568 2.000003814697266 C 6.505695343017578 2.000003814697266 1.999994277954102 6.505693435668945 1.999994277954102 12.04394435882568 C 1.999994277954102 17.58219528198242 6.505695343017578 22.0878849029541 12.04410457611084 22.0878849029541 C 17.58235549926758 22.0878849029541 22.08804512023926 17.58219528198242 22.08804512023926 12.04394435882568 C 22.08804512023926 6.505693435668945 17.58235549926758 2.000003814697266 12.04410457611084 2.000003814697266 L 12.04394435882568 2.000003814697266 M 12.04394435882568 3.814697265625e-06 L 12.04410457611084 3.814697265625e-06 C 18.6957950592041 3.814697265625e-06 24.08804512023926 5.392253875732422 24.08804512023926 12.04394435882568 C 24.08804512023926 18.69563484191895 18.6957950592041 24.0878849029541 12.04410457611084 24.0878849029541 L 12.04394435882568 24.0878849029541 C 5.392253875732422 24.0878849029541 -5.7220458984375e-06 18.69563484191895 -5.7220458984375e-06 12.04394435882568 C -5.7220458984375e-06 5.392253875732422 5.392253875732422 3.814697265625e-06 12.04394435882568 3.814697265625e-06 Z"/>
                    </g>
                    <g transform="translate(6.122 6.755)">
                        <path class="bneut" d="M12.383,14.829a1.758,1.758,0,1,1,1.758-1.758A1.758,1.758,0,0,1,12.383,14.829Zm8.2-3.516a1.758,1.758,0,1,0,1.758,1.758A1.758,1.758,0,0,0,20.587,11.313Z" transform="translate(-10.625 -11.313)"/>
                    </g>
                    <rect class="bneut" width="10.132" height="1.267" rx="0.633" transform="translate(6.966 15.62)"/>
                </svg>`;
    }

    function getVeryNegativeSVG() {
        return `<svg xmlns="http://www.w3.org/2000/svg" width="24.088" height="24.088" viewBox="0 0 24.088 24.088">
                    <defs>
                        <style>.aneg{fill:none;}.bneg,.dneg{fill:#ff1e5d;}.cneg,.dneg{stroke:none;}</style>
                    </defs>
                    <g class="aneg">
                        <path class="cneg" d="M12.044,0A12.044,12.044,0,1,1,0,12.044,12.044,12.044,0,0,1,12.044,0Z"/>
                        <path class="dneg" d="M 12.04402446746826 2.000003814697266 C 6.50572395324707 2.000003814697266 1.999994277954102 6.505693435668945 1.999994277954102 12.04394435882568 C 1.999994277954102 17.58219528198242 6.50572395324707 22.0878849029541 12.04402446746826 22.0878849029541 C 17.58231353759766 22.0878849029541 22.08804512023926 17.58219528198242 22.08804512023926 12.04394435882568 C 22.08804512023926 6.505693435668945 17.58231353759766 2.000003814697266 12.04402446746826 2.000003814697266 M 12.04402446746826 3.814697265625e-06 C 18.69575500488281 3.814697265625e-06 24.08804512023926 5.392253875732422 24.08804512023926 12.04394435882568 C 24.08804512023926 18.69563484191895 18.69575500488281 24.0878849029541 12.04402446746826 24.0878849029541 C 5.392293930053711 24.0878849029541 -5.7220458984375e-06 18.69563484191895 -5.7220458984375e-06 12.04394435882568 C -5.7220458984375e-06 5.392253875732422 5.392293930053711 3.814697265625e-06 12.04402446746826 3.814697265625e-06 Z"/>
                    </g>
                    <path class="bneg" d="M10.76.163a7,7,0,0,1-9.8,0,.57.57,0,0,0-.8,0,.551.551,0,0,0,0,.787,8.061,8.061,0,0,0,5.7,2.327A8.061,8.061,0,0,0,11.558.95a.551.551,0,0,0,0-.787A.57.57,0,0,0,10.76.163Z" transform="translate(17.845 17.995) rotate(180)"/>
                    <path class="bneg" d="M2.195,2.6A2.181,2.181,0,0,1,.643,1.952,2.181,2.181,0,0,1,0,.4,2.215,2.215,0,0,1,.036,0H4.353A2.215,2.215,0,0,1,4.39.4a2.181,2.181,0,0,1-.643,1.552A2.18,2.18,0,0,1,2.195,2.6Z" transform="translate(5.622 6.648) rotate(20)"/>
                    <path class="bneg" d="M2.195,2.6A2.181,2.181,0,0,1,.643,1.952,2.181,2.181,0,0,1,0,.4,2.215,2.215,0,0,1,.036,0H4.353A2.214,2.214,0,0,1,4.39.4a2.181,2.181,0,0,1-.643,1.552A2.181,2.181,0,0,1,2.195,2.6Z" transform="translate(14.39 8.15) rotate(-20)"/>
                </svg>`;
    }

    // INITIALISATION
    setPDFTitle();
    setMasterDates();
    initialiseWidgetContainers();
    selectWidgetType();
    setTimeout(() => {
        calculatePageBreaks();
    });
});
