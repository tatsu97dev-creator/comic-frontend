import { useParams } from "react-router-dom";

export const WorkDetailPage = () => {
  const { workId } = useParams<{ workId: string }>();

  return (
    <div style={{ maxWidth: 640, margin: "0 auto", padding: 16 }}>
      <h1 style={{ margin: 0 }}>作品詳細</h1>
      <p style={{ marginTop: 12 }}>workId: {workId}</p>
    </div>
  );
};
