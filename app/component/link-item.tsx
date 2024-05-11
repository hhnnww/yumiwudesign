import { Stack } from "@mui/material";
import { ReactNode } from "react";

export function LinkItem({ children }: { children: ReactNode }) {
  return (
    <Stack direction={"row"} alignItems={"start"} spacing={1}>
      {children}
    </Stack>
  );
}
