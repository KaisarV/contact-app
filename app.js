const fs = require("fs");
const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout

});

rl.question('Masukkan Nama anda : ', (nama) => {
    rl.question('Masukkan Nomor HP anda : ', (noHp) => {
        const contact = { nama, noHp }
        const fileBuffer = fs.readFileSync('data/contacts.json', 'utf-8')
        const contacts = JSON.parse(fileBuffer)

        contacts.push(contact)

        fs.writeFile('data/contacts.json', JSON.stringify(contacts), (err) => {
            if (err != null) {
                console.log(err)
            } else {
                console.log('Success Inserted')
            }
        })
        rl.close()
    })
})