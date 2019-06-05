class View{
    constructor(elemento){
        this._element = elemento;
    }

    update(model){
        this._element.innerHTML = this._template(model);
    }
}