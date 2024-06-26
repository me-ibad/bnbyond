import { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import Axios from "axios";
import ListingColor from "components/Cards/ListingColor";
import { Alert, alertTitleClasses } from "@mui/material";

export default function SetPricing({ state, setState }) {
  const [info, setInfo] = useState([]);
  // const [input, setInput] = useState(0);
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("usd");
  ///// const [options, setOptions] = useState([]);
  ////const [output, setOutput] = useState(0);

  // Calling the api whenever the dependency changes

  //   useEffect(() => {
  //     Axios.get(
  //       `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${from}.json`
  //     ).then((res) => {
  //       setInfo(res.data[from]);
  //     });
  //   }, [from]);

  // Calling the convert function whenever
  // a user switches the currency
  //   useEffect(() => {
  //     setOptions(Object.keys(info));
  //     convert();
  //   }, [info]);

  // Function to convert the currency

  useEffect(() => {
    if (state.userCurrency) {
      selectCurrency(state.userCurrency);
    }
  }, []);

  function convert(value) {
    // setInput(value);
    setState((prevState) => ({
      ...prevState,
      input: value,
    }));
    var rate = state.info[state.userCurrency];

    //// setOutput(value * rate);

    console.log(
      "value * ratevalue * ------rate----------------------------",
      value
    );
    console.log(
      "value * ratevalue * rate----------------------------",
      state.to
    );

    setState((prevState) => ({
      ...prevState,

      output: value * rate,
    }));
  }

  // Function to switch between two currency
  // function flip() {
  //   var temp = from;
  //   setFrom(to);
  //   setTo(temp);
  // }

  const selectCurrency = (value) => {
    // setFrom(value);
    setState((prevState) => ({
      ...prevState,
      from: value,
    }));
    //// convert('');
    console.log(value);

    Axios.get(
      `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${value}.json`
    ).then((res) => {
      // setInfo(res.data[value]);
      setState((prevState) => ({
        ...prevState,
        info: res.data[value],
      }));
      console.log(res.data[value], "my value000000--------------------------");
    });
  };

  return (
    <div>
      <Grid container spacing={2}>
        <Grid item lg={6} md={6} sm={12} xs={12}>
          <ListingColor
            bg="bg-color-blue"
            text="Set your Pricing"
            color="text-[#1e666f]"
          />
        </Grid>
        <Grid item lg={6} md={6} sm={12} xs={12}>
          <div className="mt-20">
            <h1 className="text-xl my-2 font-bold">Select Currency</h1>

            <div className="middle">
              <select
                name="currency"
                className="input-styl my-2"
                id="currency"
                onChange={(e) => {
                  selectCurrency(e.target.value);

                  setState((prevState) => ({
                    ...prevState,
                    userCurrency: e.target.value,
                    points: 0,
                    to: e.target.value,
                    output: 0,
                  }));
                }}
                value={state.userCurrency}
              >
                <option value="">--Please choose an option--</option>
                <option value="usd">usd</option>
                <option value="eur">Euro</option>
                <option value="pkr">PKR</option>

                <option value="cad">CAD</option>
              </select>
            </div>

            <div className="container">
              <div className="left">
                <h3>Enter points</h3>
                <input
                  type="number"
                  className="input-styl my-2"
                  placeholder="Enter the amount"
                  value={state.points}
                  onChange={(e) => {
                    convert(e.target.value);

                    setState((prevState) => ({
                      ...prevState,
                      points: e.target.value,
                    }));
                  }}
                />
              </div>
            </div>
            <div className="result">
              <h2>Converted Amount in Your Currency:</h2>
              <p value={state.output}>
                {state.output ? state.output.toFixed(4) : 0}
              </p>
              {/* ${output.toFixed(4)}{' '} */}
              {/* <p>{input + ' ' + from + ' = ' + output.toFixed(4) + ' ' + to}</p> */}
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}
