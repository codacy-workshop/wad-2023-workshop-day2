function getSeason(month) {
    if (month >= 1 && month <= 12) {
        const seasons = ["winter", "spring", "summer", "autumn"];
        const seasonIndex = Math.floor((month % 12) / 3);
        console.log("It's " + seasons[seasonIndex] + ".");
    } else {
        console.log("Invalid month number.");
    }
}

getSeason(12);
