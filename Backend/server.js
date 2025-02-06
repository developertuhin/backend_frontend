import express from 'express';

const app = express();
const port = 4000;

app.get('/', (req, res) => {
  res.send('Home Page loading');
});

app.get('/api/products', (req, res) => {
  const products = [
    { id: 1, name: 'Samsung', price: '$300' },
    { id: 2, name: 'I Phone', price: '$700' },
    { id: 3, name: 'Google Pixel', price: '$400' },
    { id: 4, name: 'Nokia Phone', price: '$350' }
  ];
  res.json(products);
});

app.get('/api/jokes',(req,res)=>{
    const jokes =[
        {
            id:1,
            title:'First jokes',
            content:'Jokes Content comes from Backend'
        },
        {
            id:2,
            title:'Second jokes',
            content:'Jokes Content comes from Backend'
        },
        {
            id:3,
            title:'Third jokes',
            content:'Jokes Content comes from Backend'
        },
        {
            id:4,
            title:'Fourth jokes',
            content:'Jokes Content comes from Backend'
        },
        {
            id:5,
            title:'Fifth jokes',
            content:'Jokes Content comes from Backend'
        },
        {
            id:6,
            title:'Sixth jokes',
            content:'Jokes Content comes from Backend'
        }
    ]
    res.send(jokes)
})

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});