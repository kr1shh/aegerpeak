class CustomNavbar extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: 'open' });
    }
  
    connectedCallback() {
      this.render();
    }
  
    toggleMenu() {
      const dropdown = this.shadowRoot.querySelector('.dropdown');
      dropdown.classList.toggle('active');
    }
  
    render() {
      this.shadowRoot.innerHTML = `

        <style>
        .navbar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          background-color: #333;
          padding: 10px;
        }

        .navbar .logo {
          height: 50px;
        }

        .nav-links a {
          color: white;
          text-decoration: none;
          margin: 0 15px;
        }

        .hamburger {
          display: none;
          color: white;
          cursor: pointer;
        }

        .dropdown {
          display: none;
          flex-direction: column;
          background-color: #333;
          position: absolute;
          width: 100%;
          top: 60px;
          left: 0;
        }

        .dropdown a {
          color: white;
          padding: 10px;
          text-decoration: none;
          border-bottom: 1px solid #444;
        }

        .dropdown a:hover {
          background-color: #555;
        }

        .dropdown.active {
          display: flex;
        }

        /* Responsive */
        @media (max-width: 768px) {
          .nav-links {
            display: none;
          }

          .hamburger {
            display: block;
          }
        }
        </style>

        <nav class="navbar">
          <img src="./assets/Logo2.png" alt="Aigerpeak Logo" class="logo">
          <div class="nav-links">
            <a href="index.html">Home</a>
            <a href="about.html">About</a>
            <a href="peic.html">PEIC</a>
            <a href="./about_owner.html">About Owner</a>
            <a href="./servies.html">Our Services</a>
            <a href="contact.html">Contact Us</a>
          </div>
          <a class="hamburger" id="toggle-menu"><i class="fa fa-bars"></i></a>
        </nav>
        <div class="dropdown">
          <a href="index.html">Home</a>
          <a href="about.html">About</a>
          <a href="peic.html">PEIC</a>
          <a href="./about_owner.html">About Owner</a>
          <a href="./servies.html">Our Services</a>
          <a href="contact.html">Contact Us</a>
        </div>
      `;
  
      this.shadowRoot.querySelector('#toggle-menu').addEventListener('click', () => this.toggleMenu());
    }
  }
  
  customElements.define('custom-navbar', CustomNavbar);
  