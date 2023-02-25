import SerialPortAPI from 'react-native-serial-port-api';

async function example() {
  const serialPort = await SerialPortAPI.open("/dev/rfcomm10", { baudRate: 38400 });

  SerialPortAPI.open("/dev/rfcomm10", { baudRate: 38400 })
    .then(serialPort => console.log(serialPort))
    .catch(err => console.log(err.message))

  // subscribe received data
  const sub = serialPort.onReceived(buff => {
    console.log(buff.toString('hex').toUpperCase());
  })

  // unsubscribe
  // sub.remove();

  // send data with hex format
  await serialPort.send('00FF');

  // close
  serialPort.close();
}