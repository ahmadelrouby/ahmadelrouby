var names = ["Ibrahim Mohamed Ibrahim Mourad",
"Abdelrahman Elsayed Ali Eltawabty",
"khaled Sherif Mahmoud Elbialy",
"Muhammad Khaled El sheikh",
"Amr Mohamed Sayed Mohamed Ibrahim",
"Youssef Mohamed Mohamed El sayed",
"Mahmoud Ahmed Attia Awwad El-feky",
"Bavly Atef Isaac Mikhail",
"Heba EL Sayed  Mohamed Mohamed",
"Maged Mohamed Mohamed Abd El-Rahman",
"Mostafa Tarek ElShazly",
"Khaled Hussien Ahmed Abdelal",
"Khalid Mohammed Ibrahim Mohammed Elmesallamy",
"Aly Mohamed Abd El-Rahman",
"Tarek Farahat Fahmy Farahat Hassan",
"Omar Moanes Ahmed Ali Eid",
"Abdullah Mohamed El-Fayomi",
"Ahmed Mohamed Kamal Abouelanin Nasef",
"Ayman Farook Mahmoud Abo zaid Sokar",
"Hesham Mohsen Awad",
"Abdelrahman Ahmed Ebrahim Badr",
"Islam Mahmoud Gaber",
"kerolos samir danial",
"Mostafa Gamal Gomaa",
"Omar Wael Muhammad",
"Mina said fawzi Beshay",
"Nora Noah Omar Ahmed",
"Mahmoud Salama Salama Ali",
"Muhammad Elsayed Elsayed Abu-Jabal",
"Ekram Lamey Aziz",
"MOHAMED ABDALLA MOHAMED ALI ELGENDI",
"Ahmed Mohamed Sobhy Mohamed",
"Khaled Mohamed Nageb Ali Assasa",
"Youmna Ramadan Ahmed Hammad",
"Ibrahim Elsayed Mohamed Ahmed",
"Farah Mohamed Abdelaziz Mohamed",
"Mohammed Nasr Mohammed Ghazi",
"Mariam Ismaeil Abdelsalam Eleraky",
"Maha Mohamed Ramadan Ali Moussa",
"Mai Essam Mohamed El Haty",
"Menna Mohammed Ahmad Dessokey",
"Mahmoud Essam El-den Saad Abd El-aziz",
"Aya Shaker Farag",
"Nazira Sobhy Hassen Mohamed",
"Mahmoud Gamal Sadek Mohamed",
"Youssef Ahmed Hammad",
"Sahar Hassan Nooh Sayed",
"Islam Gamal Abd El-nasser Othman",
"Sumaiya Yahia Rashad Muhammed",
"Ahmed mohamed abdellatef eissa",
"Abdelrahman Abdelghany Belkas Abdelghany Eltawabti",
"Hesham Amr Mohamed Mahfouz Elgharabawy",
"Abdelaziz Essa Ebrahim",
"Ahmed Ahmed Abdulrahman abdelfatah",
"Ammar yasser ibrahim fathy",
"Islam Elsayed Elhussiny",
"DiaaEldin Magdi Amin AbdElmaksoud",
"Adel Tawfik Safye Eldin Ghanem",
"Mohamed Ashraf Kamel Zaalouk",
"Omar Ashraf Ahmad Mohamed Hammad",
"Mahmoud Ahmed Youssef",
"Ahmed Ramadan Shasha",
"Abdelrahman Nabil Ragab Mohamed Elhoshy",
"Mahmoud Mohamed Mosaad",
"Israa Nagy Sayed Mousa",
"Mohamed Ebrahim Abdalla Morsy",
"Somaia Mostafa Mohammed Elbaradey",
"Hamza Mohamed Algohary",
"Khaled Mohamed Mostafa Elbahr",
"Asmaa Hamdy Mohamed",
"Omar Khaled Fahmy Fawy",
"Antonios Sedhom Nasseef Ibrahim",
"Hazem Wahed",
"Ahmed Yossry Ismail",
"Khaled Saied Ismail Elbangy",
"Khaled Bahaa Elbadawy",
"Ali Mostafa Ali Darrag",
"Abdullah Mahmoud Bayom Ali",
"Mohammed Ibrahim Owies",
"Mohamed Osama Abdelraouf Ali Salama",
"Mahmoud Abdelshafy Elsayed Ghoniem",
"Mahmoud Sabry Mahmoud",
"Ebrahim Atef Basha",
"Gamal Magdy Abdelhameed Ali Lashin",
"Hossam ElDin Shapan Ashour",
"Ihab Tag Elsehmawy",
"Mahmoud Mostafa Mohamed Sayed",
"Tarek Mohamed Salah Elmallahy",
"Eman Reda Soliman Ahmed",
"Toka Ashraf Ahmed Halawa",
"Abdelrahman Mohamed Abdelalim Kham",
"Maisara Mohamed abd El-wahab abd El-maqsoud",
"Mohamed Khaled Gamal El-Din",
"Ali Metwally Fahmy",
"Mostafa Ahmed Abd El-razik",
"Ahmed Amr Elsayed Emam",
"Adham Ali Muhammad Abdelfattah",
"Ahmed Nasr Eldien",
"Ahmed Nasser Abdel-Moneum Emam",
"Mahmoud Saad Mohamed",
"Mohamed Ahmed Abdulhakim Elshamouty",
"Shehab Ahmed Bassiouni Ahmed",
"Amr Mohey-Eldin Mohamed Mahmoud Zayet"]

var i = 0;
var current = document.getElementById('current');
var first = document.getElementById('first');
var second = document.getElementById('second');
var third = document.getElementById('third');

function render(){
  current.innerHTML = names[i];
  if(i + 1 < names.length)
    first.innerHTML = names[i+1];
  else
    first.innerHTML = "";
  if(i + 2 < names.length)
    second.innerHTML = names[i+2];
  else
    second.innerHTML = "";
  if(i + 3 < names.length)
    third.innerHTML = names[i+3];
  else
    third.innerHTML = "";
}

function inc(){
  if(i < names.length - 1)
    i++;
  render();
}


function dec(){
  if(i > 0)
    i--;
  render();
}

render()
