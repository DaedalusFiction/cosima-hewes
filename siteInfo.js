// Table of Contents:
// 1. Meta
// 2. Layout
// 3. Home
// 4. Services
// 5. Projects
// 6. Studio
// 7. About
// 8. Social Media
// 9. The Process
// 10. Contact

import lightTheme from "./styles/themes/lightTheme";

// 1. Meta

const siteName = "Cosima Hewes";
// const siteName = "Cosima Hewes";

// 2. Layout

const navbar = {
    buttonOne: {
        text: "Contact",
        href: "/contact",
        variant: "outlined",
    },
};

const header = {
    buttonOne: {
        text: "Contact",
        href: "/contact",
        variant: "outlined",
    },
};
// 3. Home

const heroContent = {
    image: { url: "/images/homeGallery/home2.webp", alt: "alt hero text" },
    primaryText: "ARTIST PORTFOLIO TEMPLATE",
    secondaryText: "Created by FictionalWeb.com",
    buttonOne: {
        variant: "contained",
        href: "/projects",
        text: "View Galleries",
    },
};

const homeGalleryContent = {
    images: [
        { url: "/images/homeGallery/home0.webp", alt: "alt homeGallery/home" },
        { url: "/images/homeGallery/home1.webp", alt: "alt homeGallery/home" },
        { url: "/images/homeGallery/home3.webp", alt: "alt homeGallery/home" },
        { url: "/images/hero.webp", alt: "alt homeGallery/home" },
        { url: "/images/homeGallery/home4.webp", alt: "alt homeGallery/home" },
        { url: "/images/homeGallery/home5.webp", alt: "alt homeGallery/home" },
        { url: "/images/homeGallery/home6.webp", alt: "alt homeGallery/home" },
        { url: "/images/homeGallery/home7.webp", alt: "alt homeGallery/home" },
        { url: "/images/homeGallery/home8.webp", alt: "alt homeGallery/home" },
        { url: "/images/homeGallery/home0.webp", alt: "alt homeGallery/home" },
        { url: "/images/homeGallery/home0.webp", alt: "alt homeGallery/home" },
        { url: "/images/homeGallery/home0.webp", alt: "alt homeGallery/home" },
        { url: "/images/homeGallery/home0.webp", alt: "alt homeGallery/home" },
    ],
    text: "Art inspired by life inspired by art inspired by life etc.",
};

const servicesContent = [
    {
        title: "Service One!",
        price: "$200",
        description:
            "This is the sample description for the service. It is a very good description and a very good service",
        image: { url: "/images/placeholder.webp", alt: "alt placeholder text" },
        button: { text: "Book Now!", href: "/contact" },
        features: [
            {
                primaryText: "Feature One",
                secondaryText: "Feature Description",
            },
            {
                primaryText: "Feature Two",
                secondaryText: "Feature Description",
            },
            {
                primaryText: "Feature Three",
                secondaryText: "Feature Description",
            },
        ],
    },
    {
        title: "Service Two",
        price: "$400-800",
        description:
            "This is the sample description for the service. It is a very good description and a very good service",
        image: { url: "/images/placeholder.webp", alt: "alt placeholder text" },
        button: { text: "Book Now!", href: "/contact" },
        features: [
            {
                primaryText: "Feature One",
                secondaryText: "Feature Description",
            },
            {
                primaryText: "Feature Two",
                secondaryText: "Feature Description",
            },
            {
                primaryText: "Feature Three",
                secondaryText: "Feature Description",
            },
            {
                primaryText: "Feature Four",
                secondaryText: "Feature Description",
            },
        ],
    },
    {
        title: "Service Three",
        price: "Custom",
        description:
            "This is the sample description for the service. It is a very good description and a very good service",
        image: { url: "/images/placeholder.webp", alt: "alt placeholder text" },
        button: { text: "Book Now!", href: "/contact" },
        features: [
            {
                primaryText: "Feature One",
                secondaryText: "Feature Description",
            },
            {
                primaryText: "Feature Two",
                secondaryText: "Feature Description",
            },
            {
                primaryText: "Feature Three",
                secondaryText: "Feature Description",
            },
            {
                primaryText: "Feature Four",
                secondaryText: "Feature Description",
            },
            {
                primaryText: "Feature Five",
                secondaryText: "Feature Description",
            },
            {
                primaryText: "Feature Six",
                secondaryText: "Feature Description",
            },
        ],
    },
];

const blockTextOne = {
    backgroundColor: "white",
    title: "BLOCK TEXT ONE",
    body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, expedita veniam. Magni explicabo dignissimo!",
};
const blockTextTwo = {
    backgroundColor: "white",
    title: "BLOCK TEXT TWO",
    body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, expedita veniam. Magni explicabo dignissimo!",
};
const blockTextThree = {
    backgroundColor: lightTheme.palette.background.accentLight,
    title: "BLOCK TEXT THREE",
    body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, expedita veniam. Magni explicabo dignissimo!",
};

const mosaicSectionContentOne = {
    backgroundColor: lightTheme.palette.background.accentLight,
    title: "Mosaic Section One",
    content:
        "This is the mosaic section content. Here you can describe whatever you like about your service and the button below can link to any page in this website or any external site.",
    button: {
        text: "learn more",
        href: "/about",
        variant: "contained",
    },
    images: [
        { url: "/images/placeholder.webp", alt: "alt placeholder text" },
        { url: "/images/placeholder.webp", alt: "alt placeholder text" },
        { url: "/images/placeholder.webp", alt: "alt placeholder text" },
        { url: "/images/placeholder.webp", alt: "alt placeholder text" },
        { url: "/images/placeholder.webp", alt: "alt placeholder text" },
        { url: "/images/placeholder.webp", alt: "alt placeholder text" },
    ],
};
const mosaicSectionContentTwo = {
    backgroundColor: "white",
    title: "Mosaic Section Two",
    content:
        "This is the mosaic section content. Here you can describe whatever you like about your service and the button below can link to any page in this website or any external site.",
    button: {
        text: "learn more",
        href: "/about",
        variant: "contained",
    },
    images: [
        { url: "/images/placeholder.webp", alt: "alt placeholder text" },
        { url: "/images/placeholder.webp", alt: "alt placeholder text" },
        { url: "/images/placeholder.webp", alt: "alt placeholder text" },
        { url: "/images/placeholder.webp", alt: "alt placeholder text" },
        { url: "/images/placeholder.webp", alt: "alt placeholder text" },
        { url: "/images/placeholder.webp", alt: "alt placeholder text" },
    ],
};
const mosaicSectionContentThree = {
    backgroundColor: "white",
    title: "Mosaic Section Three",
    content:
        "This is the mosaic section content. Here you can describe whatever you like about your service and the button below can link to any page in this website or any external site.",
    button: {
        text: "learn more",
        href: "/about",
        variant: "contained",
    },
    images: [
        { url: "/images/placeholder.webp", alt: "alt placeholder text" },
        { url: "/images/placeholder.webp", alt: "alt placeholder text" },
        { url: "/images/placeholder.webp", alt: "alt placeholder text" },
        { url: "/images/placeholder.webp", alt: "alt placeholder text" },
        { url: "/images/placeholder.webp", alt: "alt placeholder text" },
        { url: "/images/placeholder.webp", alt: "alt placeholder text" },
    ],
};

const blockPhotoContentOne = {
    background: lightTheme.palette.background.accentLight,
    title: "BLOCK PHOTO TITLE",
    content: "Block Photo One",
    button: {
        text: "Button Text",
        href: "/about",
        variant: "contained",
    },
    image: { url: "/images/placeholder.webp", alt: "alt placeholder text" },
};
const blockPhotoContentTwo = {
    background: lightTheme.palette.background.accentLight,
    title: "BLOCK PHOTO TITLE",
    content: "Block Photo Two",
    button: {
        text: "Button Text",
        href: "/about",
        variant: "contained",
    },
    image: { url: "/images/placeholder.webp", alt: "alt placeholder text" },
};

// 4. Services
// 5. Projects

const galleryCategories = [
    {
        name: "animals",
        href: "/gallery/animals",
        image: {
            url: "/images/placeholder.webp",
            alt: "alt gallery image text",
        },
        subCategories: [
            {
                name: "goats",
                href: "/gallery/animals/goats",
                image: {
                    url: "/images/placeholder.webp",
                    alt: "alt gallery image text",
                },
            },
            {
                name: "fowl and fauna",
                href: "/gallery/animals/fowl and fauna",
                image: { url: "/images/placeholder.webp", alt: "alt text" },
            },
            {
                name: "cows and horses",
                href: "/gallery/animals/cows and horses",
                image: { url: "/images/placeholder.webp", alt: "alt text" },
            },
            {
                name: "cats and dogs",
                href: "/gallery/animals/cats and dogs",
                image: { url: "/images/placeholder.webp", alt: "alt text" },
            },
        ],
    },
    {
        name: "landscapes",
        href: "/gallery/landscapes",
        image: { url: "/images/placeholder.webp", alt: "alt text" },
        subCategories: [],
    },
    {
        name: "fantasy farm",
        href: "/gallery/fantasy farm",
        image: { url: "/images/placeholder.webp", alt: "alt text" },
        subCategories: [],
    },
    {
        name: "portraits",
        href: "/gallery/portraits",
        image: { url: "/images/placeholder.webp", alt: "alt text" },
        subCategories: [],
    },
    {
        name: "the female collective",
        href: "/gallery/thefemalecollective",
        image: { url: "/images/placeholder.webp", alt: "alt text" },
        subCategories: [],
    },
    {
        name: "surreal",
        href: "/gallery/surreal",
        image: { url: "/images/placeholder.webp", alt: "alt text" },
        subCategories: [],
    },
];

const galleryConfig = {
    categories: [],
    subCategories: [],
    fields: [
        { name: "Title", type: "text", value: "" },
        {
            name: "Description",
            type: "text",
            value: "",
            multiline: true,
            rows: 4,
        },
        { name: "Year", type: "number", value: "" },
    ],
};

// 7. About

// 7a. Artists

const leadProfile = {
    image: { url: "/images/about1.webp", alt: "cosima and her partner" },
    name: "Cosima Hewes",
    content:
        "After graduating from the university of Vermont in 1990, I moved to a rural commune near Charlottesville, Virginia Where I milked cows, wove hammocks and learned carpentry skills which would later come in handy. Some days, after fulfilling my weekly 48hr work obligation, I painted in the loft of a dusty barn and then in an old pillow shop where I'd managed to carve out studio space and began my delve into oil paints with a series of surreal portraits. \n\nTen years later, my husband and I moved to western MA where after a long search, we purchased a run down house on a scrappy plot of land. With lots of love and many hardworking hours, we've sculpted our Ashfield property into the sustainable homestead we recently christened “Jumping Goat Farm.” Most of the work you will see here was created in the post and beam studio where I now work.",
};

const secondaryProfiles = [
    {
        image: { url: "/images/placeholder.webp", alt: "alt placeholder text" },
        name: "Designer One",
        content:
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit.\n\nQuibusdam eaque nihil ipsum molestias ab quod aliquid consectetur rerum facilis ratione dignissimos fugiat, enim doloribus assumenda.\n\nLaboriosam voluptatem laudantium sequi iste nihil cupiditate sed, corporis eum natus excepturi, inventore nulla unde! Veritatis nihil culpa neque.",
    },
    {
        image: { url: "/images/placeholder.webp", alt: "alt placeholder text" },
        name: "Designer Two",
        content:
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam eaque nihil ipsum molestias ab quod aliquid consectetur rerum facilis ratione dignissimos fugiat, enim doloribus assumenda.\n\nLaboriosam voluptatem laudantium sequi iste nihil cupiditate sed, corporis eum natus excepturi, inventore nulla unde! Veritatis nihil culpa neque. Dolore ipsa sed asperiores voluptatibus nam modi. Dolorem hic incidunt quae tenetur quaerat animi, unde aspernatur.",
    },
    {
        image: { url: "/images/placeholder.webp", alt: "alt placeholder text" },
        name: "Designer Three",
        content:
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam eaque nihil ipsum molestias ab quod aliquid consectetur rerum facilis ratione dignissimos fugiat, enim doloribus assumenda.\n\nLaboriosam voluptatem laudantium sequi iste nihil cupiditate sed, corporis eum natus excepturi, inventore nulla unde! Veritatis nihil culpa neque. Dolore ipsa sed asperiores voluptatibus nam modi. Dolorem hic incidunt quae tenetur quaerat animi, unde aspernatur.\n\nDolore ipsa sed asperiores voluptatibus nam modi.",
    },
];

// 7b. Studio

const studioContent = {
    imageOne: { url: "/images/studio1.webp", alt: "cosima's studio" },
    imageTwo: { url: "/images/placeholder.webp", alt: "alt placeholder text" },
    imageThree: {
        url: "/images/placeholder.webp",
        alt: "alt placeholder text",
    },
    header: "",
    content:
        "In the winter of 2013, my husband and I staggered on the snowy slope of our neighbors' wood lot felling the white oaks that we rolled and milled the following summer with a portable mill. This was to become the frame of my 16 x 20 post and beam studio that was erected in September of 2014, with the help of friends and family in what was a festive barn-raising. That winter with a newly installed wood stove cranking, I plastered the inside walls and began painting in earnest once more.",
};

// 7c. Work

const workContent = {
    imageOne: { url: "/images/work1.webp", alt: "a cuddly baby goat" },
    imageTwo: { url: "/images/placeholder.webp", alt: "alt placeholder text" },
    imageThree: {
        url: "/images/work1.webp",
        alt: "a cuddly goat",
    },
    header: "",
    content:
        "With daily chores that include milking the goats, tending the chickens, feeding the cat, walking the dog(s) and working the gardens, it is no wonder that my most unassuming models are my ever companions. Sure they are cute, sure they are willing, but it is their earnest, sometimes contemplative, often silly energy that amuses and compels me to the studio.",
};

const commissionsContent = {
    backgroundColor: lightTheme.palette.background.accentLight,
    title: "Commissions",
    content:
        "This is the mosaic section content. Here you can describe whatever you like about your service and the button below can link to any page in this website or any external site.",
    button: {
        text: "learn more",
        href: "/about",
        variant: "contained",
    },
    images: [
        { url: "/images/commissions1.webp", alt: "commissioned artwork" },
        { url: "/images/commissions2.webp", alt: "commissioned artwork" },
        { url: "/images/commissions3.webp", alt: "commissioned artwork" },
    ],
};

const contactContent = {
    title: "GET IN TOUCH",
    content:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam eaque nihil ipsum molestias ab quod aliquid consectetur rerum facilis ratione dignissimos fugiat, enim doloribus assumenda.",
    image: {
        url: "/images/placeholder.webp",
        alt: "painting in progress",
    },
};

// 8. Social Media

// 9. Process
// 10. Contact

const processSteps = [
    {
        title: "Step Title",
        name: "STEP ONE",
        content:
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam eaque nihil ipsum molestias ab quod aliquid consectetur rerum facilis ratione dignissimos fugiat, enim doloribus assumenda.",
        image: {
            url: "/images/process/process1.webp",
            alt: "painting in progress",
        },
        reverse: false,
    },
    {
        title: "Step Title",
        name: "STEP TWO",
        content:
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam eaque nihil ipsum molestias ab quod aliquid consectetur rerum facilis ratione dignissimos fugiat, enim doloribus assumenda.\n\nLaboriosam voluptatem laudantium sequi iste nihil cupiditate sed, corporis eum natus excepturi, inventore nulla unde! Veritatis nihil culpa neque. Dolore ipsa sed asperiores voluptatibus nam modi. Dolorem hic incidunt quae tenetur quaerat animi, unde aspernatur.",
        image: {
            url: "/images/process/process2.webp",
            alt: "painting in progress",
        },
        reverse: true,
    },
    {
        title: "Step Title",
        name: "STEP THREE",
        content:
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam eaque nihil ipsum molestias ab quod aliquid consectetur rerum facilis ratione dignissimos fugiat, enim doloribus assumenda.\n\nLaboriosam voluptatem laudantium sequi iste nihil cupiditate sed, corporis eum natus excepturi, inventore nulla unde! Veritatis nihil culpa neque. Dolore ipsa sed asperiores voluptatibus nam modi. Dolorem hic incidunt quae tenetur quaerat animi, unde aspernatur.\n\nDolore ipsa sed asperiores voluptatibus nam modi.",
        image: {
            url: "/images/process/process3.webp",
            alt: "painting in progress",
        },
        reverse: false,
    },
    {
        title: "Step Title",
        name: "STEP FOUR",
        content:
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam eaque nihil ipsum molestias ab quod aliquid consectetur rerum facilis ratione dignissimos fugiat, enim doloribus assumenda.",
        image: {
            url: "/images/process/process4.webp",
            alt: "painting in progress",
        },
        reverse: true,
    },
    {
        title: "Step Title",
        name: "STEP FIVE",
        content:
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam eaque nihil ipsum molestias ab quod aliquid consectetur rerum facilis ratione dignissimos fugiat, enim doloribus assumenda.",
        image: {
            url: "/images/process/process5.webp",
            alt: "painting in progress",
        },
        reverse: false,
    },
    {
        title: "Step Title",
        name: "STEP SIX",
        content:
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam eaque nihil ipsum molestias ab quod aliquid consectetur rerum facilis ratione dignissimos fugiat, enim doloribus assumenda.",
        image: {
            url: "/images/process/process6.webp",
            alt: "painting in progress",
        },
        reverse: true,
    },
];

const eventConfig = {
    categories: [],
    subCategories: [],
    fields: [
        { name: "Title", type: "text", value: "" },
        { name: "Start Date", type: "date", value: "" },
        { name: "End Date", type: "date", value: "" },
        { name: "Venue", type: "text", value: "" },
        { name: "Time", type: "text", value: "" },
        {
            name: "Description",
            type: "text",
            value: "",
            multiline: true,
            rows: 4,
        },
        { name: "Venue Website", type: "text", value: "" },
    ],
    timeUploaded: new Date(),
};

const pages = [
    { name: "GALLERY", href: "/gallery", subPages: galleryCategories },
    {
        name: "ABOUT",
        href: "/about",
        subPages: [
            { name: "The Artist", href: "/about/artist" },
            { name: "The Studio", href: "/about/studio" },
            { name: "The Work", href: "/about/work" },
            { name: "The Process", href: "/about/process" },
        ],
    },
    {
        name: "EVENTS",
        href: "/events",
        subPages: [],
    },
    { name: "COMMISSIONS", href: "/services", subPages: [] },
    { name: "ADMIN", href: "/admin", subPages: [] },
];

export {
    siteName,
    pages,
    navbar,
    header,
    galleryCategories,
    galleryConfig,
    eventConfig,
    heroContent,
    homeGalleryContent,
    commissionsContent,
    contactContent,
    blockTextOne,
    blockTextTwo,
    blockTextThree,
    blockPhotoContentOne,
    blockPhotoContentTwo,
    mosaicSectionContentOne,
    mosaicSectionContentTwo,
    mosaicSectionContentThree,
    servicesContent,
    leadProfile,
    secondaryProfiles,
    studioContent,
    workContent,
    processSteps,
};
