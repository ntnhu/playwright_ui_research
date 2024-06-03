export class HomePageLocator {
    searchTbx: string;
    productsLbl: string

    constructor() {
        //home page
        this.searchTbx = '//input[@name ="search"]';
        this.productsLbl = '//div[contains(@class,"order-last")]//h3[contains(text(),"Acme Circles T-Shirt")]';

    }
}