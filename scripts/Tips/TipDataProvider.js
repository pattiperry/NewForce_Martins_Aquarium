const tipsCollection = [
{
    tipSubject: "Salinity",
    tipInfo: "Keep it salty",
    tipInfo: "Just dump in some salt"
},
{   tipSubject: "Temperature",
    tipInfo: "Very hot",
    tipInfo: "Basically boiling"
}
]

export const useTips = () => {
    return tipsCollection.slice()
}
