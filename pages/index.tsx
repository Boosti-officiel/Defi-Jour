import Link from "next/link";

export default function Home() {
  return (
    <main style={{ fontFamily: "system-ui", padding: "40px 24px", maxWidth: 900, margin: "0 auto" }}>
      <header style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 32 }}>
        <div style={{ display: "flex", gap: 12, alignItems: "center", fontWeight: 800, fontSize: 22, color: "#0b1324" }}>
          <span style={{ width: 36, height: 36, borderRadius: 10, background: "linear-gradient(135deg,#FFC300,#FFE36A)", display: "grid", placeItems: "center" }}>🚀</span>
          Défi Jour
        </div>
        <nav style={{ display: "flex", gap: 16 }}>
          <Link href="/defis">Défis</Link>
          <Link href="/admin">Admin</Link>
        </nav>
      </header>

      <h1 style={{ fontSize: 44, lineHeight: 1.05, margin: "0 0 12px" }}>
        5 défis par mois, pendant 36 mois.
      </h1>
      <p style={{ color: "#475569", fontSize: 18, marginBottom: 20 }}>
        Forme • Organisation • Bien-être • Social • Fun — petit effort, gros impact.
      </p>

      <div style={{ display: "flex", gap: 12 }}>
        <a href="/subscribe" style={{ background: "#0077B6", color: "#fff", padding: "12px 16px", borderRadius: 10, fontWeight: 800 }}>
          Je m’abonne – 1,99 €
        </a>
        <Link href="/defis" style={{ background: "#eef6ff", color: "#0077B6", padding: "12px 16px", borderRadius: 10, fontWeight: 800 }}>
          Voir les défis
        </Link>
      </div>
    </main>
  );
}
