import roomy_demo from '../assets/svg/projects/roomy_demo_screenshot.png'


export const projectsData = [
    {
        id: 1,
        projectName: 'Roomy',
        projectRole: 'Founder - Lead Developer',
        projectDesc: '"Like a LinkedIn for rentals". A social media platform built to connect renters and landlords in order to bridge the social gap in the rental application process. Provides a more casual, online relationship between landlords and renters and allows landlords to see more in a potential tenant rather than data on a rental application.',
        tags: ['React', 'HTML' ,'CSS', 'Javascript', 'Firebase'],
        code: 'https://github.com/RavjodhHeer/Roomy',
        demo: 'https://roomy-e2f16.web.app/',
        image: roomy_demo,
    },
    {
        id: 2,
        projectName: 'DetectX',
        projectRole: 'Sole Developer',
        projectDesc: 'AI license plate detection software that utilizes a machine learning algorithm to detect and mask license plates in images and then deploys optical character recognition(OCR) to decipher and return license plate text from masked image',
        tags: ['Python', 'OpenCV','PyTesseract', 'AI', 'Machine Learning'],
        code: 'https://github.com/RavjodhHeer/Projects/tree/master/Vin%20Decoder%20Detector%20in%20Python',
        demo: 'https://github.com/RavjodhHeer/Projects/tree/master/Vin%20Decoder%20Detector%20in%20Python',
        image: "https://www.shaip.com/wp-content/uploads/2022/08/Blog_Automatic-Number-Plate-Recognition-ANPR.jpg"
    },
    {
        id: 3,
        projectName: 'Car Deal Finder',
        projectRole: 'Sole Developer',
        projectDesc: 'Python application that automates the process of vehicle searching. Utilizes inputs from the user to web scrape and search for the best vehicles matching user input with complete vehicle data returned in an easy to understand format.',
        tags: ['Python', 'Selenium','Car', 'Deal', 'Finder'],
        code: 'https://github.com/RavjodhHeer/Projects/tree/master/CarDealFinder',
        demo: 'https://github.com/RavjodhHeer/Projects/tree/master/CarDealFinder',
        image: "https://cdn07.carsforsale.com/CustomTemplatePhotos/270695/photos/carfinder.33a4698e.jpg"
    },
    {
        id: 4,
        projectName: 'File Compressor/Encryptor',
        projectRole: 'Sole Developer',
        projectDesc: 'A file compression program built entirely in C which also encrypts the file through the use of the Hamming(8, 4) technique. Program also contains a decryptor/decompressor which returns compressed/encrypted files to normal state. Utilizes bitvector bitmatrix data structures to aid in program calculations.',
        tags: ['C', 'Makefile', 'Linux', "Git"],
        code: 'https://github.com/RavjodhHeer/Projects/tree/master/File%20Compressor-Encryptor%20in%20C',
        demo: 'https://github.com/RavjodhHeer/Projects/tree/master/File%20Compressor-Encryptor%20in%20C',
        image: "https://www.devteam.space/wp-content/uploads/2019/01/How-To-Build-Your-Own-File-Encryption-Software.jpeg"
    },
    {
        id: 5,
        projectName: 'Text Censor/Firewall',
        projectRole: 'Sole Developer',
        projectDesc: 'Text censorship program built entirely in C which given an input of main text, "banned" words and their corressponding replacements, returns the text file with all instances of "banned" words replaced with their replacements. Utilizes Hashtables, Bloomfilter, and LinkedLists to aid in program calculations.',
        tags: ['C', 'Makefile', 'Linux', "Git"],
        code: 'https://github.com/RavjodhHeer/Projects/tree/master/Text%20Censor-Firewall%20in%20C',
        demo: 'https://github.com/RavjodhHeer/Projects/tree/master/Text%20Censor-Firewall%20in%20C',
        image: "https://merriam-webster.com/assets/mw/images/article/art-wap-landing-mp-lg/censor-2522-aab35d398766fe9ebb289127a3fe9b40@1x.jpg"
    },
    
]