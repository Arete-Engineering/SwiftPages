export default function Footer() {
    return (
      <div style={{ minHeight: '25vh', display: 'flex', flexDirection: 'column' }}>
        <div class="container" style={{ flex: '1' }}>
        </div>
        <footer class="py-3 my-4">
          <ul class="nav justify-content-center border-bottom pb-3 mb-3">
            <li class="nav-item">
              <a href="/home" class="nav-link px-2 text-muted">
                Home
              </a>
            </li>
            <li class="nav-item">
              <a
                href="/pages/0sL47DcEzbiytPhIBsHU"
                class="nav-link px-2 text-muted"
              >
                Socials
              </a>
            </li>
            <li class="nav-item">
              <a href="#" class="nav-link px-2 text-muted">
                FAQs
              </a>
            </li>
            <li class="nav-item">
              <a
                href="/pages/UG10wTSFOKXcRqaWfLz8"
                class="nav-link px-2 text-muted"
              >
                About
              </a>
            </li>
          </ul>
          <p class="text-center text-muted">Eunoia Engineering © 2024</p>
        </footer>
      </div>
    );
  }
  