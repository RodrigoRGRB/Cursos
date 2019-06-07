class DentistaView{
    constructor(elemento){
this._elemento = elemento;
    }

    _template(model){

    }

    _update(model){
        this._elemento.innerHTML = this._template(model);
    }
}