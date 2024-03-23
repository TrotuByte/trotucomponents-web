import { CustomWebComponent } from '../components.utils';
export type TrotuContainerProps = {
    rounded: boolean
};

export class TrotuContainer extends CustomWebComponent{
    static observedAttributes: string[] = ['rounded'];
    connectedCallback(): void {
        const shadowDom = this.attachShadow({mode: "closed"});
        const style = document.createElement('style');
        style.textContent = `
            :host {
                display: block;
                position: relative;
                background-color: var(--container-background-color);
                width: min-content;
            }
            :host([rounded]) {
                clip-path: polygon(
                    0% calc(0% + var(--container-corner-size)),
                    calc(0% + var(--container-corner-size)) calc(0% + var(--container-corner-size)), 
                    calc(0% + var(--container-corner-size)) 0%,
                    calc(100% - var(--container-corner-size)) 0%,
                    calc(100% - var(--container-corner-size)) calc(0% + var(--container-corner-size)),
                    100% calc(0% + var(--container-corner-size)),
                    100% calc(100% - var(--container-corner-size)),
                    calc(100% - var(--container-corner-size)) calc(100% - var(--container-corner-size)),
                    calc(100% - var(--container-corner-size)) 100%,
                    calc(0% + var(--container-corner-size)) 100%,
                    calc(0% + var(--container-corner-size)) calc(100% - var(--container-corner-size)),
                    0% calc(100% - var(--container-corner-size))
                );
                padding: var(--container-corner-size);
            }
        `;
        shadowDom.appendChild(style)
        shadowDom.innerHTML = shadowDom.innerHTML+this.innerHTML;
    }
    
    
}