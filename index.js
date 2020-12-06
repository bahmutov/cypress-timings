const commandTimings = () => {
  Cypress.on('log:changed', options => {
    if (options.instrument === 'command' && options.consoleProps) {
      // This is NOT the exact command duration, since we are only
      // getting an event some time after the command finishes.
      // Still better to have approximate value than nothing
      options.wallClockStoppedAt = Date.now()
      options.duration = +options.wallClockStoppedAt - (+ new Date(options.wallClockStartedAt))
      options.consoleProps.Duration = options.duration
    }
  })
}

module.exports = {commandTimings}
