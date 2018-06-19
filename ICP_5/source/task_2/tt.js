var app = angular.module("ttApp",['ngSanitize']);

app.controller('ttCtrl', function ($scope, $http) {

    $scope.langList = [];
    // Loading the Supported Languages
    $http.get("https://translate.yandex.net/api/v1.5/tr.json/getLangs?ui=en&key=trnsl.1.1.20180619T191258Z.7e4b498eac75832f.3d58e32bc47560feb86083b1e8bc7d70a69e7502").success(function (data) {
        if(data != null && data.langs != null){
            $scope.langList = data.langs;
        }
    });
    // If Error
    $http.get("https://translate.yandex.net/api/v1.5/tr.json/getLangs?ui=en&key=trnsl.1.1.20180619T191258Z.7e4b498eac75832f.3d58e32bc47560feb86083b1e8bc7d70a69e7502").error(function (data) {
        alert("There was some error processing your request. Please try after some time.");
    });

    $scope.getTranslateText = function () {
        $scope.textOut = "";
        var sourceText = $scope.sourceText;
        var sourceLan = $scope.sourceLan;
        var destLan = $scope.destLan;
        if (sourceText != null && sourceText != "" && sourceLan != null && sourceLan != "") {
            if(destLan == null || destLan == ""){
                destLan = 'en';
            }
            //This is the API that gives the list of venues based on the place and search query.
            var handler = $http.get("https://translate.yandex.net/api/v1.5/tr.json/translate?" +
                "key=trnsl.1.1.20180619T191258Z.7e4b498eac75832f.3d58e32bc47560feb86083b1e8bc7d70a69e7502&text=" + sourceText + "&" +
                "lang=" + sourceLan + "-" + destLan);
            handler.success(function (data) {
                if (data != null && data.text != null) {
                    $scope.textOut = "<strong>Translated Text : "+ data.text[0]+"</strong>";
                }else{
                    $scope.textOut = "<strong>No Translation Details exist for the Input Details</strong>";
                }
            });
            handler.error(function (data) {
                alert("There was some error processing your request. Please try after some time.");
            });
        }else{
            $scope.textOut = "<strong>Source Text or Source Language cannot be empty</strong>";
        }
    }
});