import React from "react";
import { formatDistanceToNowStrict } from "date-fns";

const useTimeAgo = () => {
  const timeAgo = (timestamp) => {
    if (!timestamp) return;

    const formattedTimestamp = formatDistanceToNowStrict(new Date(timestamp));

    if (formattedTimestamp.includes("minute")) {
      return formattedTimestamp.replace(" minutes", " m");
    } else if (formattedTimestamp.includes("hours")) {
      return formattedTimestamp.replace(" hour", " h");
    } else if (formattedTimestamp.includes("seconds")) {
      return formattedTimestamp.replace(" seconds", " s");
    } else if (formattedTimestamp.includes("day")) {
      return formattedTimestamp.replace(" days", " d");
    } else if (formattedTimestamp.includes("month")) {
      return formattedTimestamp.replace(" months", " m");
    } else if (formattedTimestamp.includes("year")) {
      return formattedTimestamp.replace(" years", " y");
    }

    return formatDistanceToNowStrict(new Date(timestamp));
  };

  return { timeAgo };
};

export default useTimeAgo;
