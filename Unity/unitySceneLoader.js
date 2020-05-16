

function loadConnect4() {
    var unityInstance = UnityLoader.instantiate("connect4Container", "Unity/Connect-4/Build/Built connect-4.json", {onProgress: UnityProgress});
}

function loadTicTacToe() {
    var unityInstance = UnityLoader.instantiate("ticTacToeContainer", "Unity/Tic-Tac-Toe/Build/Test build.json", {onProgress: UnityProgress});
}