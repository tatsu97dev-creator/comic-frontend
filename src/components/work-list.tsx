import { List, ListItemButton, ListItemText } from "@mui/material";
import type { Work } from "../types/work";

type Props = {
  works: Work[];
  onSelect: (work: Work) => void;
};

export const WorkList = (props: Props) => {
  const { works, onSelect } = props;

  if (works.length === 0) {
    return <p>{"該当する作品がありません"}</p>;
  }

  return (
    <List>
      {works.map((w) => (
        <ListItemButton key={w.id} onClick={() => onSelect(w)}>
          <ListItemText
            primary={w.name}
            secondary={`${w.authors.map((a) => a.name).join(" / ")}${
              w.publisher ? ` ・ ${w.publisher.name}` : ""
            }`}
          />
        </ListItemButton>
      ))}
    </List>
  );
};
