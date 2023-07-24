import { InputAdornment, MenuItem, TextField, Typography } from "@mui/material"

const Formelements = ({ item }) => {

  var res;

  switch (item.elem) {
    case 'input':
      res = <TextField
        required
        fullWidth
        type={item.type}
        id={item.name}
        label={item.label}
        name={item.name}
        // autoComplete={item.name}
        autoFocus={item.autoFocus || false}
        variant='standard'
      />;
      break;
    case 'date':
      res = <TextField
        required
        fullWidth
        type={item.type}
        id={item.name}
        label={item.label}
        name={item.name}
        autoFocus={item.autoFocus || false}
        variant='standard'
        InputProps={{ startAdornment: <InputAdornment position="start"></InputAdornment>, }}
      />;
      break;
    case 'select':
      res = <TextField
        fullWidth
        select
        label={item.label}
        variant="standard"
      >
        {item.options.map(option => (
          <MenuItem key={option} value={option}>
            {option}
          </MenuItem>
        ))}
      </TextField>;
      break;
    case "title":
      res = <Typography fontWeight={500}>{item.title}</Typography>;
      break;
  }
  return res
}

export default Formelements

