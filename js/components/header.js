class Header extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
        <header>
            <!-- Simpler header, using a filtered gallery in the portfolio/home page -->
            <div class="header">    
            <header>
                <div class="hero">
                    <img src="https://img.itch.zone/aW1hZ2UyL3VzZXIvNTI5NDA1LzE0Njg5MTEucG5n/original/ddrqj1.png" width="100%"/>
                </div>
                <div class="header-right">
                    <a href="index.html">Home</a>
                    <a href="about.html">About</a>
                </div>
            </div>
            
            <hr>
            <br>
        </header>`
    }
}

customElements.define("header-component", Header)