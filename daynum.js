module.exports=getDate;
function getDate() {
  var today = new Date();
  var options = {
    day: "numeric",
    month: "numeric",
    year:"numeric"
  }
  var daynum = today.toLocaleDateString("en-GB", options);
  return daynum;
}