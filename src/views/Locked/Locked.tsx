import React from "react";
import styles from "./index.module.css";
import { Button, TextField } from "@mui/material";

const SECRET = 'bagel';

interface LockedProps {
  onUnlock?: (password: string) => void;
  handleBack: () => void;
}

export const Locked = ({
  onUnlock = () => { },
  handleBack,
}: LockedProps) => {
  const [password, setPassword] = React.useState('');
  const [error, setError] = React.useState<string | false>(false);

  const handleUnlock = (e?: React.FormEvent) => {
    e?.preventDefault?.();
    if (password === SECRET) {
      onUnlock(password);
    } else {
      setError('Invalid password');
    }
  };

  return (
    <div className={styles['container']}>
      <div className={styles['header']}>
        <h1>Guest Area</h1>
        <p className={styles['sub-text']}>Please login to view this project</p>
      </div>
      <form className={styles['content']} onSubmit={handleUnlock} noValidate>

        <TextField
          type="password"
          placeholder="Password"
          variant="standard"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          autoFocus
          sx={{
            '& .MuiInput-input': { color: 'white' },
            '& .MuiInputBase-input::placeholder': { color: 'rgba(255, 255, 255, 0.7)', opacity: 1 },
            '& .MuiInput-underline:before': { borderBottomColor: 'rgba(255, 255, 255, 0.42)' },
            '& .MuiInput-underline:after': { borderBottomColor: 'white' },
            '& .MuiInput-underline:hover:not(.Mui-disabled):before': { borderBottomColor: 'rgba(255, 255, 255, 0.87)' },
          }}
          helperText={<p className={styles['error']}>{error}</p>}
        />
        <div className={styles['buttons-wrapper']}>
          <Button fullWidth variant="contained" color="primary" type="button" onClick={handleBack}>
            Back
          </Button>
          <Button fullWidth variant="contained" color="primary" type="submit">
            Go
          </Button>
        </div>
      </form>
    </div>
  );
};
