export function Fish(fishOject){
    return  `
    <section class="fish-card">
        <img  
            class="fish-card_image" src="https://static.hollywoodreporter.com/sites/default/files/2014/12/dory_a_l.jpg" alt="Fish"/>
        <div class ="fish-card_text">
            <p>${fishOject.type}</p>
            <p>${fishOject.name}</p>
            <p>${fishOject.length}</p>
            <p>${fishOject.food}</p>
            <p>${fishOject.locationHarvested}</p>
        </div>
    </section>`
}
