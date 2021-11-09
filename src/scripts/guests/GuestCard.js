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

const placeSetting = (boolean) => {
    if (boolean == true) {
        return `Right`
    }
    else {
        if (boolean == false)
        return `Left`
    }
}

// Or in line 12 could be the code below and then it wouldn't need the function placeSetting: 
    // ${guest.rightHanded ? `<p><strong>Place setting:</strong> Right</p>` : `<p><strong>Place setting:</strong> Left</p>}