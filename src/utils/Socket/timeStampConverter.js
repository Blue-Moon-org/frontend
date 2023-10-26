export const renderTimestamp = (timestamp) => {
  let prefix = "";
  const timeDiff = Math.round(
    (new Date().getTime() - new Date(timestamp).getTime()) / 60000
  );
  if (timeDiff < 1) {
    // less than one minute ago
    prefix = "just now...";
  } else if (timeDiff < 60 && timeDiff > 1) {
    // less than sixty minutes ago
    prefix = `${timeDiff} minutes ago`;
  } else if (timeDiff < 24 * 60 && timeDiff > 60) {
    // less than 24 hours ago
    prefix = `${Math.round(timeDiff / 60)} hours ago`;
  } else if (timeDiff < 31 * 24 * 60 && timeDiff > 24 * 60) {
    // less than 7 days ago
    prefix = `${Math.round(timeDiff / (60 * 24))} days ago`;
  } else {
    prefix = `${new Date(timestamp)}`;
  }
  return prefix;
};
