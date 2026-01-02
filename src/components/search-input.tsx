import { TextField } from "@mui/material";

type Props = {
  value: string;
  onChange: (v: string) => void;
};

export const SearchInput = (props: Props) => {
  const { value, onChange } = props;

  return (
    <TextField
      fullWidth
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder="作品名で検索"
      variant="outlined"
      size="medium"
    />
  );
};
