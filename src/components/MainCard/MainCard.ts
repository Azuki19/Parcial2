import styles from './MainCard.css'

export enum MainCardAttributes {
    "text"="text",
    "image"="image",
}

class MainCard extends HTMLElement {
    text?: string;
    image?: string;

    constructor(){
        super();
        this.attachShadow({mode: "open"})
    }

    connectedCallback() {
        this.render();
    }


    static get observedAttributes() {
        const Attrs : Record <MainCardAttributes, null> = {
            text: null,
            image: null,

        }
        return Object.keys(Attrs)
    }


    attributeChangedCallback (propName: MainCardAttributes, oldValue: string | undefined, newValue: string | undefined ) {
        switch (propName){

            default:
                this[propName] = newValue ;
                break;

                
        } this.render();
    }

    render() {
        if (this.shadowRoot) {
            this.shadowRoot.innerHTML = ` 
            <p>${this.text}</p> `
        }

        // const catimage = this.ownerDocument.createElement('img');
        // catimage.src = this.image || 'img';
        // catimage.className = 'catImage';

        // const phrase = this.ownerDocument.createElement('p');
        // phrase.className = 'phrase';

        const Css = this.ownerDocument.createElement('style');
        Css.innerHTML = styles;
        this.shadowRoot?.appendChild(Css)
    }

};

customElements.define('main-card', MainCard);
export default MainCard