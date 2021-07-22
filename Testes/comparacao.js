function pegarDiferenca() {
    let r1 = ['5050 - 1','80 - 5', '15 - 9', '2075 - 15'];
    let r2 = ['5050 - 5','80 - 5', '15 - 9', '2075 - 15'];      
    let r3 = r1.filter( a => !r2.includes( a ) );

    console.log( r3 );

    r3.forEach(element => {
        console.log(element)
    });
}

pegarDiferenca();