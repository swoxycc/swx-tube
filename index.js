const youtubedl = require('youtube-dl-exec');
const readlineSync = require('readline-sync');
const { execSync } = require('child_process');


function rgb(r, g, b) {
    return `\x1b[38;2;${r};${g};${b}m`;
}


const cyan = rgb(0, 255, 255);
const yellow = rgb(255, 255, 0); 
const green = rgb(0, 255, 0); 
const red = rgb(255, 0, 0);


console.log(`${cyan}                                           ╔═╗╦ ╦═╗ ╦  ╔╦╗╦ ╦╔╗ ╔═╗`);
console.log(`${cyan}                                           ╚═╗║║║╔╩╦╝   ║ ║ ║╠╩╗║╣ `);
console.log(`${cyan}                                           ╚═╝╚╩╝╩ ╚═   ╩ ╚═╝╚═╝╚═╝`);


const url = readlineSync.question(`${yellow}                                        YouTube video URL'sini girin: `);


execSync('cls', {stdio: 'inherit'});

console.log(`${cyan}                                           ╔═╗╦ ╦═╗ ╦  ╔╦╗╦ ╦╔╗ ╔═╗`);
console.log(`${cyan}                                           ╚═╗║║║╔╩╦╝   ║ ║ ║╠╩╗║╣ `);
console.log(`${cyan}                                           ╚═╝╚╩╝╩ ╚═   ╩ ╚═╝╚═╝╚═╝`);


const outputPath = readlineSync.question(`${yellow}                                        Kaydedilecek dosya adini girin: `);


youtubedl(url, {
    output: outputPath,
    format: 'best'
}).then(output => {
    console.log(`${green}                   İndirme tamamlandı!`);
}).catch(error => {
    console.error(`${red}Bir hata oluştu: ${error.message}`);
});
