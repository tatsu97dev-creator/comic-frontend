import type { RatingSummary } from "./rating";
import type { Volume } from "./volume";
import type { Work } from "./work";

export type WorkDetail = {
  work: Work;
  volumes: Volume[];
  rating: RatingSummary;

  my: {
    isRead: boolean;
    isClipped: boolean;
    rating: number | null;
  } | null;
};
