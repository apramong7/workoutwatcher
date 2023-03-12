import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  useContainer: {
    flex: 1,
  },
  useContainerTwo: {
    flex: 1,
    marginTop: 0,
   
  },
  positionContainer: {
    flex: 0.5,
    marginTop: 10
  },
  inputContainer: {
    width: '100%',
  },
  calibrationContainer: {
    flex: 1,
    alignItems: 'center',
  },
  containerFlatList: {
    justifyContent: 'center',
    flex:1,
    margin: 10,
    marginTop: 0,
  },
  columnContainer: {
    justifyContent: 'center',
    alignSelf: 'center',
    alignItems: 'center',
    alignContent: 'center',
    flexDirection: 'row',
  },
  columnInstructions: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    paddingBottom: 25
  },
  rowInstructions: {
    width: '50%', // is 50% of container width
    padding: 10
  },
  textName: {
    textAlign: 'left', 
    flex: 1, 
    padding: 10,
    paddingLeft: 20,
    fontSize: 18,
    color: '#566266'
  },
  textInputName: {
    flex: 1,
    padding: 5,
    backgroundColor: 'white',
    fontSize: 18,
    marginRight: 10,
  },
  textCalibration: {
    backgroundColor: '#fff',
    alignSelf: 'flex-start',
    width: '100%',
    // height: '28%',
    fontSize: 22,
    paddingLeft: 5,
    paddingVertical: 10,
    textAlignVertical: 'center',
    color: '#888888',
    marginBottom: 15,
  },
  textSelect: {
    alignSelf: 'flex-start',
    width: '100%',
    height: 40,
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
    height: 40,
    fontSize: 22,
    paddingLeft: 5,
    textAlignVertical: 'center',
    color: '#888888',
    marginBottom: 15,
  },
  buttonText: {
    color: '#fff',
    fontSize: 20,
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
    marginBottom: 15
  },
  textTitle: {
    width: '50%',
    marginLeft: 25,
    fontSize: 18,
    color: '#566266'
  },
  textInstructions: {
    fontSize: 16,
    color: '#566266',
  },
  buttonYogaPose: {
    justifyContent: 'center',
    flex:1,
    alignItems: 'center',
    height: 100,
    margin: 5,
    backgroundColor: '#7b8c93'
  },
  textYogaPose: {
    color: '#fff',
    padding: 10,
    fontSize: 20,
    justifyContent: 'center',
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
   borderRadius: 5,
   height: 35,
   marginTop: 45,
 },
 returnMenu: {
  backgroundColor: '#7b8c93',
  color: '#fff',
  // width: '30%',
  textAlign: "center",
  paddingVertical: 5,
  fontSize: 20,
  borderRadius: 5,
  height: 35,
  marginTop: 45,
 },
 disableButton: {
  backgroundColor: '#b1bbbf',
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
  },
  GridViewContainer: {
   flex:1,
   justifyContent: 'space-between',
   alignItems: 'flex-start',
   height: 50,
   margin: 5,

},
GridViewTextLayout: {
   fontSize: 20,
   justifyContent: 'center',
   color: '#fff',
   padding: 10,
   backgroundColor: '#7b8c93',
 }

})

export default styles