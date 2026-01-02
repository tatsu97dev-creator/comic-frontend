import type { WorkDetail } from "../types/work-detail";

export const mockWorkDetails: WorkDetail[] = [
  {
    work: {
      id: "1",
      name: "SPY×FAMILY",
      authors: [{ id: "1", name: "遠藤達哉" }],
      publisher: { id: "1", name: "集英社" },
    },
    volumes: [{ id: "1-1", workId: "1", name: "1巻" }],
    rating: { average: 4.2, count: 340 },
    my: { isRead: false, isClipped: true, rating: null },
  },
  {
    work: {
      id: "2",
      name: "ブルーピリオド",
      authors: [{ id: "2", name: "山口つばさ" }],
      publisher: { id: "2", name: "講談社" },
    },
    volumes: [
      { id: "2-1", workId: "2", name: "1巻" },
      { id: "2-2", workId: "2", name: "2巻" },
      { id: "2-3", workId: "2", name: "3巻" },
    ],
    rating: { average: 3.2, count: 64 },
    my: { isRead: true, isClipped: false, rating: 3.8 },
  },
];
