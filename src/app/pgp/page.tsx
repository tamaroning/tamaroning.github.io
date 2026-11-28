import { Anchor, Space, Text } from "@mantine/core";
import fs from "node:fs";
import path from "node:path";

export const metadata = { title: "PGP Public Key" };

export default function PgpPage() {
  const key = fs.readFileSync(path.join(process.cwd(), "public", "raiki-tamura.asc"), "utf8");

  return (
    <div style={{ maxWidth: 560, margin: 20 }}>
      <Text fw={700} size="lg">
        PGP Public Key
      </Text>
      <Space h="sm" />
      <Text size="sm">Fingerprint:</Text>
      <Text size="sm" ff="monospace">
        3CDA CBD8 C34B CAC9 593F 34C5 5FB0 907A E426 26A7
      </Text>
      <Space h="sm" />
      <Anchor href="/raiki-tamura.asc" download="raiki-tamura.asc">
        Download (.asc)
      </Anchor>
      <pre style={{ fontSize: 12, overflowX: "auto" }}>{key}</pre>
    </div>
  );
}
