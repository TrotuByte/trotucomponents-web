import { CustomWebComponent } from "../components.utils";

export type TrotuButtonProps = {};

export class TrotuButton extends CustomWebComponent{
    constructor(){
        super();
        this.setAttribute('role', 'button');
    }
    connectedCallback(): void {
        const shadow = this.attachShadow({mode: 'closed'});
        const style = document.createElement('style');
        style.textContent = `
            :host {
                cursor: pointer;
            }
        `;
        shadow.appendChild(style);
        shadow.innerHTML = shadow.innerHTML + `
            <trotu-container rounded style="user-select: none;font-size: 1.25em; padding-inline: 25px; background-color: var(--button-background-color)">${this.getAttribute('text')}</trotu-container>        
        `;
    }
}