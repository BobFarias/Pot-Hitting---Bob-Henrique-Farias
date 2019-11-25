# Pot-Hitting---Bob-Henrique-Farias

Develop the kids game “pot hitting” in Javascript. During the game, the player clicks with the mouse inside a playing area (500px x 600px) and tries to hit the invisible pot with the least possible amount of clicks. 

The invisible pot replicates the fact that the player is blindfolded during the real game.

To simplify the game, the pot is squared and 20px x 20px big. The pot gets positioned randomly inside the playing area at every start of the game.

Starting with the second click, the game tells the player if he got closer (“hot”) to the pot or he klicked further away (“cold”) then the click before. The number of clicks it takes the user to find the pot is counted and get displayed in the success-message on winning the game. When the player hits the pot, he won the game and the pot becomes visible.

The distance of the pot vs. the mouse click can be calculated by the following formula:
Distance of two 2 dimensional points = √(xPot − xClick) (yPot Click)²
