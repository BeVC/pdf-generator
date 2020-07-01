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

            /*if (widget["period"] === undefined && widget["polarity"] === undefined) {
                $("#cd-content #" + widget["uniqueID"] + " .widget-header .filter-block").hide();
            }
            if (widget["period"] === undefined) {
                $("#cd-content #" + widget["uniqueID"] + " .widget-header .filter-block span:first-of-type").hide();
            }
            if (widget["polarity"] === undefined) {
                $("#cd-content #" + widget["uniqueID"] + " .widget-header .filter-block span:nth-of-type(2)").hide();
            }

            if (widget["id"] === 16) {
                $("#cd-content #" + widget["uniqueID"] + " .widget-header").css("flex-direction", "column");
                $("#cd-content #" + widget["uniqueID"] + " .widget-header").css("justify-content", "center");
                $("#cd-content #" + widget["uniqueID"] + " .widget-header").css("height", "80px");
                $("#cd-content #" + widget["uniqueID"] + " .widget-header h2").css("align-self", "flex-start");
                $("#cd-content #" + widget["uniqueID"] + " .widget-header h2").css("line-height", "20px");
                $("#cd-content #" + widget["uniqueID"] + " .widget-header .date").css("align-self", "flex-start");
                $("#cd-content #" + widget["uniqueID"] + " .widget-header .date").css("line-height", "20px");
                $("#cd-content #" + widget["uniqueID"] + " .widget-header .date").css("margin-left", "0px");
                $("#cd-content #" + widget["uniqueID"] + " .widget-header .filter-block").css("align-self", "flex-start");
                $("#cd-content #" + widget["uniqueID"] + " .widget-header .filter-block").css("line-height", "20px");
                $("#cd-content #" + widget["uniqueID"] + " .widget-header .filter-block").css("margin-left", "0px");
            }*/
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
                    //initialiseCESBar(widget);
                    break;
                case 3:
                    //initialiseCSATBar(widget);
                    break;
                case 4:
                    //initialiseGeneralResponseRate(widget);
                    break;
                case 5:
                    //initialiseTextResponseRate(widget);
                    break;
                case 6:
                    //initialiseLastResponses(widget);
                    break;
                case 7:
                    //initialiseRepartitionNpsScore(widget);
                    break;
                case 8:
                    //initialiseRepartitionCesScore(widget);
                    break;
                case 9:
                    //initialiseRepartitionCsatScore(widget);
                    break;
                case 10:
                    //initialiseRepartitionZeroToTenScore(widget);
                    break;
                case 11:
                    //initialiseEvolutionNpsScoreWidget(widget);
                    break;
                case 12:
                    //initialiseEvolutionCesScoreWidget(widget);
                    break;
                case 13:
                    //initialiseEvolutionCsatScoreWidget(widget);
                    break;
                case 14:
                    //initialiseEvolutionZeroToTenScoreWidget(widget);
                    break;
                case 15:
                    //initialiseIsaacPieChart(widget);
                    break;
                case 16:
                    //initialiseIsaacLineChart(widget);
                    break;
                case 17:
                    //initialiseDepartmentRankingWidget(widget);
                    break;
                case 18:
                    //initialiseYesNoResultsWidget(widget);
                    break;
                case 19:
                    //initialiseRecentAnswersWidget(widget);
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

        $("#" + widget["uniqueID"] + " .wrapper").append(`<div class='nps-score-bar'>
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

    // GENERAL FUNCTIONS
    function displayNoData(widget) {
        $("#cd-content #" + widget["uniqueID"] + " .wrapper").hide();
        $("#cd-content #" + widget["uniqueID"] + " .no-data-in-chart").show();
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
