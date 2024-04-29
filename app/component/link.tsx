import { Link as MUILink } from "@mui/material";
import { Link } from "@remix-run/react";

export function MLink({
  children,
  link,
}: {
  children: JSX.Element;
  link: string;
}) {
  return (
    <MUILink
      component={Link}
      to={link}
      sx={{ textDecoration: "none", color: "inherit" }}
    >
      {children}
    </MUILink>
  );
}
