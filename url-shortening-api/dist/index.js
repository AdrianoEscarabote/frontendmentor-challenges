(()=>{"use strict";var n={538:(n,t,e)=>{e.d(t,{Z:()=>s});var i=e(81),o=e.n(i),a=e(645),r=e.n(a)()(o());r.push([n.id,"/* Box sizing rules */\n*,\n*::before,\n*::after {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  transition: 0.4s;\n}\n\n/* Remove default margin */\nbody,\nh1,\nh2,\nh3,\nh4,\np,\nfigure,\nblockquote,\ndl,\ndd {\n  margin: 0;\n}\n\n/* Remove list styles on ul, ol elements with a list role, which suggests default styling will be removed */\nul {\n  list-style: none;\n}\n\n/* Set core root defaults */\nhtml:focus-within {\n  scroll-behavior: smooth;\n}\n\n/* Set core body defaults */\nbody {\n  min-height: 100vh;\n  text-rendering: optimizeSpeed;\n  line-height: 1.5;\n}\n\n/* Make images easier to work with */\nimg,\npicture {\n  max-width: 100%;\n  display: block;\n}\n\n/* Inherit fonts for inputs and buttons */\ninput,\nbutton,\ntextarea,\nselect {\n  font: inherit;\n}\n\n/* Remove all animations, transitions and smooth scroll for people that prefer not to see them */\n@media (prefers-reduced-motion: reduce) {\n  html:focus-within {\n    scroll-behavior: auto;\n  }\n\n  *,\n  *::before,\n  *::after {\n    animation-duration: 0.01ms !important;\n    animation-iteration-count: 1 !important;\n    transition-duration: 0.01ms !important;\n    scroll-behavior: auto !important;\n  }\n}",""]);const s=r},402:(n,t,e)=>{e.d(t,{Z:()=>b});var i=e(81),o=e.n(i),a=e(645),r=e.n(a),s=e(667),c=e.n(s),d=new URL(e(988),e.b),l=new URL(e(372),e.b),p=new URL(e(332),e.b),m=new URL(e(219),e.b),f=r()(o());f.push([n.id,"@import url(https://fonts.googleapis.com/css2?family=Poppins:wght@500;700&display=swap);"]);var u=c()(d),h=c()(l),g=c()(p),x=c()(m);f.push([n.id,'body {\n  background-color: #fff;\n  font-size: 18px;\n  font-family: "Poppins", sans-serif;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n}\nbody::-webkit-scrollbar {\n  width: 12px;\n}\nbody::-webkit-scrollbar-track {\n  background: #EFF1F7;\n}\nbody::-webkit-scrollbar-thumb {\n  background: linear-gradient(#3b3054 40%, #2acfcf 90%);\n  border-radius: 20px;\n}\nbody header {\n  padding: 55px 165px;\n  overflow: hidden;\n  width: 100%;\n}\nbody header .container {\n  max-width: 1108px;\n  margin: 0 auto;\n  height: 45px;\n}\nbody header .container nav {\n  display: flex;\n  align-items: center;\n  justify-content: flex-start;\n  flex-direction: row;\n}\nbody header .container nav .logo img {\n  margin-right: 45px;\n  width: 120px;\n  height: 32px;\n}\nbody header .container nav .nav-content {\n  width: 100%;\n  display: grid;\n  grid-template-columns: 75% 25%;\n  grid-template-rows: 1fr;\n}\nbody header .container nav .nav-content .nav-links,\nbody header .container nav .nav-content .nav-links2 {\n  display: flex;\n  align-items: center;\n  gap: 34px;\n}\nbody header .container nav .nav-content .nav-links a,\nbody header .container nav .nav-content .nav-links2 a {\n  text-decoration: none;\n  font-weight: 700;\n  font-size: 15px;\n  line-height: 22px;\n  letter-spacing: none;\n  color: #9e9aa7;\n}\nbody header .container nav .nav-content .nav-links a:hover, body header .container nav .nav-content .nav-links a:focus-visible,\nbody header .container nav .nav-content .nav-links2 a:hover,\nbody header .container nav .nav-content .nav-links2 a:focus-visible {\n  color: #34313D;\n}\nbody header .container nav .nav-content .nav-links .signUp,\nbody header .container nav .nav-content .nav-links2 .signUp {\n  display: grid;\n  place-content: center;\n  background: #2acfcf;\n  border-radius: 28px;\n  width: 105px;\n  height: 45px;\n  font-weight: 700;\n  font-size: 15px;\n  line-height: 22px;\n  letter-spacing: none;\n  color: #fff;\n}\nbody header .container nav .nav-content .nav-links .signUp:hover, body header .container nav .nav-content .nav-links .signUp:focus-visible,\nbody header .container nav .nav-content .nav-links2 .signUp:hover,\nbody header .container nav .nav-content .nav-links2 .signUp:focus-visible {\n  background-color: #9AE3E3;\n  color: #fff;\n}\nbody header .container nav .nav-content .nav-links2 {\n  justify-content: flex-end;\n}\nbody header .overflowImg {\n  max-width: 1108px;\n  margin: 152px auto;\n  position: relative;\n  overflow: visible;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  flex-direction: row;\n}\nbody header .overflowImg .content {\n  width: 100%;\n  max-width: 564px;\n  height: auto;\n  display: flex;\n  align-items: flex-start;\n  justify-content: center;\n  flex-direction: column;\n  gap: 38px;\n}\nbody header .overflowImg .content h1 {\n  font-weight: 700;\n  font-size: 80px;\n  line-height: 90px;\n  letter-spacing: -2px;\n  color: #35323e;\n}\nbody header .overflowImg .content p {\n  font-weight: 500;\n  font-size: 22px;\n  line-height: 36px;\n  letter-spacing: 0.15px;\n  color: #9e9aa7;\n}\nbody header .overflowImg .content a {\n  display: grid;\n  place-content: center;\n  width: 197px;\n  height: 56px;\n  border-radius: 28px;\n  background-color: #2acfcf;\n  text-decoration: none;\n  color: #fff;\n}\nbody header .overflowImg .content a:hover, body header .overflowImg .content a:focus-visible {\n  background-color: #9AE3E3;\n}\nbody header .overflowImg .hero-image {\n  position: absolute;\n  right: -290px;\n  top: -46px;\n  width: 733px;\n  height: 482px;\n}\nbody header .overflowImg .hero-image img {\n  position: absolute;\n  overflow: visible;\n  width: 733px;\n  height: 482px;\n}\nbody main {\n  background-color: #EFF1F7;\n  width: 100%;\n}\nbody main .statistics-input {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: row;\n  padding: 28px 165px 112px 165px;\n  position: relative;\n}\nbody main .statistics-input .input {\n  position: absolute;\n  top: -84px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: row;\n  gap: 24px;\n  max-width: 1110px;\n  height: 168px;\n  width: 100%;\n  background: url('+u+') 100% #3b3054;\n  border-radius: 10px;\n}\nbody main .statistics-input .input input {\n  width: 100%;\n  max-width: 769px;\n  height: 64px;\n  padding-left: 32px;\n  border-radius: 10px;\n  border: 1px solid transparent;\n  background-color: #fff;\n  font-weight: 500;\n  font-size: 20px;\n  line-height: 36px;\n  letter-spacing: 0.15px;\n  color: #35323e;\n}\nbody main .statistics-input .input #error {\n  font-weight: 500;\n  font-size: 16px;\n  line-height: 18px;\n  letter-spacing: 0.109091px;\n  color: #F46363;\n  position: absolute;\n  left: 7%;\n  bottom: 20px;\n  display: none;\n}\nbody main .statistics-input .input button {\n  border: 1px solid transparent;\n  background-color: #2acfcf;\n  width: 100%;\n  border-radius: 10px;\n  max-width: 188px;\n  height: 64px;\n  font-weight: 700;\n  font-size: 20px;\n  line-height: 30px;\n  letter-spacing: none;\n  color: #fff;\n  cursor: pointer;\n}\nbody main .statistics-input .input button:hover, body main .statistics-input .input button:focus-visible {\n  background-color: #9AE3E3;\n}\nbody main .statistics-input .shortLinks {\n  margin-top: 0px;\n  max-width: 1110px;\n  width: 100%;\n  background-color: transparent;\n  display: flex;\n  align-items: none;\n  justify-content: none;\n  flex-direction: column;\n  gap: 16px;\n}\nbody main .statistics-input .shortLinks #showLink {\n  border-radius: 5px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  flex-direction: row;\n  padding: 18px 24px;\n  background-color: #fff;\n}\nbody main .statistics-input .shortLinks #showLink .oldLink {\n  font-weight: 500;\n  font-size: 20px;\n  line-height: 36px;\n  letter-spacing: 0.15px;\n  color: #35323e;\n}\nbody main .statistics-input .shortLinks #showLink .link {\n  display: flex;\n  align-items: center;\n  justify-content: none;\n  flex-direction: row;\n  gap: 24px;\n}\nbody main .statistics-input .shortLinks #showLink .link .res {\n  font-weight: 500;\n  font-size: 20px;\n  line-height: 36px;\n  letter-spacing: -0.15px;\n  color: #2acfcf;\n}\nbody main .statistics-input .shortLinks #showLink .link #copy {\n  width: 103px;\n  height: 40px;\n  cursor: pointer;\n  background-color: #2acfcf;\n  border-radius: 5px;\n  border: 1px solid transparent;\n  font-weight: 700;\n  font-size: 15px;\n  line-height: 22px;\n  letter-spacing: none;\n  color: #fff;\n}\nbody main .statistics-input .shortLinks #showLink .link #copy:hover, body main .statistics-input .shortLinks #showLink .link #copy:focus-visible {\n  background-color: #9AE3E3;\n}\nbody main .advanced-statistics {\n  padding-bottom: 80px;\n  margin: 0 auto;\n  max-width: 1110px;\n  height: auto;\n  width: 100%;\n  background-color: transparent;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  text-align: center;\n}\nbody main .advanced-statistics .content {\n  max-width: 540px;\n}\nbody main .advanced-statistics .content h2 {\n  font-weight: 700;\n  font-size: 40px;\n  line-height: 48px;\n  letter-spacing: -1px;\n  color: #35323e;\n  padding-bottom: 28px;\n}\nbody main .advanced-statistics .content p {\n  font-weight: 500;\n  font-size: 18px;\n  line-height: 32px;\n  letter-spacing: 0.122727px;\n  color: #9e9aa7;\n}\nbody main .advanced-statistics .details {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: row;\n  gap: 20px;\n  padding: 90px 0 120px 0;\n  position: relative;\n}\nbody main .advanced-statistics .details .brand,\nbody main .advanced-statistics .details .fully,\nbody main .advanced-statistics .details .detailed {\n  display: flex;\n  align-items: flex-start;\n  justify-content: flex-start;\n  flex-direction: column;\n  gap: 10px;\n  max-width: 350px;\n  width: 100%;\n  height: auto;\n  background-color: #fff;\n  border-radius: 5px;\n  padding: 67px 32px 44px 32px;\n  position: relative;\n  text-align: left;\n  z-index: 2;\n}\nbody main .advanced-statistics .details .brand:hover,\nbody main .advanced-statistics .details .fully:hover,\nbody main .advanced-statistics .details .detailed:hover {\n  transform: scale(1.04);\n}\nbody main .advanced-statistics .details .brand:hover .img,\nbody main .advanced-statistics .details .fully:hover .img,\nbody main .advanced-statistics .details .detailed:hover .img {\n  background-color: #2acfcf;\n}\nbody main .advanced-statistics .details .brand:hover .img img,\nbody main .advanced-statistics .details .fully:hover .img img,\nbody main .advanced-statistics .details .detailed:hover .img img {\n  transform: rotateY(360deg);\n  filter: invert(0%) sepia(5%) saturate(0%) hue-rotate(215deg) brightness(156%) contrast(100%);\n}\nbody main .advanced-statistics .details .brand .img,\nbody main .advanced-statistics .details .fully .img,\nbody main .advanced-statistics .details .detailed .img {\n  position: absolute;\n  top: -40px;\n  padding: 20px;\n  background-color: #3b3054;\n  border-radius: 50%;\n}\nbody main .advanced-statistics .details .brand h3,\nbody main .advanced-statistics .details .fully h3,\nbody main .advanced-statistics .details .detailed h3 {\n  font-weight: 700;\n  font-size: 22px;\n  line-height: 33px;\n  letter-spacing: none;\n  color: #35323e;\n}\nbody main .advanced-statistics .details .brand p,\nbody main .advanced-statistics .details .fully p,\nbody main .advanced-statistics .details .detailed p {\n  font-weight: 500;\n  font-size: 12px;\n  line-height: 26px;\n  letter-spacing: none;\n  color: #9e9aa7;\n}\nbody main .advanced-statistics .details .detailed {\n  bottom: -40px;\n}\nbody main .advanced-statistics .details .fully {\n  bottom: -80px;\n}\nbody main .advanced-statistics .details:before {\n  content: "";\n  width: 700px;\n  height: 10px;\n  bottom: 200px;\n  background-color: #2acfcf;\n  z-index: 1;\n  position: absolute;\n}\nbody main .boost {\n  background: url('+h+") #3b3054 repeat-x;\n  background-size: cover;\n  width: 100%;\n  padding: 57px 24px;\n  height: auto;\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n}\nbody main .boost h2 {\n  font-weight: 700;\n  font-size: 40px;\n  line-height: 48px;\n  letter-spacing: -1px;\n  color: #fff;\n  margin-bottom: 32px;\n}\nbody main .boost a {\n  border-radius: 28px;\n  background-color: #2acfcf;\n  width: 197px;\n  height: 57px;\n  font-weight: 700;\n  font-size: 20px;\n  line-height: 30px;\n  letter-spacing: none;\n  color: #fff;\n  display: grid;\n  place-content: center;\n  text-decoration: none;\n}\nbody main .boost a:hover, body main .boost a:focus-visible {\n  background-color: #9AE3E3;\n}\nbody footer {\n  background-color: #232127;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: row;\n  width: 100%;\n}\nbody footer .container {\n  max-width: 1440px;\n  padding: 70px 164px;\n  width: 100%;\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  flex-direction: row;\n}\nbody footer .container img {\n  filter: invert(100%) sepia(0%) saturate(235%) hue-rotate(208deg) brightness(118%) contrast(100%);\n}\nbody footer .container .grid-items {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n}\nbody footer .container .grid-items .column1,\nbody footer .container .grid-items .column2,\nbody footer .container .grid-items .column3 {\n  display: flex;\n  align-items: flex-start;\n  justify-content: flex-start;\n  flex-direction: column;\n}\nbody footer .container .grid-items .column1 p,\nbody footer .container .grid-items .column2 p,\nbody footer .container .grid-items .column3 p {\n  font-weight: 700;\n  font-size: 16px;\n  line-height: 24px;\n  letter-spacing: -0.25px;\n  color: #fff;\n  padding-bottom: 28px;\n}\nbody footer .container .grid-items .column1 a,\nbody footer .container .grid-items .column2 a,\nbody footer .container .grid-items .column3 a {\n  text-decoration: none;\n  font-weight: 500;\n  font-size: 15px;\n  line-height: 22px;\n  letter-spacing: -0.234375px;\n  color: #bfbfbf;\n  padding-bottom: 10px;\n}\nbody footer .container .grid-items .column1 a:hover, body footer .container .grid-items .column1 a:focus-visible,\nbody footer .container .grid-items .column2 a:hover,\nbody footer .container .grid-items .column2 a:focus-visible,\nbody footer .container .grid-items .column3 a:hover,\nbody footer .container .grid-items .column3 a:focus-visible {\n  color: #2acfcf;\n}\nbody footer .container .grid-items .column4 {\n  display: flex;\n  align-items: flex-start;\n  justify-content: flex-start;\n  flex-direction: row;\n  gap: 24px;\n}\nbody footer .container .grid-items .column4 .socialIcon {\n  filter: invert(0%) !important;\n}\nbody footer .container .grid-items .column4 .socialIcon:hover, body footer .container .grid-items .column4 .socialIcon:focus-visible {\n  filter: none !important;\n}\n\n@media (max-width: 1300px) {\n  #error {\n    bottom: 5px !important;\n  }\n  .shortLinks {\n    margin-top: 40px !important;\n  }\n  header {\n    padding: 55px 87.5px !important;\n  }\n  header .content {\n    gap: 12px !important;\n  }\n  header .content p {\n    font-size: 23px;\n    max-width: 400px;\n  }\n  header .hero-image {\n    width: 683px !important;\n    height: 432px !important;\n  }\n  header .hero-image img {\n    width: 683px;\n    height: 432px;\n  }\n  .statistics-input {\n    padding: 28px 20px 152px 20px !important;\n  }\n  .advanced-statistics {\n    padding: 0 20px;\n  }\n  .input {\n    padding: 25px !important;\n    width: 95% !important;\n    height: auto !important;\n  }\n  .input input {\n    height: 68px !important;\n    padding: 10px !important;\n  }\n  h1 {\n    max-width: 440px;\n    font-size: 56px !important;\n  }\n  footer .container {\n    gap: 40px;\n  }\n}\n@media (min-width: 1300px) {\n  .relative {\n    position: relative;\n    margin-top: 80px !important;\n  }\n}\n@media (max-width: 956px) {\n  #error {\n    left: 27px !important;\n    bottom: 76px !important;\n  }\n  .statistics-input {\n    padding: 68px 20px 80px 20px !important;\n  }\n  .input {\n    background: url("+g+") #3b3054 no-repeat !important;\n    background-size: cover !important;\n    display: flex;\n    align-items: center;\n    justify-content: none !important;\n    flex-direction: column !important;\n  }\n  .input input,\n.input button {\n    width: 100% !important;\n    max-width: none !important;\n    height: 48px !important;\n  }\n  #showLink {\n    display: flex;\n    align-items: center;\n    justify-content: center !important;\n    flex-direction: column !important;\n    padding: 0px !important;\n  }\n  #showLink .oldLink {\n    font-weight: 500;\n    font-size: 16px !important;\n    line-height: 36px;\n    letter-spacing: 0.12px !important;\n    color: #35323e;\n    border-bottom: 1px solid #000;\n    padding: 18px 24px 0px 24px;\n    text-align: center;\n  }\n  #showLink .link {\n    display: flex;\n    align-items: none !important;\n    justify-content: flex-start;\n    flex-direction: column !important;\n    width: 100%;\n    gap: 12px !important;\n    padding: 18px 24px;\n  }\n  #showLink .link .res {\n    font-weight: 500;\n    font-size: 16px;\n    line-height: 36px;\n    letter-spacing: 0.12px;\n    color: #2acfcf;\n  }\n  #showLink .link #copy {\n    width: 100% !important;\n    height: 40px;\n    border-radius: 5px;\n    border: 1px solid transparent;\n    font-weight: 700;\n    font-size: 15px;\n    line-height: 22px;\n    letter-spacing: none;\n    color: #fff;\n  }\n  .overflowImg {\n    flex-direction: column-reverse !important;\n  }\n  .overflowImg .hero-image {\n    position: relative !important;\n    right: -120px !important;\n  }\n  .overflowImg .hero-image img {\n    position: absolute;\n    overflow: visible;\n  }\n  .boost {\n    background: url("+x+") #3b3054 100% no-repeat !important;\n  }\n  .boost h2 {\n    font-weight: 700;\n    font-size: 28px !important;\n    line-height: 48px !important;\n    letter-spacing: -0.7px;\n    color: #fff;\n    text-align: center;\n  }\n  h1 {\n    font-weight: 700 !important;\n    font-size: 42px !important;\n    line-height: 48px !important;\n    letter-spacing: -1.05px !important;\n    color: none;\n    text-align: center;\n  }\n  header {\n    padding: 55px 24px 0px 24px !important;\n  }\n  header .content {\n    display: flex;\n    align-items: center !important;\n    justify-content: center !important;\n    flex-direction: column;\n  }\n  header .content p {\n    font-weight: 500;\n    font-size: 18px !important;\n    line-height: 30px !important;\n    letter-spacing: 0.122727px !important;\n    color: none;\n    text-align: center !important;\n  }\n  .details {\n    flex-direction: column !important;\n  }\n  .details::before {\n    top: 500px;\n    transform: rotate(90deg);\n  }\n  .details .brand,\n.details .fully,\n.details .detailed {\n    display: flex;\n    align-items: center !important;\n    justify-content: center !important;\n    flex-direction: column;\n    text-align: center !important;\n  }\n  footer .container {\n    display: flex;\n    align-items: center !important;\n    justify-content: center !important;\n    flex-direction: column !important;\n    padding: 70px 0px !important;\n  }\n  footer .container .grid-items {\n    display: flex !important;\n    align-items: center !important;\n    justify-content: space-evenly !important;\n    flex-direction: column !important;\n    text-align: center !important;\n    gap: 20px;\n  }\n  footer .container .grid-items .column1,\nfooter .container .grid-items .column2,\nfooter .container .grid-items .column3 {\n    display: flex !important;\n    align-items: center !important;\n    justify-content: space-evenly !important;\n    flex-direction: column !important;\n    text-align: center !important;\n  }\n}\n@media (max-width: 600px) {\n  #showLink {\n    word-break: break-all;\n    width: 100%;\n  }\n  #showLink .oldLink {\n    word-break: break-all;\n  }\n  .shortLinks {\n    margin-top: 70px !important;\n  }\n  .overflowImg {\n    margin: 60px auto 152px auto !important;\n  }\n  .overflowImg .hero-image {\n    right: -78px !important;\n  }\n  .overflowImg .hero-image,\n.overflowImg img {\n    width: 460px !important;\n    height: 337px !important;\n  }\n  .input {\n    width: 90% !important;\n  }\n  header .container {\n    position: relative;\n  }\n  header .logo {\n    position: absolute;\n    top: 0px;\n  }\n  nav {\n    justify-content: space-between !important;\n  }\n  #menu {\n    display: block !important;\n  }\n  .nav-content {\n    display: flex !important;\n    align-items: center !important;\n    justify-content: center !important;\n    flex-direction: column !important;\n    height: 0px;\n    visibility: hidden;\n    position: relative;\n    bottom: -50px;\n    z-index: -1;\n  }\n  .nav-content li {\n    display: none !important;\n    opacity: 0;\n  }\n  .nav-mobile {\n    padding: 40px 24px;\n    opacity: 1;\n    transition: 0.8s;\n    z-index: 2;\n    height: 383px !important;\n    visibility: visible;\n    background-color: #3b3054;\n    border-radius: 10px;\n    gap: 20px;\n  }\n  .nav-mobile .nav-links {\n    border-bottom: 1px solid rgba(255, 255, 255, 0.329);\n    padding-bottom: 20px;\n    width: 100%;\n  }\n  .nav-mobile .nav-links,\n.nav-mobile .nav-links2 {\n    opacity: 1 !important;\n    display: flex !important;\n    align-items: center;\n    justify-content: none !important;\n    flex-direction: column;\n    width: 100%;\n  }\n  .nav-mobile .nav-links a,\n.nav-mobile .nav-links2 a {\n    font-weight: 700 !important;\n    font-size: 18px !important;\n    line-height: 27px !important;\n    letter-spacing: none !important;\n    color: #fff !important;\n  }\n  .nav-mobile .signUp {\n    width: 100% !important;\n  }\n}\n.error {\n  border: 3px solid #f46262 !important;\n}\n.error::placeholder {\n  color: #f46262 !important;\n}\n\n.errorTxt {\n  display: block !important;\n}\n\n.copied {\n  background-color: #3b3054 !important;\n}\n\n.disabled {\n  background-color: #3b3054 !important;\n}\n\n#menu {\n  position: absolute;\n  top: 0px;\n  right: 0px;\n  display: none;\n  border: 1px solid transparent;\n  background-color: transparent;\n  cursor: pointer;\n}\n#menu img {\n  width: 40px;\n  height: auto;\n}\n",""]);const b=f},645:n=>{n.exports=function(n){var t=[];return t.toString=function(){return this.map((function(t){var e="",i=void 0!==t[5];return t[4]&&(e+="@supports (".concat(t[4],") {")),t[2]&&(e+="@media ".concat(t[2]," {")),i&&(e+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),e+=n(t),i&&(e+="}"),t[2]&&(e+="}"),t[4]&&(e+="}"),e})).join("")},t.i=function(n,e,i,o,a){"string"==typeof n&&(n=[[null,n,void 0]]);var r={};if(i)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(r[c]=!0)}for(var d=0;d<n.length;d++){var l=[].concat(n[d]);i&&r[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),e&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=e):l[2]=e),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),t.push(l))}},t}},667:n=>{n.exports=function(n,t){return t||(t={}),n?(n=String(n.__esModule?n.default:n),/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),t.hash&&(n+=t.hash),/["'() \t\n]|(%20)/.test(n)||t.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n):n}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var t=[];function e(n){for(var e=-1,i=0;i<t.length;i++)if(t[i].identifier===n){e=i;break}return e}function i(n,i){for(var a={},r=[],s=0;s<n.length;s++){var c=n[s],d=i.base?c[0]+i.base:c[0],l=a[d]||0,p="".concat(d," ").concat(l);a[d]=l+1;var m=e(p),f={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==m)t[m].references++,t[m].updater(f);else{var u=o(f,i);i.byIndex=s,t.splice(s,0,{identifier:p,updater:u,references:1})}r.push(p)}return r}function o(n,t){var e=t.domAPI(t);return e.update(n),function(t){if(t){if(t.css===n.css&&t.media===n.media&&t.sourceMap===n.sourceMap&&t.supports===n.supports&&t.layer===n.layer)return;e.update(n=t)}else e.remove()}}n.exports=function(n,o){var a=i(n=n||[],o=o||{});return function(n){n=n||[];for(var r=0;r<a.length;r++){var s=e(a[r]);t[s].references--}for(var c=i(n,o),d=0;d<a.length;d++){var l=e(a[d]);0===t[l].references&&(t[l].updater(),t.splice(l,1))}a=c}}},569:n=>{var t={};n.exports=function(n,e){var i=function(n){if(void 0===t[n]){var e=document.querySelector(n);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(n){e=null}t[n]=e}return t[n]}(n);if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(e)}},216:n=>{n.exports=function(n){var t=document.createElement("style");return n.setAttributes(t,n.attributes),n.insert(t,n.options),t}},565:(n,t,e)=>{n.exports=function(n){var t=e.nc;t&&n.setAttribute("nonce",t)}},795:n=>{n.exports=function(n){var t=n.insertStyleElement(n);return{update:function(e){!function(n,t,e){var i="";e.supports&&(i+="@supports (".concat(e.supports,") {")),e.media&&(i+="@media ".concat(e.media," {"));var o=void 0!==e.layer;o&&(i+="@layer".concat(e.layer.length>0?" ".concat(e.layer):""," {")),i+=e.css,o&&(i+="}"),e.media&&(i+="}"),e.supports&&(i+="}");var a=e.sourceMap;a&&"undefined"!=typeof btoa&&(i+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),t.styleTagTransform(i,n,t.options)}(t,n,e)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(t)}}}},589:n=>{n.exports=function(n,t){if(t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}},372:(n,t,e)=>{n.exports=e.p+"772154c9b0e451733f5e.svg"},219:(n,t,e)=>{n.exports=e.p+"4b04bd89ea775da3deff.svg"},988:(n,t,e)=>{n.exports=e.p+"0d9742f433f4b0d8752b.svg"},332:(n,t,e)=>{n.exports=e.p+"41c34b33a14a3077e506.svg"}},t={};function e(i){var o=t[i];if(void 0!==o)return o.exports;var a=t[i]={id:i,exports:{}};return n[i](a,a.exports,e),a.exports}e.m=n,e.n=n=>{var t=n&&n.__esModule?()=>n.default:()=>n;return e.d(t,{a:t}),t},e.d=(n,t)=>{for(var i in t)e.o(t,i)&&!e.o(n,i)&&Object.defineProperty(n,i,{enumerable:!0,get:t[i]})},e.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),e.o=(n,t)=>Object.prototype.hasOwnProperty.call(n,t),(()=>{var n;e.g.importScripts&&(n=e.g.location+"");var t=e.g.document;if(!n&&t&&(t.currentScript&&(n=t.currentScript.src),!n)){var i=t.getElementsByTagName("script");i.length&&(n=i[i.length-1].src)}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),e.p=n})(),e.b=document.baseURI||self.location.href,e.nc=void 0,(()=>{var n=e(379),t=e.n(n),i=e(795),o=e.n(i),a=e(569),r=e.n(a),s=e(565),c=e.n(s),d=e(216),l=e.n(d),p=e(589),m=e.n(p),f=e(402),u={};u.styleTagTransform=m(),u.setAttributes=c(),u.insert=r().bind(null,"head"),u.domAPI=o(),u.insertStyleElement=l(),t()(f.Z,u),f.Z&&f.Z.locals&&f.Z.locals;var h=e(538),g={};function x(n){const t=n.currentTarget.parentNode.children[0].innerText;document.querySelectorAll("#copy").forEach((n=>{n.classList.remove("copied"),n.innerText="Copy"})),n.currentTarget.classList.add("copied"),"Copy"===n.currentTarget.innerText?(n.currentTarget.innerText="copied!",navigator.clipboard.writeText(t)):n.currentTarget.innerText="Copy"}g.styleTagTransform=m(),g.setAttributes=c(),g.insert=r().bind(null,"head"),g.domAPI=o(),g.insertStyleElement=l(),t()(h.Z,g),h.Z&&h.Z.locals&&h.Z.locals;class b{constructor(n){this.full_short_link=n}}const y=document.getElementById("menu");y.addEventListener("click",void y.addEventListener("click",(()=>{document.querySelector(".nav-content").classList.toggle("nav-mobile")})));let v=document.getElementById("generate");v.addEventListener("click",(function(){const n=document.getElementById("url"),t=document.getElementById("error");""===n.value?(n.classList.add("error"),t.classList.add("errorTxt")):(function(){document.getElementById("url").classList.remove("error"),document.getElementById("error").classList.remove("errorTxt"),document.querySelector(".shortLinks").classList.add("relative");const n=document.createElement("div");n.id="showLink";const t=document.querySelector("#url").value,e=document.createElement("p");e.className="oldLink",e.innerText=t;const i=document.createElement("div");i.className="link";const o=document.createElement("p");o.className="res",async function(n){try{let t=await async function(n){const t=await fetch("https://api.shrtco.de/v2/shorten?url="+n);return(await t.json()).result.full_short_link}(n);r(new b(t).full_short_link)}catch(n){r("Please enter a valid link!"),e.innerText="Error!"}}(t);const a=document.createElement("button");function r(n){o.innerText=n}a.innerText="Copy",a.id="copy",a.addEventListener("click",(n=>{x(n)})),i.append(o,a),n.append(e,i),document.querySelector(".shortLinks").appendChild(n),v.setAttribute("disabled",""),v.classList.add("disabled"),v.innerText="Wait!",setTimeout((()=>{v.removeAttribute("disabled"),v.classList.remove("disabled"),v.innerText="Shorten it!"}),2e3)}(),setTimeout((()=>{!async function(n,t){let e=[];localStorage.hasOwnProperty("linksLocal")&&(e=JSON.parse(localStorage.getItem("linksLocal"))),e.push({old:n?.innerText,newLink:t?.innerText}),localStorage.setItem("linksLocal",JSON.stringify(e))}(function(){const n=[...document.querySelectorAll(".oldLink")];return n[n.length-1]}(),function(){const n=[...document.querySelectorAll(".res")];return n[n.length-1]}())}),1500))})),window.addEventListener("load",(()=>{!function(){const n=document.querySelector(".shortLinks");localStorage.hasOwnProperty("linksLocal")&&(document.querySelector(".shortLinks").classList.add("relative"),JSON.parse(localStorage.getItem("linksLocal")).forEach((t=>{n.append(function(n,t){const e=document.createElement("div");e.id="showLink";const i=document.createElement("p");i.innerText=n,i.className="oldLink";const o=document.createElement("div");o.className="link";const a=document.createElement("p");a.innerText=t,a.className="res";const r=document.createElement("button");return r.id="copy",r.innerText="Copy",r.addEventListener("click",(n=>{x(n)})),o.append(a,r),e.append(i,o),e}(t.old,t.newLink))})))}()}))})()})();