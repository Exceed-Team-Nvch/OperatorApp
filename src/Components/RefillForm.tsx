import React, { FC, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import FormControl from "@material-ui/core/FormControl";
import CardContent from "@material-ui/core/CardContent";
import InputLabel from "@material-ui/core/InputLabel";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import InputMask from "react-input-mask";
import axios from "axios";

interface OperatorParams {
  operator: string;
}

export const RefillForm: FC = () => {
  const { operator } = useParams<OperatorParams>();
  const history = useHistory();

  const [phone, setPhone] = useState("");
  const [sum, setSum] = useState("");

  const [error, setError] = useState({
    phone: false,
    sum: false,
  });

  const [visited, setVisited] = useState({
    phone: false,
    sum: false,
  });

  const updateSum = (value: string) => {
    const validatedValue = value.replace(/\D/g, "");
    if (!isNaN(parseInt(validatedValue)) && parseInt(validatedValue) <= 1000) {
      setSum(validatedValue);
    } else if (!validatedValue) {
      setSum(validatedValue);
    }
  };

  const updatePhone = (value: string) => {
    const validatedValue = value.replace(/\D/g, "");
    if (!isNaN(parseInt(validatedValue))) {
      setPhone(validatedValue);
    }
  };

  const focusPhoneHandler = () => {
    setVisited({ ...visited, phone: true });
  };

  const focusSumHandler = () => {
    setVisited({ ...visited, sum: true });
  };

  const blurPhoneHandler = () => {
    phone.length < 11
      ? setError({ ...error, phone: true })
      : setError({ ...error, phone: false });
  };

  const blueSumHandler = () => {
    parseInt(sum) > 1 && parseInt(sum) <= 1000
      ? setError({ ...error, sum: false })
      : setError({ ...error, sum: true });
  };

  const submitHandler = (event: any) => {
    event.preventDefault();
    if (
      Object.values(error).every((item) => item === false) &&
      Object.values(visited).every((item) => item === true)
    ) {
      axios
        .post(`http://server.com`, {
          data: {
            operator,
            phone,
            sum,
          },
        })
        .then(
          (res) => {
            alert("success");
            history.push("/");
          },
          (err) => {
            alert("something gone wrong");
          }
        );
    } else if (!Object.values(visited).every((item) => item === true)) {
      setError({
        phone: visited.phone ? error.phone : true,
        sum: visited.sum ? error.sum : true,
      });
    }
  };
  return (
    <Card className="refill-card">
      <CardContent>
        <form className="refill-form" onSubmit={(e) => submitHandler(e)}>
          <FormControl className="refill-control">
            <InputLabel htmlFor="phone-number">
              Please, enter your tel number
            </InputLabel>
            <InputMask
              mask="(8) 999 999 99 99"
              maskPlaceholder="(8) 999 999 99 99"
              value={phone}
              onChange={(event) => updatePhone(event.target.value)}
              onBlur={blurPhoneHandler}
              onFocus={focusPhoneHandler}
            >
              {() => <TextField id="phone-number" error={error.phone} />}
            </InputMask>
          </FormControl>
          {error.phone && <span>Please Enter your phone</span>}
          <FormControl className="refill-control">
            <InputLabel htmlFor="phone-sum">Please, enter sum</InputLabel>
            <TextField
              id="phone-sum"
              value={sum}
              placeholder="0 - 1000"
              onChange={(event) => updateSum(event.target.value)}
              onBlur={blueSumHandler}
              onFocus={focusSumHandler}
              error={error.sum}
            />
          </FormControl>
          {error.sum && <span>Please Enter value between 1 and 1000</span>}
          <Button type="submit">Submit</Button>
        </form>
      </CardContent>
    </Card>
  );
};
