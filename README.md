# _Chess Variant - Tamerlame 2000._

#### _This is a game that is a spin-off of chess.  This version of chess will use a bigger game board (bigger than 8x8), and will have more chess pieces that are different than the traditional chess pieces._

_This specific repo is the 2nd week version of my capstone project for Epicodus._

_If you want to see the 1st week version of this repo, see the following link:_

https://github.com/bobbydwise1/capstone-react-week1.git

#### By _**Robert Lee**_

## Description

_A variant of chess, created in React._

* _See the following weblink for the rules this game is based on:_
http://history.chess.free.fr/tamerlane2.htm#Moves

* _The ancient version of this game is much more complex and "bloody".  The modern rules attempt to slow the game down and add more strategy._

* _Note!  There is a version of this project with pure static components.  The link to this site is:_

**https://github.com/bobbydwise1/capstone-react-static.git**

## Setup/Installation Requirements

* _Clone the applications from github by going to the terminal window command line and typing:_

**$ git clone https://github.com/bobbydwise1/capstone-react-week2.git**


* _After all the files have been copied, navigate to the project working directory.  Type the following:_

**$ npm install**

* _Node Package Manager (npm) should automatically start downloading all required dependencies.  After all files have been downloaded, type the following:_

**$ npm run start**

* _The terminal window will run the server._

* _You must now go to your web browser to localhost:8080_

* _To stop the application, return to the terminal window and enter the command CTRL+C.  If prompted for (Y/N), pick "Y".  Then close the user interface tab in your web browser._

## Initial Component Diagram

![Component Image](./src/assets/images/DiagramComp.png)

* _Note: State should exist in the GameRoute Component (if there is no Redux.)._

## Representation of UI state

* _This project uses the math.js library, which is under Apache 2.0 license.  See the following links:_

http://mathjs.org/

https://github.com/josdejong/mathjs

* _The game state is represented by a math.matrix() object, which is an object that represents a true matrix, that represents the game grid._

* _Unlike a pure javascript array with nested array, the math.matrix() object provides additional methods to make it easier to apply matrix operations (aka apply Linear Algebra).  An example of the game state, as a 13x12 board, is given below in javascript:_

**import * as math from 'mathjs';**

**const gameSystem = math.matrix([
[1,1,1,1,1,1,1,1,1,1,1,1,1],
[1,0,0,0,0,0,0,0,0,0,0,0,1],
[1,0,0,0,0,0,0,0,0,0,0,0,1],
[1,0,0,0,0,0,0,0,0,0,0,0,1],
[1,0,0,0,0,0,0,0,0,0,0,0,1],
[1,0,0,0,0,0,0,0,0,0,0,0,1],
[1,0,0,0,0,0,0,0,0,0,0,0,1],
[1,0,0,0,0,0,0,0,0,0,0,0,1],
[1,0,0,0,0,0,0,0,0,0,0,0,1],
[1,0,0,0,0,0,0,0,0,0,0,0,1],
[1,1,1,1,1,1,1,1,1,1,1,1,1]
]);**

* _Each (Y,X) coordinate of the matrix will hold a string prepresenting a piece.  These arrays are also historical state slices of the game, which can be stored in sequence._

## Minimum Viable Product

* _This gameBoard component has had state lifted into it._

* _The visible game grid is a 10 x 11 grid._

* _There will at least be all the traditional chess piece graphics of pawn, rook, knight, bishop, queen, and king._

* _To move a game piece, it will compose of two actions:_

  * _1st action:  The user left clicks on the piece they want to move._
  * _2nd action:  The user left clicks on a square they want to move to._
    * _If the new square is inside the game grid, the user's piece will be moved into the new square._
    * _If any piece exists in the new square, it will be over written._
    * _MVP will not have "legal" moves checking._


* _For MVP, there are no “turns”.  Ex, it is possible for white or black to move 10 pieces in a row if they wanted._

* _A captured pieces window component._

## Future features

* _Add a moves history list._

* _Add new game pieces: prince, camel, elephant, cannon, ship, gryphon._

* _Add turns, white only moves one piece, then black moves one piece… etc._

* _Add game piece move checking to only allow pieces to move to a “legal” square._

* _Add a skinning feature to change the look of the game._

* _Add an ability to drag and drop pieces, using libraries that can work with either a mouse or touchscreen._

* _Refactor the game state to only use a 1-dimensional array to speed up the game._

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

Copyright (c) 2019 **_Robert Lee, Epicodus_**
*This application is Licensed under the MIT software License agreement. THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.*

The mathjs library is copyright under Apache License 2.0 by **Jos de Jong**.  The math.js license in part reads:

*Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at

https://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.*
