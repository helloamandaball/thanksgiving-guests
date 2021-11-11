import { deleteGuest } from "./GuestDataProvider.js"
import { GuestList } from "./GuestList.js"
import { GuestEditForm } from "./GuestEditForm.js"

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
                        <div class="guestPastBtns">
                            <button type="submit" id="editGuest--${guest.id}" class="guestEditBtn">Edit</button>
                            <button type="submit" id="deleteGuest--${guest.id}" class="guestDeleteBtn">Delete</button>
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


const eventHub = document.querySelector("body")

//Delete Guest 
eventHub.addEventListener("click", (eventObject) => {
    if (eventObject.target.id.startsWith("deleteGuest")) {
        const idToDelete = eventObject.target.id.split("--")[1]
        deleteGuest(idToDelete)
        .then(GuestList)
    }
});

//Edit Guest
eventHub.addEventListener("click", (eventObject) => {
    if (eventObject.target.id.startsWith("editGuest")) {
        const guestId = +eventObject.target.id.split("--")[1]
        GuestEditForm(guestId)
    }
})