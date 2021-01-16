const tipsCollection = [
{
    tipSubject: "Salinity",
    tipInfo1: "Keep it salty",
    tipInfo2: "Just dump in some salt"
},
{   tipSubject: "Temperature",
    tipInfo1: "Very hot",
    tipInfo2: "Basically boiling"
}
]

export const useTips = () => {
    return tipsCollection.slice()
}
