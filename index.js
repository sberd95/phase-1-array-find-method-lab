// code your solution here
function superbowlWin(array) {
    let winObj = array.find(x => x.result === "W")
    if (typeof winObj === 'undefined') {
        return
    } 
    return winObj.year
}