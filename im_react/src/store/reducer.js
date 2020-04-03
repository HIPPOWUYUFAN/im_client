const title  = '登陆页面'

export default function reducer (state = title, action) {
    switch (action.type) {
        case '1':
            return '登陆1'
        case '2':
            return '登陆2'
        default:
            return state
    }
}