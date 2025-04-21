// FOR IN loop

const myObject = {
    js : 'javascript',
    cpp : 'c++',
    rb : 'ruby',
    swift : 'swift by apple'
}

for (const key in myObject) { // AIse sari keys aa jyange 
    // console.log(key);
    
}
for(const key in myObject){// sare valyes mil jyange keys ke 
    // console.log(myObject[key]);
    
}

for(const key in myObject){
    console.log(`${key} shortcut is for ${myObject[key]}`);
    
}
