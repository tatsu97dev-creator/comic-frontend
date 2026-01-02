import type { Author, AuthorId } from "./author";
import type { Publisher, PublisherId } from "./publisher";

export type WorkId = number;

export type Work = {
  id: WorkId;
  name: string;
  authors: Author[];
  publisher: Publisher | null;
};

export type WorkUpsert = {
  name: string;
  authors: AuthorId[];
  publisherId: PublisherId | null;
};
