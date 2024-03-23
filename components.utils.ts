export abstract class CustomWebComponent extends HTMLElement{
    static observedAttributes: string[];

    /**
     * Called when the component has been added to the DOM
     */
    connectedCallback?(): void;
    /**
     * Called when the component has been removed from the DOM
     */
    disconnectedCallback?(): void;
    /**
     * Called each time the element is moved to a new document
     */
    adoptedCallback?(): void;
    /**
     * Called when a attribute is changed, added, removed, or replaced.
     * @param name 
     * @param oldValue 
     * @param newValue 
     */
    attributeChangedCallback?(name: string, oldValue: string, newValue: string): void;
}