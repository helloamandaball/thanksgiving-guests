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
                <input type="checkbox" id="guestRH" name="guestRH"><label for="guestRH">Right Handed</label> &nbsp;
                </p>
            </div>
            <div class ="guestImageUpload>
                <label for="imageUrl"><strong>Add Photo:</strong>&nbsp;&nbsp;</label> <input type="url" id="imageUrl" name="imageUrl" placeholder="Insert image URL here"> <!--<input type="button" value="Save Image URL" id="imageUploadBtn"/> -->
            </div>
            <button id="saveGuest" class="saveGuestBtn">Save</button>
        </div>
    `
}
//^^image can actually be a input type="text" since it's adding the url into the guest array and it should automatically add the image like it did for the sample array we started with (john, james, and adele)^^

document.querySelector("body").addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "saveGuest") {
            // Used the JSON.parse() around the document.querySelector("#id").value because the boolean value was adding answer as a string (putting it in quotation marks "") in the db.json instead of an integer for age or bolean (true/false) for rightHanded. or just add a + (plus sign) in front of the document.querySelector. Example:  age: +document.querySelector("#age").value,
            const newGuest = {
                name: document.querySelector("#name").value,
                //+ sign is short hand for INT.parse() used for changing strings (ex: "3") into integers (ex: 3)
                age: +document.querySelector("#age").value,
                favoriteDish: document.querySelector("#favoriteDish").value,
                //JSON.parse is similar to adding .json() at the end of a paramater.
                rightHanded: JSON.parse(document.querySelector("#guestRH").checked),   
                imageUrl: document.querySelector("#imageUrl").value         
            }
            console.log(newGuest)

            //Below clears the fields after saving
            document.querySelector("#name").value = ""
            document.querySelector("#age").value = ""
            document.querySelector("#favoriteDish").value = ""
            document.querySelector("#guestRH").value = ""
            document.querySelector("#imageUrl").value = ""

        saveGuest(newGuest)
        .then(GuestList)
    }
})