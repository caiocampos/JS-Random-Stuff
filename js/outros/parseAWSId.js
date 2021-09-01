const parseAWSId = (awsId) => {
  let str = awsId;
  let result = "";
  str = str.replace("-", "");
  while (str.length > 0) {
    const step = Math.min(8, str.length);
    const b16Val = parseInt(str.substring(0, step), 16) >>> 0;
    result += b16Val.toString(36);
    str = str.substring(step, str.length);
  }
  return result;
};

const parseAWSIdBigInt = (awsId) =>
  BigInt("0x" + awsId.replace("-", "")).toString(36);
