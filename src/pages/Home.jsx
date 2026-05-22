function Home() {
  return (
    <main>

      {/* Hero Section */}
      <section>
        <h2>Encuentra la herramienta SaaS perfecta</h2>
        <p>Catálogo curado de soluciones empresariales. Deja que la IA te recomiende.</p>
        <input type="text" placeholder="Busca una herramienta o describe tu necesidad..." />
        <button>Buscar</button>
      </section>

      {/* Categorías destacadas */}
      <section>
        <h3>Categorías</h3>
        <ul>
          <li>CRM</li>
          <li>Analytics</li>
          <li>Productividad</li>
          <li>Marketing</li>
          <li>DevOps</li>
          <li>IA</li>
        </ul>
      </section>

    </main>
  );
}

export default Home;
