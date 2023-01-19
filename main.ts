// import PromptSync from "prompt-sync";
// const prompt = PromptSync()

// !                Mavzu
// const names: string[] =['Aslbek', 'Aisha', ' Dilshod', 'Umdbek', 'Ilyosbek', 'Diyorbek', ' Shokirjon', ' Akmal', 'Sanjabek', 'Qudratbek']
// for (let i=0 ; i<names.length; i++){
//     let item:string = names[i]
//     if (item.endsWith('bek')){
//         console.log(item);
//         break
//     }
// }

// const item = names.find(item => item.length > 7 && item.length < 10)
// const index1 = names.indexOf('Aisha')
// const index2 = names.findIndex(item => item.length > 7 && item.length < 10)


// console.log(item);
// console.log(index1);
// console.log(index2);


// !                 Filterlash

// ?                 1-usul
// const names: string[] = ['Aslbek', 'Aisha', ' Dilshod', 'Umdbek', 'Ilyosbek', 'Diyorbek', ' Shokirjon', ' Akmal', 'Sanjabek', 'Qudratbek']
// let newNames:string []=[]
// for(let i=0; i<names.length; i++){
//     let item: string = names[i]
//     if(item.length > 7 && item.length< 9){
//         newNames.push(item)
//     }
// }
// console.log(newNames);

// ?                 2-usul
// let newNames2:string[]=names.filter(item => item.length > 7 && item.length < 9)
// console.log(newNames2);


// !                    Dars bo'yicha masalalar

// ?                    1-masala
// const names: string[] = ['Aslbek', 'Aisha', ' Dilshod', 'Umdbek', 'Ilyosbek', 'Diyorbek', ' Shokirjon', ' Akmal', 'Sanjarbek', 'Qudrat']
// let item = names.findIndex(item => item [item.length -2 ]== 'a'||item [item.length -2 ]== 'k'||item [item.length -2 ]== 'c' );
// console.log(item);


// ?                    2-masala
// let num:number []= [1,2,3,4,5,6,7,8,9,10]
// let item = num.find(item => item >5 && item <10)
// console.log(item);


// ?                    3-masala
// let num:number []= [1,2,3,4,5,6,7,8,9,10]
// let num2: number []=num .filter(item => item%2 == 1)
// let num3: number []=num .filter(item => item%2 == 0)
// console.log(num2);
// console.log(num3);

// ?                    4-masala
// let num:number []= [6,7,8,9,10]
// let num1:number []= [1,2,3,4,6,7,8]
// let index =num.filter((item) =>   num1.includes(item))
// console.log(index);

// ?                    5-masala
// let num: number[] = [6, 7, 8, 9, 10]
// let num1: number[] = [1, 2, 3, 4, 6, 7]
// let newArr :number [] = []
// let a: number[] = num.filter(item => item % 2 == 1)
// console.log(a);
// let b: number[] = num1.filter(item => item % 2 == 0)
// console.log(b);

// newArr = b.concat(a)
// console.log(newArr);
 
// ?                    6-masala
const names: string[] = ['Asl', 'Aisha', ' Dilshod', 'Umid', 'Ilyos', 'Diyor', ' Shokir', ' Akmal', 'Sanjar', 'Qudrat']
