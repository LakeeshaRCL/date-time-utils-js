
type dateTimeFormat = "dd-mm-yyyy" | "dd/mm/yyyy";

function getNumberInTwoDigits(number:number):string{
    return  number < 10 && number >0 ? "0"+number.toString() : number.toString()
}

function joinValuesWithSeparator(values:string[],separator:string):string{
    return values.join(separator)
}


export default function formatDate(date:Date,format:dateTimeFormat){

    let outputDate :string = getNumberInTwoDigits(date.getDate())
    let outputMonth :string = getNumberInTwoDigits(date.getMonth()+1)
    let outputYear :string = date.getFullYear().toString()

    let formattedDate : string;

    if(format === "dd-mm-yyyy"){
        formattedDate = joinValuesWithSeparator([outputDate,outputMonth,outputYear],"-")
        console.log(formattedDate)
    }
    else if (format === "dd/mm/yyyy"){
        formattedDate = joinValuesWithSeparator([outputDate,outputMonth,outputYear],"/")
        console.log(formattedDate)
    }



}

