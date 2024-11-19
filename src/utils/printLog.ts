import moment from "moment";

export default function PrintLog(message: string, obj?: any) {
  console.log(`[${moment().format("ddd, DD MMM YYYY HH:mm:ss")}] : ${message}`);
  if (obj !== undefined) console.log(obj);
}
