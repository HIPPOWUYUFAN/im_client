import io from 'socket.io-client'

const getBaseUrl = (env) => {
    let base = {
        production: 'ws://47.91.243.209:8900',
        development: 'ws://localhost:8900',
    }[env];
    return base;
};
// 

class socket {
    constructor() {
        this.socket = io.connect(`${getBaseUrl(process.env.NODE_ENV)}`);
    }

    // 监听服务端发送的事件
    on(event, fn) {
        return new Promise((resolve, reject) => {
            if (!this.socket)
                 reject("No socket connection.");
            this.socket.on(event, fn);
            resolve();
        });
    }

    //向服务端发送事件
    emit(event, data) {
        console.log(data)
        console.log(event)
        return new Promise((resolve, reject) => {
            if (!this.socket)
                reject("No socket connection.");
            this.socket.emit(event, data, (res) => {
                console.log(event)
                console.log(data)
                if (res.error)
                    reject(res.error);
            });
            resolve(true);
        });
    }

}
export default new socket()