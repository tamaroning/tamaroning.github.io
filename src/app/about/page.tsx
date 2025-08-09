"use client";

import { List, Space, Text } from "@mantine/core";
import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <div style={{ margin: 20 }}>
      <Text fw={700} size="lg">
        tamaron
      </Text>

      <Image
        src="/assets/icon.jpg"
        alt="icon"
        width={300}
        height={300}
        style={{ borderRadius: "50%" }}
      />

      <Space h="md" />

      <Text fw={700} size="lg">
        Research Interests
      </Text>
      <List>
        <List.Item>Compilers, JIT compilers, WebAssembly</List.Item>
        <List.Item>Program analysis, Rust</List.Item>
      </List>

      <Space h="md" />

      <Text fw={700} size="lg">
        Education
      </Text>
      <List>
        <List.Item>
          2025 April - Present: M.S. in Kyoto University, Graduate School of
          Informatics, Social Informatics Course.
        </List.Item>
        <List.Item>
          2021 April - 2025 March: B.E. in Kyoto University, Faculty of
          Engineering, Department of Informatics.
        </List.Item>
      </List>

      <Space h="md" />

      <Text fw={700} size="lg">
        Work Experience
      </Text>
      <List>
        <List.Item>2025 August - Present: Woven by Toyota. (Intern)</List.Item>
        <List.Item>2023 December - Present: estie, inc. (Part-time)</List.Item>
        <List.Item>2023 August - 2024 September: Sony. (Intern)</List.Item>
        <List.Item>2022 August - 2025 September: NTT R&D. (Intern)</List.Item>
      </List>

      <Space h="md" />

      <Text fw={700} size="lg">
        Publications
      </Text>
      <List>
        <List.Item>
          Bringing Together Cross-ISA Checkpoint/Restoration and AOT Compilation
          of WebAssembly Programs, Raiki Tamura, Daisuke Kotani, Kazuyuki Shudo,
          Yasuo Okabe. <br />
          <Link href="https://conf.researchr.org/home/icfp-splash-2025/mplr-2025">
            MPLR 2025
          </Link>{" "}
          .
        </List.Item>
        <List.Item>
          Wanco: WebAssembly AOT Compiler that supports Live Migration, Raiki
          Tamura. <br />
          <Link href="https://popl25.sigplan.org/track/POPL-2025-student-research-competition">
            POPL2025 Student Research Competition (Undergraduate)
          </Link>{" "}
          2nd Place.
        </List.Item>
        <List.Item>
          wanco: ライブマイグレーションをサポートするWebAssemblyコンパイラ,
          田村来希, 小谷大祐, 松本直樹, 岡部寿男. <br />
          <Link href="https://sigos.ipsj.or.jp/event/comsys2024/">
            情報処理学会 第36回コンピュータシステム・シンポジウム (ComSys 2024)
          </Link>
          , 優秀若手発表賞.
        </List.Item>
      </List>

      <Space h="md" />

      <Text fw={700} size="lg">
        OSS
      </Text>
      <List>
        <List.Item>
          <Text>
            <Link href="https://github.com/estie-inc/wasm-xlsxwriter">
              wasm-xlsxwriter
            </Link>
            (author): Excel library for frontend
          </Text>
        </List.Item>
        <List.Item>
          <Text>
            <Link href="https://github.com/kmc-jp/n64-emu">n64-emu</Link>
            (author): Nintendo64 emulator
          </Text>
        </List.Item>
        <List.Item>
          <Text>
            <Link href="https://github.com/Rust-GCC/gccrs">
              GCC Frontend for Rust
            </Link>
            : GCC Rust frontend
          </Text>
        </List.Item>
        <List.Item>
          <Text>
            <Link href="https://github.com/open-feature/rust-sdk-contrib">
              OpenFeature Rust SDK
            </Link>
            (maintainer): Flipt Port of OpenFeature Rust SDK
          </Text>
        </List.Item>
      </List>

      <Space h="md" />

      <Text fw={700} size="lg">
        Presentations
      </Text>
      <List>
        <List.Item>
          2025 AsiaLLVM. Wanco: WebAssembly AOT Compiler That Supports Live
          Migration.
          <Link href="TODO: link">(slides)</Link>
        </List.Item>
        <List.Item>
          FOSDEM 2024. Unicode Support for GCC Rust.
          <Link href="TODO: link">(slides)</Link>
        </List.Item>
      </List>

      <Space h="md" />

      <Text fw={700} size="lg">
        Others
      </Text>
      <List>
        <List.Item>
          2025
          <List>
            <List.Item>
              Kyoto University, Faculty of Engineering, Department of
              Informatics, Operating Systems. TA
            </List.Item>
            <List.Item>
              Kyoto University, Faculty of Engineering, Department of
              Informatics, Computer Architecture. TA
            </List.Item>
          </List>
        </List.Item>
        <List.Item>
          2024
          <List>
            <List.Item>セキュリティ・ミニキャンプ熊本2024 チューター</List.Item>
          </List>
        </List.Item>
        <List.Item>
          2023
          <List>
            <List.Item>
              Google Summer of Code 2023. (Organization: GCC)
            </List.Item>
            <List.Item>
              Global Cybersecurity Camp 2023 Singapore. Tutor
            </List.Item>
            <List.Item>セキュリティ・ミニキャンプ宮崎2023 チューター</List.Item>
          </List>
        </List.Item>
        <List.Item>
          2022
          <List>
            <List.Item>
              セキュリティ・キャンプ全国大会 2022. チューター
            </List.Item>
          </List>
        </List.Item>
        <List.Item>
          2021
          <List>
            <List.Item>
              セキュリティ・キャンプ全国大会 2021 脅威解析トラックコース 修了
            </List.Item>
          </List>
        </List.Item>
        <List.Item>
          2020
          <List>
            <List.Item>虚無</List.Item>
          </List>
        </List.Item>
        <List.Item>
          2019
          <List>
            <List.Item>第8回 科学の甲子園 全国大会 埼玉県代表</List.Item>
          </List>
        </List.Item>
        <List.Item>
          2018
          <List>
            <List.Item>SecHack365 開発駆動コース 修了</List.Item>
            <List.Item>アプリ甲子園 2018 優勝</List.Item>
          </List>
        </List.Item>
      </List>

      <Space h="md" />

      <Text fw={700} size="lg">
        Skills
      </Text>
      <List>
        <List.Item>Experienced: C, C++, Rust, WebAssembly</List.Item>
        <List.Item>
          Intermediate: React, TypeScript, JavaScript, Python
        </List.Item>
        <List.Item>Tools: Git, GCP, Firebase, Linux, Docker</List.Item>
      </List>
    </div>
  );
}
