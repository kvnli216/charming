import React from "react";
import styles from "./index.module.css";
import { Button, Field, Input } from "@chakra-ui/react";

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

        <Field.Root invalid={Boolean(error)}>
          <Input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            autoFocus
            borderRadius="md"
          />
          <Field.ErrorText className={styles['error']}>{error}</Field.ErrorText>
        </Field.Root>
        <div className={styles['buttons-wrapper']}>
          <Button
            flex="1"
            variant="solid"
            size="lg"
            type="button"
            onClick={handleBack}
          >
            Back
          </Button>
          <Button
            flex="1"
            variant="solid"
            size="lg"
            type="submit"
          >
            Go
          </Button>
        </div>
      </form>
    </div>
  );
};
