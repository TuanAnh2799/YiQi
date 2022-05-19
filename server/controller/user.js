import { UserModel } from '../model/UserModel.js';


export const login = async (req, res)=> {
        try {
            console.log('Login req.body: ', req.body);
            await UserModel.findOne({
                email: req.body.email,
                password: req.body.password
            }).then((user) => {
                if(user) {
                    res.status(200).json({
                        message: 'Login success',
                        user: user
                    });
                } else {
                    res.status(401).json({
                        message: 'Login failed'
                    });
                }
            });
            
        } catch (error) {
            res.status(500).json({err : error});
        }
    }
    
export const register = async (req, res)=> {
        // const newUser = req.body;

        // const user = new UserModel(newUser);
        // await user.save();

        try {
            const user = new UserModel(req.body);
            console.log('Register data: ', user);
            await UserModel.findOne({ 
                email: req.body.email,   
            }).then(async (docs) => {
                if (docs) {
                    await res.send("Email đã tồn tại");
                }
                else {
                    await user.save();
                    await res.send("Đăng ký thành công");
                }
            }).catch((err) => {
                console.log('err: ', err);
                res.status(500).json({err : err});
            });
        
        } catch (error) {
            res.status(500).json({err : error});
        }
}

