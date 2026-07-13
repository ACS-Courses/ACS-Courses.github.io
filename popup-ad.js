// --- Configuration ---
const adImage = "frb-popup-banner.png"; // আপনার SSC 27 FRB এর ব্যানার/ছবির লিংক বা নাম দিন
const waLink = "https://wa.me/8801778682815?text=আমি%20SSC%2027%20FRB%20বা%20অন্য%20কোর্সে%20ডিসকাউন্টে%20ভর্তি%20হতে%20চাই"; // আপনার WhatsApp link
const promoText = "🔥 SSC 27 FRB - স্পেশাল ডিসকাউন্ট!";
const promoDetails = "এসএসসি ২৭ ব্যাচের ফাইনাল রিভিশন (FRB) কোর্সে চলছে আকর্ষণীয় প্রি-বুক ডিসকাউন্ট! এছাড়াও <b>ACS Future School</b>-এর অন্য যেকোনো কোর্সে সর্বোচ্চ ডিসকাউন্ট পেতে এখনই হোয়াটসঅ্যাপে মেসেজ দিন।";

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
    .close-btn:hover { color: #d32f2f; }
    .whatsapp-btn { 
        display: flex; align-items: center; justify-content: center; gap: 8px;
        background: #25D366; color: #fff; padding: 14px; 
        text-decoration: none; border-radius: 8px; font-weight: bold; font-size: 1.1rem;
        margin-top: 15px; transition: background 0.3s, transform 0.2s;
    }
    .whatsapp-btn:hover { background: #1ebe57; transform: translateY(-2px); }
    .popup-content h3 { margin: 10px 0; color: #4a148c; font-size: 22px; font-weight: 800; }
    .popup-content p { color: #444; font-size: 15px; line-height: 1.6; margin-bottom: 10px;}
    @keyframes fadeIn { from { opacity: 0; transform: translateY(-20px); } to { opacity: 1; transform: translateY(0); } }
`;
document.head.appendChild(style);

// --- Function to inject HTML ---
const popupHTML = `
    <div id="discount-popup" class="popup-overlay">
        <div class="popup-content">
            <span class="close-btn" onclick="document.getElementById('discount-popup').style.display='none'">&times;</span>
            <img src="${adImage}" class="popup-img" alt="SSC 27 FRB Offer">
            <h3>${promoText}</h3>
            <p>${promoDetails}</p>
            <a href="${waLink}" target="_blank" class="whatsapp-btn">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16"><path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.575 6.575 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943s-.182-.15-.38-.25z"/></svg>
                WhatsApp-এ মেসেজ দিন
            </a>
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
