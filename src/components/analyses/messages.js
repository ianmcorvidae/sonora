var intlData = {
    locales: "en-US",
    messages: {
        all: "All",
        analyses: "Analyses",
        analysis: "Analysis",
        analysisId: "Analysis ID",
        analysisInfo: "View Analysis Info",
        analysisInfoDlgTitle: "Analysis Info",
        analysisInfoFetchError:
            "Unable to fetch analysis information. Please try again.",
        analysisInfoTitle: "Analysis Info",
        analysisParamFetchError:
            "Unable to fetch analysis parameters. Please try again.",
        analysisParamTitle: "Viewing parameters for {name}",
        analysisParams: "Parameters",
        analysesExecDeleteWarning:
            "This will remove the selected analyses and the parameters information associated with those analyses. Outputs can still be viewed in the Data window within the folder created by these analyses.",
        analysesMultiRelaunchWarning:
            "Relaunching more than one analysis at once will relaunch all selected analyses, reusing their original parameters and analysis names." +
            " If the selected analyses are sub-jobs of an HT analysis, then those selected analyses will still be nested under that parent HT analysis," +
            " and their output folders will also be grouped under that parent HT analysis' output folder," +
            " but the relaunched sub-jobs will be renamed with a `-redo-#` suffix to differentiate them from their original sub-jobs." +
            " Otherwise, relaunched analyses will be treated as new analyses, even though they reuse the same name and parameters as their original analyses.",

        app: "App",
        appTypeFilter: "App Type",
        ariaCheckbox: "{label} checkbox",
        ariaTableListing: "Analyses table listing",
        cancel: "Cancel",
        cancelBtnText: "Cancel",
        comments: "Comments",
        commentsDlgHeader: "Comments",
        commentsPrompt: "Comments...",
        completeAndSave: "Complete and Save Outputs",
        copyAnalysisId: "Copy Analysis ID",
        currentStatus: "Current Status",
        date: "Date",
        delete: "Delete",
        details: "Details",
        email: "Email",
        emptyValue: "-",
        endDate: "End date",
        extendTime: "Extend time limit",
        extendTimeLimitMessage:
            "This analysis is scheduled to be terminated at {timeLimit}. Do you" +
            " wish" +
            " to extend the time limit?",

        followLogs: "Follow Logs",
        goOutputFolder: "Go to output folder",
        goOutputFolderOf: "Go to output folder of {name}",
        gridView: "Grid View",
        goToVice: "Go to analysis",
        htDetails: "View HT Analyses details",
        info: "Info",
        jobLogsUnavailableMessage:
            "The logs will be available within the analysis output folder after the status of this" +
            " analysis changes to Completed or Failed.",
        jobLogsUnavailableHeading: "Logs not available",
        message: "Message",
        mine: "Only my analyses",
        name: "Name",
        needHelp: "I still need help!",
        noAnalyses: "No analyses to display",
        noAnalysis: "No Analyses!",
        noOutput: "Analysis completed but I got no output.",
        ok: "Ok",
        okBtnText: "OK",
        outputConditionHeader: "Select Output condition:",
        outputFolder: "Output folder",
        owner: "Owner",
        paramType: "Type",
        refresh: "Refresh",
        relaunch: "Relaunch...",
        rename: "Rename...",
        renameDlgHeader: "Rename Analysis",
        renamePrompt: "Rename",
        requestHelp: "Request Help with this Analysis",
        saveToFile: "Save to file",
        search: "Search...",
        share: "Share with collaborators...",
        startDate: "Start date",
        status: "Status",
        submit: "Submit",
        tableView: "Table View",
        theirs: "Analyses shared with me",
        type: "App Type",
        unExpectedOutput: "Analysis completed but I got unexpected output.",
        updateComments: "Update Comments...",
        user: "User",
        value: "Value",
        viewAll: "View All Analyses",
        viewFilter: "View",
        viewLogs: "View logs",
        viewParam: "View Parameters",
        viewingBatch: "Viewing Batch: {name}",
    },
};

export default intlData;
