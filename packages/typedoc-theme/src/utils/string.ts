export function stringify(data: unknown) {
  if (typeof data === "bigint") {
    return data.toString() + "n";
  }
  return JSON.stringify(data);
}

export const toBase64 = (obj?: any) => {
  if (!obj) {
    return "";
  }
  return (
    "base64:" +
    Buffer.from(JSON.stringify(obj, null, 0), "utf-8").toString("base64")
  );
};
