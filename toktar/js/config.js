/*
 * Toktar Fight Club: деректерді осы жерден өзгертіңіз.
 * Мәні "" болса, ол элемент сайтта көрсетілмейді.
 */
window.TFC_CONFIG = {
  // Ашылу күні (ISO форматы). Белгілі болса, сайтта кері санақ шығады: "2026-12-01T10:00:00+05:00"
  openingDate: "",

  // Демо режимі: форма деректерді ешқайда жібермейді, төменде "Демо-концепт" белгісі шығады.
  // Клуб мақұлдап, сайт ресми түрде Netlify-ға шыққанда false қылыңыз.
  demo: true,

  instagramClub: "https://www.instagram.com/toktarfight_club/",
  instagramFounder: "https://www.instagram.com/erkebulan_toktar/",
  phone: "",                      // "+7 700 000 00 00"
  whatsapp: "",                   // "77000000000": тек цифрлар
  address: { kk: "", ru: "" },    // "Алматы қ., ... көшесі, 1"
  mapEmbed: "",                   // Google Maps → Share → Embed a map → src сілтемесі

  // Апталық кесте (демо). days: 0=Дс ... 6=Жс; p = бағыт кілті (prog_1_t ...)
  schedule: [
    { time: "07:00", p: "prog_3_t", days: [0, 2, 4] },
    { time: "10:00", p: "prog_5_t", days: [0, 1, 2, 3, 4, 5] },
    { time: "16:00", p: "prog_4_t", days: [0, 2, 4] },
    { time: "17:00", p: "prog_4_t", days: [1, 3, 5] },
    { time: "18:30", p: "prog_1_t", days: [0, 1, 2, 3, 4] },
    { time: "20:00", p: "prog_2_t", days: [0, 2, 4] },
    { time: "20:00", p: "prog_1_t", days: [1, 3] },
    { time: "12:00", p: "prog_1_t", days: [5] },
    { time: "14:00", p: "prog_2_t", days: [5] },
    { time: "11:00", p: "prog_3_t", days: [6] }
  ]
};
