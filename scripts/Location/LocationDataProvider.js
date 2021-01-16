
const locationCollection = [
    {
        locationImage: "https://www.telegraph.co.uk/content/dam/Travel/2017/june/madagascar-miavana.jpg",
        locationName: "Madagascar"
    },
    {
        locationImage: "https://thumbor.forbes.com/thumbor/fit-in/1200x0/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5e086a4925ab5d0007cf74f9%2F0x0.jpg%3FcropX1%3D0%26cropX2%3D1869%26cropY1%3D94%26cropY2%3D1146",
        locationName: "Hawaii"
    },
    {
        locationImage: "https://img.apmcdn.org/c5582971ce504ee4e32af58f06747b2e96d7b0a8/widescreen/daa324-20110906-northwoods-habitat.jpg",
        locationName: "Mississippi River"
    },
    {
        locationImage: "https://travel.home.sndimg.com/content/dam/images/travel/fullset/2014/07/15/91/visiting-the-galapagos-when-to-go.rend.hgtvcom.1280.720.suffix/1491584422518.jpeg",
        locationName: "Galapagos Islands"
    },
    {
        locationImage: "https://meusroteiros.com/wp-content/uploads/2016/11/Ilha-da-Madeira-Island-Portugal.jpg",
        locationName: "Madeira Island"
    }
]

export const useLocation = () => {
    return locationCollection.slice()
}





