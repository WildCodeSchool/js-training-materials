//verbose solution
function timePadding(eventTime) {
  var math = eventTime - Date.now(); //get the duration between now and the event
  math = Math.round(math - 300000); //remove 5 minutes
  math = math * 0.95; //remove 5 percent
  if (math < 0) {
    //check if result is less than 0 for time around or below 5 minutes
    return Date.now(); //return now
  }
  return math + Date.now(); //return now plus the reduced dutation
}
