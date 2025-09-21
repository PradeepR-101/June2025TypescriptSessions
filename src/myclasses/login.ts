export { };
function login(username: string, password: string): boolean;
function login(username: string, password: string, role: string): boolean;  // Add role parameter
function login(username: string, otp: number): boolean;

function login(username: string, arg2: string | number, role?: string): boolean {
    if (username && arg2) {
        if (typeof arg2 === 'number') {
            console.log(`login with ${username} and ${arg2}`);
            return true;
        }
        else if (role) {
            console.log(`login with ${username} and ${arg2} and ${role}`);
            return true;
        }
        else {
            console.log(`login with ${username} and ${arg2}`);
            return true;
        }
    }
    else {
        console.log('invalid credentials....');
        return false;
    }
}

//console.log(login('admin', 'admin123'));
//console.log(login('admin', 9090));
//string, number

console.log(login('admin', 'admin123', 'administrator'));
//string, string, string

//console.log(login('naveen', 123, 'seller'));//CT error
//string, number, string