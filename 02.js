function getSeason(month) {
    const seasons = {
        'winter': [1, 2, 12],
        'spring': [3, 4, 5],
        'summer': [6, 7, 8],
        'autumn': [9, 10, 11]
    }

    let currSeason;
    for (const season in seasons) {
        const monthes = seasons[season]
        if (monthes.includes(month)) {
            currSeason = season;
            break;
        }
    }

    if (currSeason) {
        console.log(`It's ${currSeason}.`);
    } else {
        console.log("Invalid month number.");
    }
}

x = 20
getSeason(x);
