const Customer = require('../../modals/customer')

try{
    const CustomerControler = {
        create: async (req,res) =>{
            const customer = new Customer(req.body)
            await customer.save()
            const token = await customer.generateAuthToken()
            res.status(201).send({customer, token})
        },
        login: async (req,res) =>{
            try{
                const {email,password} = req.body
                const customer = await Customer.findByCredentials(email,password)
                if(!customer)
                {
                    return res.send({error: "Login faild! Check authentication"})
                }
                const token = await customer.generateAuthToken()
                res.send({customer,token})
            }
            catch(erro){
                return res.status(401).send({error: "Login faild! Check authentication"})
            }
        },
        logout: async (req,res) =>{
            try
            {
                
            req.customer.tokens = req.customer.tokens.filter((token) =>{
                return token.token != req.token;
            })
            await req.customer.save();
            res.send();
            }
            catch (error)
            {
                res.status(500).send(error);
            }
        },
        logoutall: async (req,res) =>{
            try
            {
                req.customer.tokens.splice(0,req.customer.tokens.length)
                await req.customer.save()
                req.send()
            }
            catch (error)
            {
                res.status(500).send(error);
            }
        },
        getOne: async(req,res) =>{
            res.send(req.customer)
        }
    }
    module.exports = CustomerControler;
}
catch (error){
    res.status(400).send(error)
}