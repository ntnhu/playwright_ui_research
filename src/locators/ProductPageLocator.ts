export class ProductPageLocator {
    searchTbx: string;
    productsLbl: string

    constructor() {
        this.searchTbx = '//input[@name ="search"]';
        this.productsLbl = '//div[contains(@class,"order-last")]//h3[contains(text(),"Acme Circles T-Shirt")]';

    }
}