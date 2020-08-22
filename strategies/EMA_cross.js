var strat = {};

// Prepare everything our strat needs
strat.init = function() {
  this.addIndicator('ema5', 'EMA', 5)
  this.addIndicator('ema22', 'EMA', 22)
}

// What happens on every new candle?
strat.update = function(candle) {
  // your code!
}

// For debugging purposes.
strat.log = function() {
  // your code!
}

// Based on the newly calculated
// information, check if we should
// update or not.
strat.check = function(candle) {
  const ema5 = this.indicators.ema5.result
  const ema22 = this.indicators.ema22.result
  if (ema5 > ema22) {
    this.advice({ direction: 'long', trigger: { type: 'trailingStop', trailPercentage: 5 }})
  }
  else {
    this.advice('short')
  }
}

module.exports = strat;
