import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import type { WorkDetail } from "../types/work-detail";
import { mockWorkDetails } from "../mock/work-details";
import {
  Button,
  Chip,
  Divider,
  List,
  ListItem,
  ListItemText,
  Stack,
  Typography,
} from "@mui/material";

export const WorkDetailPage = () => {
  const { workId } = useParams<{ workId: string }>();

  const [detail, setDetail] = useState<WorkDetail | null>(null);

  useEffect(() => {
    if (!workId) {
      setDetail(null);
      return;
    }

    const fetchDetail = async () => {
      try {
        const found = mockWorkDetails.find((d) => d.work.id === workId);
        if (found) {
          setDetail(found);
        }
      } catch (err) {
        console.error(err);
      }
    };
    fetchDetail();
  }, [workId]);

  if (!detail) {
    return (
      <div style={{ maxWidth: 640, margin: "0 auto", padding: 16 }}>
        <Typography variant="h6">作品が見つかりません</Typography>
        <Button component={Link} to="/search" sx={{ mt: 2 }}>
          検索に戻る
        </Button>
      </div>
    );
  }

  const { work, volumes, rating, my } = detail;

  const authorsText = work.authors.map((a) => a.name).join(" / ");
  const publisherText = work.publisher?.name ?? "出版社未設定";

  const ratingText =
    rating.count === 0 || rating.average == null
      ? "評価なし"
      : `${Math.round(rating.average * 10) / 10} / 5.0`;

  return (
    <div style={{ maxWidth: 640, margin: "0 auto", padding: 16 }}>
      <Stack spacing={1}>
        <Typography variant="h5" fontWeight="bold">
          {work.name}
        </Typography>

        <Typography variant="body2" color="text.secondary">
          {authorsText} ・ {publisherText}
        </Typography>

        <Stack direction="row" spacing={1} alignItems="center" flexWrap="wrap">
          <Chip label={`平均: ${ratingText}`} />
          <Chip label={`件数: ${rating.count}`} variant="outlined" />
        </Stack>

        <Divider sx={{ my: 1 }} />

        <Typography variant="h6">巻一覧</Typography>
        <List dense>
          {volumes.map((v) => (
            <ListItem key={v.id} disablePadding>
              <ListItemText primary={v.name} />
            </ListItem>
          ))}
        </List>

        <Divider sx={{ my: 1 }} />

        <Typography variant="h6">自分の状態</Typography>
        {my ? (
          <Stack direction="row" spacing={1} flexWrap="wrap">
            <Chip label={my.isClipped ? "クリップ済み" : "未クリップ"} />
            <Chip label={my.isRead ? "読んだ" : "未読"} />
            <Chip
              label={my.rating == null ? "未評価" : `自分の評価: ${my.rating}`}
              variant="outlined"
            />
          </Stack>
        ) : (
          <Typography variant="body2" color="text.secondary">
            未ログインのため表示できません
          </Typography>
        )}

        <Button component={Link} to="/search" sx={{ mt: 2 }}>
          検索に戻る
        </Button>
      </Stack>
    </div>
  );
};
