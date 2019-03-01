# _Chess Variant - Tamerlame 2000._

#### _This is a game that is a spin-off of chess.  This version of chess will use a bigger game board (bigger than 8x8), and will have more chess pieces that are different than the traditional chess pieces._

#### By _**Robert Lee**_

## Description

_A variant of chess, created in React._

* _See the following weblink for the rules this game is based on:_
http://history.chess.free.fr/tamerlane2.htm#Moves

* _The ancient version of this game is much more complex and "bloody".  The modern rules attempt to slow the game down and add more strategy._

## Setup/Installation Requirements

* _Clone the applications from github by going to the terminal window command line and typing:_

$ git clone https://github.com/bobbydwise1/chess-medieval-persia.git

* _After all the files have been copied, navigate to the project working directory.  Type the following:_

$ npm install

* _Node Package Manager (npm) should automatically start downloading all required dependencies.  After all files have been downloaded, type the following:_

$ npm run start

* _The terminal window will run the server._

* _You must now go to your web browser to localhost:8080_

* _To stop the application, return to the terminal window and enter the command CTRL+C.  If prompted for (Y/N), pick "Y".  Then close the user interface tab in your web browser._

## Initial Component Diagram
![Component Image](./src/assets/images/DiagramComp.png)
* _Note: State should exist in the App Component (if there is no Redux.).

## Minimum Viable Product

* _This is only a static layout, in preparation for React state elements._

* _There will be a game board of no bigger than 13x13, with a set of black game pieces and white game pieces._

* _There will at least be all the traditional chess piece graphics of pawn, rook, knight, bishop, queen, and king._

* _When any piece is dragged anywhere else on the gameboard, it will erase any piece in the square, and then the piece will be moved there (ex: there is no checking the player if their moves are “legal” for that piece.)._

* _There are no “turns”.  Ex, it is possible for white or black to move 10 pieces in a row if they wanted._

* _A captured pieces window component._

## Future features

* _Add turns, white only moves one piece, then black moves one piece… etc._

* _Add game piece move checking to only allow pieces to move to a “legal” square._

* _Add a skinning feature to change the look of the game._

* _Refactor for React Native, to create an Andriod app._

* _Refactor for responsive UI._

* _Add a scripted interface (to set up the next feature.)_

* _Add 1 vs CPU mode, with the AI using a technique called alpha-beta pruning._

* _Add user login accounts._

* _Add backend for firebase._

* _Add chat feature._

## Known Bugs

* _To be determined._

## Support and contact details

* _Please contact bobbydwise1@hotmail.com_

## Technologies Used

* _Javascript, jQuery, HTML, CSS, Bootstrap, Atom, NPM, node.js, Webpack, React, Redux, math.js library._

### License

*This application is Licensed under the MIT software License agreement. THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.*

Copyright (c) 2019 **_Robert Lee, Epicodus_**
