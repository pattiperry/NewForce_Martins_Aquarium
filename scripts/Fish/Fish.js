export function Fish(fishOject){
    return  `
    <section class="fish-card">
        <img  
            class="fish-card_image" src= "${fishOject.image}" alt="Fish"/>
        <div class ="fish-card_text">
            <p>${fishOject.type}</p>
            <p>${fishOject.name}</p>
            <p>${fishOject.length}</p>
            <p>${fishOject.food}</p>
            <p>${fishOject.locationHarvested}</p>
        </div>
    </section>`
}
