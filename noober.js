
async function pageLoaded() {
  let response = await fetch('https://kiei451.com/api/rides.json')
  let json = await response.json()

  // writes the returned JSON to the console
  console.dir(json)
  
  // 🔥 start here: write code to loop through the rides
  let rideList = json

  for (let i = 0; i < rideList.length; i++) {
    // console.log(rideList[i])

    let ride = rideList[i]
    
    let serviceLevel
    if (ride.length > 1) {
      serviceLevel = 'Noober Pool'
    } else if (ride[0].numberOfPassengers > 3) {
      serviceLevel = 'Noober XL'
    } else if (ride[0].purpleRequested = true) {
      serviceLevel = 'Noober Purple'
    } else {
      serviceLevel = 'Noober X'
    }

    document.querySelector('.rides').insertAdjacentHTML ('beforeend',`
      <h1 class="inline-block mt-8 px-4 py-2 rounded-xl text-2xl bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
        <i class="fas fa-car-side"></i>
        <span>${serviceLevel}</span>
      </h1>
    `)

    for (let j = 0; j < ride.length; j++) {
    
      let rideLeg = ride[j]

      document.querySelector('.rides').insertAdjacentHTML ('beforeend', `
      <div class="border-4 border-gray-900 p-4 my-4 text-left">
        <div class="flex">
          <div class="w-1/2">
            <h2 class="text-2xl py-1">${rideLeg.passengerDetails.first} ${rideLeg.passengerDetails.last}</h2>
            <p class="font-bold text-gray-600">${rideLeg.passengerDetails.phoneNumber}</p>
          </div>
          <div class="w-1/2 text-right">
            <span class="rounded-xl bg-gray-600 text-white p-2">
            ${rideLeg.numberOfPassengers}
            </span>
          </div>
      </div>
      <div class="mt-4 flex">
        <div class="w-1/2">
          <div class="text-sm font-bold text-gray-600">PICKUP</div>
          <p>${rideLeg.pickupLocation.address}</p>
          <p>${rideLeg.pickupLocation.city}, ${rideLeg.pickupLocation.state} ${rideLeg.pickupLocation.zip}</p>
        </div>
        <div class="w-1/2">
          <div class="text-sm font-bold text-gray-600">DROPOFF</div>
          <p>${rideLeg.dropoffLocation.address}</p>
          <p>${rideLeg.dropoffLocation.city}, ${rideLeg.dropoffLocation.state} ${rideLeg.dropoffLocation.zip}</p>
        </div>
      </div>
    </div>
      `)


    }
  }
}

window.addEventListener('DOMContentLoaded', pageLoaded)

