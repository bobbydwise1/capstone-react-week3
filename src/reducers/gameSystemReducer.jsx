export default (state = {}, action) => {
  switch (action.type) {
    case 'PICK_PIECE2MOVE':
    const { yPos, xPos, currentPiece } = action;
    let newState = Object.assign({}, state, {
      currentSelectedPieceValue: yPos,
      currentSelectedPieceYPos: xPos,
      currentSelectedPieceXPos: currentPiece
    });
    return newState;
    default:
    return state;
  }
};
