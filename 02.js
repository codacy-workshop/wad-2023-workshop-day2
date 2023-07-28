function getSeason(month) {
    const seasonNames = ['winter', 'spring', 'summer', 'autumn']
    const seasons = {
        'winter': [1, 2, 12],
        'spring': [3, 4, 5],
        'summer': [6, 7, 8],
        'autumn': [9, 10, 11]
    }

    let currSeason;
    seasonNames.forEach(seasonName => {
        const monthes = seasons[seasonName];
        if (monthes && monthes.includes(month)) {
            currSeason = seasonName;
            return;
        }
    })

    if (currSeason) {
        console.log(`It's ${currSeason}.`);
    } else {
        console.log("Invalid month number.");
    }
}

const x = 5
getSeason(x);
