"use client";

import { Grid, Loader, Paper, Space, Text } from "@mantine/core";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Parser from "rss-parser";


const BLOG_RSS_URL = "https://tamaron.hatenablog.com/rss";

export default function Blog() {
	const [feed, setFeed] = React.useState<any>(null);
	const [isMounted, setIsMounted] = React.useState(true);

	React.useEffect(() => {
		const fetchData = async () => {
			try {
				const parser = new Parser();
				if (isMounted) {
					setFeed(await parser.parseURL(BLOG_RSS_URL));
				}
			} catch (error) {
				console.error('Error fetching data:', error);
			}
		};

		fetchData();

		return () => {
			setIsMounted(false);
		};
	}, [isMounted]);



	return (
		<div style={{ margin: 20 }}>
			<Text fw={700} size="xl">Blog</Text>

			{feed ? feed?.items.map((item: any, index: number) =>
				<div key={index} style={{ marginTop: 20 }}>
					<Paper shadow="xs" p="xl">
						<Grid>
							<Grid.Col span={9}>
								<Text fw={700} mb={10}>
									{new Date(item.pubDate).toLocaleDateString()}
									「
									<Link href={item.link} target="_blank" rel="noopener noreferrer">{item.title}</Link>
									」
								</Text>
								<Text>
									{item.contentSnippet.substring(0, 50)}...
								</Text>
							</Grid.Col>
							<Grid.Col span={3}>
								{item?.enclosure.url ?
									<Image src={item?.enclosure?.url} alt="icon" width={160} height={90} />
									: null}
							</Grid.Col>
						</Grid>
					</Paper>
				</div>
			) : <Loader size="md" variant="dots" style={{ marginTop: 20 }} />}

			<Space h="xl" />

			<Text>
				{"RSS feed from "}
				<Link href={BLOG_RSS_URL} target="_blank" rel="noopener noreferrer">
					{BLOG_RSS_URL}
				</Link>
			</Text>
		</div>
	);
}
