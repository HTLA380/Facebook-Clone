import { format, getTime, formatDistanceToNow } from "date-fns";

// ----------------------------------------------------------------------

export function fDate(date, newFormat) {
  const fm = newFormat || "dd MMM yyyy";

  return date ? format(new Date(date), fm) : "";
}

export function fDateTime(date, newFormat) {
  const fm = newFormat || "dd MMM yyyy p";

  return date ? format(new Date(date), fm) : "";
}

export function fTimestamp(date) {
  return date ? getTime(new Date(date)) : "";
}

export function fToNow(date) {
  if (!date) return "";

  const distance = formatDistanceToNow(new Date(date), {
    includeSeconds: true,
  });

  // Extracting only the numerical part and the unit
  const [, number, unit] = distance.match(/(\d+)\s(\w+)/);

  return `${number}${unit[0]}`; // Return only the number and the first character of the unit (e.g., 3d)
}