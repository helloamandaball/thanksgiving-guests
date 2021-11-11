import { useGuestList, updateGuest } from "./GuestDataProvider.js"
import { GuestList } from "./GuestList.js";


const contentTarget = document.querySelector(".guestListContainer")

export const GuestEditForm = (guestId) => {
    const allGuests = useGuestList();

    const guestWeWantToEdit = allGuests.find(singleGuest => singleGuest.id === guestId)
    contentTarget.innerHTML = `
        <div class="guestEditForm">
            <h2>Edit Guest</h2>
            <div class="guestFormContainer">
                <input type="hidden" id="guest-ID" value="${guestWeWantToEdit.id}"/>
                <input type="text" id="name" value="${guestWeWantToEdit.name}">
                <input type="number" id="age" value="${guestWeWantToEdit.age}"> 
                <input type="text" id="favoriteDish" value="${guestWeWantToEdit.favoriteDish}"> 
                <div>
                    <p><strong>Place setting:</strong> &nbsp;
                    <input type="checkbox" id="guestRH" name="guestRH" ${guestWeWantToEdit.rightHanded ? "checked" : "" }><label for="guestRH">Right Handed</label></p>
                </div>
                <div class ="guestImageUpload>
                    <label for="imageUrl"><strong>Update Photo URL:</strong>&nbsp;&nbsp;</label> <input type="url" id="imageUrl" name="imageUrl" value="${guestWeWantToEdit.imageUrl}">
                </div>
                <button id="saveGuestChanges--${guestId}" class="saveGuestBtn">Save Changes</button>
            </div>
        </div>
    `
}

const eventHub = document.querySelector("body")

eventHub.addEventListener("click", (event) => {
    if(event.target.id.startsWith("saveGuestChanges")){
        const editedGuest = {
            id: document.querySelector("#guest-ID").value,
            name: document.querySelector("#name").value,
            age: +document.querySelector("#age").value,
            favoriteDish: document.querySelector("#favoriteDish").value,
            rightHanded: JSON.parse(document.querySelector("#guestRH").value),
            imageUrl: document.querySelector("#imageUrl").value
        }
        console.log(editedGuest)

        updateGuest(editedGuest)
        .then(GuestList)
    }
})