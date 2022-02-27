import moment from "moment";

function toDateFormat(dateString: string): string {
  return moment(new Date(Number(dateString))).format("l");
}

export default toDateFormat;
