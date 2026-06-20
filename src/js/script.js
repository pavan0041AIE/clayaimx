// header
const menuBtn = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

menuBtn.onclick = ()=>{
  navMenu.classList.toggle("active");
};


let x = document.getElementById("tagline");

x.style.fontWeight = "600";
x.style.color = "white";
x.style.textShadow = "2px 2px 4px #000000";

const btn = document.getElementById("themeToggle");
const sun = document.getElementById("sunIcon");
const moon = document.getElementById("moonIcon");


// THEME TOGGLE SYSTEM 🌗
const themeBtn = document.getElementById("themeToggle");

// 1️⃣ Page load पर saved theme check करो
if(localStorage.getItem("theme") === "light"){
    document.body.classList.add("light-theme");
    sun.style.display="none";
    moon.style.display="block";
}

// 2️⃣ Button click पर theme change करो
themeBtn.addEventListener("click", () => {
    document.body.classList.toggle("light-theme");

    // 3️⃣ Theme save करो
    if(document.body.classList.contains("light-theme")){
        localStorage.setItem("theme","light");
            sun.style.display="none";
            moon.style.display="block";
    } else {
        localStorage.setItem("theme","dark");
            sun.style.display="block";
            moon.style.display="none";
    }
});

/* 🔍 SEARCH SYSTEM START */

// scroll offset function (header fix)
function scrollToElement(id){
  const element = document.getElementById(id);
  const headerOffset = 90;
  const elementPosition = element.getBoundingClientRect().top;
  const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

  window.scrollTo({
    top: offsetPosition,
    behavior: "smooth"
  });
}

// search toggle open/close
const searchBtn = document.getElementById("searchBar");
const searchInput = document.getElementById("searchInput");

searchBtn.onclick = ()=>{
  searchInput.classList.toggle("active");
  searchInput.focus();
};



// ENTER press search engine
searchInput.addEventListener("keypress", function(e){
if(e.key === "Enter"){

const value = searchInput.value.toLowerCase().trim();

/* MAIN SECTIONS */
if(value.includes("course")){
  scrollToElement("courses");
  return;
}
if(value.includes("about")){
  scrollToElement("about");
  return;
}
if(value.includes("contact")){
  scrollToElement("contact");
  return;
}

/* ABOUT SUBSECTIONS */
if(value.includes("mission")){
  scrollToElement("about");
  setTimeout(()=>scrollToElement("mission_title"),500);
  return;
}
if(value.includes("vision")){
  scrollToElement("about");
  setTimeout(()=>scrollToElement("vision_title"),500);
  return;
}
if(value.includes("team")){
  scrollToElement("about");
  setTimeout(()=>scrollToElement("team_title"),500);
  return;
}

/* COURSE CARDS */
const courseMap = {
  "programming":"programming",
  "web":"web-development",
  "web development":"web-development",
  "dsa":"dsa",
  "data science":"ds",
  "cloud":"cloud-computing",
  "cyber":"seber-security",
  "devops":"DevOps",
  "system design":"system-design",
  "ai":"AI",
  "resume":"R-and-P",
  "placement":"R-and-P",
  "research":"R-and-I",
  "other":"other-course"
};

for(const key in courseMap){
  if(value.includes(key)){
    scrollToElement("courses");
    setTimeout(()=>scrollToElement(courseMap[key]),500);
    return;
  }
}

alert("No result found 😢");

}});
/* 🔍 SEARCH SYSTEM END */


const langBtn = document.getElementById("langToggle");

const translations = {
 en:{
  tagline:"Come. Learn. Achieve Your Aim",
  home:"HOME",
  courses:"COURSES",
  askai:"ASK AI",
  about:"ABOUT US",
  contact:"CONTACT US",
  join:"JOIN US",

  mainTagline:"APANE SAPANE APANI BHASHA",
  heroTagline:"Innovating the Future with AI Solutions",

  getStarted:"Get Started",
  learnMore:"Learn More",

  coursesHeading:"COURSES",
  programmingDesc:"Learn C, C++, Java & Python from beginner to advanced.",
  webdevDesc:"Build modern responsive websites and web apps.",
  dsaDesc:"Master data structures and algorithms for interviews.",
  datascienceDesc:"Learn data analysis, machine learning and projects.",

  cloudDesc:"Master AWS, Azure & cloud infrastructure.",
  cyberDesc:"Learn ethical hacking and security fundamentals.",
  devopsDesc:"CI/CD, Docker, Kubernetes and automation tools.",
  systemDesc:"Design scalable apps like Netflix & Instagram.",

  aiDesc:"Learn machine learning and AI fundamentals.",
  placementDesc:"Prepare for interviews and build strong resumes.",
  researchDesc:"Work on research projects and innovative ideas.",
  otherDesc:"Explore more upcoming courses and programs.",


  aboutHeading:"ABOUT US",
  aboutTagline:"Innovation. Intelligence. Impact.",
  aboutIntro:"CLAYAIMX is a futuristic platform ushering in a new era of education, technology, and AI solutions. We combine the power of knowledge with the speed of Artificial Intelligence to create an ecosystem that helps everyone move forward.",

  missionTitle:"Our Mission",
  missionText:"Our mission is to make AI and advanced technology simple and accessible for every student and professional, so that learning and working become a better experience. We are working to make people future-ready through digital tools.",

  visionTitle:"Our Vision",
  visionText:"Our vision is to build a world where technology is not just a convenience but a means to unlock the potential of every human being. We aim to bring a new digital era through knowledge and innovation.",

  whatTitle:"What We Do",
  whatText:"AI Solutions: We design intelligent systems and tools that save time by automating tasks. Smart Education: We blend traditional education with AI to make learning interactive and personalized. Next-Gen Tech: We build futuristic electronics and digital products.",

  teamTitle:"Our Team",
  teamText:"The strength of CLAYAIMX is our team — a blend of tech experts, AI researchers, and creative educators. We are united by one passion: technology should work for humans, not humans for technology.",
  contactHeading:"CONTACT US",


},

hi:{
  tagline:"आओ। सीखो। अपना लक्ष्य हासिल करो",
  home:"होम",
  courses:"कोर्स",
  askai:"AI से पूछें",
  about:"हमारे बारे में",
  contact:"संपर्क करें",
  join:"हमसे जुड़ें",

  mainTagline:"अपने सपने अपनी भाषा",
  heroTagline:"AI समाधान के साथ भविष्य का निर्माण",

  getStarted:"शुरू करें",
  learnMore:"और जानें",

  coursesHeading:"कोर्स",
  programmingDesc:"C, C++, Java और Python को शुरुआत से एडवांस तक सीखें।",
  webdevDesc:"आधुनिक responsive वेबसाइट और वेब ऐप बनाना सीखें।",
  dsaDesc:"इंटरव्यू के लिए डेटा स्ट्रक्चर और एल्गोरिदम में महारत हासिल करें।",
  datascienceDesc:"डेटा एनालिसिस और मशीन लर्निंग सीखें।",

  cloudDesc:"AWS, Azure और क्लाउड इंफ्रास्ट्रक्चर सीखें।",
  cyberDesc:"एथिकल हैकिंग और सिक्योरिटी की बेसिक्स सीखें।",
  devopsDesc:"CI/CD, Docker और Kubernetes टूल्स सीखें।",
  systemDesc:"Netflix और Instagram जैसी स्केलेबल ऐप्स डिजाइन करना सीखें।",

  aiDesc:"मशीन लर्निंग और AI की बुनियादी जानकारी सीखें।",
  placementDesc:"इंटरव्यू की तैयारी और मजबूत रिज्यूमे बनाना सीखें।",
  researchDesc:"रिसर्च प्रोजेक्ट्स और इनोवेशन पर काम करें।",
  otherDesc:"आने वाले नए कोर्स और प्रोग्राम एक्सप्लोर करें।",


  aboutHeading:"हमारे बारे में",
  aboutTagline:"नवाचार। बुद्धिमत्ता। प्रभाव।",
  aboutIntro:"CLAYAIMX एक भविष्यवादी प्लेटफॉर्म है जो शिक्षा, तकनीक और AI समाधान के नए युग की शुरुआत कर रहा है। हम ज्ञान की शक्ति को आर्टिफिशियल इंटेलिजेंस की गति के साथ जोड़कर ऐसा इकोसिस्टम बना रहे हैं जो हर किसी को आगे बढ़ने में मदद करता है।",

  missionTitle:"हमारा मिशन",
  missionText:"हमारा मिशन AI और उन्नत तकनीक को हर छात्र और प्रोफेशनल के लिए सरल और सुलभ बनाना है, ताकि सीखना और काम करना एक बेहतर अनुभव बन सके। हम डिजिटल टूल्स के माध्यम से लोगों को भविष्य के लिए तैयार बना रहे हैं।",

  visionTitle:"हमारा विज़न",
  visionText:"हमारा विज़न एक ऐसी दुनिया बनाना है जहाँ तकनीक सिर्फ सुविधा नहीं बल्कि हर इंसान की क्षमता को बढ़ाने का माध्यम हो। हम ज्ञान और नवाचार के माध्यम से एक नया डिजिटल युग लाना चाहते हैं।",

  whatTitle:"हम क्या करते हैं",
  whatText:"AI समाधान: हम ऐसे इंटेलिजेंट सिस्टम और टूल्स बनाते हैं जो कार्यों को ऑटोमेट करके समय बचाते हैं। स्मार्ट शिक्षा: हम पारंपरिक शिक्षा को AI के साथ जोड़कर सीखने को इंटरैक्टिव और व्यक्तिगत बनाते हैं। नेक्स्ट-जेन टेक: हम भविष्य की तकनीक और डिजिटल प्रोडक्ट्स विकसित करते हैं।",

  teamTitle:"हमारी टीम",
  teamText:"CLAYAIMX की ताकत हमारी टीम है — जिसमें टेक एक्सपर्ट्स, AI शोधकर्ता और क्रिएटिव शिक्षक शामिल हैं। हम एक ही जुनून से जुड़े हैं: तकनीक इंसानों के लिए काम करे, न कि इंसान तकनीक के लिए।",

  contactHeading:"संपर्क करें",


  }

};

let currentLang = localStorage.getItem("lang") || "en";

function applyLanguage(lang){

  document.querySelectorAll(".lang").forEach(element => {

    const key = element.getAttribute("data-key");

    if(translations[lang][key]){
      element.textContent = translations[lang][key];
    }

  });

}


applyLanguage(currentLang);

langBtn.onclick = () => {
  currentLang = currentLang === "en" ? "hi" : "en";
  localStorage.setItem("lang", currentLang);
  applyLanguage(currentLang);
};


/* BACK TO TOP BUTTON */
const backToTopBtn = document.getElementById("backToTop");

// show/hide on scroll
window.addEventListener("scroll", ()=>{
  if(window.scrollY > 400){
    backToTopBtn.classList.add("show");
  }else{
    backToTopBtn.classList.remove("show");
  }
});

// scroll to top click
backToTopBtn.addEventListener("click", ()=>{
  window.scrollTo({
    top:0,
    behavior:"smooth"
  });
});

// FEEDBACK FORM SUBMISSION

document.addEventListener(
    "DOMContentLoaded",
    () => {

        const feedbackForm =
            document.getElementById(
                "feedbackForm"
            );

        if (!feedbackForm) {
            return;
        }

        feedbackForm.addEventListener(
            "submit",
            async (e) => {

                e.preventDefault();
                const submitBtn =
                feedbackForm.querySelector(
                'button[type="submit"]'
              );

                const data = {
                    name:
                        document.getElementById(
                            "name"
                        ).value.trim() || null,

                    email:
                        document.getElementById(
                            "email"
                        ).value.trim() || null,

                    rating:
                        parseInt(
                            document.querySelector(
                                'input[name="rating"]:checked'
                            ).value
                        ),

                    liked_about:
                        document.getElementById(
                            "liked_about"
                        ).value,

                    improvements:
                        document.getElementById(
                            "improvements"
                        ).value.trim() || null
                };

                try {
                  submitBtn.disabled = true;

                  submitBtn.textContent =
                      "Submitting...";

                    await submitFeedback(
                        data
                    );

                    document.getElementById(
                        "feedbackMessage"
                    ).innerHTML =
                        "✅ Thank you for your feedback!";
                    setTimeout(() => {

                        document.getElementById(
                            "feedbackMessage"
                        ).innerHTML = "";

                    }, 5000);
                    feedbackForm.reset();
                    document.getElementById(
                        "likedCount"
                    ).textContent =
                        "0 / 500";

                }

                catch (error) {

                    console.error(
                        error
                    );

                    document.getElementById(
                        "feedbackMessage"
                    ).innerHTML =
                        "❌ Unable to submit feedback. Please try again.";
                }
                finally {

                  submitBtn.disabled = false;

                  submitBtn.textContent =
                      "Send Feedback";
                }
            }
        );
    }
);
const likedAbout =
    document.getElementById(
        "liked_about"
    );

if (likedAbout) {

    likedAbout.addEventListener(
        "input",
        () => {

            document.getElementById(
                "likedCount"
            ).textContent =
                `${likedAbout.value.length} / 500`;
        }
    );
}
