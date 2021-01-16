
const fishCollection = [
    {
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Clown_fish.jpg/1280px-Clown_fish.jpg",
        type : "Clown Fish",
        name : "Nemo",
        length : "6 inches",
        food : "Popcorn",
        locationHarvested : "Atlantic Ocean"
    
    },
    {
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSi7xkYbmd7JXWp8I7vCmKMPASRkLv5Jl7pUw&usqp=CAU",
        type : "Goldfish",
        name : "Shark Attack",
        length : "3 inches",
        food : "Grilled Cheese",
        locationHarvested : "Neighbor's House"
    },
    {
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQb-SR8jNCQU7uTwedzg0K7cF4sqSXZ2-UYbQ&usqp=CAU",
        type : "Beta Fish",
        name : "Bobby",
        length : "4 inches",
        food : "Pretzels",
        locationHarvested : "Far Away Exotic Island"
    },
    {
        image: "https://wp.usatodaysports.com/wp-content/uploads/sites/90/2020/06/delaney3.jpg?w=1000",
        type : "Great White Shark",
        name : "Martin",
        length : "64 inches",
        food : "Anything",
        locationHarvested : "Atlantic Ocean"
    },
    {
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTv8JILLRdl4K0fczjQzZbMiRIlxaQYEs7Pmg&usqp=CAU",
        type : "Jelly Fish",
        name : "Sally",
        length : "23 inches",
        food : "other fish",
        locationHarvested : "Pacific Ocean"
    },
    {
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0UBGZgpuaKaoiXd1-BDWdnenalu4ZFWC4KQ&usqp=CAU",
        type : "Catfish",
        name : "Meow",
        length : "19 inches",
        food : "other fish",
        locationHarvested : "Mississippi River"
    },
    {
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBYXoVv_uS7I21OBxORX9Mdf3I6MQJsvA0cQ&usqp=CAU",
        type : "Discus Fish",
        name : "Rainbow",
        length : "3 inches",
        food : "dirt",
        locationHarvested : "Hawaii"
    },

]

export const useFish = () => {
    return fishCollection.slice()
}
