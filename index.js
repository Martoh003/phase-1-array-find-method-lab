// code your solution here
function superbowlWin(record) {
    const winningEntry = record.find(entry => entry.result === "W");
    return winningEntry ? winningEntry.year : undefined;
  }
  
  module.exports = superbowlWin;
  
