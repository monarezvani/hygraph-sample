import React from "react";
import { YouTubeEmbed } from "@next/third-parties/google";
import { useExtractYoutubeVideoId } from "@/utilities/useExtractYoutubeVideoId";

interface YoutubeVideoEmbedProps {
  youtubeVideoEmbed?: string;
}

export default function YoutubeVideoEmbed({
  youtubeVideoEmbed,
}: YoutubeVideoEmbedProps) {
  const src = useExtractYoutubeVideoId(youtubeVideoEmbed);
  return <YouTubeEmbed videoid={src} width={500} />;
}
