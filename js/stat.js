"eslint.enable": true,
"eslint.autoFixOnSave": true,
"eslint.options": {
  "configFile": "C:/Users/vivie/github/magic/1468147-code-and-magick-21/.eslintrc.json"
}

var CLOUD_WIDTH = 270;
var CLOUD_HEIGHT = 420;

var BAR_WIDTH = 40;

var CLOUD_X = 100;
var CLOUD_Y = 10;

var GREETING_TEXT_START_Y = 50;
var NAMES_START_X = 120;

var GAP = 10;
var GREETING_TEXT_GAP = 20;

var renderCloud = function(ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
}

window.renderStatistics = function(ctx) {
  renderCloud(
    ctx,
    CLOUD_X + GAP,
    CLOUD_Y + GAP,
    "rgba(0, 0, 0, 0.7)"
  );
  renderCloud(
    ctx,
    CLOUD_X,
    CLOUD_Y,
    "#ffffff"
  );

  ctx.fillStyle = "#000000";
  ctx.font = '16px PT Mono';

  ctx.fillText(
  "Ура, вы победили!",
  CLOUD_X + GAP * 2,
  GREETING_TEXT_START_Y + GREETING_TEXT_GAP
  );

  ctx.fillText(
  "Список результатов: ",
  CLOUD_X + GAP * 2,
  GREETING_TEXT_START_Y + GREETING_TEXT_GAP * 2
  );

  ctx.fillText(
  "Вы",
  130,
  350
  );
  ctx.fillRect(
  120,
  220,
  BAR_WIDTH,
  100
  );

  ctx.fillText("Иван", 190, 350);
  ctx.fillRect(190, 220, BAR_WIDTH, 100);

  ctx.fillText("Юлия", 260, 350);
  ctx.fillRect(260, 220, BAR_WIDTH, 100);
};

renderStatistics(ctx);
