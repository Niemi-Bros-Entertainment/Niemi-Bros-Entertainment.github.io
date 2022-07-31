class Footer extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
        <style>
            @import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css");

            footer {
                min-height: 60px;
                padding: 0 10px;
                list-style: none;
                align-items: center;
                justify-content: center;
                background-color: burlywood;
            }
            
            ul li {
                list-style: none;
                display: inline;
            }
            
            a {
                margin: 0 15px;
                color: inherit;
                <!-- border-radius: 50%; -->
                background-color: burlywood;
            }
            
            a:hover {
                color: salmon;
            }
            
            .social-row {
                display: flex-column;
                align-items: center;
                justify-content: center;
                font-size: 20px;
            }
            
            .social-row li a {
                margin: 0 15px;
            }
        </style>
        <footer>
            <!--
            <br>
            <hr>
            <h2>Want to help support the devs?</h2>
            <script type="text/javascript" src="https://cdnjs.buymeacoffee.com/1.0.0/button.prod.min.js" data-name="bmc-button" data-slug="niemibros" data-color="#FFDD00" data-emoji=""  data-font="Comic" data-text="Buy us some coffee" data-outline-color="#000000" data-font-color="#000000" data-coffee-color="#ffffff" ></script>
            <br>
            <hr>
            -->

            <hr>
            <div>
                <br>
                <ul class="social-row">
                    <li><a href="https://niemi-bros.itch.io"><i class="fab fa-itch-io"></i></a></li>
                    <li><a href="https://bio.link/niemibros"><i class="far fa-link"></i></a></li>
                    <li><a href="https://github.com/Niemi-Bros-Entertainment"><i class="fab fa-github"></i></a></li>
                </ul>
            </div>
            <div>
                <br>
                <p>Copyright © 2024 Niemi Bros Entertainment LLC. All Rights Reserved.</p>
                <br>
            </div>
        </footer>
      `;
    }
  }
  
  customElements.define('footer-component', Footer);