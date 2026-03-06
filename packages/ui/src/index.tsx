import type { ReactNode } from "react";
export function AppShell({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div style={{ fontFamily: "Inter, system-ui, sans-serif", maxWidth: 1200, margin: "0 auto", padding: 24 }}>
      <header style={{ marginBottom: 24 }}><h1>{title}</h1></header>
      <main>{children}</main>
    </div>
  );
}
