module.exports=getDate;
function getDate() {
  var today = new Date();
  var options = {
    day: "numeric",
    month: "short",
    year:"numeric"
  }
  var day = today.toLocaleDateString("en-GB", options);
  return day;
}