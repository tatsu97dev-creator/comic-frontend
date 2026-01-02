import type { WorkId } from "./work";

export type VolumeId = number;

export type Volume = {
  id: VolumeId;
  workId: WorkId;
  name: string;
};
