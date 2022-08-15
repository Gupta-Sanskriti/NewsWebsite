const express = require('express')
const newsRouter = express.Router()
const axios = require('axios')

newsRouter.get('/', async(req, res)=>{
    // res.render('news')
    try{
        const newsAPI = await axios.get(`http://raddy.co.uk/wp-json/wp/v2/posts`)
        // console.log(newsAPI.data)
        res.render('news', {articles: newsAPI.data})
    }catch(err){
        if(err.response){
            res.render('news', {articles: null}) 
            console.log(err.response.data)
            console.log(err.response.status)
            console.log(err.response.headers)
        }else if(err.requiest){
            res.render('news', {articles: null})
            console.log(err.requiest)
        }else{
            res.render('news', {articles: null})
            console.error('Error', err.message)
        }
    }
})
newsRouter.get(':id', async(req, res)=>{
    res.render('namastey')
    // let articleID = req.params.id
    // // res.render('news')
    // try{
    //     const newsAPI = await axios.get(`http://raddy.co.uk/wp-json/wp/v2/posts/${articleID}`)
    //     // console.log(newsAPI.data)
    //     res.render('newsSingle', {article: newsAPI.data})
    // }catch(err){
    //     if(err.response){
    //         res.render('newsSingle', {article: null}) 
    //         console.log(err.response.data)
    //         console.log(err.response.status)
    //         console.log(err.response.headers)
    //     }else if(err.requiest){
    //         res.render('newsSingle', {article: null})
    //         console.log(err.requiest)
    //     }else{
    //         res.render('newsSingle', {article: null})
    //         console.error('Error', err.message)
    //     }
    // }
})

module.exports = newsRouter;