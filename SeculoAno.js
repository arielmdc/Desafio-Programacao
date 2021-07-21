function SeculoAno(ano) {
    if (ano == 1) return 1;
    if (ano < 1) return null;
    return Math.trunc((ano - 1) / 100) + 1;
}
console.log("Ano 1905:",SeculoAno(1905));
console.log("Ano 1700:",SeculoAno(1700));


