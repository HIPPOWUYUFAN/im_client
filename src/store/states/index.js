export const userInfo = {
    username: '',
    password: '',
    phone: ''
}

export const chatInfo = {
    tabs: 1,
    chating: 'Hippo',
    chats: {
        Hippo: [
            {
                name: 'Hippo',
                message: '我是第一'
            }
        ],
        EveIvan: [
            {
                name: 'EveIvan',
                message: '我是第二'
            }
        ]
    },
    chatList: [
        { name: 'Hippo',lastMessage:'我是第一' },
        { name: 'EveIvan',lastMessage:'我是第二' },
    ]
    // chatList: [
    //     {
    //         name: 'Hippo',
    //         message: [
    //             {
    //                 label:'Hippo',
    //                 value:'我是第一'
    //             }
    //         ]
    //     },
    //     {
    //         name: 'EveIvan',
    //         message: [
    //             {
    //                 label:'EveIvan',
    //                 value:'我是第二'
    //             }
    //         ]
    //     }
    // ]
}