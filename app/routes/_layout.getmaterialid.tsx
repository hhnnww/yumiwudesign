import { Button, Stack, TextField, Typography } from "@mui/material";
import { ActionFunctionArgs } from "@remix-run/node";
import { Form, useActionData } from "@remix-run/react";

export default function Component() {
  const action_data = useActionData<typeof action>();
  return (
    <>
      <Form method="POST">
        <Stack spacing={2} alignItems={"start"}>
          <Typography variant="h2">获取页面的商家编码</Typography>
          <TextField label="商家编码名称" name="material_name" fullWidth />
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
  const material_name = form.get("material_name");

  if (ori_code && material_name) {
    const reg = new RegExp(material_name.toString() + "(.*)", "g");
    const res = ori_code.toString().match(reg);
    return JSON.stringify(res);
  }
  return "fuck";
}
