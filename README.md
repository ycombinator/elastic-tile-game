# Elastic Tile Game
The purpose of the game is to educate players in various aspects of the Elastic stack while having fun at it!

## Playing the game

### Setup

This game must be played in person. A typical setup would involve showing the game board on a large screen or projector
surface with a host standing in front of it, facing away from the game board. One or more players can be be playing the game
at any point in time, all facing the game board.

### Objective

Each player's objective is to maximize their number of points. After reaching a certain number of points (pre-set by the host
or game organizers), the player may win a prize from the host/organizers.

### Gameplay

1. To start the game, the host must visit http://ycombinator.github.io/elastic-tile-game/.

2. A passphrase prompt will appear. The host must enter this passphrase. This is the same passphrase used to encrypt the
data for the game (see the ["Adding answers to the game" section](#adding-answers-to-the-game) below).

3. When the correct passphrase is entered, the game board will be shown. It contains columns for various categories. Each
column contains cells of various point levels (200, 400, etc.).

4. Assemble one or more players (no more than 4 at a time is suggested for ease of management). Record all players names on a piece
of paper. Randomly choose a player to begin.

5. Ask the player to choose a category and point level. This combination uniquely identifies a cell on the game board.

6. The host clicks on the cell chosen by the player. An answer appears in a box overlay.

7. The player has 30 seconds to say the question associated with the answer shown on the screen. The player can take multiple guesses.

8. If the player says the correct question (see the ["checking answers" section](#checking-answers) below if you are the host) within the allocated 30 seconds,
the host should click anywhere outside the answer box overlay to return to the game board. Add the point level for this answer against
the player's name. The player can continue their turn. Return to step 5.

9. If the player does not say the correct question within the allocated 30 seconds, the answer box overlay will disappear on its own and
return to the game board. The player loses their turn. Randomly choose another player and return to step 5.

10. Once all the cells on the game board have been exhausted, the game board will automatically refresh with a new set of cells. Many of these
cells &mdash; but not necessarily all of them &mdash; will contain a fresh set of answers.

### Checking answers

If you are the host, you may want to have an answer key handy to check answers. Please open this answer key in a way that it is only visible to
you. To view this answer key:

1. Visit http://ycombinator.github.io/elastic-tile-game/#answers

2. A passphrase prompt will appear. The host must enter this passphrase. This is the same passphrase used to encrypt the
data for the game (see the ["To add/change data" section](#to-add-change-data) below).

3. When the correct passphrase is entered, the answer key will appear.

4. Answers are grouped by category and point level. Under each group, all possible answers for that group are shown, along with their
associated questions.

## Adding answers to the game

0. Clone this repo to your local machine, say to a folder named `elastic-tile-game`

1. Get a copy of the decrypted data file from @ycombinator.

2. Make the desired additions/changes to this data file.

3. Encrypt the file.

    cd elastic-tile-game/js
    node encrypt-data.js <PASSPHRASE> # Ask @ycombinator about the passphrase

4. Commit encrypted data file, `data.encrypted.json`.

    git add data.encrypted.json
    git commit -m '<COMMIT MESSAGE>'
