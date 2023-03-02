import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  useContainer: {
    flex: 1,
  },
  useContainerTwo: {
    flex: 1,
    marginTop: 0
  },
  positionContainer: {
    flex: 0.5,
    marginTop: -50
  },
  inputContainer: {
    width: '100%',
    height: 150
  },
  textCalibration: {
    backgroundColor: '#fff',
    alignSelf: 'flex-start',
    width: '100%',
    height: '28%',
    fontSize: 22,
    paddingLeft: 5,
    textAlignVertical: 'center',
    color: '#888888',
    marginBottom: 15,
  },
  textPosition: {
    backgroundColor: '#fff',
    alignSelf: 'flex-start',
    width: '100%',
    height: '28%',
    fontSize: 22,
    paddingLeft: 5,
    textAlignVertical: 'center',
    color: '#888888',
    marginBottom: 15,
  },
  row: {
    flex: 0.5,
    flexDirection: 'row',
    width: "80%",
    textAlign: "left",
    display: 'flex',
    justifyContent: "space-between",
    alignItems: 'flex-start',
    marginLeft: 5,
    paddingRight: 5,
    marginTop: 1,
    paddingTop: 1,
    paddingBottom: 2,
  },
  rowPosition: {
    
    flexDirection: 'row',
    width: "100%",
    textAlign: "left",
    justifyContent: "space-between",
    alignItems: 'flex-start',
    marginLeft: 20,
    marginTop: -15,
    height: 55
  },
  textTitle: {
    width: '50%',
    marginLeft: 25,
    fontSize: 18,
    color: '#566266'
  },
  textInstructions: {
    width: '50%',
    fontSize: 16,
    color: '#566266',
  },
  textInput: {
    width: '40%',
    backgroundColor: 'white',
    paddingHorizontal: 15,
    height: 25,
    marginRight: 25,
    alignContent: 'center',
    fontSize: 18,
  },
  enterButtonSection: {
    width: '100%',
    height: '12%',
    justifyContent: 'center',
    alignItems: 'center'
 },
 enterButton: {
   backgroundColor: '#7b8c93',
   color: '#fff',
   width: '30%',
   textAlign: "center",
   paddingVertical: 5,
   fontSize: 20,
   marginTop: 15,
   borderRadius: 5,
   height: 35,
   marginTop: 45,
 },
 instructions: {
    color: '#566266',
    fontSize: 22,
    textAlign: "center",
    paddingVertical: 10
 },
 detectionSection: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center'
 },
 detectionButton: {
   backgroundColor: '#fff',
   color: '#7b8c93',
   width: '80%',
   textAlign: "center",
   paddingVertical: 5,
   fontSize: 22,
   marginBottom: 5
 },


  input: {
    backgroundColor: 'white',
    paddingHorizontal: 15,
    paddingVertical: 10,
    marginTop: 5,
  },
  buttonContainer: {
    width: '60%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
  },
  button: {
    backgroundColor: '#c1cad5',
    width: '100%',
    padding: 15,
    alignItems: 'center',
  },
  register: {
    flexDirection: 'row',
    width: '80%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  signUpText: {
    color: '#07192e',
    fontWeight: 'bold',
    fontSize: 15,
  }
})

export default styles