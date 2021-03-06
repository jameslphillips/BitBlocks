var commando = require('../../commando/commando.js').commando;
var Bukkit = org.bukkit.Bukkit;
var manager = Bukkit.getScoreboardManager();
var DisplaySlot = org.bukkit.scoreboard.DisplaySlot;

exports.updateScoreboard = function(player, newScore){
  var config = scload("bitblocks-config.json");
  var isScoreboardEnabled = config.showScoreboard;
  if(isScoreboardEnabled === true){
    var board = manager.getNewScoreboard();
    var objective = board.registerNewObjective("test", "dummy");
    var score = objective.getScore("Bits: ".gray()); //Get a fake offline player
    score.setScore(newScore);
    //Setting where to display the scoreboard/objective (either SIDEBAR, PLAYER_LIST or BELOW_NAME)
    objective.setDisplaySlot(DisplaySlot.SIDEBAR);
    //Setting the display name of the scoreboard/objective
    objective.setDisplayName("Bitcoin ".gold()+"Wallet".gray());
    player.setScoreboard(board);
  }
}
