export function Tips(tipsObject){
    return `
    <section class="tips">
        <h3>${tipsObject.tipSubject}<h3>
        <ul>
            <li>${tipsObject.tipInfo1}</li>
            <li>${tipsObject.tipInfo2}</li>
        </ul>
    </section>
            `
}



//this is another way to do it, if i had my tips in an array instead of having two tips, you'd have to have them looping through to make a <li>
// export function Tip (currentTipInLoop) {

//     let emptyString = ""

//     for (let i=0, i<currentTipInLoop.tips.length; i++){
//         emptyString += `<li>${currentTipInLoop}</li>`
//     }
//     console.log(emptyString)

//     return `
//     <h3>${currentTipInLoop.heading}</h3>
//     ${emptyString}`
// }