import { saveGuest } from "./GuestDataProvider.js"
import { GuestList } from "./GuestList.js"

export const GuestForm = () => {
    return `
        <h2>Who is coming over for dinner?</h2>
        <div class="guestFormContainer">
            <input type="text" id="name" placeholder="Enter Guest's Name">
            <input type="number" id="age" placeholder="Enter Guest's Age"> 
            <input type="text" id="favoriteDish" placeholder="Enter Guest's Favorite Food"> 
            <div>
                <p><strong>Place setting:</strong> &nbsp;
                <input type="checkbox" id="guestRH" name="guestRH" value="true"><label for="guestRH">Right Handed</label> &nbsp;
                <input type="checkbox" id="guestLH" name="guestLH" value="false"><label for="guestLH">Left Handed</label></p>
            </div>
            <div class ="guestImageUpload>
                <label for="imageUrl"><strong>Add Photo:</strong>&nbsp;&nbsp;</label> <input type="url" id="imageUrl" name="imageUrl" placeholder="Insert image URL here"> <input type="button" value="Save Image URL" id="imageUploadBtn"/>
            </div>
            <button id="saveGuest" class="saveGuestBtn">Save</button>
        </div>
    `
}

document.querySelector("body").addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "saveGuest") {
// Used the JSON.parse() around the document.querySelector("#id").value because the boolean value was adding answer as a string (putting it in quotation marks "") in the db.json instead of a regular answer/value
            const newGuest = {
                name: document.querySelector("#name").value,
                age: JSON.parse(document.querySelector("#age").value),
                favoriteDish: document.querySelector("#favoriteDish").value,
                rightHanded: JSON.parse(document.querySelector("#guestRH").value),   
                imageUrl: document.querySelector("#imageUrl").value         
            }
            console.log(newGuest)

            document.querySelector("#name").value = ""
            document.querySelector("#age").value = ""
            document.querySelector("#favoriteDish").value = ""
            document.querySelector("#guestRH").value = ""
            document.querySelector("#imageUrl").value = ""

        saveGuest(newGuest)
        .then(GuestList)
    }
})