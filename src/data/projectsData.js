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
        projectName: 'CardBoard',
        projectRole: 'Sole Developer',
        projectDesc: 'Python digital card/board game utilizing pygame graphics library and randomization algorithms for bot decision making. CardBoard introduces a simple role-playing board game style with a card game twist and offers hours of fun for a single player vs bots online game. Entire project is hosted on AWS cloud for easy hosting and access for all players.',
        tags: ['Python', 'Pygame','AWS'],
        code: 'https://github.com/RavjodhHeer/Projects/tree/master/Digital%20luck%20based%20board%20game',
        demo: 'https://github.com/RavjodhHeer/Projects/tree/master/Digital%20luck%20based%20board%20game',
        image: "https://cdn.thewirecutter.com/wp-content/media/2021/07/boardgames-2048px-1551.jpg?auto=webp&quality=75&width=1024"
    },
    {
        id: 3,
        projectName: 'File Compressor/Encryptor',
        projectRole: 'Sole Developer',
        projectDesc: 'A file compression program built entirely in C which also encrypts the file through the use of the Hamming(8, 4) technique. Program also contains a decryptor/decompressor which returns compressed/encrypted files to normal state. Utilizes bitvector bitmatrix data structures to aid in program calculations.',
        tags: ['C', 'Makefile', 'Linux', "Git"],
        code: 'https://github.com/RavjodhHeer/Projects/tree/master/File%20Compressor-Encryptor%20in%20C',
        demo: 'https://github.com/RavjodhHeer/Projects/tree/master/File%20Compressor-Encryptor%20in%20C',
        image: "https://www.devteam.space/wp-content/uploads/2019/01/How-To-Build-Your-Own-File-Encryption-Software.jpeg"
    },
    {
        id: 4,
        projectName: 'Text Censor/Firewall',
        projectRole: 'Sole Developer',
        projectDesc: 'Text censorship program built entirely in C which given an input of main text, "banned" words and their corressponding replacements, returns the text file with all instances of "banned" words replaced with their replacements. Utilizes Hashtables, Bloomfilter, and LinkedLists to aid in program calculations.',
        tags: ['C', 'Makefile', 'Linux', "Git"],
        code: 'https://github.com/RavjodhHeer/Projects/tree/master/Text%20Censor-Firewall%20in%20C',
        demo: 'https://github.com/RavjodhHeer/Projects/tree/master/Text%20Censor-Firewall%20in%20C',
        image: "https://merriam-webster.com/assets/mw/images/article/art-wap-landing-mp-lg/censor-2522-aab35d398766fe9ebb289127a3fe9b40@1x.jpg"
    },
    
]