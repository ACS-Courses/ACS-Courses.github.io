// --- Configuration ---
const adImage = "ramadan-discount.jpg"; // Apnar chobir link
const waLink = "https://wa.me/8801778682815"; // Apnar WhatsApp number
const promoText = "Ramadan Special Discount!";
const promoDetails = "রমাদান স্পেশাল ডিসকাউন্ট : ১,৫০০৳(ফুল কোর্সে) | ৬ মাসের কোর্সে ৭০০৳ রমাদান স্পেশাল ডিসকাউন্ট কীভাবে পাবেন তা জানতে এখনই হুয়াট্স এপে যোগাযোগ করুন।";

// --- Function to inject CSS ---
const style = document.createElement('style');
style.innerHTML = `
    .popup-overlay { position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.8); display: flex; justify-content: center; align-items: center; z-index: 10000; display: none; }
    .popup-content { background: #fff; padding: 20px; border-radius: 12px; max-width: 350px; text-align: center; position: relative; animation: fadeIn 0.5s; }
    .popup-img { width: 100%; border-radius: 8px; margin-bottom: 10px; }
    .close-btn { position: absolute; top: 5px; right: 12px; font-size: 28px; cursor: pointer; color: #333; }
    .whatsapp-btn { display: block; background: #25D366; color: #fff; padding: 12px; text-decoration: none; border-radius: 6px; font-weight: bold; margin-top: 10px; }
    @keyframes fadeIn { from { opacity: 0; transform: scale(0.9); } to { opacity: 1; transform: scale(1); } }
`;
document.head.appendChild(style);

// --- Function to inject HTML ---
const popupHTML = `
    <div id="discount-popup" class="popup-overlay">
        <div class="popup-content">
            <span class="close-btn" onclick="document.getElementById('discount-popup').style.display='none'">&times;</span>
            <img src="${adImage}" class="popup-img">
            <h3>${promoText}</h3>
            <p>${promoDetails}</p>
            <a href="${waLink}" target="_blank" class="whatsapp-btn">Get Offer via WhatsApp</a>
        </div>
    </div>
`;
document.body.insertAdjacentHTML('beforeend', popupHTML);

// --- Logic to Show Once per Session (Cookie) ---
window.onload = function() {
    if (!localStorage.getItem('adShown')) {
        setTimeout(function() {
            document.getElementById('discount-popup').style.display = 'flex';
            localStorage.setItem('adShown', 'true'); // Visitor ekbar dekhle mark hoye thakbe
        }, 3000); // 3 second por dekhabe
    }
};
