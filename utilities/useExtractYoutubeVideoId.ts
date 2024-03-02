export function useExtractYoutubeVideoId(embedCode: string | undefined) {
  //this function extract videoId from youtube embed
  //we have this src attribute in iframe
  // src="https://www.youtube.com/embed/*****?si=3dt-AOfWQGM_aSS7"
  //video id is  ***** before ?si and with regularExpression :
  //     \/embed\/: This part matches the string "/embed/" literally. The backslashes are used to escape the forward slashes.
  // ([^/?]+): This part is a capturing group that matches one or more characters that are not a forward slash or question mark. This effectively captures the video ID.

  if (embedCode !== null && embedCode !== undefined) {
    const regex = /\/embed\/([^/?]+)/;
    const match = embedCode.match(regex);
    if (match && match.length > 1) {
      return match[1];
    }
  }
  // Return an empty string if embedCode is null, undefined, or if no match is found
  return "";
}
