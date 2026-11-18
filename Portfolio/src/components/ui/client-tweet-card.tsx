"use client";

import { useEffect, useState } from "react";
import { getTweet, type Tweet } from "react-tweet/api";
import { MagicTweet, TweetSkeleton, TweetNotFound } from "./tweet-card";

export function ClientTweetCard({
  id,
  className,
  ...props
}: {
  id: string;
  className?: string;
  [key: string]: unknown;
}) {
  const [tweet, setTweet] = useState<Tweet | null | undefined>(undefined);
  const [error, setError] = useState<any>(null);

  useEffect(() => {
    getTweet(id)
      .then((t) => setTweet(t))
      .catch((err) => {
        setError(err);
        setTweet(null);
      });
  }, [id]);

  if (tweet === undefined) {
    return <TweetSkeleton className={className} {...props} />;
  }

  if (!tweet) {
    return <TweetNotFound className={className} {...props} />;
  }

  return <MagicTweet tweet={tweet} className={className} {...props} />;
}
