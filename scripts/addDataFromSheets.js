const mongoClient = require("mongodb").MongoClient;
const async = require('async');

const newData = [{
        "name": "",
        "regno": "",
        "email": "Hiren J Doshi",
        "year": "First",
        "dept": "Computer science",
        "phone": 7598296728
    },
    {
        "name": "98swath@gmail.com",
        "regno": "",
        "email": "",
        "year": "",
        "dept": "",
        "phone": ""
    },
    {
        "name": "98swath@gmail.com",
        "regno": "",
        "email": "",
        "year": "",
        "dept": "",
        "phone": ""
    },
    {
        "name": "A SARATH CHANDRA",
        "regno": "RA1711005010236",
        "email": "SARATHAKURATHI@GMAIL.COM",
        "year": 1,
        "dept": "EEE",
        "phone": 8074211819
    },
    {
        "name": "Aadityaa",
        "regno": "RA1711003010463",
        "email": "aadityaa_pandian@srmuniv.edu.in",
        "year": "First year",
        "dept": "CSE",
        "phone": 9445662951
    },
    {
        "name": "Aayush Singh",
        "regno": "RA1711020010092",
        "email": "mactavish0001@gmail.com",
        "year": "1st",
        "dept": "Software Engineering",
        "phone": 9340557078
    },
    {
        "name": "Abhinav Dwarkani",
        "regno": "RA1711008010280",
        "email": "abhinav_dwarkani@srmuniv.edu.in",
        "year": 2017,
        "dept": "IT",
        "phone": 8717999997
    },
    {
        "name": "Abhinav Dwarkani",
        "regno": "RA1711008010280",
        "email": "takhilabhinav@gmail.com",
        "year": "1st",
        "dept": "IT",
        "phone": 8717999997
    },
    {
        "name": "abhinav_dwarkani@srmuniv.edu.in",
        "regno": "",
        "email": "",
        "year": "",
        "dept": "",
        "phone": ""
    },
    {
        "name": "abhinav_dwarkani@srmuniv.edu.in",
        "regno": "",
        "email": "",
        "year": "",
        "dept": "",
        "phone": ""
    },
    {
        "name": "Abhishek Ashok Kumar",
        "regno": "RA1611008010582",
        "email": "rinzler.abhishek@gmail.com",
        "year": "2nd year",
        "dept": "Information Technology",
        "phone": 7550167384
    },
    {
        "name": "Abhishek Bhargava",
        "regno": "RA1711003010719",
        "email": "abhishek. bhargava0398@gmail.com",
        "year": 1,
        "dept": "cse",
        "phone": 7987324143
    },
    {
        "name": "ABHISHEK JOSEPH",
        "regno": "RA1411003010755",
        "email": "josephabhi22@gmail.com",
        "year": "4th",
        "dept": "COMPUTER SCIENCE AND ENGINEERING",
        "phone": 9176437705
    },
    {
        "name": "Abhishek Kasaraneni",
        "regno": "RA1711003011313",
        "email": "abhishekkasaraneni@gmail.com",
        "year": "1st year",
        "dept": "CSE",
        "phone": 9588414593
    },
    {
        "name": "Abhishek Kasaraneni",
        "regno": "RA1711003011313",
        "email": "abhishekkasaraneni@gmail.com",
        "year": "1st year",
        "dept": "CSE",
        "phone": 9588414593
    },
    {
        "name": "Abhishek Kumar",
        "regno": "RA1711020010088",
        "email": "abhishek1091998@gmail.com",
        "year": "1st",
        "dept": "SWE",
        "phone": 8447900874
    },
    {
        "name": "Abhishek Mahto",
        "regno": "RA1511008010207",
        "email": "abhishekmahto1995@gmail.com",
        "year": "3rd",
        "dept": "IT",
        "phone": 7358265577
    },
    {
        "name": "Abhishek Pandey",
        "regno": "RA1611003010845",
        "email": "apandey287@gmail.com",
        "year": "2nd",
        "dept": "CSE",
        "phone": 7550172780
    },
    {
        "name": "Abhishek Ramesh",
        "regno": "RA1711003010316",
        "email": "abhishekramesh_s@srmuniv.edu.in",
        "year": "1st",
        "dept": "CSE",
        "phone": 9080493075
    },
    {
        "name": "Abhishek Singh",
        "regno": "RA1711003011398",
        "email": "abhishekkattwal@gmail.com",
        "year": "First",
        "dept": "CSE",
        "phone": 8317069621
    },
    {
        "name": "Abishega",
        "regno": 820414104005,
        "email": "m.abishegamurali@gmail.com",
        "year": "Final year",
        "dept": "Cse",
        "phone": 9894190090
    },
    {
        "name": "ad733943@gmail.com",
        "regno": "",
        "email": "",
        "year": "",
        "dept": "",
        "phone": ""
    },
    {
        "name": "Adarsh Arvind Singh",
        "regno": "RA1611020010111",
        "email": "adarshrig@gmail.com",
        "year": 2,
        "dept": "Software Engineering",
        "phone": 7089819229
    },
    {
        "name": "Adithya Vamsi",
        "regno": "RA1711004010015",
        "email": "cskadi1999@gmail.com",
        "year": "1st year",
        "dept": "ECE",
        "phone": 8695586680
    },
    {
        "name": "ADITYA MUNSHI",
        "regno": "RA1611008010458",
        "email": "adityamunshi49@gmail.com",
        "year": 2,
        "dept": "IT",
        "phone": 8109825670
    },
    {
        "name": "Adityavikram Sethia",
        "regno": "RA1711020010130",
        "email": "adityavikram.sethia@gmail.com",
        "year": "1st Year",
        "dept": "Software Engineering",
        "phone": 8910118766
    },
    {
        "name": "Aishvary Khandelwal",
        "regno": "RA1711003011376",
        "email": "aishlalsot@gmail.com",
        "year": "1st",
        "dept": "CSE",
        "phone": 9176212623
    },
    {
        "name": "Akshat Sureka",
        "regno": "RA1611003010549",
        "email": "akshatnsureka@gmail.com",
        "year": "2nd",
        "dept": "Cse",
        "phone": 9425053093
    },
    {
        "name": "Aman Pandey",
        "regno": "RA1711003010540",
        "email": "aman03321998@gmail.com",
        "year": 2017,
        "dept": "Cse",
        "phone": 9830579077
    },
    {
        "name": "Aman Pandey",
        "regno": "RA1711003010540",
        "email": "aman03321998@gmail.com",
        "year": 2017,
        "dept": "Cse",
        "phone": 9830579077
    },
    {
        "name": "Amorthyo Ghosh",
        "regno": "RA1411003010547",
        "email": "amorthyo@gmail.com",
        "year": "4th year",
        "dept": "CSE",
        "phone": 7358205324
    },
    {
        "name": "Animesh Mishra",
        "regno": "RA1611003011142",
        "email": "animeshmishra_chitta@srmuniv.edu.in",
        "year": "2nd year",
        "dept": "CSE",
        "phone": 9952081038
    },
    {
        "name": "Animesh Upadhyay",
        "regno": "RA1711003010541",
        "email": "uanimesh25@gmail.com",
        "year": "1st (2017-21)",
        "dept": "CSE",
        "phone": 7355176515
    },
    {
        "name": "Animesh Upadhyay",
        "regno": "RA1711003010541",
        "email": "uanimesh25@gmail.com",
        "year": "1st year (2017-2021",
        "dept": "CSE",
        "phone": 7355176515
    },
    {
        "name": "Anish Thakur",
        "regno": "RA1711008010326",
        "email": "anish.thakur171098@gmail.com",
        "year": "1st",
        "dept": "IT",
        "phone": 9874202934
    },
    {
        "name": "Ankush Kumar Gulia",
        "regno": "RA1711003010961",
        "email": "ankush_ashokkumar@srmuniv.edu.in",
        "year": "1st Year",
        "dept": "Computer Science and Engineering",
        "phone": "#ERROR!"
    },
    {
        "name": "Anmol Chawla",
        "regno": "",
        "email": "anmolchawla_neerajchawla@srmuniv.edu.in",
        "year": "2nd year",
        "dept": "Software Engineering",
        "phone": 9969942690
    },
    {
        "name": "Annamalai",
        "regno": 820415205007,
        "email": "rikshiannamalai@gmail.com",
        "year": 3,
        "dept": "I.T",
        "phone": 7845461191
    },
    {
        "name": "anshul jain",
        "regno": "RA1611003010356",
        "email": "anshul121998@gmail.com",
        "year": 2,
        "dept": "CSE",
        "phone": 8510075928
    },
    {
        "name": "Anshul Suresh",
        "regno": "RA1711004010244",
        "email": "anshul.suresh99@gmail.com",
        "year": 1,
        "dept": "ECE",
        "phone": 9530102544
    },
    {
        "name": "Anurag",
        "regno": "RA1511020010093",
        "email": "rallabandianurag_rb@srmuniv.edu",
        "year": "",
        "dept": "",
        "phone": ""
    },
    {
        "name": "Anush Bhatia",
        "regno": "RA1711003010645",
        "email": "anushbhatia1234@gmail.com",
        "year": "1 st",
        "dept": "CSE",
        "phone": 7405815507
    },
    {
        "name": "Anusha",
        "regno": "14251A0519",
        "email": "shaanoosha@gmail.com",
        "year": 2018,
        "dept": "CSE",
        "phone": 8074752413
    },
    {
        "name": "Apoorv Maheshwari",
        "regno": "RA1511004010484",
        "email": "apoorvmaheshwari_vip@srmuniv.edu.in",
        "year": "3rd",
        "dept": "ECE",
        "phone": 9884209554
    },
    {
        "name": "Aqdas Abrar",
        "regno": "RA1711008010284",
        "email": "aqdas002@gmail.com",
        "year": "1st year",
        "dept": "Information Technology",
        "phone": 9504420281
    },
    {
        "name": "aqdas002@gmail.com",
        "regno": "",
        "email": "",
        "year": "",
        "dept": "",
        "phone": ""
    },
    {
        "name": "Aravind Babu",
        "regno": "Bangalore Institute of technology MSP",
        "email": "baravinbabu@gmail.com",
        "year": "4th",
        "dept": "Cse",
        "phone": 8095931954
    },
    {
        "name": "Arijit Nayak",
        "regno": "RA171102001098",
        "email": "arijit_nayak@srmuniv.edu.in",
        "year": "1st Year",
        "dept": "Software Engineering",
        "phone": 8167835701
    },
    {
        "name": "Arindam Chakraborty",
        "regno": "RA1711003010761",
        "email": "arindam_chakraborty@srmuniv.edu.in",
        "year": "First year",
        "dept": "Computer Science Engineering",
        "phone": 8928765639
    },
    {
        "name": "Arnab Ray",
        "regno": "RA1611003010532",
        "email": "ad733943@gmail.com",
        "year": "2nd",
        "dept": "CSE",
        "phone": 8939336693
    },
    {
        "name": "Arpit Dutta",
        "regno": "RA1711003010826",
        "email": "arpit_dutta@srmuniv.edu.in",
        "year": 2017,
        "dept": "CSE",
        "phone": 8109940048
    },
    {
        "name": "Arun Prasad M",
        "regno": 2016103507,
        "email": "arun98.mohan@gmail.com",
        "year": 2,
        "dept": "Computer Science and Engineering",
        "phone": 7708823476
    },
    {
        "name": "Arundhuti Mukherjee",
        "regno": "RA1611008010350",
        "email": "mailto.arundhuti@gmail.com",
        "year": 2,
        "dept": "IT",
        "phone": 9920269566
    },
    {
        "name": "Ashish Kumar Agarwal",
        "regno": "RA1511008010379",
        "email": "ashishag29@gmail.com",
        "year": 3,
        "dept": "IT",
        "phone": 8292707835
    },
    {
        "name": "ASHISH SHARMA",
        "regno": "RA1711004010320",
        "email": "ashish271999@yahoo.com",
        "year": "1st Year",
        "dept": "ECE",
        "phone": 9205101997
    },
    {
        "name": "Ashutosh mishra",
        "regno": "RA1611003010977",
        "email": "ashutosh.m.ashutosh@gmail.com",
        "year": "2nd",
        "dept": "CSE",
        "phone": 9087443320
    },
    {
        "name": "Ashutosh prasad pathak",
        "regno": "RA1711003010870",
        "email": "ashutoshprasadpathak@gmail.com",
        "year": "1St",
        "dept": "Cse",
        "phone": 8004332383
    },
    {
        "name": "Ashwath Karan",
        "regno": "RA1711003010247",
        "email": "ashwath_k@srmuniv.edu.in",
        "year": "1st",
        "dept": "Cse",
        "phone": 9444252085
    },
    {
        "name": "Ashwath Karan",
        "regno": "RA1711003010247",
        "email": "ashwath_k@srmuniv.edu.in",
        "year": "1st",
        "dept": "Cse",
        "phone": 9444252085
    },
    {
        "name": "Ashwath Karan",
        "regno": "RA1711003010247",
        "email": "ashwath_k@srmuniv.edu.in",
        "year": "1st",
        "dept": "Cse",
        "phone": 9444252085
    },
    {
        "name": "Ashwath Karan",
        "regno": "RA1711003010247",
        "email": "ashwath_k@srmuniv.edu.in",
        "year": "1st",
        "dept": "Cse",
        "phone": 9444252085
    },
    {
        "name": "Ashwath Karan",
        "regno": "RA1711003010247",
        "email": "ashwath_k@srmuniv.edu.in",
        "year": "1st",
        "dept": "Cse",
        "phone": 9444252085
    },
    {
        "name": "Avinash verma",
        "regno": "RA1711003011409",
        "email": "avinash000verma@gmail.com",
        "year": "1st year",
        "dept": "Cse",
        "phone": 7358688905
    },
    {
        "name": "Ayoun ghosh",
        "regno": "RA1711020010150",
        "email": "Somughosh74@gmail.com",
        "year": "2017, 1st year",
        "dept": "Software engineering",
        "phone": 9176210041
    },
    {
        "name": "Ayush",
        "regno": "RA1711008010026",
        "email": "ayushnandwana006@gmail.com",
        "year": "1st year",
        "dept": "IT",
        "phone": 8003609947
    },
    {
        "name": "Ayush",
        "regno": "RA1711008010026",
        "email": "ayushnandwana006@gmail.com",
        "year": "1st year",
        "dept": "IT",
        "phone": 8003609947
    },
    {
        "name": "AYUSH MITRA",
        "regno": "RA1511008010172",
        "email": "ayushmitra_so@srmuniv.edu.in",
        "year": "3rd",
        "dept": "Information technology",
        "phone": 8106868696
    },
    {
        "name": "AYUSH MITRA",
        "regno": "RA1511008010172",
        "email": "ayushmitra_so@srmuniv.edu.in",
        "year": "3rd",
        "dept": "Information technology",
        "phone": 8106868696
    },
    {
        "name": "Ayush Saxena",
        "regno": "RA1611008010245",
        "email": "ascampion31@gmail.com",
        "year": 2,
        "dept": "Information Technology",
        "phone": 7395919230
    },
    {
        "name": "Ayush Soni",
        "regno": "RA1711003011133",
        "email": "ayushakshay.com",
        "year": 1,
        "dept": "CSE",
        "phone": 8979091131
    },
    {
        "name": "Ayush Soni",
        "regno": "RA1711003011133",
        "email": "ayushakshay.com",
        "year": 1,
        "dept": "CSE",
        "phone": 8979091131
    },
    {
        "name": "ayushakshay.soni@gmail.com",
        "regno": "",
        "email": "",
        "year": "",
        "dept": "",
        "phone": ""
    },
    {
        "name": "Ayushi Gupta",
        "regno": "RA1611003010195",
        "email": "ayushi.gupta097@gmail.com",
        "year": 2,
        "dept": "Cse",
        "phone": "C"
    },
    {
        "name": "Ayushi Gupta",
        "regno": "RA1611003010195",
        "email": "ayushi.gupta097@gmail.com",
        "year": 2,
        "dept": "Cse",
        "phone": 8299436221
    },
    {
        "name": "Ayushman Gupta",
        "regno": "RA1711003010903",
        "email": "alphagolf26@gmail.com",
        "year": "1st",
        "dept": "Cse",
        "phone": 7200002610
    },
    {
        "name": "Bhaskar Sengupta",
        "regno": "RA1711008010206",
        "email": "sengupta338@gmail.com",
        "year": "First",
        "dept": "IT",
        "phone": 9838347109
    },
    {
        "name": "Bihanga Som",
        "regno": "RA1711003010603",
        "email": "bihangasom@gmail.com",
        "year": "1st",
        "dept": "CSE",
        "phone": 8334889329
    },
    {
        "name": "Chaitanya",
        "regno": "RA1711004010346",
        "email": "chaitanyagahlawat@gmail.com",
        "year": "1st year",
        "dept": "ELECTRONICS AND COMMUNICATION ENGINEERING",
        "phone": 8872295489
    },
    {
        "name": "Chaitanya",
        "regno": "RA1711004010346",
        "email": "chaitanyagahlawat@gmail.com",
        "year": "1st year",
        "dept": "ELECTRONICS AND COMMUNICATION ENGINEERING",
        "phone": 8872295489
    },
    {
        "name": "Chaitanyagahlawat@gmail.com",
        "regno": "",
        "email": "",
        "year": "",
        "dept": "",
        "phone": ""
    },
    {
        "name": "Chaitanyagahlawat@gmail.com",
        "regno": "",
        "email": "",
        "year": "",
        "dept": "",
        "phone": ""
    },
    {
        "name": "Chaitanyagahlawat@gmail.com",
        "regno": "",
        "email": "",
        "year": "",
        "dept": "",
        "phone": ""
    },
    {
        "name": "cheeraayu chowhan",
        "regno": "RA17111003010030",
        "email": "chirayurocko@gmail.com",
        "year": "First",
        "dept": "Cse",
        "phone": 7069268459
    },
    {
        "name": "Daanish Khan",
        "regno": "RA1711008010042",
        "email": "daanishkhan21@gmail.com",
        "year": 1,
        "dept": "Information Technology",
        "phone": 9980917755
    },
    {
        "name": "Debabgshu Sarkar",
        "regno": "RA1611008010450",
        "email": "dsarkar998@gmail.com",
        "year": 2,
        "dept": "IT",
        "phone": 8939281313
    },
    {
        "name": "Debapratim Kar",
        "regno": "RA1511004010259",
        "email": "debpratimkar@gmail.com",
        "year": 3,
        "dept": "ECE",
        "phone": 8240729594
    },
    {
        "name": "Deepak",
        "regno": "RA171103010691",
        "email": "Princedeepak600@gmail.com",
        "year": 2017,
        "dept": "CSE",
        "phone": 9182293684
    },
    {
        "name": "DEv",
        "regno": "sd",
        "email": "deva",
        "year": "dea",
        "dept": "a",
        "phone": "ad"
    },
    {
        "name": "Devansh Jain",
        "regno": "RA",
        "email": "devansh@cutoz.com",
        "year": 456,
        "dept": 456,
        "phone": 454
    },
    {
        "name": "Devansh Sharma",
        "regno": "RA1611003010594",
        "email": "sharmadevansh007777@gmail.com",
        "year": "2nd",
        "dept": "CSE",
        "phone": 7018335019
    },
    {
        "name": "Devansh Verma",
        "regno": "RA1711008010021",
        "email": "Verma98y@gmail.com",
        "year": "1st",
        "dept": "IT",
        "phone": 8948645456
    },
    {
        "name": "Dhairya Lodha",
        "regno": "RA1611008010451",
        "email": "dhairya.lodha@gmail.com",
        "year": 2,
        "dept": "IT",
        "phone": 9773696005
    },
    {
        "name": "Dhruvil Patel",
        "regno": "RA1711003010534",
        "email": "patel.dhruvil96@gmail.com",
        "year": "1st year",
        "dept": "CSE",
        "phone": 7016981288
    },
    {
        "name": "Divye jain",
        "regno": "RA1711003011438",
        "email": "Divyejain8@gmail.com",
        "year": 201,
        "dept": "",
        "phone": ""
    },
    {
        "name": "Divye jain",
        "regno": "RA1711003011438",
        "email": "Divyejain8@gmail.com",
        "year": "1st",
        "dept": "Cse",
        "phone": 7678113033
    },
    {
        "name": "er.srinu@rediffmail.com",
        "regno": "",
        "email": "",
        "year": "",
        "dept": "",
        "phone": ""
    },
    {
        "name": "Falgun Malhotra",
        "regno": "RA1511003010275",
        "email": "falgunmalhotra_ra@srmuniv.edu.in",
        "year": 3,
        "dept": "CSE",
        "phone": 9566191246
    },
    {
        "name": "Gandharava Vohra",
        "regno": "RA1711003011388",
        "email": "Gandharavavohra@gmail.com",
        "year": "1st year",
        "dept": "Computer science",
        "phone": 8800448679
    },
    {
        "name": "Gaurav Chandra",
        "regno": "RA1611003010360",
        "email": "gauravchandra1997v@gmail.com",
        "year": "Second",
        "dept": "Cse",
        "phone": 7397463717
    },
    {
        "name": "Gaurav chauhan",
        "regno": "RA1711008010164",
        "email": "gauravchauhan2434@gmail.com",
        "year": "1sr",
        "dept": "IT",
        "phone": 9944949760
    },
    {
        "name": "Gunjan Verma",
        "regno": "RA1711008010033",
        "email": "knockforgunjan@gmail.com",
        "year": 2017,
        "dept": "IT",
        "phone": 7871971009
    },
    {
        "name": "Hardik Ajmani",
        "regno": "RA1611003010248",
        "email": "hardikajmani@gmail.com",
        "year": "Second Year",
        "dept": "CSE",
        "phone": 9819631280
    },
    {
        "name": "Harsha chinta",
        "regno": "RA1711008010095",
        "email": "vijayharshachinta@gmail.com",
        "year": "1st year",
        "dept": "I. T",
        "phone": 9848482999
    },
    {
        "name": "HIMANSHU GIRI",
        "regno": "RA1711003010130",
        "email": "himanshugiri195@gmail.com",
        "year": 1,
        "dept": "cse",
        "phone": 7010808134
    },
    {
        "name": "HIMANSHU GIRI",
        "regno": "RA1711003010130",
        "email": "himanshugiri195@gmail.com",
        "year": "1ST YEAR",
        "dept": "CSE",
        "phone": 7010808134
    },
    {
        "name": "HIMANSHU GIRI",
        "regno": "RA1711003010130",
        "email": "himanshugiri195@gmail.com",
        "year": "1ST YEAR",
        "dept": "CSE",
        "phone": 7010808134
    },
    {
        "name": "HIMANSHU GIRI",
        "regno": "RA1711003010130",
        "email": "himanshugiri195@gmail.com",
        "year": 1,
        "dept": "cse",
        "phone": 7010808134
    },
    {
        "name": "himanshu giri",
        "regno": "RA1711003010130",
        "email": "himanshugiri195@gmail.com",
        "year": 1,
        "dept": "cse",
        "phone": 7010808134
    },
    {
        "name": "Imroz Dawar",
        "regno": "RA1611008010485",
        "email": "imroz.dawar@gmail.com",
        "year": 2,
        "dept": "information technology",
        "phone": 982142
    },
    {
        "name": "Iragavarapu kannan",
        "regno": "RA1611004010496",
        "email": "kannaniragavarapu@gmail.com",
        "year": 2,
        "dept": "ECE",
        "phone": 8939434584
    },
    {
        "name": "J sriyash",
        "regno": "RA1711003011257",
        "email": "sriyash98@gmail.com",
        "year": "First year",
        "dept": "Cse",
        "phone": 9110780297
    },
    {
        "name": "Jai",
        "regno": "Ujjwal",
        "email": "mad4jak@gmail.com",
        "year": 2,
        "dept": "Swe",
        "phone": 8938313336
    },
    {
        "name": "Jayraj Roshan",
        "regno": "RA1711004010362",
        "email": "Jayraj_roshan@srmuniv.edu.in",
        "year": "1st",
        "dept": "ECE",
        "phone": 9647849945
    },
    {
        "name": "Just Agarwal",
        "regno": "RA1511008010637",
        "email": "jyotagarwal19@gmail.com",
        "year": 3,
        "dept": "IT",
        "phone": 9884208894
    },
    {
        "name": "K. Gowri manokari",
        "regno": 820414106031,
        "email": "Gowrimanokari. K@gmail.com",
        "year": "IV",
        "dept": "ECE",
        "phone": 8754622412
    },
    {
        "name": "Kabir Singh Sethi",
        "regno": "RA1611003910145",
        "email": "kabirsethi44@gmail.com",
        "year": "2nd",
        "dept": "CSE",
        "phone": 9176382278
    },
    {
        "name": "Kabir Singh Sethi",
        "regno": "RA1611003010145",
        "email": "kabirsethi44@gmail.com",
        "year": "2nd",
        "dept": "CSE",
        "phone": 9176382278
    },
    {
        "name": "Kadam solanki",
        "regno": "RA1711008010081",
        "email": "kadamsolanki@gmail.com",
        "year": "First",
        "dept": "Information technology",
        "phone": 9551195673
    },
    {
        "name": "Kannaniragavarapu@gmail.com",
        "regno": "",
        "email": "",
        "year": "",
        "dept": "",
        "phone": ""
    },
    {
        "name": "Kannaniragavarapu@gmail.com",
        "regno": "",
        "email": "",
        "year": "",
        "dept": "",
        "phone": ""
    },
    {
        "name": "Kartikey Saxena",
        "regno": "RA1711008010234",
        "email": "saxenakartikey2510@gmail.com",
        "year": "1st",
        "dept": "IT",
        "phone": 9140982118
    },
    {
        "name": "Kartikey Saxena",
        "regno": "RA1711008010234",
        "email": "saxenakartikey2510@gmail.com",
        "year": 1999,
        "dept": "IT",
        "phone": 9140982118
    },
    {
        "name": "Kashish Sardana",
        "regno": "RA1711003011323",
        "email": "kashishsardana0@gmail.com",
        "year": "FirsT",
        "dept": "CSE",
        "phone": 7206368941
    },
    {
        "name": "Koustav Mandal",
        "regno": "RA1711003011073",
        "email": "koustavmandal7@gmail.com",
        "year": "1st",
        "dept": "CSE",
        "phone": 9051942408
    },
    {
        "name": "koustavmandal7@gmail",
        "regno": "",
        "email": "",
        "year": "",
        "dept": "",
        "phone": ""
    },
    {
        "name": "koustavmandal7@gmail.com",
        "regno": "",
        "email": "",
        "year": "",
        "dept": "",
        "phone": ""
    },
    {
        "name": "kumarsaurav",
        "regno": "RA1511008010234",
        "email": "kumarsaurav_sh@srmuniv.edu.in",
        "year": 3,
        "dept": "IT",
        "phone": 7358312604
    },
    {
        "name": "Kush Shah",
        "regno": "RA1711003010793",
        "email": "kushshah253@gmail.com",
        "year": "1st",
        "dept": "CSE",
        "phone": 7228085374
    },
    {
        "name": "Kushagra Saxena",
        "regno": "RA1711008010217",
        "email": "monukushagra@gmail.com",
        "year": 1,
        "dept": "IT",
        "phone": 7355606506
    },
    {
        "name": "kushshah253@gmail.com",
        "regno": "",
        "email": "",
        "year": "",
        "dept": "",
        "phone": ""
    },
    {
        "name": "kushshah253@gmail.com",
        "regno": "",
        "email": "",
        "year": "",
        "dept": "",
        "phone": ""
    },
    {
        "name": "Lavanya S",
        "regno": "",
        "email": "lavashchoco42@gmail.com",
        "year": "third year",
        "dept": "E C E",
        "phone": ""
    },
    {
        "name": "Lenvin  Baiju D Cruz",
        "regno": "RA1711003011373",
        "email": "l4lenvin@yahoo.com",
        "year": 1,
        "dept": "Computer Science",
        "phone": 8848941597
    },
    {
        "name": "Logesh Mariyappan",
        "regno": 15104033,
        "email": "suryalogesh41098@outlook.com",
        "year": "III",
        "dept": "Computer and Science",
        "phone": 8973733617
    },
    {
        "name": "M. Ishwarya",
        "regno": 820414106037,
        "email": "ishwarayaharan@gmail.com. com",
        "year": "IV",
        "dept": "ECE",
        "phone": 8940433238
    },
    {
        "name": "Manas Arora",
        "regno": "RA1611008010670",
        "email": "manasarora98@gmail.com",
        "year": "Second",
        "dept": "Information Technology",
        "phone": 9999244621
    },
    {
        "name": "Manas Arora",
        "regno": "RA1611008010670",
        "email": "manasarora98@gmail.com",
        "year": "Second",
        "dept": "Information Technology",
        "phone": 9999244621
    },
    {
        "name": "manasarora98@gmail.com",
        "regno": "",
        "email": "",
        "year": "",
        "dept": "",
        "phone": ""
    },
    {
        "name": "manasarora98@gmail.com",
        "regno": "",
        "email": "",
        "year": "",
        "dept": "",
        "phone": ""
    },
    {
        "name": "manasarora98@gmail.com",
        "regno": "",
        "email": "",
        "year": "",
        "dept": "",
        "phone": ""
    },
    {
        "name": "manasarora98@gmail.com",
        "regno": "",
        "email": "",
        "year": "",
        "dept": "",
        "phone": ""
    },
    {
        "name": "manasarora98@gmail.com",
        "regno": "",
        "email": "",
        "year": "",
        "dept": "",
        "phone": ""
    },
    {
        "name": "Manish Kumar",
        "regno": "RA1711008010272",
        "email": "manishmania20@gmail.com",
        "year": "2017-2021",
        "dept": "IT",
        "phone": 9082071003
    },
    {
        "name": "Mayank Kinger",
        "regno": "RA1711003010429",
        "email": "mayank_kinger@srmuniv.edu.in",
        "year": 1,
        "dept": "CSE",
        "phone": 9176265483
    },
    {
        "name": "Mayur Prajapati",
        "regno": "RA1711003010449",
        "email": "mayurprajapati1999@gmail.com",
        "year": "1st",
        "dept": "CSE",
        "phone": 9784304095
    },
    {
        "name": "Mohamed Imran",
        "regno": "RA1711020010016",
        "email": "cold3018@gmail.com",
        "year": 1,
        "dept": "SWE",
        "phone": 9094526990
    },
    {
        "name": "Mohit kumar",
        "regno": "RA1511003010339",
        "email": "mhtkmr74@gmail.com",
        "year": "3rd year",
        "dept": "Cse",
        "phone": 9935988863
    },
    {
        "name": "Naman Agarwal",
        "regno": "RA1511003010382",
        "email": "naman101@yahoo.co.in",
        "year": 3,
        "dept": "CSE",
        "phone": 9962256414
    },
    {
        "name": "name",
        "regno": "regno",
        "email": "email",
        "year": "year",
        "dept": "dept",
        "phone": "phone"
    },
    {
        "name": "Nihil Sunil",
        "regno": "RA1711020010089",
        "email": "nihilsunil@gmail.com",
        "year": "First",
        "dept": "Software Engineering",
        "phone": 9425290137
    },
    {
        "name": "Nikhil Narayan",
        "regno": "RA1611003010315",
        "email": "nikhilnarayan527@gmail.com",
        "year": 2,
        "dept": "CSE",
        "phone": 9931985235
    },
    {
        "name": "Nikhil reddy",
        "regno": "14P11A0509",
        "email": "mungamuri529@gmail.com",
        "year": 2017,
        "dept": "Computer science engineering",
        "phone": 7680845536
    },
    {
        "name": "Nimish Nagelia",
        "regno": "RA1711003011392",
        "email": "nimish.nagelia@gmail.com",
        "year": "1 St year",
        "dept": "Cse",
        "phone": 8986672175
    },
    {
        "name": "Nithin Nambiar",
        "regno": "RA1711008010314",
        "email": "nambiarnithin1999@gmail.com",
        "year": "First",
        "dept": "IT",
        "phone": 9597686428
    },
    {
        "name": "Omkar Yadav",
        "regno": "RA1611003010458",
        "email": "omkaryadav422@gmail.com",
        "year": "2nd",
        "dept": "Computer Science and Engineering",
        "phone": 9892056471
    },
    {
        "name": "pacificmurarka@gmail.com",
        "regno": "",
        "email": "",
        "year": "",
        "dept": "",
        "phone": ""
    },
    {
        "name": "pacificmurarka@gmail.com",
        "regno": "",
        "email": "",
        "year": "",
        "dept": "",
        "phone": ""
    },
    {
        "name": "pacificmurarka@gmail.com",
        "regno": "",
        "email": "",
        "year": "",
        "dept": "",
        "phone": ""
    },
    {
        "name": "pacificmurarka@gmail.com",
        "regno": "",
        "email": "",
        "year": "",
        "dept": "",
        "phone": ""
    },
    {
        "name": "Pallaav",
        "regno": "RA1711003010800",
        "email": "Pallaav.sethi@gmail.com",
        "year": 1,
        "dept": "Cse",
        "phone": 9554189385
    },
    {
        "name": "Parth Patel",
        "regno": "RA1511003010259",
        "email": "parth.j.patel012@gmail.com",
        "year": 3,
        "dept": "CSE",
        "phone": 7092878849
    },
    {
        "name": "Pavan Kumar",
        "regno": "RA1711003011326",
        "email": "pk1842000@gmail.com",
        "year": 2017,
        "dept": "CSE",
        "phone": 8788247794
    },
    {
        "name": "Pragya malviya",
        "regno": "RA1711003011387",
        "email": "misspragyamalviya@gmail.com",
        "year": "1st",
        "dept": "Cse",
        "phone": 8305833466
    },
    {
        "name": "Prakhar Rastogi",
        "regno": "RA1711003011189",
        "email": "prkharrastogi99.pr@gmail.com",
        "year": "1st",
        "dept": "Computer science and engineering",
        "phone": 8791906757
    },
    {
        "name": "Prakhar Rastogi",
        "regno": "RA1711003011189",
        "email": "prkharrastogi99.pr@gmail.com",
        "year": "1st",
        "dept": "Computer science and engineering",
        "phone": 8791906757
    },
    {
        "name": "Prakharkumar",
        "regno": "RA1711020010157",
        "email": "prakharkumar_sunil@srmuniv.edu.in",
        "year": "1st",
        "dept": "Software",
        "phone": 9176246107
    },
    {
        "name": "Prashansh Rauniyar",
        "regno": "RA1611008010675",
        "email": "prashansh15@gmail.com",
        "year": "2nd",
        "dept": "IT",
        "phone": 8428821113
    },
    {
        "name": "prashansh15@gmail.com",
        "regno": "",
        "email": "",
        "year": "",
        "dept": "",
        "phone": ""
    },
    {
        "name": "prashansh15@gmail.com",
        "regno": "",
        "email": "",
        "year": "",
        "dept": "",
        "phone": ""
    },
    {
        "name": "prashansh15@gmail.com",
        "regno": "",
        "email": "",
        "year": "",
        "dept": "",
        "phone": ""
    },
    {
        "name": "Prashant Gulia",
        "regno": "RA1611003010613",
        "email": "prashantgulia3@gmail.com",
        "year": "2nd",
        "dept": "CSE",
        "phone": 9087452713
    },
    {
        "name": "Prashant Singh Chauhan",
        "regno": "RA1711008010136",
        "email": "rockonchauhan9@gmail.com",
        "year": "1st",
        "dept": "IT",
        "phone": 9123203424
    },
    {
        "name": "Prashant Vyas",
        "regno": "RA1711003011183",
        "email": "prashantshock98@gmail.com",
        "year": 1,
        "dept": "CSE",
        "phone": 7742287851
    },
    {
        "name": "prashantgulia3@gmail.com",
        "regno": "",
        "email": "",
        "year": "",
        "dept": "",
        "phone": ""
    },
    {
        "name": "prashantraghu999@gmail.com",
        "regno": "",
        "email": "",
        "year": "",
        "dept": "",
        "phone": ""
    },
    {
        "name": "prashantraghu999@gmail.com",
        "regno": "",
        "email": "",
        "year": "",
        "dept": "",
        "phone": ""
    },
    {
        "name": "prashantshock98@gmail.com",
        "regno": "",
        "email": "",
        "year": "",
        "dept": "",
        "phone": ""
    },
    {
        "name": "prashantshock98@gmail.com",
        "regno": "",
        "email": "",
        "year": "",
        "dept": "",
        "phone": ""
    },
    {
        "name": "prashantshock98@gmail.com",
        "regno": "",
        "email": "",
        "year": "",
        "dept": "",
        "phone": ""
    },
    {
        "name": "prashantshock98@gmail.com",
        "regno": "",
        "email": "",
        "year": "",
        "dept": "",
        "phone": ""
    },
    {
        "name": "Prateek kumar",
        "regno": "RA1611008010431",
        "email": "pacificmurarka@gmail.com",
        "year": 2,
        "dept": "IT",
        "phone": 8428277109
    },
    {
        "name": "Praveen Kumar",
        "regno": "RA1711003020629",
        "email": "pk480x@gmail.com",
        "year": 2017,
        "dept": "CSE",
        "phone": 9660556399
    },
    {
        "name": "Princedeepak600@gmail.com",
        "regno": "",
        "email": "",
        "year": "",
        "dept": "",
        "phone": ""
    },
    {
        "name": "Priyadharshini",
        "regno": 820414104057,
        "email": "dharshinipriya566@gmail.com",
        "year": "Final year",
        "dept": "Computer science",
        "phone": 8610615683
    },
    {
        "name": "Priyankasundar8@gmail.com",
        "regno": "",
        "email": "",
        "year": "",
        "dept": "",
        "phone": ""
    },
    {
        "name": "prkharrastogi99 pr@gmail.com",
        "regno": "",
        "email": "",
        "year": "",
        "dept": "",
        "phone": ""
    },
    {
        "name": "prkharrastogi99 pr@gmail.com",
        "regno": "",
        "email": "",
        "year": "",
        "dept": "",
        "phone": ""
    },
    {
        "name": "prkharrastogi99 pr@gmail.com",
        "regno": "",
        "email": "",
        "year": "",
        "dept": "",
        "phone": ""
    },
    {
        "name": "prkharrastogi99 pr@gmail.com",
        "regno": "",
        "email": "",
        "year": "",
        "dept": "",
        "phone": ""
    },
    {
        "name": "R.Sudharsan",
        "regno": "RA1711003010211",
        "email": "sudharsan_rg@srmuniv.edu.in",
        "year": "1st year",
        "dept": "CSE",
        "phone": 9962454388
    },
    {
        "name": "Raghav kumar kakar",
        "regno": "RA1711003010803",
        "email": "Raghavkumarkakar@gmail.com",
        "year": "Ist year",
        "dept": "Computer science engineering",
        "phone": 7397241799
    },
    {
        "name": "Rahul Burman",
        "regno": "RA1711004010649",
        "email": "rahulburman.39@gmail.com",
        "year": "1st Year",
        "dept": "ECE",
        "phone": 9511891536
    },
    {
        "name": "RAHUL KUMAR",
        "regno": "RA1611004010233",
        "email": "ayushrahul8888@gmail.com",
        "year": "2nd",
        "dept": "Electronics and communication engineering",
        "phone": 8189982423
    },
    {
        "name": "Rahul Kumar",
        "regno": "RA1711003011137",
        "email": "Kalrarahul955@gmail.com",
        "year": 2017,
        "dept": "Computer science",
        "phone": 9629088890
    },
    {
        "name": "Rahul Suresh",
        "regno": "RA1611003010095",
        "email": "rahul.tech.work@gmail.com",
        "year": "2nd",
        "dept": "CSE",
        "phone": 9566176982
    },
    {
        "name": "Raj Ganatra",
        "regno": "RA1711003010680",
        "email": "rganatra.00@gmail.com",
        "year": "1st year",
        "dept": "CSE",
        "phone": 7405358546
    },
    {
        "name": "Raj Khatri",
        "regno": "RA1711003011113",
        "email": "rjkhatri7@gmail.com",
        "year": 1,
        "dept": "CSE",
        "phone": 8604632306
    },
    {
        "name": "Rajnish Raj Jayanti",
        "regno": "RA1611008010544",
        "email": "rr66520@gmail.com",
        "year": "2nd year",
        "dept": "Information Technology",
        "phone": 9087362293
    },
    {
        "name": "rinzler.abhishek@gmail.com",
        "regno": "",
        "email": "",
        "year": "",
        "dept": "",
        "phone": ""
    },
    {
        "name": "rinzler.abhishek@gmail.com",
        "regno": "",
        "email": "",
        "year": "",
        "dept": "",
        "phone": ""
    },
    {
        "name": "RISHABH MODI",
        "regno": "RA1511003010498",
        "email": "rishabh.modi.r5@gmail.com",
        "year": 3,
        "dept": "CSE",
        "phone": 9572130395
    },
    {
        "name": "Rishav Paudel",
        "regno": "14A91A05F2",
        "email": "rissuuuu@gmail.com",
        "year": "4th",
        "dept": "CSE",
        "phone": 9505984547
    },
    {
        "name": "rissuuuu@gmail.com",
        "regno": "",
        "email": "",
        "year": "",
        "dept": "",
        "phone": ""
    },
    {
        "name": "Ritik Raj Singh",
        "regno": "RA1711003010440",
        "email": "ritik_raj@srmuniv.edu.in",
        "year": "FIRST",
        "dept": "CSE",
        "phone": 9677899709
    },
    {
        "name": "ritik_raj@srmuniv.edu.in",
        "regno": "",
        "email": "",
        "year": "",
        "dept": "",
        "phone": ""
    },
    {
        "name": "Rohan",
        "regno": "RA1511003010273",
        "email": "Rohan97shah27@gmail.com",
        "year": 3,
        "dept": "CSE",
        "phone": 9962253077
    },
    {
        "name": "Rohan Kalra",
        "regno": "RA1511003010603",
        "email": "rohankalra97@gmail.com",
        "year": 3,
        "dept": "CSE",
        "phone": 9940470505
    },
    {
        "name": "Rohan Tehalyani",
        "regno": "RA1711004010050",
        "email": "rohan.tehalyani11@gmail.com",
        "year": "1st",
        "dept": "ECE",
        "phone": 9993444335
    },
    {
        "name": "Rohan Tehalyani",
        "regno": "RA1711004010050",
        "email": "rohan.tehalyani11@gmail.com",
        "year": "1st",
        "dept": "ECE",
        "phone": 9993444335
    },
    {
        "name": "Rohit",
        "regno": "RA1511004010595",
        "email": "lenrohit@gmail.com",
        "year": 3,
        "dept": "ECE",
        "phone": 8074174228
    },
    {
        "name": "Rohit konathala",
        "regno": "RA1511004010595",
        "email": "Lenrohit@gmail.com",
        "year": 3,
        "dept": "ECE",
        "phone": 8074174228
    },
    {
        "name": "Rohit Pandey",
        "regno": "RA1611008010611",
        "email": "m3rcrocks@gmail.com",
        "year": 2,
        "dept": "IT",
        "phone": 8124602479
    },
    {
        "name": "Rohit R Nair",
        "regno": "RA1711003010477",
        "email": "nairrohit3@gmail.com",
        "year": "2017-21",
        "dept": "CSE",
        "phone": 9969190004
    },
    {
        "name": "Rohit R Nair",
        "regno": "RA1711003010477",
        "email": "nairrohit3@gmail.com",
        "year": "2017-21",
        "dept": "CSE",
        "phone": 9969190004
    },
    {
        "name": "Rohit Sanyal",
        "regno": "RA1711008010187",
        "email": "rohitsanyal99@gmail.com",
        "year": "1st",
        "dept": "I.T.",
        "phone": 9920217156
    },
    {
        "name": "S.Karthikeyan",
        "regno": "RA1611002010168",
        "email": "keyan6932@gmail.com",
        "year": "Second year",
        "dept": "Mechanical",
        "phone": 9789479644
    },
    {
        "name": "Sahitya shrivastava",
        "regno": "RA1711008010199",
        "email": "sahishrivastava@gmail.com",
        "year": "¹",
        "dept": "IT",
        "phone": 9521429160
    },
    {
        "name": "SAIKAT BANERJEE",
        "regno": "RA1711003010817",
        "email": "Bittu.banerjee7@gmail.com",
        "year": "1st year",
        "dept": "CSE",
        "phone": 7059206098
    },
    {
        "name": "Saket",
        "regno": "RA1711003010451",
        "email": "saketladdha@gmail.com",
        "year": 1,
        "dept": "CSE",
        "phone": 8825880948
    },
    {
        "name": "Samarth Pinakin Patel",
        "regno": "RA1611008010445",
        "email": "psamarth8836@gmail.com",
        "year": 2,
        "dept": "IT",
        "phone": 7550172750
    },
    {
        "name": "SANCHAYAN SARKAR",
        "regno": "RA1611008010654",
        "email": "sanchayan.sarkar1997@gmail.com",
        "year": 2,
        "dept": "IT",
        "phone": 9789830349
    },
    {
        "name": "Sanjay Bhargav Siddi",
        "regno": "RA1611008010684",
        "email": "sanjaybhargav23@gmail.com",
        "year": "2nd year",
        "dept": "Information technology",
        "phone": 7550172695
    },
    {
        "name": "Sanjeev",
        "regno": "RA1711004010003",
        "email": "ssanjeevsharan@gmail.com",
        "year": 2017,
        "dept": "Ece",
        "phone": 7358610607
    },
    {
        "name": "Saraswan Sinha",
        "regno": "RA1711008010045",
        "email": "saraswan1999@gmail.com",
        "year": "1st",
        "dept": "IT",
        "phone": 8809036263
    },
    {
        "name": "Saroj Sundara Priyanga Sundaresan",
        "regno": "70E3DCD6-6622-483A-BF93-7BF0BB45725D",
        "email": "priyankasundar8@gmail.com",
        "year": "Final year",
        "dept": "Computer science",
        "phone": 8056443875
    },
    {
        "name": "Satyam rout",
        "regno": "RA1711004010411",
        "email": "satyam.rout@yahoo.com",
        "year": "1st",
        "dept": "ECE",
        "phone": 7008479148
    },
    {
        "name": "Saundarya Kumar",
        "regno": "RA1711003010026",
        "email": "saundarya_kumar@srmuniv.edu.in",
        "year": "First",
        "dept": "CSE",
        "phone": "8779618546/9969289893"
    },
    {
        "name": "Saurabh Agrawal",
        "regno": "RA1711003010910",
        "email": "agrawal99saurabh@gmail.com",
        "year": "1st",
        "dept": "Cse",
        "phone": 8175800556
    },
    {
        "name": "Saurabh Agrawal",
        "regno": "RA1711003010910",
        "email": "agrawal99saurabh@gmail.com",
        "year": "1st",
        "dept": "Cse",
        "phone": 8175800556
    },
    {
        "name": "Shantanu",
        "regno": "RA1711003010835",
        "email": "shan.roy1999@gmail.com",
        "year": 2017,
        "dept": "CSE",
        "phone": 9414612055
    },
    {
        "name": "Sharon Mathews",
        "regno": "RA1711008010176",
        "email": "sharon_mathews@srmuniv.edu.in",
        "year": "1st",
        "dept": "IT",
        "phone": 9176554984
    },
    {
        "name": "Shashikant Nanda",
        "regno": "RA1711003010467",
        "email": "shashikantnanda@gmail.com",
        "year": 1,
        "dept": "computer science and engineering",
        "phone": 9938176499
    },
    {
        "name": "shashikantnanda@gmail.com",
        "regno": "",
        "email": "",
        "year": "",
        "dept": "",
        "phone": ""
    },
    {
        "name": "shashikantnanda@gmail.com",
        "regno": "",
        "email": "",
        "year": "",
        "dept": "",
        "phone": ""
    },
    {
        "name": "shashikantnanda@gmail.com",
        "regno": "",
        "email": "",
        "year": "",
        "dept": "",
        "phone": ""
    },
    {
        "name": "shashikantnanda@gmail.com",
        "regno": "",
        "email": "",
        "year": "",
        "dept": "",
        "phone": ""
    },
    {
        "name": "Shivam Mukherjee",
        "regno": "RA1611020010084",
        "email": "mshivam98@gmail.com",
        "year": "2nd",
        "dept": "Software Engineering",
        "phone": 9331424109
    },
    {
        "name": "Shivangi Tiwari",
        "regno": "RA1711008010316",
        "email": "shivangi_tiwari@srmuniv.edu.in",
        "year": "1st year",
        "dept": "IT",
        "phone": 9651408804
    },
    {
        "name": "Shivangi Tiwari",
        "regno": "RA1711008010316",
        "email": "shivangi_tiwari@srmuniv.edu.in",
        "year": "1st year",
        "dept": "IT",
        "phone": 9651408804
    },
    {
        "name": "Shruthi Chinni",
        "regno": "RA17110p8010189",
        "email": "shruthichinni12@gmail.com",
        "year": 1,
        "dept": "IT",
        "phone": 7358483533
    },
    {
        "name": "Shruthi Chinni",
        "regno": "RA17110p8010189",
        "email": "shruthichinni12@gmail.com",
        "year": 1,
        "dept": "IT",
        "phone": 7358483533
    },
    {
        "name": "Shubham",
        "regno": "RA151003010579",
        "email": "shubham_om@srmuniv.edu.in",
        "year": 3,
        "dept": "Computer Science Engineering",
        "phone": 7404442229
    },
    {
        "name": "Shubhayan Saha",
        "regno": "RA1711003010769",
        "email": "shubhayan1998@gmail.com",
        "year": 2017,
        "dept": "Cse",
        "phone": 9433249421
    },
    {
        "name": "shubhayan saha",
        "regno": "RA1711003010769",
        "email": "shubhayan1998@gmail.com",
        "year": 2017,
        "dept": "Cse",
        "phone": 9433249421
    },
    {
        "name": "shubhayan saha",
        "regno": "RA1711003010769",
        "email": "shubhayan1998@gmail.com",
        "year": 2017,
        "dept": "Cse",
        "phone": 9433249421
    },
    {
        "name": "shubhayan saha",
        "regno": "RA1711003010769",
        "email": "shubhayan1998@gmail.com",
        "year": 2017,
        "dept": "Cse",
        "phone": 9433249421
    },
    {
        "name": "shubhayan saha",
        "regno": "RA1711003010769",
        "email": "shubhayan1998@gmail.com",
        "year": 2017,
        "dept": "Cse",
        "phone": 9433249421
    },
    {
        "name": "shubhayan saha",
        "regno": "RA1711003010769",
        "email": "shubhayan1998@gmail.com",
        "year": 2017,
        "dept": "Cse",
        "phone": 9433249421
    },
    {
        "name": "shubhayan saha",
        "regno": "RA1711003010769",
        "email": "shubhayan1998@gmail.com",
        "year": 2017,
        "dept": "Cse",
        "phone": 9433249421
    },
    {
        "name": "shubhayan saha",
        "regno": "RA1711003010769",
        "email": "shubhayan1998@gmail.com",
        "year": 2017,
        "dept": "Cse",
        "phone": 9433249421
    },
    {
        "name": "shubhayan saha",
        "regno": "RA1711003010769",
        "email": "shubhayan1998@gmail.com",
        "year": 2017,
        "dept": "Cse",
        "phone": 9433249421
    },
    {
        "name": "shubhayan saha",
        "regno": "RA1711003010769",
        "email": "shubhayan1998@gmail.com",
        "year": 2017,
        "dept": "Cse",
        "phone": 9433249421
    },
    {
        "name": "shubhayan saha",
        "regno": "RA1711003010769",
        "email": "shubhayan1998@gmail.com",
        "year": 2017,
        "dept": "Cse",
        "phone": 9433249421
    },
    {
        "name": "shubhayan saha",
        "regno": "RA1711003010769",
        "email": "shubhayan1998@gmail.com",
        "year": 2017,
        "dept": "Cse",
        "phone": 9433249421
    },
    {
        "name": "shubhayan1998@gmail.com",
        "regno": "",
        "email": "",
        "year": "",
        "dept": "",
        "phone": ""
    },
    {
        "name": "shubhayan1998@gmail.com",
        "regno": "",
        "email": "",
        "year": "",
        "dept": "",
        "phone": ""
    },
    {
        "name": "shubhayan1998@gmail.com",
        "regno": "",
        "email": "",
        "year": "",
        "dept": "",
        "phone": ""
    },
    {
        "name": "shubhayan1998@gmail.com",
        "regno": "",
        "email": "",
        "year": "",
        "dept": "",
        "phone": ""
    },
    {
        "name": "shubhayan1998@gmail.com",
        "regno": "",
        "email": "",
        "year": "",
        "dept": "",
        "phone": ""
    },
    {
        "name": "shubhayan1998@gmail.com",
        "regno": "",
        "email": "",
        "year": "",
        "dept": "",
        "phone": ""
    },
    {
        "name": "shubhayan1998@gmail.com",
        "regno": "",
        "email": "",
        "year": "",
        "dept": "",
        "phone": ""
    },
    {
        "name": "shubhayan1998@gmail.com",
        "regno": "",
        "email": "",
        "year": "",
        "dept": "",
        "phone": ""
    },
    {
        "name": "Siddhesh Vanikar",
        "regno": "RA1711003011396",
        "email": "siddhesh.vanikar@gmail.com",
        "year": 1,
        "dept": "CSE",
        "phone": 8369504955
    },
    {
        "name": "Siva Vignesh K",
        "regno": "RA1711003011129",
        "email": "sivavignesh30@gmail.com",
        "year": 1,
        "dept": "CSE",
        "phone": 9994481119
    },
    {
        "name": "Siva Vignesh K",
        "regno": "RA1711003011129",
        "email": "sivavignesh30@gmail.com",
        "year": 2017,
        "dept": "CSE",
        "phone": 9994481119
    },
    {
        "name": "Snigdha sinha",
        "regno": "RA1711008010149",
        "email": "Snigdha_sinha@srmuniv.edu.in",
        "year": 2017,
        "dept": "IT",
        "phone": 9199204151
    },
    {
        "name": "Sourav Kumar Manjhi",
        "regno": "RA1711003010857",
        "email": "sourav_kumar@srmuniv.edu.in",
        "year": "1st",
        "dept": "CSE",
        "phone": 7397223980
    },
    {
        "name": "Soutrik Duttagupta",
        "regno": "RA1711003010807",
        "email": "Soutrikdattagupta@gmail.com",
        "year": 2017,
        "dept": "CSE",
        "phone": 9007405689
    },
    {
        "name": "Spandan Bhattacharya",
        "regno": "RA1711003010997",
        "email": "Spandanb790@gmail.com",
        "year": "One",
        "dept": "CSE",
        "phone": 9313519128
    },
    {
        "name": "Srijan srivastava",
        "regno": "RA1711003011368",
        "email": "srijansrivastava1234@gmail.com",
        "year": 2021,
        "dept": "CSE",
        "phone": 8840580041
    },
    {
        "name": "Srijan srivastava",
        "regno": "RA1711003011368",
        "email": "srijansrivastava1234@gmail.com",
        "year": 2021,
        "dept": "CSE",
        "phone": 8840580041
    },
    {
        "name": "srijansrivastava1234@gmail.com",
        "regno": "",
        "email": "",
        "year": "",
        "dept": "",
        "phone": ""
    },
    {
        "name": "srijansrivastava1234@gmail.com",
        "regno": "",
        "email": "",
        "year": "",
        "dept": "",
        "phone": ""
    },
    {
        "name": "sriranjanig4@gmail.com",
        "regno": "",
        "email": "",
        "year": "",
        "dept": "",
        "phone": ""
    },
    {
        "name": "sriranjanig4@gmail.com",
        "regno": "",
        "email": "",
        "year": "",
        "dept": "",
        "phone": ""
    },
    {
        "name": "Stuti Singh",
        "regno": "RA1611008010434",
        "email": "15stu.stuti@gmail.com",
        "year": "2nd",
        "dept": "IT",
        "phone": 7550172702
    },
    {
        "name": "Subham Agrawal",
        "regno": "RA1611018010074",
        "email": "subhamagrawal861@gmail",
        "year": "",
        "dept": "",
        "phone": ""
    },
    {
        "name": "Subham Agrawal",
        "regno": "RA1611018010074",
        "email": "subhamagrawal861@gmail.com",
        "year": 2,
        "dept": "Mechatronics",
        "phone": 9777046976
    },
    {
        "name": "Subhankar",
        "regno": "Shah",
        "email": "subhankar29shah@gmail.com",
        "year": 2017,
        "dept": "Information Science and Engineering",
        "phone": 918877006651
    },
    {
        "name": "Surya Varanasi",
        "regno": "RA1511003010706",
        "email": "suryavaranasi_va@srmuniv.edu.in",
        "year": "3rd",
        "dept": "CSE",
        "phone": ""
    },
    {
        "name": "Surya Varanasi",
        "regno": "RA1511003010706",
        "email": "suryavaranasi_va@srmuniv.edu.in",
        "year": "3rd",
        "dept": "CSE",
        "phone": 9884208369
    },
    {
        "name": "SUYASH MISHRA",
        "regno": "RA1711003010820",
        "email": "mishra.15suyash@gmail.com",
        "year": 1,
        "dept": "CSE",
        "phone": 7054640191
    },
    {
        "name": "",
        "regno": "",
        "email": "",
        "year": "",
        "dept": "",
        "phone": ""
    },
    {
        "name": "Swarnavya Sarkar",
        "regno": "RA1511020010057",
        "email": "swarnavya.sarkar@gmail.com",
        "year": "3rd",
        "dept": "Software",
        "phone": 8250728346
    },
    {
        "name": "Swathy.M",
        "regno": 119004205,
        "email": "98swath@gmail.com",
        "year": "Third year",
        "dept": "Ece",
        "phone": 7502245149
    },
    {
        "name": "Tanay Burreja",
        "regno": "RA1611003010631",
        "email": "tanay.burreja12@gmail.com",
        "year": 2,
        "dept": "CSE",
        "phone": 9711218924
    },
    {
        "name": "Tandrima saha",
        "regno": "RA1611023010026",
        "email": "tulikasaha2000@gmail.com",
        "year": 2,
        "dept": "Nanotechnology",
        "phone": 7044637617
    },
    {
        "name": "Tapan Rai",
        "regno": "RA1511003010261",
        "email": "raitapan1@gmail.com",
        "year": "1st",
        "dept": "CSE",
        "phone": 7415146948
    },
    {
        "name": "subhamagrawal861@gmail.com",
        "regno": "",
        "email": "",
        "year": "",
        "dept": "",
        "phone": ""
    },
    {
        "name": "subhamagrawal861@gmail.com",
        "regno": "",
        "email": "",
        "year": "",
        "dept": "",
        "phone": ""
    },
    {
        "name": "Tushar chadha",
        "regno": "RA1611008010172",
        "email": "thetusharchadha@gmail.com",
        "year": "2nd",
        "dept": "IT",
        "phone": 9087447549
    },
    {
        "name": "uanimesh25@gmail.com",
        "regno": "",
        "email": "",
        "year": "",
        "dept": "",
        "phone": ""
    },
    {
        "name": "Ujjwal",
        "regno": "RA1711003010905",
        "email": "ujjwaldadhich08@gmail.com",
        "year": 2017,
        "dept": "CSE",
        "phone": 9413236084
    },
    {
        "name": "Ujjwol Dandekhya",
        "regno": "14A91A05H4",
        "email": "gunner04ujjwol@gmail.com",
        "year": 4,
        "dept": "CSE",
        "phone": 7036073184
    },
    {
        "name": "Umang Bhoutika",
        "regno": "RA1611008010613",
        "email": "umangbhoutika20@gmail.com",
        "year": "2nd Year",
        "dept": "IT",
        "phone": 8124601460
    },
    {
        "name": "Utkarsh",
        "regno": "RA1711003010739",
        "email": "utkarsh0304@gmail.com",
        "year": 1,
        "dept": "CSE",
        "phone": 9944829932
    },
    {
        "name": "Utkarsh Pandey",
        "regno": "RA1511020010109",
        "email": "p.utkarsh97@gmail.com",
        "year": 3,
        "dept": "SWE",
        "phone": 9494565654
    },
    {
        "name": "Vaibhav Baweja",
        "regno": "RA1611008010361",
        "email": "vaibhavbwj9@gmail.com",
        "year": "2nd",
        "dept": "IT",
        "phone": 9582761559
    },
    {
        "name": "Vaibhav Baweja",
        "regno": "RA16111008010361",
        "email": "vaibhavbwj9@gmail.com",
        "year": "2nd",
        "dept": "IT",
        "phone": 9582761559
    },
    {
        "name": "Abhishek Singh",
        "regno": "RA1711003011398",
        "email": "abhishekkattwal@gmail.com",
        "year": "First",
        "dept": "CSE",
        "phone": 8317069621
    },
    {
        "name": "Vansh jatana",
        "regno": "RA1711003010515",
        "email": "vanshjatana99@gmail.com",
        "year": "1st",
        "dept": "Cse",
        "phone": 8685086183
    },
    {
        "name": "Vansh Narang",
        "regno": "Ra1511003010412",
        "email": "Vansh.narang17@gmail.com",
        "year": 3,
        "dept": "Cse",
        "phone": 9811507337
    },
    {
        "name": "Vanshjatana99@gmail.com",
        "regno": "",
        "email": "",
        "year": "",
        "dept": "",
        "phone": ""
    },
    {
        "name": "vishwanand vyas",
        "regno": "Ra",
        "email": "",
        "year": "",
        "dept": "",
        "phone": ""
    },
    {
        "name": "vishwanand vyas",
        "regno": "ra1511003010269",
        "email": "vishwanand46vyas@gmail.com",
        "year": 3,
        "dept": "cse",
        "phone": 7358550495
    },
    {
        "name": "X",
        "regno": "RA1511003010261",
        "email": "raitapan1@gmail.com",
        "year": "1st",
        "dept": "Cse",
        "phone": 7415146948
    },
    {
        "name": "Yash Kadtan",
        "regno": "RA1711003011181",
        "email": "yash.kadtan99@gmail.com",
        "year": "1st",
        "dept": "CSE",
        "phone": 9924484329
    },
    {
        "name": "Yash Tarwe",
        "regno": "RA1711003010255",
        "email": "yashtarwe29@gmail.com",
        "year": 2017,
        "dept": "CSE",
        "phone": 9113445972
    },
    {
        "name": "Yasharth Pathak",
        "regno": "RA1611020010190",
        "email": "yasharthpathak@gmail.com",
        "year": 2,
        "dept": "Software Engineering",
        "phone": 9030200800
    },
    {
        "name": "Yashwant Narayan Ray",
        "regno": "RA1711003010777",
        "email": "yashwant_narayan@srmuniv.edu.in",
        "year": "First",
        "dept": "Cse",
        "phone": 7397227149
    },
    {
        "name": "Yashwant Narayan Ray",
        "regno": "RA1711003010777",
        "email": "yashwant_narayan@srmuniv.edu.in",
        "year": "First",
        "dept": "Cse",
        "phone": 7397227149
    },
    {
        "name": "Yashwant Narayan Ray",
        "regno": "RA1711003010777",
        "email": "yashwant_narayan@srmuniv.edu.in",
        "year": "First",
        "dept": "Cse",
        "phone": 7397227149
    },
    {
        "name": "Yashwant Narayan Ray",
        "regno": "RA1711003010777",
        "email": "yashwant_narayan@srmuniv.edu.in",
        "year": "First",
        "dept": "Cse",
        "phone": 7397227149
    },
    {
        "name": "Yashwant Narayan Ray",
        "regno": "RA1711003010777",
        "email": "yashwant_narayan@srmuniv.edu.in",
        "year": "First",
        "dept": "Cse",
        "phone": 7397227149
    },
    {
        "name": "Yashwant Narayan Ray",
        "regno": "RA1711003010777",
        "email": "yashwant_narayan@srmuniv.edu.in",
        "year": "First",
        "dept": "Cse",
        "phone": 7397227149
    }
]
mongoClient.connect("mongodb://microsoftclub:pjqZG2MZNmexC6CJ4MTmPyIqDouhGSD2QR3xPDFQnBeSfFHwkwYrtiaUTIBcK0DJk3CljvGKYFLZ5aQsLblwhQ==@microsoftclub.documents.azure.com:10255/?ssl=true",
    function(err, database) {
        if (!err) {
            const db = database;
            const users = db.collection('Users');

            users.insert(newData, function(err, data) {
                console.log(err);
            });
        }
    }
);