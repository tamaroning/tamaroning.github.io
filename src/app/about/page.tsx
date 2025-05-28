"use client";

import { List, Space, Text } from "@mantine/core";
import Link from "next/link";

export default function About() {
	return (
		<div style={{ margin: 20 }}>
			<Text fw={700} size="lg">tamaron</Text>

			<Space h="md" />

			<Text fw={700} size="lg">興味分野</Text>
			<List>
				<List.Item>コンパイラ, コンパイラツールチェイン, WebAssembly</List.Item>
				<List.Item>エミュレータ, プログラム解析</List.Item>
			</List>

			<Space h="md" />

			<Text fw={700} size="lg">経歴</Text>
			<List>
				<List.Item>2025年4月 - 現在: 京都大学 大学院情報学研究科 社会情報学コース 修士課程</List.Item>
				<List.Item>2021年4月 - 2025年3月: 京都大学 工学部情報学科</List.Item>
			</List>

			<Space h="md" />

			<Text fw={700} size="lg">職歴 / インターン</Text>
			<List>
				<List.Item>2025年8月 - 現在: Woven by Toyota. (インターン)</List.Item>
				<List.Item>2023年12月 - 現在: estie, inc. (パートタイム)</List.Item>
				<List.Item>2023年8月 - 2024年9月: Sony. (インターン)</List.Item>
				<List.Item>2022年8月 - 2025年9月: NTT R&D. (インターン)</List.Item>
			</List>

			<Space h="md" />

			<Text fw={700} size="lg">研究</Text>
			<List>
				<List.Item>
					Wanco: WebAssembly AOT Compiler that supports Live Migration, Raiki Tamura. <br />
					<Link href="https://popl25.sigplan.org/track/POPL-2025-student-research-competition">POPL2025 Student Research Competition (Undergraduate)</Link> 2nd Place.
				</List.Item>
				<List.Item>
					wanco: ライブマイグレーションをサポートするWebAssemblyコンパイラ, 田村来希, 小谷大祐, 松本直樹, 岡部寿男. <br />
					<Link href="https://sigos.ipsj.or.jp/event/comsys2024/">情報処理学会 第36回コンピュータシステム・シンポジウム (ComSys'24)</Link>, 優秀若手発表賞.
				</List.Item>
			</List>

			<Space h="md" />

			<Text fw={700} size="lg">OSS</Text>
			<List>
				<List.Item>
					<Text>
						<Link href="https://github.com/estie-inc/wasm-xlsxwriter">wasm-xlsxwriter</Link>
						(author): フロントエンド向けExcelライブラリ
					</Text>
				</List.Item>
				<List.Item>
					<Text>
						<Link href="https://github.com/kmc-jp/n64-emu">n64-emu</Link>
						(author): Nintendo64エミュレータ
					</Text>
				</List.Item>
				<List.Item>
					<Text>
						<Link href="https://github.com/Rust-GCC/gccrs">GCC Frontend for Rust</Link>
						: GCCのRustフロントエンド
					</Text>
				</List.Item>
				<List.Item>
					<Text>
						<Link href="https://github.com/open-feature/rust-sdk-contrib">OpenFeature Rust SDK</Link>
						(maintainer): Flipt Port of OpenFeature Rust SDK
					</Text>
				</List.Item>
			</List>

			<Space h="md" />

			<Text fw={700} size="lg">発表</Text>
			<List>
				<List.Item>
					2025 AsiaLLVM. Wanco: WebAssembly AOT Compiler That Supports Live Migration.
					<Link href="TODO: link">(slides)</Link>
				</List.Item>
				<List.Item>
					FOSDEM 2024. Unicode Support for GCC Rust.
					<Link href="TODO: link">(slides)</Link>
				</List.Item>
			</List>

			<Space h="md" />

			<Text fw={700} size="lg">その他</Text>
			<List>
				<List.Item>2025年
					<List>
						<List.Item>
							京都大学 工学部情報学科 「オペレーティングシステム」. TA
						</List.Item>
						<List.Item>
							京都大学 工学部情報学科 「コンピュータアーキテクチャ」. TA
						</List.Item>
					</List>
				</List.Item>
				<List.Item>2024年
					<List>
						<List.Item>
							セキュリティ・ミニキャンプ in 熊本 2024. チューター
						</List.Item>
					</List>
				</List.Item>
				<List.Item>2023年
					<List>
						<List.Item>
							Google Summer of Code 2023. (Organization: GCC)
						</List.Item>
						<List.Item>
							Global Cybersecurity Camp 2023 Singapore. Tutor
						</List.Item>
						<List.Item>
							セキュリティ・ミニキャンプ in 宮崎 2023. チューター
						</List.Item>
					</List>
				</List.Item>
				<List.Item>2022年
					<List>
						<List.Item>
							セキュリティ・キャンプ全国大会 2022. チューター
						</List.Item>
					</List>
				</List.Item>
				<List.Item>2021年
					<List>
						<List.Item>
							セキュリティ・キャンプ全国大会 2021 脅威解析トラックコース 修了
						</List.Item>
					</List>
				</List.Item>
				<List.Item>2020年
					<List>
						<List.Item>
							虚無
						</List.Item>
					</List>
				</List.Item>
				<List.Item>2019年
					<List>
						<List.Item>
							第8回 科学の甲子園 全国大会 埼玉県代表
						</List.Item>
					</List>
				</List.Item>
				<List.Item>2018年
					<List>
						<List.Item>
							SecHack365 開発駆動コース 修了
						</List.Item>
						<List.Item>
							アプリ甲子園 2018 優勝
						</List.Item>
					</List>
				</List.Item>
			</List>
		</div>
	);
}
