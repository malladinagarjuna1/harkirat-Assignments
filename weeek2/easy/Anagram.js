
// function isAnagram(str1, str2){
//          str1 = str1.toLowerCase().replace(/\s/g,'');
//          str2 = str2.toLowerCase().replace(/\s/g,'');

//          let sortedstr1 = str1.split('').sort().join('');
//          let sortedstr2 = str2.split('').sort().join('');
//          return sortedstr1 === sortedstr2;
// }

function isAnagram(str1, str2){
    str1 = str1.toLowerCase().replace(/\s/g,'');
     str2 = str2.toLowerCase().replace(/\s/g,'');
    
    let sortedstr1= str1.split('').sort().join('');
     let sortedstr2= str2.split('').sort().join('');
    return sortedstr1=== sortedstr2;
}
console.log(isAnagram("Spar","rasp"));  

