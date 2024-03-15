let parkingState = [
  [1, 0, 1, 1],
  [0, 0, 0, 2],
  [1, 1, 2, 1],
  [2, 1, 1, 1]
]

// Your code here
function getParkingLotState(spot) {
   let state = {
    totalSlots: 0,
    availableSlots: 0,
    occupiedSlots: 0
  }
   for (let i = 0; i < spot.length; i++) {
    for (let k = 0; k < spot[i].length; k++) {
      if (spot[i][k]===2){
        state.availableSlots+=1
        state.totalSlots+=1
      }
      else if(spot[i][k]==1){
        state.occupiedSlots+=1
        state.totalSlots+=1
      }

    }

  }
  
  return state;
}


console.log(getParkingLotState(parkingState))