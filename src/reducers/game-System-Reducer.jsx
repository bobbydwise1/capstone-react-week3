import constants from './../constants';
const { initialState, types } = constants;

const gameSystemReducer = (state = initialState, action) => {
  let newState;
  switch (action.type) {
  case 'PICK_PIECE2MOVE':
    const { yPos, xPos, currentPiece } = action;
    let newState = Object.assign({}, state,
      {
        currentSelectedPieceValue: yPos,
        currentSelectedPieceYPos: xPos,
        currentSelectedPieceXPos: currentPiece
      }
    );
    return newState;
  default:
    return state;
  }
};

export default gameSystemReducer;
