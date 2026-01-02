import type { WorkId } from "./work";

export type VolumeId = string;

export type Volume = {
  id: VolumeId;
  workId: WorkId;
  name: string;
};
