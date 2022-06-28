import logo from './logo.svg';
import './App.css';
/* Usoing MaterilUI */
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import logocoffee from'./logocoffee.png' ;
import icedcoffee from './icedcoffee.jpg';
import greentea from './greentea.jpg';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

function App() {
  return (
    
    /*<div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>*/
    <div className = "homepage">
      <ButtonGroup variant="contained" aria-label="outlined primary button group" className='menu'>
      <Button>Home</Button>
      <Button>Order</Button>
      <Button>Contact Us</Button>
      <img src = {logocoffee} id = "logo" />
      <Button>Login</Button>
      <Button>Sign in</Button>
      </ButtonGroup>
      <div className = "products">
        <h1 className = "producttitle">Products</h1>
          <div class = "product1">
            <img src = {icedcoffee}/>
            <h1>Iced Cofee</h1>
            <h2>Price: $ 5.50</h2>
          </div>
          <div class = "product1">
            <img src = {greentea}/>
            <h1>Green Tea Latte</h1>
            <h2>$6.00</h2>
          </div>
      </div>
        <div className='orders'>
          <h1>Order</h1>
        <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
        <TextField id="outlined-basic" label="Product" variant="outlined" />
        <TextField id="filled-basic" label="Amount" variant="filled" />
        <TextField id="outlined-basic" label="Payment Method" variant="outlined" />
      </Box>
        <ButtonGroup variant="contained" aria-label="outlined primary button group" className='menu'>
        <Button>Pay</Button>
        </ButtonGroup>
        </div>
        <div className = "promo">
          <div className = "textbox">
            <h1>Promo</h1>
            <span>Discount for Green tea latte 30% <a href = "">Click Here!</a></span>
          </div>
        </div>
        <div className='feedback'>
        <h1>Feedback</h1>
        <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
       <TextField id="outlined-basic" label="Name" variant="outlined" />
        <TextField id="filled-basic" label="Comment" variant="filled" />
    </Box>
        </div>
        <div className = "extrainfo">
          <h1>Contact Info</h1>
          <div className = "socialmedia">
            <p>Instagram: @koffeeshop</p>
            <p>Facebook : koffeeshop</p>
            <p>Phone number : 0812934829183</p>
          </div>
        </div>
    </div>
  );
}

export default App;
