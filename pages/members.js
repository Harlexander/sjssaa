import React from 'react';
import PageHeader from "../components/Header/PageHeader";
import IndexNavbar from '../components/Navbar/Navbar';

const membersData = [
    {
     "set": "1986",
     "firstname": "Quadri",
     "lastname": "Abiodun",
     "email": "abiodunbabaayo@gmail.com"
    },
    {
     "set": 1986,
     "firstname": "Adegboyega ",
     "lastname": "Adeshina ",
     "email": "adeshinagboyega@yahoo.com"
    },
    {
     "set": 1986,
     "firstname": "Waheed",
     "lastname": "Adisa",
     "email": "Waheedadisa10@yahoo.com"
    },
    {
     "set": 1986,
     "firstname": "Greatman",
     "lastname": "Aideloje ",
     "email": "greatmanaideloje@gmail.com "
    },
    {
     "set": "1986",
     "firstname": "Jacob",
     "lastname": "Ajayi",
     "email": "Judituns@yahoo.com"
    },
    {
     "set": 1986,
     "firstname": "Lateef ",
     "lastname": "Akinbode",
     "email": "Oj11212@gmail.com "
    },
    {
     "set": 1986,
     "firstname": "Akinyele",
     "lastname": "Akinlade ",
     "email": "dratakinlade@gmail.com "
    },
    {
     "set": 1986,
     "firstname": "Emeka",
     "lastname": "Akpapuna",
     "email": "micmar682000@yahoo.es"
    },
    {
     "set": 1986,
     "firstname": "Raymond",
     "lastname": "Asadu",
     "email": "rayasadu@yahoo.com"
    },
    {
     "set": 1986,
     "firstname": "Tony",
     "lastname": "Ashikodi ",
     "email": "tonyashikodi@aol.com"
    },
    {
     "set": "1986",
     "firstname": "Joel kola",
     "lastname": "Banire ",
     "email": "Kolajoelb@gmail.com"
    },
    {
     "set": 1986,
     "firstname": "Okposin ",
     "lastname": "Bassey Raymond ",
     "email": "gokeytravels@gmail.com "
    },
    {
     "set": 1986,
     "firstname": "Anthony ",
     "lastname": "Ebhojaye ",
     "email": "anthebho2@gmail.com "
    },
    {
     "set": 1986,
     "firstname": "Emmanuel (Ozonuwe)",
     "lastname": "Ejakita",
     "email": "emmanuelejakita@gmail.com"
    },
    {
     "set": 1986,
     "firstname": "Abimbola",
     "lastname": "Esuola",
     "email": "bimbs_12196@yahoo.com"
    },
    {
     "set": 1986,
     "firstname": "Lukmon",
     "lastname": "Fasasi",
     "email": "lukmonfasasi5@gmail.com"
    },
    {
     "set": "1986",
     "firstname": "Raphael",
     "lastname": "Gbadeyan",
     "email": "raphealgbadeyan80@gmail.com"
    },
    {
     "set": "1986",
     "firstname": "Blessing ",
     "lastname": "Guobadia ",
     "email": "beguobadia@yahoo.co.uk"
    },
    {
     "set": 1986,
     "firstname": "Ismail",
     "lastname": "Hassan ",
     "email": "smarthas@yahoo.co.uk"
    },
    {
     "set": 1986,
     "firstname": "Patrick",
     "lastname": "Iloba",
     "email": "ilobapatrick69@gmail.com"
    },
    {
     "set": "1986",
     "firstname": "Mokwenye",
     "lastname": "Joseph",
     "email": "joemokson@yahoo.co.uk"
    },
    {
     "set": 1986,
     "firstname": "Keem",
     "lastname": "Kehinde",
     "email": "keemkehinde@gmail.com"
    },
    {
     "set": 1986,
     "firstname": "Adewunmi",
     "lastname": "Kuye",
     "email": "wunmmykuye@gmail.com"
    },
    {
     "set": "1986",
     "firstname": "Waheed",
     "lastname": "Majolagbe"
    },
    {
     "set": 1986,
     "firstname": "Chiedu",
     "lastname": "Makolo",
     "email": "rexjcmako@gmail.com"
    },
    {
     "set": 1986,
     "firstname": "Solomon",
     "lastname": "Nkatta",
     "email": "sinaieyeclinic98@gmail.com"
    },
    {
     "set": 1986,
     "firstname": "Kelechukwu",
     "lastname": "Nwankwo",
     "email": "kelenwankwo@gmail.com"
    },
    {
     "set": 1986,
     "firstname": "Victor ",
     "lastname": "Nwanze ",
     "email": "victornwanze@gmail.com"
    },
    {
     "set": "1986",
     "firstname": "Augustine ",
     "lastname": "Oboh",
     "email": "Autyno@yahoo.co.uk "
    },
    {
     "set": "1986",
     "firstname": "Godwin-Charles",
     "lastname": "Ogbeide",
     "email": "Leadershipconsultant@yahoo.com"
    },
    {
     "set": 1986,
     "firstname": "Oladipupo",
     "lastname": "Otuyelu",
     "email": "dip_kad2013@yahoo.com"
    },
    {
     "set": 1986,
     "firstname": "Victor",
     "lastname": "Shotade",
     "email": "victor.shotade@yahoo.com"
    },
    {
     "set": 1986,
     "firstname": "Ieo A",
     "lastname": "Usman",
     "email": "leousman2@gmail.com"
    },
    {
     "set": "1986",
     "firstname": "Patrick ",
     "lastname": "Uzuh",
     "email": "uzup35@yahoo.com"
    },
    {
     "set": "1986\/1987",
     "firstname": "Akeem",
     "lastname": "Ajayi",
     "email": "akeemajayi@yahoo.com"
    },
    {
     "set": 1987,
     "firstname": "Michael",
     "lastname": "Adebayo",
     "email": "daremosudi@yahoo.com"
    },
    {
     "set": 1987,
     "firstname": "Olayinka ",
     "lastname": "Adedoyin Erifoluwa ",
     "email": "Brownmavel8@gmail.com "
    },
    {
     "set": 1987,
     "firstname": "Segun",
     "lastname": "Adenuga",
     "email": "segunadenuga@hotmail.com"
    },
    {
     "set": 1987,
     "firstname": "Olasunkanmi ",
     "lastname": "Aderibigbe ",
     "email": "dotunaderibigbe@gmail.com "
    },
    {
     "set": 1987,
     "firstname": "Adeyemi",
     "lastname": "Adetoro",
     "email": "adeyemiadetoro1@yahoo.co.uk"
    },
    {
     "set": 1987,
     "firstname": "Olorunseun",
     "lastname": "Aduragbemi",
     "email": "adurayemi4eva@gmail.com"
    },
    {
     "set": "1987",
     "firstname": "Dare",
     "lastname": "Agbonifo ",
     "email": "dare_agbonifo@hotmail.com "
    },
    {
     "set": 1987,
     "firstname": "Tony",
     "lastname": "Agbugba",
     "email": "Literaryride7@gmail.com"
    },
    {
     "set": 1987,
     "firstname": "Oluseye",
     "lastname": "Ajayi",
     "email": "ajayioluseye16@gmail.com"
    },
    {
     "set": "1987",
     "firstname": "Abiodun ",
     "lastname": "Ajayi",
     "email": "abbeykins2003@yahoo.com"
    },
    {
     "set": 1987,
     "firstname": "Hafeez",
     "lastname": "Ajibade",
     "email": "abhajib@yahoo.com"
    },
    {
     "set": "1987 ",
     "firstname": "GBENGA ",
     "lastname": "Akingbasote ",
     "email": "akingbasote_osm@yahoo.com"
    },
    {
     "set": 1987,
     "firstname": "Lateef ",
     "lastname": "Alamu",
     "email": "alamposer70@gmail.com"
    },
    {
     "set": 1987,
     "firstname": "Israel",
     "lastname": "Alika-John",
     "email": "segunisraelaiicoplc12@gmail.com"
    },
    {
     "set": "1987 ",
     "firstname": "Fatai",
     "lastname": "Alimi",
     "email": "fataialimi.fa@gmail.com"
    },
    {
     "set": 1987,
     "firstname": "Princewill Onyewuchi",
     "lastname": "Amadi",
     "email": "prince2amadi@gmail.com"
    },
    {
     "set": 1987,
     "firstname": "Lanre ",
     "lastname": "Are",
     "email": "lanreaare@gmail.com"
    },
    {
     "set": 1987,
     "firstname": "Joseph",
     "lastname": "Chukwuka",
     "email": "chukwukaj1@gmail.com"
    },
    {
     "set": 1987,
     "firstname": "Akinwale ",
     "lastname": "Dairo",
     "email": "akinwaledairo2020@gmail.com"
    },
    {
     "set": 1987,
     "firstname": "Andrew ",
     "lastname": "Ebu",
     "email": "Osairebu@yahoo.com"
    },
    {
     "set": 1987,
     "firstname": "Surveyor",
     "lastname": "Efik",
     "email": "efiksurveyor@gmail.com"
    },
    {
     "set": 1987,
     "firstname": "Victor ",
     "lastname": "Eke",
     "email": "uzezi170@yahoo.com"
    },
    {
     "set": "1987",
     "firstname": "Felix",
     "lastname": "Emueze",
     "email": "femueze99@yahoo.co.uk"
    },
    {
     "set": 1987,
     "firstname": "Obaye",
     "lastname": "Enamiriewan",
     "email": "obayeenamiriewan@gmail.com"
    },
    {
     "set": 1987,
     "firstname": "James",
     "lastname": "Ezeh",
     "email": "James 4esther15@gmail.com"
    },
    {
     "set": "1987",
     "firstname": "Segun ",
     "lastname": "Fadipe ",
     "email": "segunfadipe@gmail.com"
    },
    {
     "set": 1987,
     "firstname": "Olanrewaju",
     "lastname": "Fashina",
     "email": "olafash2020@gmail.com"
    },
    {
     "set": 1987,
     "firstname": "Jolomi",
     "lastname": "Guoti",
     "email": "jolomiguoti@yahoo.com"
    },
    {
     "set": 1987,
     "firstname": "Ismail",
     "lastname": "Hamzat",
     "email": "hamzatismol@gmail.com"
    },
    {
     "set": 1987,
     "firstname": "Frederick",
     "lastname": "Ichekwai",
     "email": "fredichekwai@gmail.com"
    },
    {
     "set": 1987,
     "firstname": "Peter",
     "lastname": "Ikenga",
     "email": "p_ikenga@yahoo.com"
    },
    {
     "set": "1987 ",
     "firstname": "Syvester ",
     "lastname": "Irokaeze ",
     "email": "ogadi@gmail.com "
    },
    {
     "set": "1987",
     "firstname": "Charles ",
     "lastname": "Izinguzo",
     "email": "izinguzo@yahoo.com"
    },
    {
     "set": 1987,
     "firstname": "Michael",
     "lastname": "James",
     "email": "Mikeffiong2009@yahoo.com"
    },
    {
     "set": 1987,
     "firstname": "Nurudeen ",
     "lastname": "Lasisi",
     "email": "Lasisin7@gmail.com "
    },
    {
     "set": "1987 ",
     "firstname": "Elias",
     "lastname": "Mbah",
     "email": "mbahelias@gmail.com"
    },
    {
     "set": 1987,
     "firstname": "Jacob",
     "lastname": "Mkpa",
     "email": "jjmkpa@gmail.com"
    },
    {
     "set": "1987 ",
     "firstname": "Marcus ",
     "lastname": "Nwansoria ",
     "email": "marcusnwansoria@yahoo.co.uk"
    },
    {
     "set": 1987,
     "firstname": "Julius ",
     "lastname": "Nwaolise",
     "email": "juliusolise@gmail.com "
    },
    {
     "set": 1987,
     "firstname": "Sunday",
     "lastname": "Odeh",
     "email": "Odehsunday23@email.com"
    },
    {
     "set": 1987,
     "firstname": "Victor ",
     "lastname": "Odiakosa ",
     "email": "Odiakosa@gmail.com"
    },
    {
     "set": 1987,
     "firstname": "Adewale",
     "lastname": "Ogunbodunrin",
     "email": "adewale7023@gmail.com"
    },
    {
     "set": 1987,
     "firstname": "Temilade",
     "lastname": "Okediya",
     "email": "Okebola.okediya@ Gmail.com"
    },
    {
     "set": 1987,
     "firstname": "Oluwole ",
     "lastname": "Okelola ",
     "email": "okelolaoluwole0@gmail.com"
    },
    {
     "set": 1987,
     "firstname": "Aboyewa",
     "lastname": "Okonedo",
     "email": "tomokonedo@gmail.com"
    },
    {
     "set": 1987,
     "firstname": "Olujimi",
     "lastname": "Okufuwa",
     "email": "bjjimi@gmail.com "
    },
    {
     "set": 1987,
     "firstname": "Olusola ",
     "lastname": "Olabode ",
     "email": "solabode@yahoo.com "
    },
    {
     "set": 1987,
     "firstname": "Abiola ",
     "lastname": "olowokere",
     "email": "jide1935@yahoo.co.uk"
    },
    {
     "set": "1987 ",
     "firstname": "NIYI ",
     "lastname": "Olowokere ",
     "email": "akinolowookere@gmail.com"
    },
    {
     "set": 1987,
     "firstname": "James",
     "lastname": "Omoruyi",
     "email": "Jamesomoruuyi200@yahoo.com"
    },
    {
     "set": 1987,
     "firstname": "Aigbe Habeeb ",
     "lastname": "Omosun ",
     "email": "aigbeomosun@gmail.com"
    },
    {
     "set": 1987,
     "firstname": "Kingsley",
     "lastname": "Osunwa",
     "email": "femiuche@yahoo.com"
    },
    {
     "set": 1987,
     "firstname": "Adeshola",
     "lastname": "Owofolaju",
     "email": "compendiumg@gmail.com"
    },
    {
     "set": 1987,
     "firstname": "Adewale",
     "lastname": "Oyelaja",
     "email": "adewale459@gmail.com"
    },
    {
     "set": 1987,
     "firstname": "Babatunde",
     "lastname": "Oyenekan",
     "email": "babatundeoyenekan@gmail.com"
    },
    {
     "set": 1987,
     "firstname": "Monday",
     "lastname": "Udo",
     "email": "udomonday1970@gmail.com"
    },
    {
     "set": "1987",
     "firstname": "Anthony",
     "lastname": "umukoro ",
     "email": "tonymukoro @gmail "
    },
    {
     "set": 1987,
     "firstname": "Andy",
     "lastname": "Venn",
     "email": "aniwetavenn@gmail.com"
    },
    {
     "set": "1987",
     "firstname": "Ashiru ",
     "lastname": "Wasiu Ayodele ",
     "email": "ashiruwasiuayodele@gmail.com"
    },
    {
     "set": "1987\/1988",
     "firstname": "Solomon",
     "lastname": "Oyedeji",
     "email": "soyedeji@yahoo.com"
    },
    {
     "set": 1988,
     "firstname": "Babalola ",
     "lastname": "Abioye",
     "email": "babioye@outlook.com"
    },
    {
     "set": 1988,
     "firstname": "Emmanuel",
     "lastname": "Adalumo",
     "email": "adalumoemmanuel@gmail.com"
    },
    {
     "set": 1988,
     "firstname": "Tola Oluwaswun",
     "lastname": "Adebiyi",
     "email": "Jormagor@yahoo.co.uk "
    },
    {
     "set": 1988,
     "firstname": "Thomas",
     "lastname": "Adedeji",
     "email": "adedejitomas@gmail.com"
    },
    {
     "set": 1988,
     "firstname": "Nelson",
     "lastname": "Adejayan",
     "email": "neltru1970@gmail.com"
    },
    {
     "set": 1988,
     "firstname": "Kola",
     "lastname": "Adewale",
     "email": "kola2ife25@gmail.com"
    },
    {
     "set": 1988,
     "firstname": "Adeyemi",
     "lastname": "Adewole",
     "email": "brandetal1971@gmail.com"
    },
    {
     "set": 1988,
     "firstname": "Harrison",
     "lastname": "Aiyudu",
     "email": "aiyuduharrison@gmail.com"
    },
    {
     "set": 1988,
     "firstname": "Dolapo Emmanuel",
     "lastname": "Ajose",
     "email": "babatolaajose@yahoo.com"
    },
    {
     "set": "1988",
     "firstname": "Aniefiok Olusegun ",
     "lastname": "Akpan ",
     "email": "Olusegun71a@gmail.com"
    },
    {
     "set": 1988,
     "firstname": "Mukaila",
     "lastname": "Alabi",
     "email": "mukailaalabi96@gmail.com"
    },
    {
     "set": 1988,
     "firstname": "Saheed",
     "lastname": "Alao ",
     "email": "Saheedalao253@gmail.com"
    },
    {
     "set": 1988,
     "firstname": "Abdul Rahman Omobolaji ",
     "lastname": "Alara",
     "email": "alararahman@yahoo.com"
    },
    {
     "set": "1988",
     "firstname": "Abdulasis Gboyega",
     "lastname": "Atere",
     "email": "atereazeez9@gmail.com"
    },
    {
     "set": "1988 ",
     "firstname": "Olawale",
     "lastname": "Awoyemi",
     "email": "oawoyemi@edinbridge.ng"
    },
    {
     "set": 1988,
     "firstname": "Olawale",
     "lastname": "Ayeni",
     "email": "favouredblackky@gmail.com"
    },
    {
     "set": 1988,
     "firstname": "Oluwatoyin",
     "lastname": "Bawaallah Olufemi",
     "email": "Toyolufemi@yahoo.co.uk "
    },
    {
     "set": 1988,
     "firstname": "Ayodeji",
     "lastname": "Bolaŕinde ",
     "email": "baoconsult@yahoo.co.uk "
    },
    {
     "set": 1988,
     "firstname": "Anthony ",
     "lastname": "Dafe",
     "email": "dafetee111@gmail.com"
    },
    {
     "set": 1988,
     "firstname": "Edward",
     "lastname": "Dunkwu",
     "email": "dunkwuedward@yahoo.com"
    },
    {
     "set": 1988,
     "firstname": "Bolaji",
     "lastname": "Durojaiye ",
     "email": "Pdurojai@gmail.com"
    },
    {
     "set": 1988,
     "firstname": "Richard ",
     "lastname": "Echigbue ( Benson)",
     "email": "Clinstep@gmail.com"
    },
    {
     "set": "1988 ",
     "firstname": "Emmanuel ",
     "lastname": "Ehiwe ",
     "email": "eehiwe2003@yahoo.com "
    },
    {
     "set": 1988,
     "firstname": "Austin",
     "lastname": "Ejakita",
     "email": "ejakita@yahoo.co.uk"
    },
    {
     "set": 1988,
     "firstname": "Ime",
     "lastname": "Ekanem ",
     "email": "ime1ng@yahoo.com"
    },
    {
     "set": "1988",
     "firstname": "Brayon",
     "lastname": "Emeluwa",
     "email": "brayonemeluwa@gmail.com"
    },
    {
     "set": "1988",
     "firstname": "Ayokunle ",
     "lastname": "Eniola ",
     "email": "kunleeniola2002@yahoo.com "
    },
    {
     "set": 1988,
     "firstname": "Imoh",
     "lastname": "Esin",
     "email": "imohesin@gmail.com"
    },
    {
     "set": 1988,
     "firstname": "Adeyemi",
     "lastname": "Esuola",
     "email": "aesuola@gmail.com "
    },
    {
     "set": 1988,
     "firstname": "Mfon ",
     "lastname": "Etukudoh",
     "email": "m_mfon@yahoo.co.uk"
    },
    {
     "set": 1988,
     "firstname": "Ayodeji",
     "lastname": "Faseluka",
     "email": "ayo_dtwo@yahoo.com"
    },
    {
     "set": 1988,
     "firstname": "Olabode",
     "lastname": "Fatokun",
     "email": "ofatokun@yahoo.com"
    },
    {
     "set": 1988,
     "firstname": "Victor",
     "lastname": "Gibson",
     "email": "gibsonvictor574@gmail.com"
    },
    {
     "set": 1988,
     "firstname": "Sulaemon",
     "lastname": "Hakeem",
     "email": "sholexy2015@gmail.com"
    },
    {
     "set": 1988,
     "firstname": "Amechi",
     "lastname": "Ihiwunkah-Pius",
     "email": "amechipius@yahoo.com "
    },
    {
     "set": 1988,
     "firstname": "Ifeanyi            Kriss",
     "lastname": "Ikemefuna",
     "email": "Isymeg2008@yahoo.com"
    },
    {
     "set": 1988,
     "firstname": "Christopher",
     "lastname": "Imala",
     "email": "nwabezechristopher@gmail.com"
    },
    {
     "set": 1988,
     "firstname": "Anthony",
     "lastname": "Isibor",
     "email": "Tonero leather@gmail.com"
    },
    {
     "set": "1988  ",
     "firstname": "Abiodun ",
     "lastname": "Jones",
     "email": "abbeysake@gmail.com"
    },
    {
     "set": 1988,
     "firstname": "Oludare Jesutin ",
     "lastname": "Loko",
     "email": "dareloko2017@gmail.com "
    },
    {
     "set": 1988,
     "firstname": "Peter",
     "lastname": "Monye",
     "email": "monye_p@yahoo.com"
    },
    {
     "set": 1988,
     "firstname": "Henry",
     "lastname": "Nkatta",
     "email": "nwakantta@gmail.com"
    },
    {
     "set": 1988,
     "firstname": "Ikechukwu ",
     "lastname": "Nnadi ",
     "email": "Pharmiyke72@yahoo.co.uk "
    },
    {
     "set": 1988,
     "firstname": "Julius",
     "lastname": "Nwaolise",
     "email": "Juliusolise@gmail.com"
    },
    {
     "set": "1988",
     "firstname": "Lawrence",
     "lastname": "Obi",
     "email": "obilawrencejesimiel@gmail.com"
    },
    {
     "set": "1988",
     "firstname": "Olugbenga",
     "lastname": "Odeyemi",
     "email": "odeyemiolugbenga12@gmail.com"
    },
    {
     "set": "1988",
     "firstname": "Mulaila Olatunji",
     "lastname": "Ogunjobi",
     "email": "teejay international@yahoo"
    },
    {
     "set": "1988 ",
     "firstname": "Abdulkabir ",
     "lastname": "Olagunju ",
     "email": "abdulkabirolagunju@gmail.com "
    },
    {
     "set": 1988,
     "firstname": "Niyi",
     "lastname": "Omojoh",
     "email": "Niyiomojoh.jyant@gmail.com"
    },
    {
     "set": 1988,
     "firstname": "Seyi",
     "lastname": "Onakoya",
     "email": "onakoya.seyi@yahoo.com"
    },
    {
     "set": "1988",
     "firstname": "Adebowale Satar",
     "lastname": "Onigbanjo",
     "email": "debasco09@yahoo.com"
    },
    {
     "set": 1988,
     "firstname": "Samuel",
     "lastname": "Orebela",
     "email": "orebsam@gmail.com"
    },
    {
     "set": 1988,
     "firstname": "Opeoluwa",
     "lastname": "Orekoya",
     "email": "orekoya2@yahoo.com"
    },
    {
     "set": 1988,
     "firstname": "Donatus",
     "lastname": "Ossai",
     "email": "donchichiu@gmail.com"
    },
    {
     "set": 1988,
     "firstname": "Christopher ",
     "lastname": "Osuji",
     "email": "Chris_osuji2002@yahoo.com"
    },
    {
     "set": 1988,
     "firstname": "Olanrewaju oni",
     "lastname": "Osunlalu",
     "email": "osunlaluolanrewajuoni@gmail.com"
    },
    {
     "set": 1988,
     "firstname": "Adewole",
     "lastname": "Oyeniyi",
     "email": "wole_oyeniyi@yahoo.com"
    },
    {
     "set": 1988,
     "firstname": "Timothy ",
     "lastname": "Ozegbe ",
     "email": "Timozegbe@gmail.com"
    },
    {
     "set": "1988",
     "firstname": "Olawale",
     "lastname": "Rasak",
     "email": "wallesfbn@yahoo.com"
    },
    {
     "set": "1988",
     "firstname": "Abidemi  Olanrewaju",
     "lastname": "Salami",
     "email": "abidemisalami@gmail.com"
    },
    {
     "set": 1988,
     "firstname": "Dipo",
     "lastname": "Sanya",
     "email": "Imosanade@gmail.com"
    },
    {
     "set": 1988,
     "firstname": "Akintunde",
     "lastname": "Shodipe",
     "email": "shodiao@gmail.com"
    },
    {
     "set": 1988,
     "firstname": "Paul",
     "lastname": "Tene",
     "email": "bapet70@yahoo.com"
    },
    {
     "set": 1988,
     "firstname": "Anietie",
     "lastname": "Umoh",
     "email": "anietiedavies@gmail.com"
    },
    {
     "set": "1988",
     "firstname": "David",
     "lastname": "Uwagba",
     "email": "meercy007@gmail.com"
    },
    {
     "set": 1989,
     "firstname": "Olumide Olayinka",
     "lastname": "Famuyide",
     "email": "abba_father2002@yahoo.com"
    },
    {
     "set": 1989,
     "firstname": "Henry",
     "lastname": "Ugwuadu edwards",
     "email": "henrylag2000@yahoo.com"
    },
    {
     "set": "1991",
     "firstname": "Adedayo",
     "lastname": "Adefila",
     "email": "dayofilajune@gmail.com"
    },
    {
     "set": "1991",
     "firstname": "Shoga",
     "lastname": "Adetayo",
     "email": "sadetayo73@gmail.com"
    },
    {
     "set": "1991",
     "firstname": "Sylvester",
     "lastname": "Aigbogun",
     "email": "slyvester_ng@yahoo.com"
    },
    {
     "set": "1991",
     "firstname": "Lateef",
     "lastname": "Akanbi",
     "email": "akanbil@yahoo.com"
    },
    {
     "set": "1991",
     "firstname": "Kazeem Oyediran",
     "lastname": "Alabi",
     "email": "kazeemalabi58@yahoo.co.uk"
    },
    {
     "set": "1991",
     "firstname": "Hakeem",
     "lastname": "Alabi",
     "email": "keemalabs@yahoo.com"
    },
    {
     "set": "1991",
     "firstname": "Kallys",
     "lastname": "Albert ",
     "email": "kallysjnr@yahoo.com"
    },
    {
     "set": "1991",
     "firstname": "Chukwuma",
     "lastname": "Amadi",
     "email": "chukwumamadi@gmail.com"
    },
    {
     "set": "1991",
     "firstname": "Gbenga",
     "lastname": "Amedrovi",
     "email": "gfamedrovi@gmail.com"
    },
    {
     "set": "1991",
     "firstname": "Ademola",
     "lastname": "Amoo",
     "email": "princeamoo@gmail.com"
    },
    {
     "set": "1991",
     "firstname": "Josiah",
     "lastname": "Anyanwu",
     "email": "jossybig1@gmail.com"
    },
    {
     "set": "1991",
     "firstname": "Samson",
     "lastname": "Ashibuogwu",
     "email": "samsonashibuogwu4real@gmail.com"
    },
    {
     "set": "1991",
     "firstname": "Lukman",
     "lastname": "Awoyemi",
     "email": "olukman32@gmail.com"
    },
    {
     "set": "1991",
     "firstname": "Hakeem",
     "lastname": "Fashola ",
     "email": "hakeemfashola@yahoo.com"
    },
    {
     "set": "1991",
     "firstname": "Chidi",
     "lastname": "Ihanacho ",
     "email": "cemmanuel2000@gmail.com"
    },
    {
     "set": "1991",
     "firstname": "David",
     "lastname": "Kalu",
     "email": "kdavid_14@yahoo.com"
    },
    {
     "set": "1991",
     "firstname": "Taiwo",
     "lastname": "Lapite",
     "email": "olalaps@yahoo.com"
    },
    {
     "set": "1991",
     "firstname": "Yemi",
     "lastname": "Lasisi",
     "email": "deputyyemi@gmail.com"
    },
    {
     "set": "1991",
     "firstname": "Kenneth",
     "lastname": "Nwokorie",
     "email": "kennisconcept@gmail.com"
    },
    {
     "set": "1991",
     "firstname": "Temitope",
     "lastname": "Ogungbesan",
     "email": "topeoriade9@gmail.com"
    },
    {
     "set": "1991",
     "firstname": "Stephen-Kolawole",
     "lastname": "Ogunleye",
     "email": "stephen_Kolawole@yahoo.com"
    },
    {
     "set": "1991",
     "firstname": "Sheriff ",
     "lastname": "Oladejo ",
     "email": "sheriffoladejo@gmail.com"
    },
    {
     "set": "1991",
     "firstname": "Olumuyiwa",
     "lastname": "Oladunni",
     "email": "oluwamuyifunmi66@gmail.com"
    },
    {
     "set": 1991,
     "firstname": "Kehinde",
     "lastname": "Olayinka",
     "email": "olayinkakehinde@gmail.com"
    },
    {
     "set": "1991",
     "firstname": "Taiwo",
     "lastname": "Olayinka",
     "email": "olayinkataiwo@yahoo.com"
    },
    {
     "set": "1991",
     "firstname": "Abdulah",
     "lastname": "Oni",
     "email": "ab2dulah@yahoo.com"
    },
    {
     "set": "1991",
     "firstname": "Kelechukwu ",
     "lastname": "Onuobia ",
     "email": "kconuobia@gmail.com"
    },
    {
     "set": "1991",
     "firstname": "Chibu",
     "lastname": "Oparah",
     "email": "finneyoparah2gmail.com"
    },
    {
     "set": "1991",
     "firstname": "Tomi",
     "lastname": "Osifowora ",
     "email": "tomifowora@gmail.com"
    },
    {
     "set": "1991",
     "firstname": "Olayiwola ",
     "lastname": "Shosanya ",
     "email": "olarayz@gmail.com"
    },
    {
     "set": "1991",
     "firstname": "Sikiru",
     "lastname": "Tiamiyu",
     "email": "sikiru.tiamiyu@gmail.com"
    },
    {
     "set": "1992",
     "firstname": "Michael",
     "lastname": "Adenuga",
     "email": "adenuga65@gmail.com"
    },
    {
     "set": 1992,
     "firstname": "Olanrewaju ",
     "lastname": "Aremu",
     "email": "Olanrewajuooo@yahoo.com"
    },
    {
     "set": 1992,
     "firstname": "Sunday",
     "lastname": "Isola",
     "email": "sunnyd2show@gmail.com"
    },
    {
     "set": 1992,
     "firstname": "Gbenga",
     "lastname": "Johnson ",
     "email": "gbemijohnson@yahoo.com"
    },
    {
     "set": 1992,
     "firstname": "Adewale ",
     "lastname": "Jolaosho ",
     "email": "menteedaddyjoe@gmail.com"
    },
    {
     "set": 1993,
     "firstname": "Paul",
     "lastname": "Abiti",
     "email": "abitibabatola@gmail.com"
    },
    {
     "set": 1993,
     "firstname": "Evans",
     "lastname": "Abu",
     "email": "evansabu@gmail.com"
    },
    {
     "set": 1993,
     "firstname": "Ehikioya",
     "lastname": "Abumere",
     "email": "ehismoore75@gmail.com"
    },
    {
     "set": 1993,
     "firstname": "Adejuwon",
     "lastname": "Adebayo",
     "email": "Olajuwon_09@yahoo.com"
    },
    {
     "set": 1993,
     "firstname": "Adebayo",
     "lastname": "Adeniran",
     "email": "bayoadeniran0177@gmail.com"
    },
    {
     "set": 1993,
     "firstname": "Samuel ",
     "lastname": "Afekhade",
     "email": "samuelafekhade085@gmail.com"
    },
    {
     "set": 1993,
     "firstname": "Oluwaseyi",
     "lastname": "Ajiboye",
     "email": "S'eyi.ajiboye@gmail.com"
    },
    {
     "set": "1993",
     "firstname": "Levi",
     "lastname": "Akanu",
     "email": "leviakanu43@gmail.com"
    },
    {
     "set": 1993,
     "firstname": "Jide",
     "lastname": "Akinpelu ",
     "email": "jakinpelu@yahoo.com "
    },
    {
     "set": "1993",
     "firstname": "Abraham",
     "lastname": "Atunrase",
     "email": "adeatunrase@yahoo.com"
    },
    {
     "set": 1993,
     "firstname": "Lawal",
     "lastname": "Ayobami",
     "email": "omegalpha510@gmail.com"
    },
    {
     "set": "1993",
     "firstname": "Babajide ",
     "lastname": "Bastus",
     "email": "jdbastus@gmail.com "
    },
    {
     "set": 1993,
     "firstname": "Muamin",
     "lastname": "Dosunmu",
     "email": "dosunmuoba475@gmail.com "
    },
    {
     "set": "1993",
     "firstname": "Shakiru",
     "lastname": "Erinfolami",
     "email": "leksideimagination@gmail.com"
    },
    {
     "set": 1993,
     "firstname": "Adedayo",
     "lastname": "Faleye ",
     "email": "dayotheman@yahoo.com "
    },
    {
     "set": 1993,
     "firstname": "Olusegun ",
     "lastname": "Gbayege",
     "email": "gbayegedele@gmail.com"
    },
    {
     "set": 1993,
     "firstname": "Stephen",
     "lastname": "Idode",
     "email": "stephenidode@gmail.com"
    },
    {
     "set": 1993,
     "firstname": "Louis",
     "lastname": "Ijenwa",
     "email": "louis4it2002@hotmail.com"
    },
    {
     "set": "1993",
     "firstname": "Francis ",
     "lastname": "Imumolen",
     "email": "semunmon@gmail.com"
    },
    {
     "set": "1993",
     "firstname": "Rasak  ",
     "lastname": "Lawal",
     "email": "omegalpha510@gmail.com "
    },
    {
     "set": "1993",
     "firstname": "Waris",
     "lastname": "Majekodunmi",
     "email": "majekodunmiwaris@mail.com"
    },
    {
     "set": "1993",
     "firstname": "Dosunmu ",
     "lastname": "Muamin",
     "email": "dosunmuoba475@gmail.com     "
    },
    {
     "set": 1993,
     "firstname": "Moses",
     "lastname": "Nnadi",
     "email": "moses.cims@gmail.com"
    },
    {
     "set": 1993,
     "firstname": "Emeka",
     "lastname": "Nwabueze",
     "email": "emmyuju2002@gmail.com"
    },
    {
     "set": "1993",
     "firstname": "Francis ",
     "lastname": "Nwaochei",
     "email": "   Chukwu4praise@yahoo.com  "
    },
    {
     "set": "1993",
     "firstname": "Tochukwu",
     "lastname": "Nwosu",
     "email": "ctnwagu@gmail.com"
    },
    {
     "set": "1993",
     "firstname": "Michael",
     "lastname": "Odiong",
     "email": "michaelodiong@yahoo.com."
    },
    {
     "set": 1993,
     "firstname": "Ibukun",
     "lastname": "Ojo",
     "email": "oibukun142@gmail.com"
    },
    {
     "set": "1993",
     "firstname": "Stanley",
     "lastname": "Okpako",
     "email": "okpakostanley@yahoo.com"
    },
    {
     "set": 1993,
     "firstname": "Oladele",
     "lastname": "Oladimeji",
     "email": "oladelao7@gmail.com"
    },
    {
     "set": "1993",
     "firstname": "Ismaila",
     "lastname": "Oladipo",
     "email": "smartdipo@yahoo.com"
    },
    {
     "set": 1993,
     "firstname": "Chidi",
     "lastname": "Olisamah",
     "email": "olisamah2@yahoo.com"
    },
    {
     "set": 1993,
     "firstname": "Shedrach Olaoluwa Mofolorunsho",
     "lastname": "Olusanya Shoderu",
     "email": "shedexo@yahoo.com"
    },
    {
     "set": "1993",
     "firstname": "Austine ",
     "lastname": "Omoruyi",
     "email": "aceworld001@gmail.com  "
    },
    {
     "set": 1993,
     "firstname": "Oluwafemi",
     "lastname": "Omoya",
     "email": "femiomoya@gmail.com"
    },
    {
     "set": 1993,
     "firstname": "Adewale",
     "lastname": "Oniyide",
     "email": "Adewaleon@yahoo.com "
    },
    {
     "set": 1993,
     "firstname": "Adeshina",
     "lastname": "Oreaje",
     "email": "oreajeadeshina@gmail.com"
    },
    {
     "set": "1993",
     "firstname": "Augustine ",
     "lastname": "Oronsaye",
     "email": "oorons@hotmail.com"
    },
    {
     "set": 1993,
     "firstname": "George",
     "lastname": "Osuji",
     "email": "osujigeorge134@gmail.com"
    },
    {
     "set": "1993",
     "firstname": "Kingsley ",
     "lastname": "Osunwa",
     "email": "femiuche@yahoo.com    "
    },
    {
     "set": 1993,
     "firstname": "Augustine Nabajide (Babajide)",
     "lastname": "Phillips ",
     "email": "jidephillipd@gmail "
    },
    {
     "set": 1993,
     "firstname": "Gbenga ",
     "lastname": "Stephens",
     "email": "Stephens_gt@yahoo.com"
    },
    {
     "set": "1993",
     "firstname": "Anyaso",
     "lastname": "Uche",
     "email": "uchanyaso@gmail.com "
    },
    {
     "set": 1993,
     "firstname": "dennis",
     "lastname": "Ugenyi",
     "email": "dennisugenyi@gmail.com"
    },
    {
     "set": "1994",
     "firstname": "Owolabi",
     "lastname": "Seriki",
     "email": "arikewuyoojutiwonseriki@gmail.com"
    },
    {
     "set": "1997",
     "firstname": "Kehinde",
     "lastname": "Odeyemi",
     "email": "hopegeneration2015@gmail.com"
    },
    {
     "set": "2001",
     "firstname": "Olanrewaju",
     "lastname": "Ayenu",
     "email": "Olanrewajuayeni@gmail com"
    },
    {
     "set": "2003",
     "firstname": "Adekunle",
     "lastname": "Adeyemi",
     "email": "abeladetayo8@gmail.com"
    },
    {
     "set": "2003",
     "firstname": "Akinkunmi",
     "lastname": "Akinola",
     "email": "waternogetenemi@gmail.com"
    },
    {
     "set": "2003",
     "firstname": "Godwin",
     "lastname": "Akpan",
     "email": "akpangodwin3@gmail.com"
    },
    {
     "set": 2003,
     "firstname": "Akan",
     "lastname": "Akpan",
     "email": "akan_soul84@yahoo.com"
    },
    {
     "set": 2003,
     "firstname": "Oluwaemeka ",
     "lastname": "Asagwara ",
     "email": "oluwaemeka1@gmail.com"
    },
    {
     "set": 2003,
     "firstname": "Moses",
     "lastname": "Falade",
     "email": "mocis08@yahoo.com "
    },
    {
     "set": "2003",
     "firstname": "Ugo",
     "lastname": "Ihekanze",
     "email": "Ugoihekanze@gmail.com"
    },
    {
     "set": "2003",
     "firstname": "Monday",
     "lastname": "Kudevi",
     "email": "mondaykudevi@gmail.com"
    },
    {
     "set": 2003,
     "firstname": "Obinna",
     "lastname": "Nwosu",
     "email": "sixthlastborn@gmail.com "
    },
    {
     "set": "2003",
     "firstname": "Olugbenga",
     "lastname": "Oni",
     "email": "stolugbenga@gmail.com"
    },
    {
     "set": 2003,
     "firstname": "Odinaka",
     "lastname": "Oparaugoh",
     "email": "justice5758@gmail.com"
    },
    {
     "set": "2003",
     "firstname": "Oluwadare",
     "lastname": "Oyebamiji",
     "email": "daruu4reald@gmail.com"
    },
    {
     "set": "2003",
     "firstname": "Kingsley",
     "lastname": "Robin-Assi",
     "email": "kaystalk009@gmail.com"
    },
    {
     "set": 2003,
     "firstname": "Anietie",
     "lastname": "Sampson",
     "email": "nies4u@gmail.com"
    },
    {
     "set": "2003",
     "firstname": "Oludayo",
     "lastname": "Sonusi",
     "email": "Oludee1@gmail.com "
    },
    {
     "set": "2004",
     "firstname": "johnson",
     "lastname": "bassey",
     "email": "johnsonbassey89@gmail.com"
    },
    {
     "set": "2004",
     "firstname": "Benson",
     "lastname": "Oluwasegun Daniel",
     "email": "bensondon101@gmail.com"
    },
    {
     "set": 2006,
     "firstname": "Solomon",
     "lastname": "Abokor",
     "email": "Abokorsolomon@gmail.com"
    },
    {
     "set": "2006",
     "firstname": "Adedayo",
     "lastname": "Adeniran",
     "email": "dayopetrs@gmail.com"
    },
    {
     "set": "2006",
     "firstname": "Opeyemi",
     "lastname": "Adeyemi",
     "email": "opeyemi.adeyemi63@gmail.com"
    },
    {
     "set": "2006",
     "firstname": "Abiodun",
     "lastname": "Afolabi",
     "email": "abbeytouch_360@yahoo.com"
    },
    {
     "set": "2006",
     "firstname": "David",
     "lastname": "Akinlawon",
     "email": "davidobasky@gmail.com"
    },
    {
     "set": "2006",
     "firstname": "Isemin",
     "lastname": "Akpabio",
     "email": "iseminakpabio07@gmail.com"
    },
    {
     "set": "2006",
     "firstname": "Aniekan",
     "lastname": "Alex",
     "email": "alexaniekan11@gmail.com"
    },
    {
     "set": "2006",
     "firstname": "Raphael",
     "lastname": "Amaraegbu",
     "email": "okechukwu618@gmail.com"
    },
    {
     "set": "2006",
     "firstname": "Udoinyang",
     "lastname": "Anthony",
     "email": "udoinyanguduak@gmail.com"
    },
    {
     "set": "2006",
     "firstname": "Collins Immaculate",
     "lastname": "Anyanwu",
     "email": "collins4gr8ness@gmail.com"
    },
    {
     "set": "2006",
     "firstname": "Edmond",
     "lastname": "Bassey",
     "email": "edmondedem105@gmail.com"
    },
    {
     "set": "2006",
     "firstname": "Benjamin Ejiro",
     "lastname": "Emanovwe",
     "email": "benjaminemanovwe24@yahoo.com"
    },
    {
     "set": "2006",
     "firstname": "Olatunji",
     "lastname": "Ibrahim",
     "email": "olatunjiibrahim2023@yahoo.com"
    },
    {
     "set": "2006",
     "firstname": "Ifeanyi",
     "lastname": "Izuogu",
     "email": "ki4love1988@gmail.com"
    },
    {
     "set": "2006",
     "firstname": "Sunday",
     "lastname": "Kalu",
     "email": "kingsleysimone28@gmail.com"
    },
    {
     "set": "2006",
     "firstname": "Ugonna",
     "lastname": "Lebechi",
     "email": "lebechiugonna@gmail.com"
    },
    {
     "set": "2006",
     "firstname": "Samuel",
     "lastname": "Ngwu",
     "email": "smart70@yahoo.com"
    },
    {
     "set": "2006",
     "firstname": "Chibuike",
     "lastname": "Ogbuagu",
     "email": "chibuikeogbus@gmail.com"
    },
    {
     "set": "2006",
     "firstname": "Oluwatosin",
     "lastname": "Oladipupo",
     "email": "burgg3@yahoo.com"
    },
    {
     "set": 2006,
     "firstname": "Toheeb ",
     "lastname": "Oseni ",
     "email": "osenitoheeb007@gmail.com"
    },
    {
     "set": "2006",
     "firstname": "Kenneth Nelson",
     "lastname": "Peter",
     "email": "kennethpius26@gmail.com"
    },
    {
     "set": "2006",
     "firstname": "Yemi",
     "lastname": "Shofowora",
     "email": "yemi_sinzu@yahoo.com"
    },
    {
     "set": "2006",
     "firstname": "Taofeek",
     "lastname": "Wahab",
     "email": "taofeek@gmail.com"
    },
    {
     "set": "2007",
     "firstname": "Sodiq",
     "lastname": "Ajao",
     "email": "sodiqolayinka1@gmail.com"
    },
    {
     "set": "2007",
     "firstname": "John Tochukwu",
     "lastname": "Emelike",
     "email": "johnevole@gmail.com"
    },
    {
     "set": 2007,
     "firstname": "Oloruntobi",
     "lastname": "Junaid",
     "email": "junaid.oloruntobi@gmail.com"
    },
    {
     "set": 2007,
     "firstname": "Oluwamayowa",
     "lastname": "Omiwole",
     "email": "pastorayanfeoluwa@gmail.com"
    },
    {
     "set": "2007",
     "firstname": "Philip Ebuka",
     "lastname": "Onwuha",
     "email": "onwuhaphilip@gmail.com"
    },
    {
     "set": 2007,
     "firstname": "Joseph",
     "lastname": "Oyewunmi",
     "email": "oyewunmi.o.joseph@gmail.com"
    },
    {
     "set": 2009,
     "firstname": "Michael",
     "lastname": "Abokor",
     "email": "undisputedmichael@yahoo.com"
    },
    {
     "set": 2009,
     "firstname": "Adule",
     "lastname": "Abraham",
     "email": "adule.abraham@gmail.com"
    },
    {
     "set": "2009",
     "firstname": "Olaniyi",
     "lastname": "Adebowale ",
     "email": "adebowale.olaniyi1@gmail.com "
    },
    {
     "set": 2009,
     "firstname": "Tolulope ",
     "lastname": "Adedara",
     "email": "Tolu.phile@gmail.com "
    },
    {
     "set": 2009,
     "firstname": "Damilola",
     "lastname": "Adeeko",
     "email": "dammywalcott32@yahoo.com"
    },
    {
     "set": 2009,
     "firstname": "Olawale",
     "lastname": "Adekogbe",
     "email": "adekogbeolawale@gmail.com"
    },
    {
     "set": 2009,
     "firstname": "Kehinde",
     "lastname": "Adekoya",
     "email": "Kenadekoya@gmail.com"
    },
    {
     "set": 2009,
     "firstname": "Taiwo",
     "lastname": "Adekoya ",
     "email": "Tayetonic@gmail.com"
    },
    {
     "set": "2009",
     "firstname": "Ikeade",
     "lastname": "Adekugbe",
     "email": "ikeadeadekugbe@gmail.com"
    },
    {
     "set": "2009",
     "firstname": "Anuoluwapo Kemi",
     "lastname": "Adeleke",
     "email": "fayo8028@gmail.com"
    },
    {
     "set": 2009,
     "firstname": "Abiodun",
     "lastname": "Adesiyan",
     "email": "adebiodun2009@gmail.com"
    },
    {
     "set": "2009",
     "firstname": "Ahmed",
     "lastname": "Afolabi ",
     "email": "Ahmedafo1@yahoo.com"
    },
    {
     "set": 2009,
     "firstname": "Zainab",
     "lastname": "Ajeniya",
     "email": "ajeniyazainab1991@gmail.com"
    },
    {
     "set": "2009",
     "firstname": "Chisom",
     "lastname": "Asomugha",
     "email": "preciouscheezy@yahoo.com"
    },
    {
     "set": "2009",
     "firstname": "Micheal",
     "lastname": "Bailey",
     "email": "michealbailey428@gmail.com"
    },
    {
     "set": 2009,
     "firstname": "Amuda",
     "lastname": "Basirat",
     "email": "amudabasirat01@gmail.com"
    },
    {
     "set": 2009,
     "firstname": "Fatiu",
     "lastname": "Bello",
     "email": "Fatiubello@yahoo.com"
    },
    {
     "set": 2009,
     "firstname": "Merdynah",
     "lastname": "Bello",
     "email": "Merdynah007@yahoo.com"
    },
    {
     "set": 2009,
     "firstname": "Emmanuel",
     "lastname": "Enweruzo",
     "email": "iymmahnuel@gmail.com"
    },
    {
     "set": "2009",
     "firstname": "Temitope",
     "lastname": "Fatoye",
     "email": "temitopeolajumoke67@gmail.com"
    },
    {
     "set": "2009",
     "firstname": "Jumoke",
     "lastname": "Gbobo",
     "email": "odungbobo@gmail.com"
    },
    {
     "set": 2009,
     "firstname": "Benedict",
     "lastname": "Ikechukwu Enwerem",
     "email": "enweremb87@gmail.com"
    },
    {
     "set": "2009",
     "firstname": "Elizabeth",
     "lastname": "Inyang",
     "email": "bernaleez94@gmail.com"
    },
    {
     "set": 2009,
     "firstname": "Rasheed Eniola",
     "lastname": "Ismail",
     "email": "ismailrasheed63@gmail.com"
    },
    {
     "set": 2009,
     "firstname": "Abiola",
     "lastname": "Kaffo",
     "email": "Kaffoabiola@gmail.com"
    },
    {
     "set": "2009",
     "firstname": "Anthonia",
     "lastname": "Maduabuchukwu",
     "email": "drtonia16@gmail.com"
    },
    {
     "set": "2009",
     "firstname": "Uchenna",
     "lastname": "Nnajiofor",
     "email": "uchejonathan22@gmail.com"
    },
    {
     "set": 2009,
     "firstname": "Khadijah",
     "lastname": "Oduwole",
     "email": "arikekhadijah@gmail.com"
    },
    {
     "set": "2009 ",
     "firstname": "Wahab",
     "lastname": "Okeshade",
     "email": "wahabokesh@gmail.com"
    },
    {
     "set": 2009,
     "firstname": "Michael",
     "lastname": "Olaosun",
     "email": "olaosunmichael@gmail.com"
    },
    {
     "set": "2009 ",
     "firstname": "Bilikis Adunola ",
     "lastname": "Olasupo",
     "email": "hardunola001@gmail.com"
    },
    {
     "set": 2009,
     "firstname": "Emmanuel ",
     "lastname": "Olatoye",
     "email": "olatoye.temidayo@yahoo.com"
    },
    {
     "set": 2009,
     "firstname": "Rahmon",
     "lastname": "Olawoyin",
     "email": "olawoyinrahmon@gmail.com"
    },
    {
     "set": 2009,
     "firstname": "Mariam",
     "lastname": "Onifade",
     "email": "molamide693@gmail.com"
    },
    {
     "set": 2009,
     "firstname": "Razaq",
     "lastname": "Popoola",
     "email": "olurazak@yahoo.com"
    },
    {
     "set": 2009,
     "firstname": "Adebiyi",
     "lastname": "Sulaiman",
     "email": "Adebiyisulaiman17@gmail.com"
    },
    {
     "set": "2009",
     "firstname": "Muyideen",
     "lastname": "Sulaimon",
     "email": "yinkasulaimon26@gmail.com"
    },
    {
     "set": 2009,
     "firstname": "Samuel",
     "lastname": "Ugwu",
     "email": "authenticsamuelking@gmail.com"
    },
    {
     "set": 2009,
     "firstname": "Emmanuel",
     "lastname": "Ukoha",
     "email": "eprinceukoha@yahoo.com"
    },
    {
     "set": "2010",
     "firstname": "Ridwan",
     "lastname": "Amure",
     "email": "Amureridwan002@gmail.com"
    },
    {
     "set": "2010",
     "firstname": "Abiola",
     "lastname": "Ayeni ",
     "email": "abiolaayeni94@gmail.com"
    },
    {
     "set": "2010",
     "firstname": "Olayinka",
     "lastname": "Omiwole",
     "email": "olayinkaisaiah@ymail.com "
    },
    {
     "set": "?",
     "firstname": "Taofikat",
     "lastname": "Apata",
     "email": "apatataofikatolaide@gmail.com"
    },
    {
     "set": "?",
     "firstname": "Tajudeen ",
     "lastname": "Balogun",
     "email": "akinkunmibalogun88@gmail.com"
    }
   ]


const Index = () => {
    const profession = [
        "Programmer",
        "Civil Engineer",
        "UI/UX Designer",
        "Accountant",
        "Farmer",
        "Data Analyst",
        "Programmer",
        "Civil Engineer",
        "UI/UX Designer",
        "Accountant",
        "Farmer",
        "Data Analyst",
        "Civil Engineer",
        "UI/UX Designer",
        "Accountant",
        "Farmer",
        "Data Analyst",
    ]
    const [members, setMembers] = React.useState(membersData)
    const [set, setSet] = React.useState([])
    React.useEffect(()=> {
        for(let x = 2021; x > 1985; x--){
            setSet(prev => ([...prev, x.toString()]))
        }
    }, []);

    const filter = (e) => {
        const { value, name } = e.target;
        let data;
        if(name == "set"){
            data = value !== "all" ? membersData.filter(({set}) => set == value ) : membersData;
        }else{
             data = membersData.filter(({firstname, lastname}) => (firstname+lastname).toLowerCase().includes(value.toLowerCase()) );
        }
        setMembers(data);
    }

  return (
    <div className="bg-yellow-200 min-h-screen">
        <IndexNavbar/>
        <PageHeader
        title={"Members Directory"}
        />
        <div className="mt-16">
            <p className="text-center  pb-4 md:pb-0 text-2xl md:text-3xl font-[montserrat]">Now we have <span className="text-pry font-bold">{members.length}</span> members</p>
        </div>

        <div className="md:flex justify-center gap-4 space-y-2 md:space-y-6 md:space-y-0">
            <div className="text-center font-nunito md:py-8">
                <input className="p-4 border-0 md:w-[25rem]" 
                placeholder="Search By Name" 
                type={'text'}
                onChange={filter}/>
                <button
                className="p-4 bg-pry text-[white]"
                >Search</button>
            </div>
            <div className="text-center hidden md:block text-[white] space-x-4 font-nunito md:py-8">
                <select onChange={filter} placeholder={'filter by set'} name="set" className="md:p-4 px-8 border-0 bg-pry">
                    <option className="text-[white]" disabled selected>Filter By Set</option>
                    <option className="text-[white]" value={"all"}>All Set</option>
                    {
                        set.reverse().map((set, index) => (
                            <option key={index} value={set} className="text-[white]">{set}</option>
                        ))
                    }
                </select>
                <select placeholder={'filter by profession'} className="md:p-4 px-8 border-0 bg-pry">
                    <option className="text-[white]" disabled selected>Filter By Profession</option>
                    <option className="text-[white]">All Profession</option>
                    {
                        profession.map((set, index) => (
                            <option key={index} className="text-[white]">{set}</option>
                        ))
                    }
                </select>
            </div>
        </div>

        <div className="overflow-x-auto font-nunito relative py-10 px-5 md:px-24">
    <table className="w-full text-lg text-center text-left ">
        <thead className="bg-pry text-[white]">
            <tr>
                <th scope="col" className="py-4 md:py-6 px-6 border-r">
                   Member Name
                </th>
                <th scope="col" className="py-4 md:py-6 px-6 border-r">
                    Set
                </th>
                <th scope="col" className="py-4 md:py-6 px-6 border-r">
                    Email
                </th>
                <th scope="col" className="py-4 md:py-6 px-6 border-r">
                    Profession
                </th>
                <th scope="col" className="py-4 md:py-6 px-6 ">
                    City
                </th>
            </tr>
        </thead>
        <tbody>
            {
                members.map(({city, firstname, lastname, email, profession, set}, index) => (
                    <tr key={index} className="bg-white py- border-b dark:bg-gray-800 dark:border-gray-700 text-lg">
                    <th scope="row" className="py-1 md:py-6 px-6 font-medium bg-[#c5b2dd] whitespace-nowrap dark:text-white">
                        {firstname} {lastname}
                    </th>
                    <td className="py-1 md:py-6 px-6">
                       {set}
                    </td>
                    <td className="py-1 md:py-6 bg-[#c5b2dd] px-6">
                      <a href={`tel:${email}`} className="underline">
                         {email}
                      </a>
                    </td>
                    <td className="py-1 md:py-6 px-6">
                        N/A
                    </td>
                    <td className="py-1 md:py-6 bg-[#c5b2dd] px-6">
                        N/A
                    </td>
                </tr>
                ))
            }
        </tbody>
    </table>
    {
                members.length === 0 && (
                    <p className='text-xl font-montserrat text-center py-20'>No Members Found</p>
                )
            }
</div>
    </div>
  )
}

export default Index