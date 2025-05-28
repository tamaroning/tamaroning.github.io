import { Anchor, Box, Container, Group } from '@mantine/core';

const mainLinks = [
	{ link: '/', label: 'Home' },
	{ link: '/about', label: 'About' },
	{ link: '/links', label: 'Links' },
	{ link: '/blog', label: 'Blog' },
];

export function MyHeader() {
	const mainItems = mainLinks.map((item) => (
		<Anchor<'a'>
			href={item.link}
			key={item.label}
		>
			{item.label}
		</Anchor>
	));

	return (
		<Container style={{ paddingTop: 10, paddingBottom: 10 }} size="lg">
			<Box>
				<Group gap={20} justify="left" >
					{mainItems}
				</Group>
			</Box>
		</Container>
	);
}