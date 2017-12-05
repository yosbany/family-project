import * as jwt from 'jwt-simple';
import * as moment from 'moment';


export class Token {

    private key_secret = 'E5ta.Es.L@.Clave.S3cret@';

    constructor( ) { }

    generateToken(user) {
        const payload = {
            sub: user.id,
            name: user.name,
            surnames: user.surnames,
            email: user.email,
            role: user.role,
            iat: moment().unix(),
            exp: moment().add(1, 'day').unix()
        };
        return jwt.encode(payload, this.key_secret);
    };

}

