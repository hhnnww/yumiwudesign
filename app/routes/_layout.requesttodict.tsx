import { Button, Stack, TextField, Typography } from "@mui/material";
import { ActionFunctionArgs } from "@remix-run/node";
import { Form, useActionData } from "@remix-run/react";

export default function Component() {
  const action_data = useActionData<typeof action>();
  return (
    <>
      <Form method="POST">
        <Stack spacing={2} alignItems={"start"}>
          <Typography variant="h2">
            转换浏览器复制的请求头为python的字典格式
          </Typography>
          <TextField
            multiline
            rows={20}
            label="原始请求代码"
            fullWidth
            sx={{ textarea: { fontFamily: "consolas,mono" } }}
            name="ori_code"
          />

          <Button type="submit" variant="contained">
            转换
          </Button>

          <TextField
            value={action_data ? action_data : ""}
            label="转换后代码"
            fullWidth
            multiline
            rows={20}
            sx={{ textarea: { fontFamily: "consolas,mono" } }}
          />
        </Stack>
      </Form>
    </>
  );
}

export async function action({ request }: ActionFunctionArgs) {
  const form = await request.formData();
  const ori_code = form.get("ori_code");

  let dst_code = "";
  if (ori_code) {
    ori_code
      .toString()
      .split("\n")
      .forEach((line_text) => {
        if (line_text.indexOf(": ") > 0) {
          const line_split = line_text.split(": ");
          console.log(`'${line_split[0]}':'${line_split[1]}',`);
          dst_code = dst_code + `'${line_split[0]}':'${line_split[1]}',\n`;
        }
      });
    return dst_code;
  }
  return "fuck";
}
