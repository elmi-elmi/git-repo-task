/**
 * Get last time the repo has been updated
 * @param time
 * @return {string}
 */
export function  getLastTimeUpdate (time) {


  const lastUpdated = new Date(time);
  const now = new Date();
  const diff = Math.abs(now - lastUpdated);

  // Convert the difference to different units of time
  const minutes = Math.round(diff / (1000 * 60));
  const hours = Math.round(diff / (1000 * 60 * 60));
  const days = Math.round(diff / (1000 * 60 * 60 * 24));
  const years = Math.round(diff / (1000 * 60 * 60 * 24 * 365));
  if (years > 0) {
    return `last updated ${years} year${years > 1 ? "s" : ""}`;
  } else if (days > 0) {
    return `last updated ${days} day${days > 1 ? "s" : ""}`;
  } else if (hours > 0) {
    return `last updated ${hours} hour${hours > 1 ? "s" : ""}`;
  } else if (minutes > 0) {
    return `last updated ${minutes} minute${minutes > 1 ? "s" : ""}`;
  } else {
    return `Last updated just now`;
  }
}

/**
 * Change number format to localString
 *
 * @returns {Object}
 */
export function toLocaleString(number){
  return number.toLocaleString("en-US", {style:"decimal"})
}
