import { getGuestList, useGuestList } from "./GuestDataProvider.js"
import { GuestCard } from "./GuestCard.js"
import { GuestForm } from "./GuestForm.js"

const htmlContentTarget = document.querySelector(".guestListContainer")

export const GuestList = () => {
    getGuestList()
    .then(() => {
        let guestListArray = useGuestList();
        let guestListHTML = "";

        guestListArray.forEach((singleGuestObject) => {
            guestListHTML += GuestCard(singleGuestObject)
        })

        htmlContentTarget.innerHTML = `
            <div class="guestListForm">
                ${GuestForm()}
            </div>
            <h3>Guests Attending:</h3>
            <div class="guestListArea">
                ${guestListHTML}
            </div
        `
    })
}