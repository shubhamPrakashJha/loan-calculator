import React, {Component} from 'react';
import Typography from '@material-ui/core/Typography';
import 'typeface-roboto';
import LinearIndeterminate from './progress'
import FilledInputAdornments from './input'
class App extends Component {
  state = {
    amount: 500,
    duration: 6,
    currency: '',
    installements: 0,
    isLoaded: false,
    interest: 0,
    payment: 0
  }  

  fetchCall = () => {
    this.setState({isLoaded: false})
    fetch(`https://ftl-frontend-test.herokuapp.com/interest?amount=${this.state.amount}&numMonths=${this.state.duration}`)
    .then(res => res.json())
    .then(
      (result) => {
        this.setState({
          isLoaded: true,
          interest: result.interestRate,
          payment: result.monthlyPayment.amount,
          currency: result.monthlyPayment.currency,
          installements: result.numPayments
        });
      },
      (error) => {
        this.setState({
          isLoaded: true,
          error
        });
      }
    )}

  updateAmount = (amt) => {
    this.setState({amount: Number(amt)},
    this.fetchCall)
  }

  updateDuration = (dur) => {
    this.setState({duration: Number(dur)},
    this.fetchCall)
  }

  componentDidMount() {
    this.fetchCall()
  }

  render(){
    const { amount, duration, currency, installements ,payment, interest, isLoaded} = this.state
    return (
      <div>
          <Typography id="input-slider" variant="subtitle2" gutterBottom>
            Loan amount
          </Typography>
        <FilledInputAdornments amount={amount} label='Amount' icon='$'/>
          <br/>
          <input
            className='loan-amount'
            type='range'
            min='500'
            max="5000"
            value={amount}
            onChange={(event) => this.updateAmount(event.target.value)}
            />
        <Typography id="input-slider" variant="subtitle2" gutterBottom>
            Duration
          </Typography>
          <FilledInputAdornments amount={duration} label='Duration' icon='months' />

          <input
            className='loan-duration'
            type='range'
            value='6'
            min='6'
            max="24"
            value={duration}
            onChange={(event) => this.updateDuration(event.target.value)}
            />

          <Typography variant="body1">
            { !isLoaded ? <LinearIndeterminate /> : <p>{`you have to pay $${payment} at ${interest} % intrest in ${installements} instalments.`}</p>}
          </Typography>
      </div>
    )
  }
}

export default App;
