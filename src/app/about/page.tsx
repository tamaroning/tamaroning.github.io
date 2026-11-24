"use client";

import { List, Space, Text } from "@mantine/core";
import Image from "next/image";
import Link from "next/link";

const PGP_KEY = `-----BEGIN PGP PUBLIC KEY BLOCK-----

mDMEawR6uxYJKwYBBAHaRw8BAQdAKf1IyJifJb1MyZuxJWl858nTGtz+1LPSFrrI
3+Y4syi0JFJhaWtpIFRhbXVyYSA8dGFtYXJvbjEyMDNAZ21haWwuY29tPoiWBBMW
CAA+FiEEPNrL2MNLyslZPzTFX7CQeuQmJqcFAmsEersCGwMFCQPCZwAFCwkIBwIG
FQoJCAsCBBYCAwECHgECF4AACgkQX7CQeuQmJqdg4wD/U55vqJJIXDs3AAQPzJYN
fDvbxXLbt4rrrEgI8itHJ4wA/jwVAwiUzTlMLV+qsQErCt14hup50MS3f81ld0gU
2pgHuDgEawR6vxIKKwYBBAGXVQEFAQEHQJqpHP1ITOWYvcRgINNUXvLh4pu41rqh
G4HdlyZ/bDc9AwEIB4h+BBgWCAAmFiEEPNrL2MNLyslZPzTFX7CQeuQmJqcFAmsE
er8CGwwFCQPCZwAACgkQX7CQeuQmJqd0fgD/UL5lmB2HN+3dQQk2WtD809kd+cUz
lBuZelaWg1gPzVkBAIVGSUgbudkEoQh9oCzi7x+7ROgq7PICvCvJOluNQG4O
=uQSn
-----END PGP PUBLIC KEY BLOCK-----`;

export default function About() {
  return (
    <div style={{ maxWidth: 560, margin: 20 }}>
      <div style={{ display: "flex", alignItems: "flex-start", gap: 24 }}>
        <Image
          src="/assets/icon.jpg"
          alt="icon"
          width={150}
          height={150}
          style={{ borderRadius: "50%", flexShrink: 0 }}
        />
        <div>
          <Text fw={700} size="lg">
            Raiki Tamura
          </Text>
          <Space h="sm" />
          <Text>Master&apos;s student at Kyoto University</Text>
        </div>
      </div>

      <Text>
        I am a master&apos;s student with a focus on compilers, programming
        language runtimes, and static analysis.
      </Text>

      <Space h="md" />

      <Text fw={700} size="lg">
        Education
      </Text>
      <List>
        <List.Item>
          Apr 2025 - Present: M.S. in Kyoto University, Graduate School of
          Informatics, Social Informatics Course.
        </List.Item>
        <List.Item>
          Apr 2021 - Mar 2025: B.E. in Kyoto University, Faculty of Engineering,
          Department of Informatics.
        </List.Item>
      </List>

      <Space h="md" />

      <Text fw={700} size="lg">
        Work Experience
      </Text>
      <List>
        <List.Item>Dec 2023 - Mar 2026: estie, inc (Part-time).</List.Item>
        <List.Item>Aug 2025 - Oct 2025: Woven by Toyota (Intern).</List.Item>
        <List.Item>Aug 2023 - Sep 2023: Sony (Intern).</List.Item>
        <List.Item>Aug 2022 - Sep 2022: NTT R&D (Intern).</List.Item>
      </List>

      <Space h="md" />

      <Text fw={700} size="lg">
        Publications
      </Text>
      <List>
        <List.Item>
          Bringing Together Cross-ISA Checkpoint/Restoration and AOT Compilation
          of WebAssembly Programs, <b>Raiki Tamura</b>, Daisuke Kotani, Kazuyuki Shudo,
          Yasuo Okabe. <br />
          <Link href="https://conf.researchr.org/home/icfp-splash-2025/mplr-2025">
            MPLR 2025
          </Link>{" "}
          .
        </List.Item>
        <List.Item>
          Wanco: WebAssembly AOT Compiler that supports Live Migration,{" "}
          <b>Raiki Tamura</b>. <br />
          <Link href="https://popl25.sigplan.org/track/POPL-2025-student-research-competition">
            POPL2025 Student Research Competition (Undergraduate)
          </Link>{" "}
          2nd Place.
        </List.Item>
        <List.Item>
          wanco: WebAssembly Compiler that supports Live Migration (in
          Japanese). <b>Raiki Tamura</b>, Daisuke Kotani, Naoki Matsumoto, Yasuo Okabe.{" "}
          <br />
          <Link href="https://sigos.ipsj.or.jp/event/comsys2024/">
            IPSJ 36th Computer System Symposium (ComSys 2024)
          </Link>
          . Outstanding Young Researcher Presentation Award.
        </List.Item>
      </List>

      <Space h="md" />

      <Text fw={700} size="lg">
        Presentations
      </Text>
      <List>
        <List.Item>
          2025 AsiaLLVM. Wanco: WebAssembly AOT Compiler That Supports Live
          Migration
          <Link href="https://docs.google.com/presentation/d/1fbAiPh-o_3Xg10fX0Zf-ngISpc_8olzNYTeVDzwqWW8/edit?usp=sharing">
            (slides)
          </Link>
          .
        </List.Item>
        <List.Item>
          FOSDEM 2024. Unicode Support for GCC Rust
          <Link href="https://docs.google.com/presentation/d/1mdxOBGrBCozhx3hY729tWGh33bqqgYO0xddpK5ql0qY/edit?usp=drive_link">
            (slides)
          </Link>
          .
        </List.Item>
      </List>

      <Space h="md" />

      <Text fw={700} size="lg">
        OSS Projects
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
            <Link href="https://github.com/kmc-jp/kamo64">kamo64</Link>
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
        Awards
      </Text>
      <List>
        <List.Item>
          IPSJ Computer Science Research Award for Young Scientists (2025)
        </List.Item>
        <List.Item>Appli Koshien 2018. 1st Place</List.Item>
        <List.Item>Unity Inter-High 2018. Gold Award</List.Item>
      </List>

      <Space h="md" />

      <Text fw={700} size="lg">
        Research Interests
      </Text>
      <List>
        <List.Item>Compilers, Interpreters, Program analyses</List.Item>
        <List.Item>WebAssembly, Proof-of-Work Blockchains</List.Item>
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

      <Space h="md" />

      <Text fw={700} size="lg">
        Others
      </Text>
      <List>
        <List.Item>
          MITOU Program 2025 (IPA Exploratory IT Human Resources Project).
          Creator
        </List.Item>
        <List.Item>
          Kyoto University, Faculty of Engineering, Department of Informatics,
          Operating Systems. TA
        </List.Item>
        <List.Item>
          Kyoto University, Faculty of Engineering, Department of Informatics,
          Computer Architecture. TA
        </List.Item>
        <List.Item>Security Mini-Camp Kumamoto 2024. Tutor</List.Item>
        <List.Item>Google Summer of Code 2023. (Organization: GCC)</List.Item>
        <List.Item>Global Cybersecurity Camp 2023 Singapore. Tutor</List.Item>
        <List.Item>Security Mini-Camp Miyazaki 2023. Tutor</List.Item>
        <List.Item>Security Camp National Convention 2022. Tutor</List.Item>
        <List.Item>
          Security Camp National Convention 2021. Threat Analysis Track.
          Completed
        </List.Item>
        <List.Item>
          The 8th Science Olympiad (Kagaku no Koshien) National Finals.
          Saitama Prefecture Representative
        </List.Item>
        <List.Item>SecHack365. Development-Driven Course. Completed</List.Item>
      </List>

      <Space h="md" />

      <Text fw={700} size="lg">
        PGP Public Key
      </Text>
      <Text size="sm" ff="monospace">
        3CDA CBD8 C34B CAC9 593F 34C5 5FB0 907A E426 26A7
      </Text>
      <pre style={{ fontSize: 12, overflowX: "auto" }}>{PGP_KEY}</pre>

      <Space h="xl" />
      <Text size="sm" c="dimmed">
        Last updated: 2026-11-20
      </Text>
    </div>
  );
}
