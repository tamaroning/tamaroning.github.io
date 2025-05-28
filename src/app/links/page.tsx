"use client";

import { List, Text, Space } from "@mantine/core";
import Link from "next/link";

export default function LinksPage() {
	return (
		<div style={{ margin: 20 }}>
			<Text fw={700} size="lg">Extenal Links</Text>
			<List>
				<List.Item>GitHub: <Link href="https://github.com/tamaroning">tamaroning</Link></List.Item>
				<List.Item>Twitter: <Link href="https://twitter.com/tamaroning">tamaroning</Link></List.Item>
				<List.Item>HatenaBlog: <Link href="https://tamaron.hatenablog.com/">tamaron</Link></List.Item>
			</List>
			<Space h="md" />
		</div>
	);
}
