
const fishCollection = [
    {
        type : "Clown Fish",
        name : "Nemo",
        length : "6 inches",
        food : "Popcorn",
        locationHarvested : "The Big Ocean"
    },
    {
        type : "Shark",
        name : "George",
        length : "10 inches",
        food : "Grilled Cheese",
        locationHarvested : "Salty Ocean"
    },
    {
        type : "Beta Fish",
        name : "George",
        length : "2 inches",
        food : "Pretzels",
        locationHarvested : "Galapagos Island"
    },
    {
        type : "Great White Shark",
        name : "Martin",
        length : "200 inches",
        food : "Anything",
        locationHarvested : "Atlantic Ocean"
    },
    {
        type : "Jelly Fish",
        name : "Sally",
        length : "15 inches",
        food : "other fish",
        locationHarvested : "Pacific Ocean"
    },
    {
        type : "Sun Fish",
        name : "Poppy",
        length : "20 inches",
        food : "seeds",
        locationHarvested : "Ohio River"
    },
    {
        type : "Beta",
        name : "Bart",
        length : "3 inches",
        food : "donuts",
        locationHarvested : "Petsmart"
    },

]

export const useFish = () => {
    return fishCollection.slice()
}
