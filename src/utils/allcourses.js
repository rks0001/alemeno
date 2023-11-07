const courseModel = [
    {
        id:1, // Unique identifier for the course
        name: 'Introduction to React Native',
        instructor: 'John Doe', // Name of the course instructor
        description: 'Learn the basics of React Native development and build your first mobile app.',
        enrollmentStatus: false, // Can be 'Open', 'Closed', or 'In Progress'
        thumbnail: 'https://img-c.udemycdn.com/course/750x422/1589310_8f97.jpg', //Link to the course thumbnail
        duration: '8 weeks', // Duration of the course
        schedule: 'Tuesdays and Thursdays, 6:00 PM - 8:00 PM',
        location: 'Online',
        prerequisites: ['Basic JavaScript knowledge', 'Familiarity with React'],
        syllabus: [
        {
        week: 1,
        topic: 'Introduction to React Native',
        content: 'Overview of React Native, setting up your development environment.'
        },
        {
        week: 2,
        topic: 'Building Your First App',
        content: 'Creating a simple mobile app using React Native components.'
        },
        // Additional weeks and topics...
        ],
        students: [
        {
        id: 101,
        name: 'Alice Johnson',
        email: 'alice@example.com',
        },
        {
        id: 102,
        name: 'Bob Smith',
        email: 'bob@example.com',
        },
        // Additional enrolled students...
        ],
        }, 
        {
            id: 2, // Unique identifier for the course
            name: 'Introduction to React ',
            instructor: 'John Doe', // Name of the course instructor
            description: 'Learn the basics of React Native development and build your first mobile app.',
            enrollmentStatus: false, // Can be 'Open', 'Closed', or 'In Progress'
            thumbnail: 'https://process.fs.teachablecdn.com/ADNupMnWyR7kCWRvm76Laz/resize=width:705/https://www.filepicker.io/api/file/fGWjtyQtG4JE7UXgaPAN', //Link to the course thumbnail
            duration: '8 weeks', // Duration of the course
            schedule: 'Tuesdays and Thursdays, 6:00 PM - 8:00 PM',
            location: 'Online',
            prerequisites: ['Basic JavaScript knowledge', 'Familiarity with React'],
            syllabus: [
            {
            week: 1,
            topic: 'Introduction to React Native',
            content: 'Overview of React Native, setting up your development environment.'
            },
            {
            week: 2,
            topic: 'Building Your First App',
            content: 'Creating a simple mobile app using React Native components.'
            },
            // Additional weeks and topics...
            ],
            students: [
            {
            id: 101,
            name: 'Alice Johnson',
            email: 'alice@example.com',
            },
            {
            id: 102,
            name: 'Bob Smith',
            email: 'bob@example.com',
            },
            // Additional enrolled students...
            ],
            },
            {
                id: 3, // Unique identifier for the course
                name: 'Complete Full Stack MERN',
                instructor: 'John Doe', // Name of the course instructor
                description: 'Learn the basics of React Native development and build your first mobile app.',
                enrollmentStatus: false, // Can be 'Open', 'Closed', or 'In Progress'
                thumbnail: 'https://markovate.com/wp-content/uploads/2022/08/Top-10-Reasons-To-Choose-MERN-Stack-Development-For-Your-Next-Project_-1280x720px@2x.png', //Link to the course thumbnail
                duration: '8 weeks', // Duration of the course
                schedule: 'Tuesdays and Thursdays, 6:00 PM - 8:00 PM',
                location: 'Online',
                prerequisites: ['Basic JavaScript knowledge', 'Familiarity with React'],
                syllabus: [
                {
                week: 1,
                topic: 'Introduction to React Native',
                content: 'Overview of React Native, setting up your development environment.'
                },
                {
                week: 2,
                topic: 'Building Your First App',
                content: 'Creating a simple mobile app using React Native components.'
                },
                // Additional weeks and topics...
                ],
                students: [
                {
                id: 101,
                name: 'Alice Johnson',
                email: 'alice@example.com',
                },
                {
                id: 102,
                name: 'Bob Smith',
                email: 'bob@example.com',
                },
                // Additional enrolled students...
                ],
                },

]
    export default courseModel;