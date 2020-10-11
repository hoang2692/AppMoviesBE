var moviesCarosel = require('../../modals/moviescarosel');

try
{
    const MoviesCaroselController = {
        getAll: async (req,res) =>{
            var movie = await moviesCarosel.find()
            res.json({
                data: movie})
        },
        // getOne: async (req,res) =>{
        //     var profileProducts = await Product.findById({_id: req.params.id})
        //     res.json(profileProducts)
        // },
        create: async (req,res) =>{
            var newMovie = await moviesCarosel.create(req.body);
            res.json(newMovie);
        },
        // delete: async (req,res) =>{
        //     var deleteProduct = await Product.findByIdAndDelete({_id: req.params.id})
        //     res.json(deleteProduct)
        // },
        // update: async (req,res) =>{
        //     await Product.findByIdAndUpdate({_id: req.params.id},{...req.body,image:req.file.path.split('\\').splice(1).join('\\')})
        //     res.json({
        //         Messenger: "Update Success"
        //     })
        // }
    }
    module.exports = MoviesCaroselController;
}
catch (error){
    res.status(400).send(error)
}