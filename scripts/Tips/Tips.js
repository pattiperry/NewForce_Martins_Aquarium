export function Tips(tipsObject){
    return `
    <section class="tips">
        <h3>${tipsObject.tipSubject}<h3>
        <ul>
            <li>${tipsObject.tipInfo}</li>
            <li>${tipsObject.tipInfo}</li>
        </ul>
    </section>
            `
}



