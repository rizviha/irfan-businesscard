const iaIcon = document.querySelector(".ia-icon");
const iaName = document.querySelector(".ia-name");

iaName.addEventListener("animationend", () => {
window.location = "./infocard.html"
});

function FollowInstagram()
{
    window.location = "https://www.instagram.com/irfan_abbas/"
}
function LikeFacebook()
{
    window.location = "https://www.facebook.com/abbasirfan"
}
function AddSnapchat()
{
    window.location = "https://www.snapchat.com/add/abbas.irfan3"
}
function VisitWebsite()
{
    window.location = "https://www.irfanabbas.com/"
}
function GetQuote()
{
    window.location = "https://www.irfanabbas.com/"
}
function FindMe()
{
    window.location = "https://goo.gl/maps/eyvefw2WpEzsLBxcA"
}
function DownloadCard()
{
    window.location = "https://www.instagram.com/irfan_abbas/"
}

// const callMeButton= document.getElementById("CallMe")
function CallMe()
{
    console.log("calling");
    window.location = "tel:+91999985945"
}
function WhatsappMe()
{
    console.log("whatsapp");
    window.location = "https://wa.me/91999985945"
}
function AddToContact()
{ 
    console.log("addtocontact");
    window.open('./assets/Hasham_Rizvi.vcf')
}

const container = document.querySelector('.scroll-actions');

container.addEventListener('wheel', (e) => {
    e.preventDefault();
    container.scrollBy({
    top: 0,
    left: e.deltaY,
    behavior: 'smooth'
    });
});
