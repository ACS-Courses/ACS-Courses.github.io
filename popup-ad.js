// --- Configuration ---
const adImage = "ramadan-discount.jpg"; // Apnar chobir file name ba link
const waLink = "https://wa.me/8801778682815"; // Apnar WhatsApp link
const promoText = "Ramadan Special Discount! 🌙";
const promoDetails = "রমাদান স্পেশাল ডিসকাউন্ট : ১,৫০০৳ (ফুল কোর্সে) | ৬ মাসের কোর্সে ৭০০৳ রমাদান স্পেশাল ডিসকাউন্ট কীভাবে পাবেন তা জানতে এখনই হোয়াটসঅ্যাপে যোগাযোগ করুন।";

// --- Function to inject CSS ---
const style = document.createElement('style');
style.innerHTML = `
    .popup-overlay { 
        position: fixed; top: 0; left: 0; width: 100%; height: 100%; 
        background: rgba(0,0,0,0.85); display: flex; justify-content: center; 
        align-items: center; z-index: 10000; display: none; 
    }
    .popup-content { 
        background: #fff; padding: 25px; border-radius: 15px; 
        max-width: 380px; text-align: center; position: relative; 
        animation: fadeIn 0.4s ease-out; box-shadow: 0px 10px 30px rgba(0,0,0,0.5);
    }
    .popup-img { width: 100%; border-radius: 10px; margin-bottom: 15px; border: 1px solid #eee; }
    .close-btn { 
        position: absolute; top: 8px; right: 15px; font-size: 30px; 
        cursor: pointer; color: #555; font-weight: bold; line-height: 1;
    }
    .close-btn:hover { color: #000; }
    .whatsapp-btn { 
        display: block; background: #25D366; color: #fff; padding: 14px; 
        text-decoration: none; border-radius: 8px; font-weight: bold; 
        margin-top: 15px; transition: background 0.3s;
    }
    .whatsapp-btn:hover { background: #1ebe57; }
    h3 { margin: 10px 0; color: #333; font-size: 22px; }
    p { color: #666; font-size: 15px; line-height: 1.5; }
    @keyframes fadeIn { from { opacity: 0; transform: translateY(-20px); } to { opacity: 1; transform: translateY(0); } }
`;
document.head.appendChild(style);

// --- Function to inject HTML ---
const popupHTML = `
    <div id="discount-popup" class="popup-overlay">
        <div class="popup-content">
            <span class="close-btn" onclick="document.getElementById('discount-popup').style.display='none'">&times;</span>
            <img src="${adImage}" class="popup-img" alt="Ramadan Offer">
            <h3>${promoText}</h3>
            <p>${promoDetails}</p>
            <a href="${waLink}" target="_blank" class="whatsapp-btn">Get Offer via WhatsApp</a>
        </div>
    </div>
`;
document.body.insertAdjacentHTML('beforeend', popupHTML);

// --- Always Show on Page Load (No Storage/Cookie) ---
window.addEventListener('load', function() {
    setTimeout(function() {
        document.getElementById('discount-popup').style.display = 'flex';
    }, 2000); // Page load hobar 2 second por popup ashbe
});
