import React from 'react'; 
import 'bootstrap/dist/css/bootstrap.css'; 
import { BrowserRouter, Routes, Route,} from "react-router-dom";
import QnA_page from './Components/QnA_page';
import Home from './Components/Home';
	
 function App() { 
return ( 
	
<div>

   <BrowserRouter>
	<Routes>
	
	<Route path="/" element={<Home/>} />
	<Route path="/QnA_page" element={<QnA_page/>} />	
	

	
	</Routes>
	</BrowserRouter>
	</div>
	
	
	
); 
}
export default App;