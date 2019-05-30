class DateHelper{

    constructor(){

        throw new Error("Não é possivel instanciar esta classe");

    }

    static textoParaData(texto){
        return new Date(new Date(...texto.split('-').map((item, indice) => item - indice % 2)));
    }

    static dataParaTexto(data){
        if(!/\d{4}-\d{2}-\d{2}/.test(data)) throw new Error('Deve estar no formato aaa-mm-dd');
        return `${data.getDate()}/${data.getMonth() + 1}/${data.getFullYear()}`;
    }

}