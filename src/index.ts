import MainCard, { MainCardAttributes } from "./components/MainCard/MainCard";
import "./components/export"
import { getText } from "./data/textDataFetch";

class AppContainer extends HTMLElement {

    gatos:any [] = [];

    constructor(){
        super();
        this.attachShadow({mode: "open"})
    }

    async connectedCallback() {
        const text = await getText ();


        console.log(text);
        this.render(text)
    }

    render(text:any) {
        if (this.shadowRoot){
            this.shadowRoot.innerHTML = ``
        };
        
        const css = this.ownerDocument.createElement('style');
        css.textContent = `

        `;


        const section = document.createElement("section");

        const heading = this.ownerDocument.createElement('h1');
        heading.textContent =  'CATS FACTS';
        

        const button = this.ownerDocument.createElement('button');
        button.className = 'button';
        button.textContent = 'Generate kitty';


         


        


        // const image = this.ownerDocument.createElement('img');
        // image.src = this.;

        section.appendChild(heading)
        section.appendChild(button);
        

        this.shadowRoot?.appendChild(section);

        const component = this.ownerDocument.createElement('main-card') as MainCard;
        component.setAttribute(MainCardAttributes.text, text);
        this.shadowRoot?.appendChild(component);
        
    }
}

customElements.define('app-container', AppContainer)