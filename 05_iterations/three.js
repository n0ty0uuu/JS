// FOR of loop

const arr = [1,2,3,4,5,6]

// for (const element of object) { 
// element jo loop kai element hai vo koi bhi name de skte isko 
// object mai array kaa name arr 
// then console.log(element) krke seedha print kra lo
// }

for (const i of arr) {
    // console.log(i);
}

const Myarr = ['Aditya','Jayant','Sakshi','Ankita']

for(const content of Myarr) {
    // console.log(content);
    
}

const Myname = "Aditya Prakash"

for(const name of Myname){
    if(name == " ") continue;
    console.log(`Each char is : ${name}`);
    
}

const map = new Map()
// is like an object but jis order mai value dalange waise mai he rhage
// duplicate value ni hote isme

map.set('IN',"INDIA")
map.set('BR',"BRAZIL")
map.set('CH',"CHINA")
map.set('FR',"FRANCE")
map.set('IN',"INDIA")//-> doesn't work

// console.log(map);

for(const cont of map){ // aise poora array de dega ye map ka 
    // console.log(cont);
    
}

for(const [contt , value] of map){// aise key and uske value ko alag alag print kr skte ai
    // console.log(contt ,'-' ,value);
    
}