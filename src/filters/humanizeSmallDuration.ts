import Vue from "vue";

function addDurationText(durationValue: number, text: string, unit: string) {
  if (durationValue > 0) {
    if (text) {
      text += " ";
    }
    text += `${durationValue} ${unit}`;
    if (durationValue > 1) text += "s";
  }
  return text;
}

export default Vue.filter("humanizeSmallDuration", function(value: number) {
  if (value <= 0) return "0 second";
  let result = "";

  let remainder = value % 3600;
  const nbHours = (value - remainder) / 3600;
  result = addDurationText(nbHours, result, "hour");
  value = remainder;
  if (!value) return result;

  remainder = value % 60;
  const nbMinutes = (value - remainder) / 60;
  result = addDurationText(nbMinutes, result, "minute");
  value = remainder;
  if (!value) return result;

  result = addDurationText(value, result, "second");
  return result;
});
