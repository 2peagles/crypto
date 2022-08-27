/*!

=========================================================
* Vision UI Free React - v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/vision-ui-free-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com/)
* Licensed under MIT (https://github.com/creativetimofficial/vision-ui-free-react/blob/master LICENSE.md)

* Design and Coded by Simmmple & Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/

/* eslint-disable react/prop-types */
// Vision UI Dashboard React components
import VuiTypography from "components/VuiTypography";
import VuiBox from "components/VuiBox";

// function Crypto(){
//   const [coins, setCoins]=useState([]);
//   useEffect(()=>{
//     axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false")
//     .then(res => {
//       setCoins(res.data);
//       // console.log(res.data);
//     }).catch(error => console.log(error));
//   }, []);

// const filteredCoins = coins.filter(coin => 
//   coin.name.toLowerCase()
//   )

//   return(
//     <VuiTypography variant="caption" color="white" fontWeight="medium">
//         working ...
//         {filteredCoins.map(coin => {
//              return( 
//                 <Crypto name={coin.name} price={coin.price} image={coin.image}/>
//              )})}
//     </VuiTypography>
//   )
// };
export default {
  columns: [
    { name: "name", align: "left" },
    { name: "symbol", align: "left" },
    { name: "price", align: "left" },
    { name: "volume", align: "center" },
    { name: "mktcap", align: "center" },
  ],
rows:[
  // crypto:<Crypto/>,
  {
    name: (
    <VuiBox display="flex" alignItems="center">
      <VuiTypography color="white" variant="button" fontWeight="medium">
        Bitcoin
      </VuiTypography>
    </VuiBox>
  ),
  symbol: (
    <VuiBox display="flex" alignItems="center">
      <VuiTypography color="white" variant="button" fontWeight="medium">
        Bitcoin
      </VuiTypography>
    </VuiBox>
  ),
  price: (
    <VuiBox display="flex" alignItems="center">
      <VuiTypography color="white" variant="button" fontWeight="medium">
        Bitcoin
      </VuiTypography>
    </VuiBox>
  ),
  volume: (
    <VuiBox display="flex" alignItems="center">
      <VuiTypography color="white" variant="button" fontWeight="medium">
        Bitcoin
      </VuiTypography>
    </VuiBox>
  ),
  mktcap: (
    <VuiBox display="flex" alignItems="center">
      <VuiTypography color="white" variant="button" fontWeight="medium">
        Bitcoin
      </VuiTypography>
    </VuiBox>
  ),
  }
]
}