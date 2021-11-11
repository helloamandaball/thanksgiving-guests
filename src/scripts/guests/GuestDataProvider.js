let guestListArray = []

export const useGuestList = () => {
    return guestListArray.slice()
}

export const getGuestList = () =>  {
    return fetch ('http://localhost:8088/guests')
    .then(messyGuestList => messyGuestList.json())
    .then(sortedGuestList => {
        // console.table(sortedGuestList)
        guestListArray = sortedGuestList
    })
}

export const saveGuest = (guest) => {
    return fetch('http://localhost:8088/guests', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(guest)
    })
    .then(getGuestList)
}

export const deleteGuest = guestId => {
    return fetch(`http://localhost:8088/guests/${guestId}`, {
        method: "DELETE"
    })
    .then(getGuestList)
}

export const updateGuest = guest => {
    return fetch(`http://localhost:8088/guests/${guest.id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(guest)
    })
}
