import { AppShell } from "../../../packages/ui/src";

export default function App() {
  return (
    <AppShell title="Souq MaZellige">
      <section style={{padding:"40px 0"}}>
        <h1>Moroccan Artisan Marketplace</h1>
        <p>
          Discover authentic Moroccan products directly from artisans and
          local producers.
        </p>
      </section>

      <section style={{marginTop:40}}>
        <h2>Popular Categories</h2>
        <ul>
          <li>Zellige Tiles</li>
          <li>Handmade Carpets</li>
          <li>Argan Oil</li>
          <li>Traditional Pottery</li>
          <li>Leather Goods</li>
        </ul>
      </section>

      <section style={{marginTop:40}}>
        <h2>Featured Products</h2>

        <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(200px,1fr))",gap:20}}>

          <div style={{border:"1px solid #ddd",padding:16}}>
            <h3>Zellige Tile Set</h3>
            <p>Handmade Moroccan zellige tiles.</p>
            <strong>120 MAD</strong>
          </div>

          <div style={{border:"1px solid #ddd",padding:16}}>
            <h3>Argan Oil 250ml</h3>
            <p>Pure organic argan oil from cooperatives.</p>
            <strong>180 MAD</strong>
          </div>

          <div style={{border:"1px solid #ddd",padding:16}}>
            <h3>Berber Carpet</h3>
            <p>Traditional handwoven wool carpet.</p>
            <strong>1500 MAD</strong>
          </div>

        </div>
      </section>

    </AppShell>
  );
}
