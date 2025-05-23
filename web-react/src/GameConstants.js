export const FRUIT_SHOOT_RIOT_ID = "FruitShootRiot";
export const PAINTBALL_ID = "PaintBall";
export const FIREBALL_ID = "Fireball";
export const CORPSE_CUISINE_ID = "CorpseCuisine";
export const NIGHT_SHIFT_ID = "NightShift";
export const MONKEY_FRACAS_JR_ID = "MonkeyFracasJr";
export const AMERICAN_GLADIATORS_ID = "AmericanGladiators";

export const UNITY = "unity";
export const UNREAL = "unreal";
export const FLIXEL = "flixel";
export const ENCHANTJS = "enchantjs";
export const NINTENDODS = "nintendods";

let engineDescriptions = {};
engineDescriptions[UNITY] = ["Unity Engine"];
engineDescriptions[UNREAL] = ["Unreal Engine"];
engineDescriptions[FLIXEL] = ["Flixel Library", "ActionScript 3"];
engineDescriptions[ENCHANTJS] = ["Enchant JS", "HTML5/Javascript"];
engineDescriptions[NINTENDODS] = ["Nintendo DS", "libnds Library"];
export const ENGINE_DESCRIPTIONS = engineDescriptions;

export const GAME_LIST = [
  {
    id: FRUIT_SHOOT_RIOT_ID,
    title: "Fruit Shoot Riot",
    engine: UNITY,
    width: 900,
    height: 506,
    clickMarginLeft: '-920px',
    description: "Fruit Shoot Riot is the result of a 48 hour game jam, where "
      + "the theme of the jam was 'Guns that don't shoot bullets.' This top "
      + "down shooter has you feeding fruits to the monster patrons of your "
      + "tavern. The number of fruits and number of monsters ramps up as you "
      + "rack up the points and go for the high score.<br>This was my first "
      + "time working in the Unity engine with multiple other devs, but we were "
      + "able to communicate effectively and only ran into minor issues "
      + "when it came to merging our work together. We were also able to "
      + "efficiently divide and prioritize the work so were always working "
      + "together to build out the game features we wanted in the game.<br>"
      + "The team members I worked with were: Xander Ward, Keith Mclean, "
      + "and Carlos Corrêa.",
    howToWin: "Feed the monsters the fruit they are asking for!",
    howToPlay: "Select a fruit with the 1-4 keys (or mouse wheel)<br>"
      + "Aim and Shoot with the left mouse button",
  },
  {
    id: PAINTBALL_ID,
    title: "PaintBall Demo",
    engine: UNITY,
    width: 900,
    height: 506,
    clickMarginLeft: '-920px',
    description: "A demo project I made to test using 2D physics and drawing to a "
      + "texture efficiently. This is based off of a brush available in the 90s "
      + "art game Kid Pix Studios.",
    howToPlay: "Click and drag to shoot a paintball<br>Press Space to Reset",
  },
  {
    id: FIREBALL_ID,
    title: "Fireball",
    engine: UNITY,
    width: 900,
    height: 506,
    clickMarginLeft: '-920px',
    description: "Fireball was created as part of a 48 hour game jam at Big Viking "
      + "Games in 2017. The theme of the jam was 'If you build it, they will come.' "
      + "The game puts you in control of a fire fighter responding to a corn field "
      + "on fire. Clicking and dragging directs the fire fighter where to move and "
      + "which direction to spray to put out the blaze.<br>This was my first Unity "
      + "game, and also the first time working in 3D in Unity. I implemented the "
      + "level loading, pathfinding of the fire fighter (using A* pathfinding), and "
      + "the firespread simulation.<br>The team members I worked with were: Don "
      + "Champan and Nick Beltrame.",
    howToWin: "Put out the fires before they spread too far!",
    howToPlay: "Click a tile and drag in a direction to instruct the fire fighter where to spray<br>"
      + "Right click and drag to move around the farm"
  },
  {
    id: CORPSE_CUISINE_ID,
    title: "Corpse Cuisine",
    engine: FLIXEL,
    width: 300,
    height: 450,
    clickMarginLeft: '-370px',
    description: "Corpse Cuisine is a tile swapping arcade style game with "
      + "Zombies and Body Parts. As the owner of a little restaurant, you "
      + "need to figure out how to satisfy your customers. When a hoard of "
      + "hungry zombies comes into your place demanding to be fed what else "
      + "can you give them?<br>This game was made as a group project in my "
      + "fourth year of undergrad. The other members of the group were: "
      + "Spencer Baynton, Taylor Jackson, Brandon Kerr, with artwork by "
      + "Holly Bu'Lock.",
    howToWin: "Don't let zombies get to the chef",
    howToPlay: "Select 2 tiles to swap<br>"
      + "Making chains of 4 of the same type sends a dish out to the zombies<br>"
      + "Click the chef to use bullets when in a jam",
  },
  {
    id: NIGHT_SHIFT_ID,
    title: "Night Shift",
    engine: ENCHANTJS,
    width: 900,
    height: 600,
    clickMarginLeft: '-880px',
    description: "Night Shift is a side scrolling, fun hearted, action game, "
      + "where you follow the adventure of Nurse Nikki as she attempts to "
      + "cure the zombie patients and escape the hospital!<br>I made this "
      + "game as a Christmas gift so it's filled with references to jokes "
      + "and other games we've played together!",
    howToWin: "Get nurse Nikki out of the hospital<br>"
      + "Collect enough studs to become a True Nurse!",
    howToPlay: "Use the arrow keys to move around<br>"
      + "Press the space key to shoot the cure<br>"
      + "You can jump by pressing the up arrow at the top of the level",
  },
  {
    id: MONKEY_FRACAS_JR_ID,
    title: "Monkey Fracas Jr.",
    engine: NINTENDODS,
    width: 600,
    height: 450,
    clickMarginLeft: '-580px',
    YouTubeId: "ADWHb-Kgyzw",
    description: "Based on the arcade video game Monkey Fracas Jr. from the "
      + "pilot episode of the TV show Futurama. The goal of the game is to "
      + "survive as many rounds as you can, each ending with a huge barrage "
      + "of barrels from Fracas Jr. himself!<br>\"Space. It seems to go on "
      + "and on forever. But then you get to the end and a gorilla starts "
      + "throwing barrels at you!\"<br>Monkey Fracas Jr. was made for an "
      + "assignment in my Game Engines course.",
  },
  {
    id: AMERICAN_GLADIATORS_ID,
    title: "American Gladiators",
    engine: UNREAL,
    width: 600,
    height: 450,
    clickMarginLeft: '-580px',
    YouTubeId: "2n6finc1KUY",
    description: "A short game designed to emulate the American Gladiators' "
      + "game 'Assault'. As a kid watching American Gladiators, I always "
      + "wanted to be able to play some of the obstacle courses and compete "
      + "against the Gladiators! This short game allows you to play from the "
      + "perspective of a contestant on the show.<br>This mini-game was an "
      + "assignment for one of my fourth year courses at Western University "
      + "(4482a – Game Engine Development: Real-time Rendering and Physical "
      + "Simulation).",
  }
];
