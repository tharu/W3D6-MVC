const express = require('express');
const app = express();
const router = express.Router();
const path = require('path');
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, "view"));
app.use('/css', express.static(path.join(__dirname, 'css')));

const Product = require('./product');

app.listen(3000);
app.get("/", (req, res) => {
   
    console.log("comes here");
    let p1 = new Product(1, "chocolate",1,"Chocolate is a food made from roasted and ground cacao seed kernels that is available as a liquid, solid, or paste, either on its own or as a flavoring agent in other foods. Cacao has been consumed in some form since at least the Olmec civilization (19th-11th century BCE),[1][2] and the majority of Mesoamerican people ─ including the Maya and Aztecs ─ made chocolate beverages.");
    let p2 = new Product(2, "notebook",2,"A notebook (also known as a notepad, writing pad, drawing pad, or legal pad) is a book or stack of paper pages that are often ruled and used for purposes such as note-taking, journaling or other writing, drawing, or scrapbooking.");
    let p3 = new Product(3, "Dress",10,"Certain pieces define each season: cozy knitwear in fall, exquisite outerwear for winter. In the heat, it’s undoubtedly any one of the best floral dresses for women: a meadowy wildflower print, a bold blooming pattern, or something more dainty. Just ahead of fall, you’ll get plenty of wear out of a new style or two—we’re sure a few more parties, alfresco dinners, or an end-of-season vacation is on the docket. So, why not seek out a new style or two to ensure a stylish floral moment, be it a leg-baring mini, sweeping maxi, or versatile midi to carry you through the workweek and weekend? Even better, you can transition your favorites to cooler weather with the swap of accessories or an extra layer.");
    let p4 = new Product(4, "phone",600,"A mobile phone, cellular phone, cell phone, cellphone, handphone, hand phone or pocket phone, sometimes shortened to simply mobile, cell, or just phone, is a portable telephone that can make and receive calls over a radio frequency link while the user is moving within a telephone service area");

    let pList = [p1, p2, p3,p4];
       
    res.render('product', { products : pList});
});