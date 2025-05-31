// utils/json.ts
export function convertBigIntToString(obj: any): any {
  if (obj === null || obj === undefined) return obj;
  if (typeof obj === 'bigint') {
    return Number(obj);
  }
  if (obj instanceof Date) {
    return obj.toISOString(); // convert Date thành string ISO
  }
  if (Array.isArray(obj)) {
    return obj.map(convertBigIntToString);
  }
  if (typeof obj === 'object') {
    const res: any = {};
    for (const key in obj) {
      res[key] = convertBigIntToString(obj[key]);
    }
    return res;
  }
  return obj;
}