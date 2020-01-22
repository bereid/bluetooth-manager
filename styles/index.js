import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  safeAreaView: {
    padding: 20,
  },
  listItemContainer: {
    display: 'flex',
    flexDirection: 'row',
    borderBottomColor: 'grey',
    borderBottomWidth: 1,
    paddingTop: 5,
    paddingBottom: 5,
  },
  listItemTextContainer: {
    display: 'flex',
    flexDirection: 'column',
    flex: 0.7,
  },
  listItemButtonContainer: {
    flex: 0.3,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  listContainer: {
    marginBottom: 20,
    borderTopColor: 'grey',
    borderTopWidth: 1,
  },
  progressContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: "center",
    alignItems: 'center',
  },
  scanningText: {
    fontSize: 18,
    marginLeft: 10,
    color: 'rgb(86, 213, 250)'
  },
  detailsBoxContainer: {
    display: 'flex',
    flexDirection: 'column',
    borderWidth: 1,
    borderColor: 'grey'
  },
  detailsBoxRowOdd: {
    backgroundColor: 'white',
    display: 'flex',
    flexDirection: 'row',
  },
  detailsBoxRowEven: {
    backgroundColor: 'transparent',
    display: 'flex',
    flexDirection: 'row',
  },
  detailsCell: {
    flex: 0.5,
    padding: 10
  }
});

export default styles;