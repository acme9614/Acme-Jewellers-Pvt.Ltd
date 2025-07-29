   tailwind.config = {
      theme: {
        extend: {
          fontFamily: {
            alice: ['"Alice"', 'serif']
          }
        }
      }
    }


function openDrawer() {
  document.getElementById("drawer").classList.remove("-translate-x-full");
  document.getElementById("overlay").classList.remove("hidden");
  document.getElementById("menuButton").classList.add("hidden");
}

function closeDrawer() {
  document.getElementById("drawer").classList.add("-translate-x-full");
  document.getElementById("overlay").classList.add("hidden");
  document.getElementById("menuButton").classList.remove("hidden");
}


// drawers menu
function navigateToScheme() {
    Toaster.postMessage('navigateScheme');
  }
  
  function navigateToBankDetails() {
    Toaster.postMessage('navigateBankDetails');
  }
  
  function navigateToKyc() {
    Toaster.postMessage('navigateKyc');
  }
  
  function navigateToRate() {
    Toaster.postMessage('navigateRate');
  }
  
  function navigateSchemeRecords() {
    Toaster.postMessage('navigateSchemeRecords');
  }
  
  function navigateToCustomerCard() {
    Toaster.postMessage('navigateCustomerCard');
  }

  function navigateTransactionHistory() {
    Toaster.postMessage('navigateTransactionHistory');
  }

  function navigateToMyOrder() {
    Toaster.postMessage('navigateToMyOrder');
  }

  function navigateToUserProfile() {
    Toaster.postMessage('navigateToUserProfile');
  }

  function navigateToDigitalGold() {
    Toaster.postMessage('navigateToDigitalGold');
  }

  function navigateToPanchang() {
    Toaster.postMessage('navigateToPanchang');
  }

  function navigateToFeedback() {
    Toaster.postMessage('navigateToFeedback');
  }

  function navigateToSetting() {
    Toaster.postMessage('navigateToSetting');
  }

  function setUserName(username) {
    // Find the element by ID and set the text content
    document.getElementById("user-name-display").innerText = "Welcome, " + username;
}
function navigateToHomePage() {
    Toaster.postMessage('navigateToHomePage');
}


// brandingSwiper 

 const headerSwiper = new Swiper("#BrandingSwiper", {
      loop: true,
      autoplay: {
        delay: 4000,
        disableOnInteraction: false,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      speed: 1000,
      effect: "creative",
      creativeEffect: {
        prev: {
          translate: ["-100%", 0, -500],
          rotate: [0, 0, -15],
          scale: 0.85,
          opacity: 0.7,
        },
        next: {
          translate: ["100%", 0, -500],
          rotate: [0, 0, 15],
          scale: 0.85,
          opacity: 0.7,
        },
      },
    });


    // desktopTabs javscript start

       // Initialize AOS
      AOS.init({
        duration: 800,
        once: false,
      });

      const items = [
        {
          label: "Scheme",
          icon: "https://cdn-icons-png.flaticon.com/128/10150/10150740.png",
          action: "navigateToScheme()",
        },
        {
          label: "Bank",
          icon: "https://cdn-icons-png.flaticon.com/128/522/522554.png",
          action: "navigateToBankDetails()",
        },
        {
          label: "KYC",
          icon: "https://cdn-icons-png.flaticon.com/128/18282/18282110.png",
          action: "navigateToKyc()",
        },
        {
          label: "Rate",
          icon: "https://cdn-icons-png.flaticon.com/128/592/592015.png",
          action: "navigateToRate()",
        },
        {
          label: "Records",
          icon: "https://cdn-icons-png.flaticon.com/128/2910/2910768.png",
          action: "navigateSchemeRecords()",
        },
        {
          label: "Card",
          icon: "https://cdn-icons-png.flaticon.com/128/3037/3037255.png",
          action: "navigateToCustomerCard()",
        },
        {
          label: "History",
          icon: "https://cdn-icons-png.flaticon.com/128/3503/3503786.png",
          action: "navigateTransactionHistory()",
        },
        {
          label: "Order",
          icon: "https://cdn-icons-png.flaticon.com/128/10597/10597732.png",
          action: "navigateToMyOrder()",
        },
        {
          label: "Profile",
          icon: "https://cdn-icons-png.flaticon.com/128/1946/1946429.png",
          action: "navigateToUserProfile()",
        },
        {
          label: "Gold",
          icon: "https://cdn-icons-png.flaticon.com/128/1473/1473430.png",
          action: "navigateToDigitalGold()",
        },
        {
          label: "Panchang",
          icon: "https://cdn-icons-png.flaticon.com/128/3013/3013143.png",
          action: "navigateToPanchang()",
        },
        {
          label: "Settings",
          icon: "https://cdn-icons-png.flaticon.com/128/2099/2099058.png",
          action: "navigateToSetting()",
        },
      ];

      function createCard(item, delay = 0) {
        return `
          <div onclick="${item.action}" 
               class="flex flex-col items-center" 
               data-aos="fade-up" 
               data-aos-delay="${delay}">
            <div class="w-[110px] h-[25px] bg-[#37160F] rounded-t-full shadow-lg"></div>
            <div class="w-[102px] h-[120px] md:w-[120px] md:h-[130px] bg-[#4E221B] clip-banner shadow-lg flex flex-col items-center">
              <img class="w-14 h-14 my-3 invert" src="${item.icon}" alt="${item.label}" />
              <p class="text-white font-semibold">${item.label}</p>
            </div>
          </div>
        `;
      }

      const swiperContainer = document.getElementById("swiperContainer");
      const gridContainer = document.getElementById("gridContainer");

      items.forEach((item, index) => {
        const delay = index * 100; // for staggered animation

        // Mobile swiper slide
        const swiperSlide = document.createElement("div");
        swiperSlide.className = "swiper-slide";
        swiperSlide.innerHTML = createCard(item, delay);
        swiperContainer.appendChild(swiperSlide);

        // Desktop grid box
        const gridBox = document.createElement("div");
        gridBox.innerHTML = createCard(item, delay);
        gridContainer.appendChild(gridBox);
      });

      // Initialize Swiper
      new Swiper(".tabSwiper", {
        slidesPerView: 3,
        spaceBetween: 10,
        loop: true,
        autoplay: {
          delay: 3000,
          disableOnInteraction: false,
        },
        breakpoints: {
          480: {
            slidesPerView: 3,
          },
        },
      });


    // desktopTabs javscript end
