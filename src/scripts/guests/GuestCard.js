export const GuestCard = (guest) => {
    return `
        <div id="guestID__${guest.id}" class="guestListCard">
            <ul>
                <li>
                    <div class="guestListEntries">
                        <div class="guestImgContainer"><img src="${guest.imageUrl}" alt="guest image" class="guestImg"></div>
                        <div class="guestListInfo">
                            <p><strong>Name:</strong> ${guest.name}</p>
                            <p><strong>Age:</strong> ${guest.age}</p>
                            <p><strong>Favorite Dish:</strong> ${guest.favoriteDish}</p>
                            <p><strong>Place setting:</strong> ${placeSetting(guest.rightHanded)}</p>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    `
}

// function placeSetting(guestListObject){
//     let htmlRepresentation = ""
//     for (let singleGuestObject in guestListObject){
//         if (guestListObject[singleGuestObject] === true){
//             let htmlString = `${singleGuestObject}`
//             htmlRepresentation += htmlString
//         }
//         // else {
//         //     if (singleGuestObject.rightHanded === false){
//         //         let htmlString = `Left Handed`
//         //         htmlRepresentation += htmlString
//         //     }
//         // }
//     }
//     return htmlRepresentation
// }

const placeSetting = (boolean) => {
    if (boolean == true) {
        return `Right`
    }
    else {
        if (boolean == false)
        return `Left`
    }
}