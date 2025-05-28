"use client";

import '@mantine/core/styles.css';
import { AppShell, MantineProvider } from "@mantine/core";
import { MyHeader } from '@/components/header';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body>
        <MantineProvider>
          <AppShell
            header={{
                height: 50,
              }}
          >
            <AppShell.Header>
              <MyHeader />
            </AppShell.Header>
            <AppShell.Main>
              {children}
            </AppShell.Main>
          </AppShell>
        </MantineProvider>
      </body>
    </html>
  );
}
