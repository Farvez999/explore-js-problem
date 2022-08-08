//Use add and multiplication to calculate wood requirements
function woodCalculator(chairQuintity, tableQuintity, bedQuintity) {
    const perChairWood = 3;
    const perTableWood = 5;
    const perBedWood = 10;

    const chairWood = chairQuintity * perChairWood;
    const tableWood = chairQuintity * perTableWood;
    const bedWood = chairQuintity * perBedWood;

    const totalWoodReqied = chairWood + tableWood + bedWood;
    return totalWoodReqied
}

const toalwood = woodCalculator(1, 1, 1)
console.log('Total Wood : ', toalwood)