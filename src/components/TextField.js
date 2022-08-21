import { FilledInput, FormControl, InputLabel } from "@mui/material";

export default function TextField(props) {
  return (
    <FormControl variant="filled" size="small" fullWidth error={props.error}>
      <InputLabel htmlFor={props.id}>{props.label}</InputLabel>
      <FilledInput
        id={props.id}
        fullWidth
        value={props.value}
        onChange={(e) => {
          switch (props.type) {
            case "number":
              if (!isNaN(e.target.value.trim()))
                props.onChange(Number(e.target.value.trim()));
              break;
            case "text":
              props.onChange(e.target.value);
              break;
            default:
              props.onChange(e.target.value);
              break;
          }
        }}
      />
    </FormControl>
  );
}
