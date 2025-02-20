// Function to generate restaurant popup content
function generatePopupContent(restaurant) {
    return `
        <b>${restaurant.name}</b><br>
        <i>${restaurant.info}</i><br>
        <img src="${restaurant.image}" width="100%" height="150" style="border-radius: 8px; margin-top: 5px;">
        <hr>
        📍 <b>Address:</b> ${restaurant.address} <br>
        ⏰ <b>Opening Hours:</b> ${restaurant.hours} <br>
        ⭐ <b>Rating:</b> ${restaurant.rating} <br>
        💰 <b>Price Range:</b> ${restaurant.price} <br>
        🥗 <b>Vegetarian Options:</b> ${restaurant.vegetarian} <br>
        🌱 <b>Vegan Options:</b> ${restaurant.vegan} <br>
        📜 <b>Menu:</b> ${restaurant.menu} <br>
        🚶 <b>How to Get There:</b> ${restaurant.transport} <br>
        ⌛ <b>Approx. Travel Time:</b> ${restaurant.travel_time} <br>
        💺 <b>Ambience & Seating:</b> ${restaurant.ambience} <br>
        ⏳ <b>Waiting Time:</b> ${restaurant.waiting_time} <br>
        🔗 <b>Payment Methods:</b> ${restaurant.payment} <br>
        ☪️ <b>Halal Certified:</b> ${restaurant.halal} <br>
        ♿ <b>Accessibility:</b> ${restaurant.accessibility} <br>
        📝 <b>Additional Notes:</b> ${restaurant.notes} <br>
        <hr>
    `;
}
