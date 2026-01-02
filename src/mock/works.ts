import type { Work } from "../types/work";
import { mockWorkDetails } from "./work-details";

export const mockWorks: Work[] = mockWorkDetails.map((d) => d.work);
