const generateHeader = () => {
  $('body').prepend(`
    <header>
      <h1>LRY9XW - Beadandó</h1>
      <nav>
        <ul>
          <li><a href="index.html">Kezdőlap</a></li>
          <li><a href="articles.html">Sorozatok</a></li>
          <li><a href="contact.html">Kapcsolat</a></li>
        </ul>
      </nav>
    </header>
    <section class="hero"></section>
    `);
}

const generateFooter = () => {
  $('body').append(`
    <footer>
      <a href="https://github.com/adombence">
          <img src="assets/github-mark-white.png" alt="GitHub Logo">
        </a>
    </footer>
  `);
}

$(document).ready(function () {
  generateHeader();
  generateFooter();
});