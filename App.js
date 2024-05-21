import React from 'react';

const styles = `
body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
    background-color: #f4f4f4;
}

header {
    background-color: #4CAF50;
    color: white;
    padding: 15px 0;
    text-align: center;
}

nav ul {
    list-style: none;
    padding: 0;
}

nav ul li {
    display: inline;
    margin: 0 10px;
}

nav ul li a {
    color: white;
    text-decoration: none;
}

main {
    padding: 20px;
}

h1, h2 {
    color: #333;
}

section {
    background-color: white;
    padding: 20px;
    margin: 20px 0;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}
`;

function App() {
    return (
        <div>
            <style>{styles}</style>
            <header>
                <h1>SIPAT eBook</h1>
                <nav>
                    <ul>
                        <li><a href="/">Início</a></li>
                        <li><a href="/capitulo1">Capítulo 1</a></li>
                        <li><a href="/capitulo2">Capítulo 2</a></li>
                        <li><a href="/capitulo3">Capítulo 3</a></li>
                    </ul>
                </nav>
            </header>
            <main>
                <section>
                    <h2>Bem-vindo ao eBook SIPAT</h2>
                    <p>Este eBook foi criado para promover a conscientização sobre a importância da segurança no ambiente de trabalho durante a Semana Interna de Prevenção de Acidentes no Trabalho (SIPAT).</p>
                    <p>Explore os capítulos abaixo para aprender mais sobre como prevenir acidentes e garantir um ambiente de trabalho seguro para todos.</p>
                    <ul>
                        <li><a href="/capitulo1">Capítulo 1: Introdução à SIPAT</a></li>
                        <li><a href="/capitulo2">Capítulo 2: Medidas de Prevenção</a></li>
                        <li><a href="/capitulo3">Capítulo 3: Cultura de Segurança</a></li>
                    </ul>
                </section>
            </main>
            <footer>
                <p>&copy; 2024 SIPAT. Todos os direitos reservados.</p>
            </footer>
        </div>
    );
}

export default App;
