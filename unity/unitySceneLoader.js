window.onload = function() {
    loadCarAi();
};

function loadCarAi() {
    var unityInstance = UnityLoader.instantiate("carAiContainer", "unity/car-ai/Builds.json", {onProgress: UnityProgress});
}